import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "GET"){
        const mitraWithBuktiBayar = await prisma.mitra.findMany({
            where: {
              bukti_bayar: {
                some: {
                  status: 0
                }
              }
            }
          });
        return res.status(200).json(mitraWithBuktiBayar)   
    }
    if(req.method === "POST"){
        const {id} = req.body;
        if (!id){
            return res.status(400).json({message:"error caused by id!"})
        }
        const search = await prisma.bukti_bayar.findFirst({
            where:{
                id_mitra:id
            }
        })
        if(!search){
            return res.status(200).json({message:"error caused by id not founded in database"})
        }
        return res.status(200).json(search)
    }
    if(req.method === "PATCH"){
        const {status,id,expire} = req.body;
        if (!status||!id){
            return res.status(400).json({message:"data kosong"})
        }
        const update = await prisma.bukti_bayar.update({
            where:{
                id_mitra:id
            },
            data:{
                status,
                expire
            }
        })
        return res.status(200).json({message:"api berhasil"})
    }
})