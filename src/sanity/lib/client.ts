import { createClient } from 'next-sanity'


export const client = createClient({
  projectId:"haphpv2z",
  dataset :"production",
  apiVersion :"2023-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
