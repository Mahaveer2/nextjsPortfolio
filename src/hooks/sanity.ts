import sanityClient from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = "production";
const apiVersion =  "2022-11-16"

export default sanityClient({
  projectId: projectId, // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})