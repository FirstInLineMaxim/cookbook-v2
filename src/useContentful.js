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
client.getEntries()
.then((response) => setmenuItem((prev) => [...response.items]))
.catch(console.error)



}

return  menuItem


}

export default useContentful