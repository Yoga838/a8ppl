import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";



export default async function handler(req,res){
    if(req.method === "GET"){
        const rejected = await prisma.rejected.deleteMany({})
        // const pegawai = await prisma.pegawai.deleteMany({})
        // const approval = await prisma.aproval.deleteMany({})
        res.send({message:"berhasil di delete"})
    }
}