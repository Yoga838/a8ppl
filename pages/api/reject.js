import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "POST"){
        const userId = req.user.userId;
        // const {name,email,password,id} = req.body
        // if (!name||!email||!password){
        //     return res.status(400).json({message: 'form kurang lengkap'})
        // }
        const Rejected = await prisma.mitra.findMany({
            // data:{
            //     name,
            //     email,
            //     password
            // }
        })
        // const mitra = await prisma.mitra.delete({
        //     where:{
        //         id
        //     }
        // })
        return res.status(200).send({Rejected})

        
    }
})