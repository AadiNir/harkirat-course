import { Hono } from 'hono'
import userapp from './Routes/user'
const app = new Hono()

app.route('/api/v1',userapp);

export default app
