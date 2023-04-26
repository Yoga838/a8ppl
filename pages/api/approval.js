import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){

    if (req.method === "POST"){
        const userId = req.user.userId;
        const {id} = req.body;
        if (!id){
            return res.status(400).json({message: 'id user tidak ada'})
        }
        const isid =  await prisma.mitra.findUnique({ where: {id}});
        if(!isid){
            return res.status(400).json({message: 'acc id tidak sesuai'})
        }
        const approve = await prisma.aproval.create({
            data: {
                accid:id
            }
        });
        return res.status(200).json({message: "berhasil dibuat"})
    }
    if(req.method === "GET"){
        const userId = req.user.userId;
    
        const data = await prisma.mitra.findMany({
            where : {
                NOT :{
                    aproval:{
                        some:{}
                    }
                }
            }
        });
        return res.send(data)
    }
})