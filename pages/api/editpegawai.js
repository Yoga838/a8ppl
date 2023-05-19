import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){

    if (req.method === "POST"){
        const userId = req.user.userId;
        const {name,email,password,no} = req.body;
        if (!name||!email||!password||!no){
            return res.status(400).json({message: 'Data tidak Boleh Kosong!'})
        }
        const emailauthentic2 =  await prisma.visitor.findUnique({ where: {email}});
        const emailauthentic = await prisma.mitra.findUnique({ where: {email}});
        const emailauthentic3 = await prisma.admin.findUnique({ where: {email}});
        const emailauthentic4 = await prisma.pegawai.findUnique({where:{email}})
        if( emailauthentic2 || emailauthentic3 || emailauthentic){
            return res.status(400).json({message: 'email yang anda pakai telah terdaftar!'})
        }
        if (emailauthentic4.id != userId){
            return res.status(400).json({message: 'email yang anda pakai telah terdaftar!'})
        }
        const hashedPassword = await hash(password, 10);
        const pegawaiupdate = await prisma.pegawai.update({
            where:{id:userId},
            data: {
                name,
                password :hashedPassword,
                email,
                no
            }
        });
        return res.status(200).json({message: "Data berhasil disimpan"})
    }
    if (req.method === "PUT"){
        const {name,email,password,no,id} = req.body;
        if (!name||!email||!password||!no){
            return res.status(400).json({message: 'Data tidak Boleh Kosong!'})
        }
        const emailauthentic2 =  await prisma.visitor.findUnique({ where: {email}});
        const emailauthentic = await prisma.mitra.findUnique({ where: {email}});
        const emailauthentic3 = await prisma.admin.findUnique({ where: {email}});
        const emailauthentic4 = await prisma.pegawai.findUnique({where:{email}})
        if( emailauthentic2 || emailauthentic3 || emailauthentic){
            return res.status(200).json({message: 'email yang anda pakai telah terdaftar!'})
        }
        if (emailauthentic4.id != id){
            return res.status(200).json({message: 'email yang anda pakai telah terdaftar! id salah'})
        }
        const hashedPassword = await hash(password, 10);
        const pegawaiupdate = await prisma.pegawai.update({
            where:{id},
            data: {
                name,
                password :hashedPassword,
                email,
                no
            }
        });
        return res.status(200).json({message: "Data berhasil disimpan"})
    }
})