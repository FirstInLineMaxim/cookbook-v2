import { createClient } from "contentful";

const getContentful = () => {
  const client = createClient({
    space: "yynsd0hlzs9n",
    accessToken: "1omxmeaZwpowLVXx789eKKV9ZgaTw1qqWpgphwcbnbU",
    host: "preview.contentful.com",
  });

  const getFoods = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cookBook",
        select: "fields",
      });
      // return entries
      const cleanUpData = entries.items.map((item) => {
        const mainImage = item.fields.mainImage.fields;
        return {
          ...item.fields,
          mainImage,
        };
      });
      return cleanUpData;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  return { getFoods };
};

export default getContentful;
