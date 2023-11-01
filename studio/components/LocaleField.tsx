import { Stack } from "@sanity/ui";
import { useEffect, useState } from "react";
import { FormInput, MemberField, useClient, useFormValue } from "sanity";
import { useDocumentPane } from "sanity/desk";
import { SANITY_API_VERSION } from "../../config";

export const LocaleField = (props: any) => {
  const { members, id } = props;

  const [supportedLanguages, setSupportedLanguages] = useState([]);
  const client = useClient({ apiVersion: SANITY_API_VERSION });

  useEffect(() => {
    const getSupportedLanguages = async () => {
      const data = await client.fetch(`*[_type == "supportedLanguages"]{id, title}`);
      if (!data.length) {
        console.log('error getting supported languages');
      }
      const result = members && members.filter((member) => {
        return data.some((d) => {
          return member.name === d.id;
        });
      });
      return setSupportedLanguages(result);
    }
    if (!supportedLanguages.length) {
      getSupportedLanguages();
    }
  }, [])

  return (
    <Stack space={2}>
      {supportedLanguages ? (
        supportedLanguages.map((language: any) => {
          if (id === 'localeTitle') {
            return (
              <MemberField
                {...props}
                key={language.key}
                member={language}
                renderInput={() => (
                  <FormInput
                    {...props}
                    absolutePath={language.field.path}
                  />
                )
                }
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
        })
      ) : null}
    </Stack>
  )
}
