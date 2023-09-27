import { FieldProps, useClient, useFormValue } from 'sanity';
import { Stack, Card, Text } from '@sanity/ui';
import { useEffect, useState } from 'react';

export const DefaultLanguage = (props: FieldProps) => {

  const client = useClient({apiVersion: new Date().toISOString().slice(0, 10)});
  const docId = useFormValue(['_id']) as string;
  const docDefault = useFormValue(['default']) as string;
  const [doc, setDoc] = useState<any>();

  useEffect(() => {
    const id = docId.replace(/^drafts\./, '');
    const params = {
      type: 'supportedLanguages',
      draft: `drafts.${id}`,
      default: true,
    };

    async function fetchDocument() {
      const query = `*[!(_id in [$draft]) && _type == $type && default == $default][0]`;
      const result = await client.fetch(query, params);
      setDoc(result);
    }
    fetchDocument();
  }, [client, docId]);

  return (
    <Stack space={2}>
      <div>{props.renderDefault(props)}</div>
      <Card tone="caution" padding={2} radius={2}>
        <Text size={1} muted>
          {docDefault ? 'This is the default language' : `The default language is set as ${doc?.id}`}
        </Text>
      </Card>
    </Stack>
  );
};
