import { App } from './app'
import { environment } from '@core/config/environment'

import { productsRoutes } from '@api/products.routes'

const PORT = environment.app.port

async function bootstrap() {
  const app = new App()

  const server = await app.create([
    productsRoutes
  ])

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  })

}
bootstrap()
