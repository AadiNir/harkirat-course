import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function createuser(Name:string,email:string,password:string){
    const res = await prisma.user.create({
        data:{
            Name,
            email,
            password
        },
        select:{
            id : true
        }
    })
    console.log(res);

}
async function updateuser(Name:string,email:string){
    await prisma.user.update({
        where:{
            email
        },
        data:{
            Name
        }
    })
    console.log("updated successfully from DB");
}
async function deleteuser(email:string){
    await prisma.user.delete({
        where:{
            email
        }
    })
    console.log("deleted the user from DB")

}
createuser("Aadithya Niranjan","aadiniranjan27@gmail.com","Aamod123@");
export {createuser,updateuser,deleteuser}