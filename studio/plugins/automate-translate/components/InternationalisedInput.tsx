import {RemoveCircleIcon} from '@sanity/icons'
import {
  Button,
  Card,
  Flex,
  Label,
  Menu,
  MenuButton,
  MenuItem,
  Spinner,
  Stack,
} from '@sanity/ui'
import React, {useCallback, useMemo} from 'react'
import {ObjectItemProps, useFormValue} from 'sanity'
import {set, unset} from 'sanity'

import { useInternationalisedArrayContext } from './InternationalisedArrayContext'

type InternationalisedValue = {
  _type: string
  _key: string
  value: string
}

export default function InternationalisedInput(
  props: ObjectItemProps<InternationalisedValue>
) {
  const parentValue = useFormValue(
    props.path.slice(0, -1)
  ) as InternationalisedValue[]

  const inlineProps = {
    ...props.inputProps,
    // This is the magic that makes inline editing work?
    members: props.inputProps.members.filter(
      (m) => m.kind === 'field' && m.name === 'value'
    ),
    // This just overrides the type
    // TODO: Remove this as it shouldn't be necessary?
    value: props.value as InternationalisedValue,
  }

  const { validation, value, onChange, readOnly } = inlineProps

  // The parent array contains the languages from the plugin config
  const { supportedLanguages } = useInternationalisedArrayContext()

  const languageKeysInUse = useMemo(
    () => parentValue?.map((v) => v._key) ?? [],
    [parentValue]
  )
  const keyIsValid = supportedLanguages?.length
    ? supportedLanguages.find((l:any) => l.id === value._key)
    : false

  // Changes the key of this item, ideally to a valid language
  const handleKeyChange = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const languageId = event?.currentTarget?.value

      if (
        !value ||
        !supportedLanguages?.length ||
        !supportedLanguages.find((l:any) => l.id === languageId)
      ) {
        return
      }

      onChange([set(languageId, ['_key'])])
    },
    [onChange, value, supportedLanguages]
  )

  // Removes this item from the array
  const handleUnset = useCallback(() => {
    onChange(unset())
  }, [onChange])

  if (!supportedLanguages) {
    return <Spinner />
  }

  return (
    <Card paddingTop={2}>
      <Stack space={2}>
        <Card tone="inherit">
          {keyIsValid ? (
            <Label muted size={1}>
              {value._key}
            </Label>
          ) : (
            <MenuButton
              button={<Button fontSize={1} text={`Change "${value._key}"`} />}
              id={`${value._key}-change-key`}
              menu={
                <Menu>
                  {supportedLanguages.map((language: any) => (
                    <MenuItem
                      disabled={languageKeysInUse.includes(language.id)}
                      fontSize={1}
                      key={language.id}
                      text={language.id.toLocaleUpperCase()}
                      value={language.id}
                      // @ts-expect-error
                      onClick={handleKeyChange}
                    />
                  ))}
                </Menu>
              }
              popover={{portal: true}}
            />
          )}
        </Card>
        <Flex align="center" gap={2}>
          <Card flex={1} tone="inherit">
            {props.inputProps.renderInput(props.inputProps)}
          </Card>

          <Card tone="inherit">
            <Button
              mode="bleed"
              icon={RemoveCircleIcon}
              tone="critical"
              disabled={readOnly}
              onClick={handleUnset}
            />
          </Card>
        </Flex>
      </Stack>
    </Card>
  )
}
