import { title } from "process";

export default{

    name: 'product',
    title: 'Product',
    type: 'document',
fields: [
{
    name: 'name',
    type: 'string',
    title: 'Name of the Product',
},
{
    name: 'images',
    type: 'array',
    title: 'ProductImages',
    of: [
        { type: 'image' }
    ],
    
},
{
    name:'description',
    type: 'text',
    title: 'Description of the Product',
},

{
    name:'slug',
    type: 'slug',
    title: 'Product Slug',

    options: {
        source: 'name',
    }
},
{
    name: 'price',
    type: 'number',
    title: 'Price',
},
{
name:'price_id',
type: 'string',
title: ' Stripe Price ID',
},
{
name:'category',
type: 'reference',
title: 'Product Category',
to: {type: 'category'},
},

]


}