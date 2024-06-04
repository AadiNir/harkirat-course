import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const data = await c.req.json();
  console.log(c.req.query("param"))
  return c.text("hola")
})

export default app
