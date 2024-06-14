export interface simplifiedProduct {
    _id: string;
    price: number;
    description: string;
    imageUrl: string;
    slug: string;
    categoryName: string;
    name: string;
}

export interface fullProduct {
    price_id: string;
    currency: string;
    _id: string;
    price: number;
    description: string;
    images: any;
    slug: string;
    categoryName: string;
    name: string;

}