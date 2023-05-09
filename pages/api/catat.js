import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if (req.method === "POST"){
        const userId = req.user.userId;
        const {nama,tanggal,keterangan,pemasukan,pengeluaran,saldo,} = req.body;
        if(!nama||!tanggal||!keterangan||!pemasukan||!pengeluaran||!saldo){
            return res.status(400).json({message:"Data tidak boleh kosong!"})
        }
        const pencatatan = await prisma.pencatatan.create({
            data:{
                nama_pencatatan:nama,
                milik:userId
            }
            
        })
        const search = await prisma.pencatatan.findFirst({
            where:{
                nama_pencatatan:nama
            }
        })
        const name = search.id
        const detail = await prisma.detail_pencatatan.create({
            data:{
                tanggal,
                keterangan,
                pemasukan,
                pengeluaran,
                saldo,
                detail_dari:name
            }
        })
        return res.status(200).json({message: "Data berhasil dibuat"})
    }
        // if (req.method === "PUT"){
        //     const {nama,tanggal,keterangan,pemasukan,pengeluaran,saldo,} = req.body;
        //     const search = await prisma.pencatatan.findFirst({
        //         where:{
        //             nama_pencatatan:nama
        //         }
        //     })
        //     return res.send(search)
        // }

})