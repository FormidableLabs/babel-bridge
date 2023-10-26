import { useState, useEffect } from "react";
import { useClient, useFormValue } from "sanity";
import { SANITY_API_VERSION } from "../../config";

export const LocaleField = (props) => {
  const client = useClient({apiVersion: SANITY_API_VERSION});
  const [supportedLanguages, setSupportedLanguages] = useState<any>();

  useEffect(() => {
    let isMounted = true;

    const fetchLanguages = async () => {
      const params = {
        type: 'supportedLanguages',
      };

      const query = `*[_type == $type]{id, title, default}`;
      return client.fetch(query, params);
    }

    if(!supportedLanguages) {
      fetchLanguages()
      .then(languages => isMounted && setSupportedLanguages(languages))
      .catch(error => console.error('Error fetching document:', error));
    }

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div>{props.renderDefault(props)}</div>
  )
}
