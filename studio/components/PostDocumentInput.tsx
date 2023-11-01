import localeEmoji from 'locale-emoji'
import {RefreshIcon} from '@sanity/icons'
import {Box, Button, Flex, Inline, Select, Stack, Text} from '@sanity/ui'
import {ChangeEvent, useCallback, useState} from 'react'
import {ObjectInputProps} from 'sanity'
import {LOCALES} from '../data/config'
import {useSupportedLanguagesContext} from './SupportedLanguages/hooks/useSupportedLanguages'

export const PostDocumentInput = (props: ObjectInputProps) => {
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
