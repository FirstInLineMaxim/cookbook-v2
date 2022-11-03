import {createClient} from "contentful";
import {useState} from "react";

const useContentful = () => {
    const [menuItem, setmenuItem] = useState();

const client = createClient({
space: "yynsd0hlzs9n",
accessToken: "1omxmeaZwpowLVXx789eKKV9ZgaTw1qqWpgphwcbnbU",
host: "preview.contentful.com"


})

const getAuthors = async () => {
/* try {
const entries = await client.getEntries({
content_type: "authors",
select: "fields",
/* "fields.subject": "React" 
order : "fields.name"
});
console.log(entries)
return entries

} catch (error) {
console.log(`Error fetching authors: ${error}`)

}
*/

/*client.getContentTypes()
.then((response) => console.log(response.items))
.catch(console.error) */

/*client.getContentType('cookBook')
.then((contentType) => console.log(contentType))
.catch(console.error)*/
const entries = await client.getEntries()

const sanientries = entries.items.map((item) => {
const title = item.fields.title;
 return {...item.fields,
            title
}
})
return sanientries

}

return {getAuthors}


}

export default useContentful