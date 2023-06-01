import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "POST"){
        const userId = req.user.userId;
        const{nama_pembeli,alamat_pembeli,kondisi_barang,id_pembeli} = req.body
        if (!alamat_pembeli||!kondisi_barang){
            return res.status(400).json({message:"Data tidak boleh kosong!aa"})
        }
        if(!nama_pembeli&&!id_pembeli){
            return res.status(400).json({message:"Data tidak boleh kosong!"})
        }
        if(nama_pembeli){
            const isitracking = await prisma.tracking.create({
                data:{
                    nama_pembeli,
                    alamat_pembeli,
                    kondisi_barang,
                    id_mitra:userId,
                }
            })
            return res.status(200).json({message:"Data berhasil dibuat"})
        }
        const data_pembeli = await prisma.visitor.findUnique({
            where:{id:id_pembeli}
        })
        if(!data_pembeli){
            return res.status(400).json({message:"ID pembeli salah!"})
        }
        const isitracking = await prisma.tracking.create({
            data:{
                nama_pembeli:data_pembeli.name,
                alamat_pembeli,
                kondisi_barang,
                id_pembeli,
                id_mitra:userId
            }
        })
        return res.status(200).json({message:"Data berhasil dibuat"})
    }
})