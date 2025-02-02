import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client=createClient({
    projectId:"6lubo84v" ,
    dataset:"production" ,
    apiVersion:"2022-03-25" ,
    useCdn: true ,
});
 const builder = imageUrlBuilder(client);
 export const urlFor = (source: any) => builder.image(source)