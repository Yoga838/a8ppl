import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "GET"){
        const userId = req.user.userId;
        const getdata = await prisma.tracking.findMany({
            where:{id_pembeli:Number(userId),NOT:{kondisi_barang:"Barang Sudah Diterima"}}
        })
        return res.send(getdata)
    }
    if(req.method === "POST"){
        const{id} = req.body
        if(!id){
            return res.status(400).json({message:"Data tidak boleh kosong!"})
        }
        const data = await prisma.tracking.findUnique({where:{id}})
        return res.send(data)
    }
})