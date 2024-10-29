import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function createuser(username: string,password: string,firstname:string,lastname?: string){
    await prisma.users.create({
        data:{
            username,
            password,
            firstname,
            lastname 
        }
    })
    console.log("entries logged in")
}

interface updateval{
    firstname?:string,
    lastname?:string
}
async function updateuser(username:string,dt : updateval){
    await prisma.users.update({
        where :{username},
        data:{
            firstname:dt.firstname,
            lastname:dt.lastname
        }
    })
}
// createuser("aadithya.niranjan@gmail.com","Aamod","Rakesh","Govindan");
export {
    createuser,
    updateuser
}