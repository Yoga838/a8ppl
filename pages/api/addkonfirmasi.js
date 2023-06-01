import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "POST"){
        const id = req.user.userId;
        const{nama_pembeli,alamat_pembeli,keterangan} = req.body
        if(!nama_pembeli||!alamat_pembeli||!keterangan){
            return res.status(400).json({message:"Data tidak boleh kosong!"})
        }
        const response = await prisma.konfirmasi.create({
            data:{
                nama_pembeli,
                alamat_pembeli,
                keterangan,
                id_pegawai:Number(id)
            }
        })
        return res.status(200).json({message:"Data Berhasil Dibuat"})
    }
    if (req.method === "PATCH"){
        const {nama_pembeli,alamat_pembeli,keterangan,id}= req.body
        if (!nama_pembeli||!alamat_pembeli||!keterangan||!id){
            return res.status(400).json({message:"Data tidak boleh kosong!"})
        }
        const edit = await prisma.konfirmasi.update({
            where:{id},
            data:{
                nama_pembeli,
                alamat_pembeli,
                keterangan
            }
        })
        return res.status(200).json({message:"Data Berhasil Diinputkan"})
    }
})