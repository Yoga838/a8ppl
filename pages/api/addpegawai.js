import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";
import { hash } from "bcrypt";

export default authMiddleware(async function handler(req,res){
    if (req.method === "POST"){
        const userId = req.user.userId;
        const {name,no,email,password} = req.body
        if(!name||!no||!email||!password){
            return res.status(400).json({message: "Data tidak boleh kosong!"})
        }
        const emailauthentic =  await prisma.visitor.findUnique({ where: {email}});
        const emailauthentic2 = await prisma.mitra.findUnique({ where: {email}});
        const emailauthentic3 = await prisma.admin.findUnique({ where: {email}});
        const emailauthentic4 = await prisma.pegawai.findUnique({ where: {email}});
        if(emailauthentic || emailauthentic2 || emailauthentic3|| emailauthentic4){
            return res.status(400).json({message: 'Data anda sudah terdaftar Coba lagi!'})
        }
        const hashpassword = await hash(password,10)
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
    if (req.method === "GET"){
        const userId = req.user.userId;
        const pegawai = await prisma.pegawai.findMany({
            where:{
                workAt:userId
            }
        })
        return res.send(pegawai)
    }

})