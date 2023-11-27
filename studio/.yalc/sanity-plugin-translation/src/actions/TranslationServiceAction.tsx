import localeEmoji from 'locale-emoji'
import {TranslateIcon, TransferIcon, CloseCircleIcon} from '@sanity/icons'
import {ChangeEvent, useCallback, useState} from 'react'
import {DocumentActionDescription, DocumentActionProps, useClient} from 'sanity'
import {Flex, Inline, Button, Stack, Select, Text, Badge, useToast} from '@sanity/ui'
import {LOCALES} from '../const'
import {usePostLocalesQuery} from '../hooks/usePostLocalesQuery'
import {useTranslationServiceContext} from '../components'

type ModalFooterProps = {
  onClose: () => void
  onTranslate: () => void
  disabled?: boolean
}

const ModalFooter = (props: ModalFooterProps) => {
  const {onClose, onTranslate, disabled = false} = props
  return (
    <Flex width="100%" justify="flex-end">
      <Inline space={2}>
        <Button icon={CloseCircleIcon} onClick={onClose} text="Cancel" tone="critical" />
        <Button
          icon={TransferIcon}
          onClick={onTranslate}
          text="Translate"
          tone="primary"
          disabled={disabled}
        />
      </Inline>
    </Flex>
  )
}

type ModalContentProps = {
  locales: string[]
  disabled?: boolean
  handleLocaleChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const ModalContent = (props: ModalContentProps) => {
  const {locales, disabled = false, handleLocaleChange} = props
  return (
    <Stack space={4}>
      <Stack space={3}>
        <Text muted size={1}>
          This document has already been translated for the following locales:
        </Text>
        <Inline space={2}>
          {locales.map((locale) => {
            return (
              <Badge key={locale} tone="primary">
                {locale}
              </Badge>
            )
          })}
        </Inline>
      </Stack>
      <Stack space={3}>
        <Stack space={2}>
          <Text size={1} weight="semibold">
            Select Locale
          </Text>
          <Text size={1} muted>
            Choose which locale you wish to translate this document to
          </Text>
        </Stack>
        <Select disabled={disabled} onChange={handleLocaleChange}>
          <option value="">Select a locale</option>
          {Object.keys(LOCALES)
            .filter((locale) => !locales.includes(locale))
            .map((locale) => {
              const emoji = localeEmoji(locale)
              return (
                <option key={locale} value={locale}>
                  {emoji} {LOCALES[locale].name}
                </option>
              )
            })}
        </Select>
      </Stack>
    </Stack>
  )
}

export const TranslationServiceAction = (props: DocumentActionProps): DocumentActionDescription => {
  const {apiVersion} = useTranslationServiceContext()
  const {id, published, draft} = props
  const doc = draft || published
  const toast = useToast()
  const [modalOpen, setModalOpen] = useState(false)
  const [locale, setLocale] = useState('')
  const {data, loading, error} = usePostLocalesQuery({postId: id})
  const client = useClient({
    apiVersion,
  })

  const onClose = useCallback(() => {
    setModalOpen(false)
  }, [])

  const onLocaleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const {value} = event.target
    const formattedLocale = value.replace('-', '_')
    setLocale(formattedLocale)
  }, [])

  const sendTranslation = (value: string) => {
    return fetch('http://localhost:3000/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: doc,
        locale: value,
      }),
    })
  }

  const onTranslate = async () => {
    try {
      await client
        .patch(doc!._id)
        .set({
          translationProcessing: true,
        })
        .commit()
      sendTranslation(locale)
      onClose()
      toast.push({
        closable: true,
        status: 'success',
        title: 'Translation Started!',
        description: 'Your document is being translated. You will be notified when it is complete.',
      })
    } catch (err) {
      toast.push({
        closable: true,
        status: 'error',
        title: 'Error',
        description: 'There was an error translating this document. Please try again.',
      })
    }
  }

  const disabled = !data || loading || (doc?.translationProcessing as boolean)
  const locales = data?._translations?.map((t: Record<string, string>) => t.language) || []

  return {
    disabled,
    icon: TranslateIcon,
    label: 'Translate',
    tone: 'primary',
    onHandle: () => {
      setModalOpen(true)
    },
    dialog: modalOpen && {
      type: 'dialog',
      header: 'Translate Document',
      content: (
        <ModalContent locales={locales} handleLocaleChange={onLocaleChange} disabled={!!error} />
      ),
      footer: (
        <ModalFooter onClose={onClose} onTranslate={onTranslate} disabled={!!error || !locale} />
      ),
      showCloseButton: true,
      onClose: onClose,
    },
  }
}
