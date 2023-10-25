import { memo, useEffect, useState } from "react"
import { useClient } from "sanity"

export default memo(function Preload(
  props: any
) {
  const client = useClient({apiVersion: props.apiVersion});
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchDefaultLanguages = async () => {
      const data = await client.fetch(props.languages);
      return setData(data);
    }

    // call the function
    fetchDefaultLanguages().catch(console.error);
  }, [])

  return null;
})