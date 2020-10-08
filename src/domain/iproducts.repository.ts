import { Product } from "@infrastructure/product.entity"
import { ICreateProductDto } from "./create-product.dto"

export interface IProductsRepository {
  findAll(): Promise<Product[]>
  findByFilter(search: string): Promise<Product[]>
  findById(id: string): Promise<Product | undefined>
  create(entity: ICreateProductDto): Promise<Product>
  save(entity: Product): Promise<Product>
}
