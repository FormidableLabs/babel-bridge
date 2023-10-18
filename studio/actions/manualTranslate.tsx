import {TranslateIcon, TransferIcon, CloseCircleIcon} from '@sanity/icons'
import {useCallback, useState} from 'react'
import {DocumentActionDescription, DocumentActionProps} from 'sanity'
import {Flex, Inline, Button, Stack, Select, TextArea, Text, Badge} from '@sanity/ui'
import {LOCALES} from './config'
import {usePostLocalesQuery} from '../hooks/usePostLocalesQuery'

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
}

const ModalContent = (props: ModalContentProps) => {
  const {locales, disabled = false} = props
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
        <Select disabled={disabled}>
          <option value="">Select a locale</option>
          {Object.keys(LOCALES)
            .filter((locale) => !locales.includes(locale))
            .map((locale) => {
              return (
                <option key={locale} value={locale}>
                  {LOCALES[locale].name}
                </option>
              )
            })}
        </Select>
      </Stack>
    </Stack>
  )
}

export const ManualTranslateAction = (props: DocumentActionProps): DocumentActionDescription => {
  const {id, type, published, draft} = props
  const [modalOpen, setModalOpen] = useState(false)
  const {data, loading, error} = usePostLocalesQuery({postId: id})

  const onClose = useCallback(() => {
    setModalOpen(false)
  }, [])

  const onTranslate = useCallback(() => {
    console.log('Do Translate')
  }, [])

  const doc = draft || published
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
      content: <ModalContent locales={locales} disabled={!!error} />,
      footer: <ModalFooter onClose={onClose} onTranslate={onTranslate} disabled={!!error} />,
      showCloseButton: true,
      onClose: onClose,
    },
  }
}
