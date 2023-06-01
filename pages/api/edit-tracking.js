import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if (req.method === "POST"){
        const userId = req.user.userId;
        const {kondisi_barang,id} = req.body;
        if(!kondisi_barang||!id){
            return res.status(400).json({message:"Data tidak boleh kosong !"})
        }
        const response = await prisma.tracking.update({
            where:{id},
            data:{
                kondisi_barang,
                id_pegawai:Number(userId)
            }
        })
        return res.status(200).json({message:"Data Berhasil Diubah"})
    }

})