import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req, res){
    if (req.method === 'GET') {
        const userId = req.user.userId;
        const pegawai = await prisma.pegawai.findUnique({
                    where: {
                        id:userId,
                    }
                });

        if (!pegawai) {
            return res.status(401).json({ message: 'No Data' });
        }

        return res.send( pegawai );
    } 
    if(req.method === 'POST') {
        const {id} = req.body;
        if (!id){
            return res.status(400).json({message:"method body not found"})
        }
        const pegawai = await prisma.pegawai.findUnique({
            where:{
                id            }
        })
        return res.status(200).json(pegawai)
    }
})