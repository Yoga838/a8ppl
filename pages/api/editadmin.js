import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){

    if (req.method === "POST"){
        const userId = req.user.userId;
        const {deskripsi} = req.body;
        if(!deskripsi){
            return res.status(400).json({message:"Data tidak boleh kosong!"})
        }
        const adminupdate = await prisma.admin.update({
            where:{id:userId},
            data: {
                deskripsi:deskripsi
            }
        });
        return res.status(200).json({message: "Data berhasil disimpan"})
    }
})