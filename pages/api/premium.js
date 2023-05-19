import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "POST"){
        const userId = req.user.userId;
        const bukti = req.body;
        if (!bukti){
            return res.status(200).json({message:"Data tidak boleh kosong!"})
        }
        const search = await prisma.bukti_bayar.findFirst({
            where:{
                id_mitra:userId
            }
        })
        if(!search){
            const create = await prisma.bukti_bayar.create({
                data:{
                    bukti_bayar:bukti,
                    id_mitra:userId
                }
            })
            return res.status(200).json({message:"Data berhasil dikirim. Mohon tunggu 1x24 jam untuk pengajuan anda"})
        }
        const create = await prisma.bukti_bayar.update({
            where:{
                id_mitra:userId
            },
            data:{
                bukti_bayar:bukti,
                status:0
            }
        })
        return res.status(200).json({message:"Data berhasil dikirim. Mohon tunggu 1x24 jam untuk pengajuan anda"})
    }
})