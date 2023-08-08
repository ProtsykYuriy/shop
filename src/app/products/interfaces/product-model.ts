import { ProductCategory } from "../../shared/enums/product-category.enum";

export interface ProductModel {
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean
    types?: string[];
    originCounries?: string[];
}
