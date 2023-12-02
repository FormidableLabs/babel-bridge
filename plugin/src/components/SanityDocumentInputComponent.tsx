import localeEmoji from 'locale-emoji'
import {RefreshIcon} from '@sanity/icons'
import {Box, Button, Flex, Inline, Select, Stack} from '@sanity/ui'
import {ChangeEvent, useCallback} from 'react'
import {ObjectInputProps, useFormValue} from 'sanity'
import {useSupportedLanguagesContext} from '../hooks'
import {LOCALES} from '../const'
import {useTranslationServiceContext} from './TranslationServiceProvider'

const DefaultComponentInput = (props: ObjectInputProps) => {
  return props.renderDefault(props)
}

const RootComponentInput = (props: ObjectInputProps) => {
  const {
    supportedLanguages,
    error,
    loading,
    selectedLocale,
    handleLocaleChange,
    handleLocaleReset,
  } = useSupportedLanguagesContext()

  const onLocaleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const locale = event.target.value
      handleLocaleChange(locale)
    },
    [handleLocaleChange],
  )

  const selectDisabled = loading || error || !supportedLanguages.length

  return (
    <Stack space={4}>
      <Flex justify="flex-end">
        <Inline space={3}>
          <Select
            disabled={selectDisabled}
            onChange={onLocaleChange}
            value={selectedLocale}
            style={{
              maxWidth: '275px',
            }}
          >
            <option value="">Select a locale</option>
            {supportedLanguages.map((locale) => {
              const emoji = localeEmoji(locale.id)
              const displayName = LOCALES[locale.id.replace('_', '-')].name
              return (
                <option key={locale.id} value={locale.id}>
                  {emoji} {displayName}
                </option>
              )
            })}
          </Select>
          <Button
            text="Reset"
            icon={RefreshIcon}
            tone="caution"
            disabled={selectedLocale === ''}
            onClick={handleLocaleReset}
          />
        </Inline>
      </Flex>
      <Box>{props.renderDefault(props)}</Box>
    </Stack>
  )
}

export const SanityDocumentInputComponent = (props: ObjectInputProps) => {
  const {schemaTypes} = useTranslationServiceContext()
  const documentType = useFormValue(['_type']) as string
  const inputId = props.id

  if (schemaTypes.includes(documentType) && inputId === 'root') {
    return <RootComponentInput {...props} />
  }
  return <DefaultComponentInput {...props} />
}
