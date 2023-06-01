import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "GET"){
        const userId = req.user.userId;
        const response = await prisma.tracking.findMany({
            where: {
                kondisi_barang: {
                  not: "Barang Sudah Diterima"
                },
                id_mitra:Number(userId)
              },
              select: {
                id: true,
                nama_pembeli: true,
                alamat_pembeli: true,
                kondisi_barang: true,
                id_pembeli: true,
                id_mitra: true,
                id_pegawai: true
              }
        })
        
        return res.send(response)
    }
    if(req.method === "PUT"){
        const userId = req.user.userId;
        const id = {"id":Number(userId)}
        const pegawai = await prisma.pegawai.findUnique({where:id})
        const response = await prisma.tracking.findMany({
            where: {
                kondisi_barang: {
                  not: "Barang Sudah Diterima"
                },
                id_mitra:Number(pegawai.workAt)
              },
              select: {
                id: true,
                nama_pembeli: true,
                alamat_pembeli: true,
                kondisi_barang: true,
                id_pembeli: true,
                id_mitra: true,
                id_pegawai: true
              }
        })
        
        return res.send(response)
    }
    if(req.method === "POST"){
        const {id} = req.body
        const response = await prisma.tracking.findFirst({
            where: {
                id
            }
        })
        
        return res.status(200).json(response)
    }
})