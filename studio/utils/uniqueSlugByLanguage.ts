import {ValidationContext} from 'sanity'
import {SANITY_API_VERSION} from '../../config'

export const uniqueSlugByLanguage = async (slug: string, options: ValidationContext) => {
  const client = options.getClient({apiVersion: SANITY_API_VERSION})
  const {document} = options

  const id = document?._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    type: document?._type,
  }

  const query = `*[!(_id in [$draft, $published]) && _type == $type${
    document?.language ? ` && language == "${document.language}" ` : ' '
  }&& slug.current == $slug][0]`

  const result = await client.fetch(query, params)

  return !result
}
