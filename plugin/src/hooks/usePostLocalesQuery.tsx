import {SanityDocument} from '@sanity/client'
import {useListeningQuery} from 'sanity-plugin-utils'
import {Return} from './types'

export const postLocalesQuery = `*[_type == "post" && _id == $postId][0] {
  "slug": slug.current,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    slug,
    language
  },
}`

export type UsePostLocalesQueryOpts = {
  postId: string
}

export const usePostLocalesQuery = (opts: UsePostLocalesQueryOpts): Return<SanityDocument> => {
  return useListeningQuery<SanityDocument>(postLocalesQuery, {
    params: {
      postId: opts.postId,
    },
    initialValue: null,
  })
}
