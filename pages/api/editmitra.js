import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){

    if (req.method === "POST"){
        const userId = req.user.userId;
        const {name,email,password,no,alamat} = req.body;
        if (!name||!email||!password||!no||!alamat){
            return res.status(400).json({message: 'Data tidak Boleh Kosong!'})
        }
        const emailauthentic2 =  await prisma.visitor.findUnique({ where: {email}});
        const emailauthentic = await prisma.mitra.findUnique({ where: {email}});
        const emailauthentic3 = await prisma.admin.findUnique({ where: {email}});
        if( emailauthentic2 || emailauthentic3){
            return res.status(400).json({message: 'email yang anda pakai telah terdaftar!'})
        }
        if (emailauthentic.id != userId){
            return res.status(400).json({message: 'email yang anda pakai telah terdaftar!'})
        }
        const hashedPassword = await hash(password, 10);
        const MitraUpdate = await prisma.mitra.update({
            where:{id:userId},
            data: {
                name,
                password :hashedPassword,
                email,
                no,
                alamat
            }
        });
        return res.status(200).json({message: "Data berhasil disimpan"})
    }
})