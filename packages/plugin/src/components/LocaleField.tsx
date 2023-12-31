import {Stack} from '@sanity/ui'
import {useEffect, useState} from 'react'
import {FieldMember, FormInput, MemberField} from 'sanity'
import {useSupportedLanguagesContext} from '../hooks'

export const LocaleField = (props: any) => {
  const {members, id} = props
  const [supportedLanguages, setSupportedLanguages] = useState([])
  const {supportedLanguages: supportedLanguageDocuments, selectedLocale} =
    useSupportedLanguagesContext()

  useEffect(() => {
    if (supportedLanguageDocuments.length) {
      const result =
        members &&
        members.filter((member: FieldMember) => {
          return supportedLanguageDocuments.some((d) => {
            return member.name === d.id
          })
        })
      setSupportedLanguages(result)
    }
  }, [members, supportedLanguageDocuments])

  const supportedLanguageFields = selectedLocale
    ? supportedLanguages.filter((languageField) => {
        return (languageField as {key: string}).key === `field-${selectedLocale}`
      })
    : supportedLanguages

  return (
    <Stack space={2}>
      {supportedLanguageFields?.map((language: any) => {
        if (id === 'localeTitle') {
          return (
            <MemberField
              {...props}
              key={language.key}
              member={language}
              renderInput={() => <FormInput {...props} absolutePath={language.field.path} />}
              renderField={props.renderField}
              renderItem={props.renderItem}
              renderPreview={props.renderPreview}
            />
          )
        }
        return (
          <MemberField
            {...props}
            key={language.key}
            member={language}
            renderInput={props.renderInput}
            renderField={props.renderField}
            renderItem={props.renderItem}
            renderPreview={props.renderPreview}
          />
        )
      })}
    </Stack>
  )
}
