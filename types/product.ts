import { StaticImageData } from "next/image";

export interface Product {
    _id: string;
    title: string;
    price: number;
    tags: string;
    isNew: boolean;
    description: string;
    dicountPercentage: number;
    imageUrl: string ;
    slug: {
        _type: "slug";
        current: string;
    }
}