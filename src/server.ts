import { App } from './app'
import { environment } from '@core/config/environment'

const PORT = environment.app.port

async function bootstrap() {
  const app = new App()

  const server = await app.create()

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  })

}
bootstrap()
