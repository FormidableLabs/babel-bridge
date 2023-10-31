import {SanityDocument} from '@sanity/client'
import {useListeningQuery} from 'sanity-plugin-utils'

type UsePostLocalesQueryOpts = {
  postId: string
}

export const usePostLocalesQuery = (opts: UsePostLocalesQueryOpts) => {
  return useListeningQuery<SanityDocument>(
    `*[_type == "post" && _id == $postId][0] {
    "slug": slug.current,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      title,
      slug,
      language
    },
  }`,
    {
      params: {
        postId: opts.postId,
      },
      initialValue: null,
    },
  )
}
