import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";



export default async function handler(req,res){

    if (req.method === "POST"){
        const {name,email,password,alamat,no} = req.body;
    if (!name||!email||!password||!alamat||!no){
            return res.status(400).json({message: 'Data tidak boleh kosong!'})
        }
        const emailauthentic =  await prisma.visitor.findUnique({ where: {email}});
        const emailauthentic2 = await prisma.mitra.findUnique({ where: {email}});
        const emailauthentic3 = await prisma.admin.findUnique({ where: {email}});
        const emailauthentic4 = await prisma.pegawai.findUnique({ where: {email}})
        if(emailauthentic || emailauthentic2 || emailauthentic3){
            return res.status(400).json({message: 'Data anda sudah terdaftar Coba lagi!'})
        }
        const hashedPassword = await hash(password, 10);
        const visitor = await prisma.visitor.create({
            data: {
                name,
                password :hashedPassword,
                email,
                alamat,
                no
            }
        });
        return res.status(200).json({message: "Registrasi berhasil"})
    }
    else if (req.method === "PUT"){
        const {name,email,password,no,alamat,usaha,pribadi} = req.body;
        if (!name||!email||!password||!no||!alamat||!usaha||!pribadi){
            return res.status(400).json({message: 'Data tidak boleh kosong!'})
        }
        const emailauthentic =  await prisma.visitor.findUnique({ where: {email}});
        const emailauthentic2 = await prisma.mitra.findUnique({ where: {email}});
        const emailauthentic3 = await prisma.admin.findUnique({ where: {email}});
        const emailauthentic4 = await prisma.pegawai.findUnique({ where:{email}})
        if(emailauthentic || emailauthentic2 || emailauthentic3 || emailauthentic4){
            return res.status(400).json({message: 'Data anda sudah terdaftar Coba lagi!'})
        }
        const hashedPassword = await hash(password, 10);
        const mitra = await prisma.mitra.create({
            data: {
                name,
                password :hashedPassword,
                email,
                no,
                alamat,
                usaha,
                pribadi
            }
        });
        return res.status(200).json({message: "Data berhasil dikirim.Mohon tunggu 1x24 jam untuk pengajuan anda"})
    }
}
