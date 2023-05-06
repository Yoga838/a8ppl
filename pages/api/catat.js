import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";
import { hash } from "bcrypt";

export default authMiddleware(async function handler(req,res){
    if (req.method === "POST"){
        const userId = req.user.userId;
        const {nama,tanggal,keterangan,pemasukan} = req.body
       
        const pegawai = await prisma.pegawai.create({
            data:{
                name,
                no,
                email,
                password:hashpassword,
                workAt:userId
            }
            
        })
        return res.status(200).json({message: "Data berhasil dibuat"})
    }
    // if (req.method === "GET"){
    //     const userId = req.user.userId;
    //     const pegawai = await prisma.pegawai.findMany({
    //         where:{
    //             workAt:userId
    //         }
    //     })
    //     return res.send(pegawai)
    // }

})