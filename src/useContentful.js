import {createClient} from "contentful";

const useContentful = () => {

const client = createClient({
space: "yynsd0hlzs9n",
accessToken: "1omxmeaZwpowLVXx789eKKV9ZgaTw1qqWpgphwcbnbU",
host: "preview.contentful.com"


})

const getAuthors = async () => {
try {
const entries = await client.getEntries({
content_type: "authors",
select: "fields",
/* "fields.subject": "React" */
order : "fields.name"
});
return entries

} catch (error) {
console.log(`Error fetching authors: ${error}`)

}

}

}

export default useContentful