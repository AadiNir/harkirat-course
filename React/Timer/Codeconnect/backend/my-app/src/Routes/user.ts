import { Hono } from 'hono'

const userapp = new Hono();
userapp.post('/createuser',(s)=>{
    return s.text("hola how aare you");
})

export default userapp