import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "POST"){
        const userId = req.user.userId;
        const {tanggal,keterangan,pemasukan,pengeluaran,saldo} = req.body
        if (!tanggal||!keterangan||!pemasukan||!pengeluaran||!saldo){
            return res.status(400).json({message: 'form kurang lengkap'})
        }
        const Reject = await prisma.rejected.create({
            data:{
                name,
                email,
                password,
                rejected_oleh:userId
            }
        })
        const mitra = await prisma.mitra.delete({
            where:{
                id
            }
        })
        return res.status(200).send({Reject})

        
    }
})