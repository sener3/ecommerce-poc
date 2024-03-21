import { Product } from "@/lib/db"

export type PartialProduct = Partial<Product>
export type PartialProductRequiredId = PartialExceptOne<Product, "id">
export type ProductOmitId = Omit<Product, "id">
