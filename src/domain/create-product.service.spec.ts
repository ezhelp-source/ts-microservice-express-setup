import { ProductsRepository } from '@infrastructure/products.repository'
import { CreateProductService } from './create-product.service'

let productsRepository: ProductsRepository
let createProduct: CreateProductService

describe('Create Product', () => {

  beforeEach(() => {
    productsRepository = new ProductsRepository()
    createProduct = new CreateProductService(
      productsRepository,
    )
  })

  it('should be able to create Product', async () => {
    const savedPlan = await createProduct.execute({
      name: 'Product 1',
      price: 599,
    })

    expect(savedPlan).toHaveProperty('id')
    expect(savedPlan?.name).toBe('Product 1')
  })

})
