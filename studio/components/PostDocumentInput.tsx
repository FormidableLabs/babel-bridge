import localeEmoji from 'locale-emoji'
import {Box, Flex, Select, Stack, Text} from '@sanity/ui'
import {ChangeEvent, useCallback, useState} from 'react'
import {ObjectInputProps} from 'sanity'
import {LOCALES} from '../actions/config'

export const PostDocumentInput = (props: ObjectInputProps) => {
  const [locale, setLocale] = useState('en-US')

  const onLocaleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value
    setLocale(locale)
  }, [])

  return (
    <Stack space={4}>
      <Flex justify="flex-end">
        <Stack
          space={3}
          style={{
            maxWidth: '275px',
          }}
        >
          <Select onChange={onLocaleChange} value={locale}>
            <option value="">Select a locale</option>
            {Object.keys(LOCALES).map((locale) => {
              const emoji = localeEmoji(locale)
              return (
                <option key={locale} value={locale}>
                  {emoji} {LOCALES[locale].name}
                </option>
              )
            })}
          </Select>
        </Stack>
      </Flex>
      <Box>{props.renderDefault(props)}</Box>
    </Stack>
  )
}
