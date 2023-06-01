import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "GET"){
        const userId = req.user.userId;
        const id = Number(userId)
        const pegawai = await prisma.pegawai.findUnique({where:{id}})
        const dataTerbaru =  await prisma.konfirmasi.findMany({
          orderBy: {
            id: 'desc' 
          },
          include: {
            pegawai: {
              select: {
                workAt: true
              }
            }
          },
          where: {
            pegawai: {
              workAt:Number(pegawai.workAt)
            }
          }
        });
        return res.send(dataTerbaru)
    }
    if (req.method === "PUT"){
        const userId = req.user.userId;
        const dataTerbaru =  await prisma.konfirmasi.findMany({
          orderBy: {
            id: 'desc' 
          },
          include: {
            pegawai: {
              select: {
                workAt: true
              }
            }
          },
          where: {
            pegawai: {
              workAt:Number(userId)
            }
          }
        });
        return res.send(dataTerbaru)
    }
    if(req.method === "POST"){
        const{id} = req.body
        if(!id){
            return res.status(400).json({message:"Data Kosong!"})
        }
        const getdata = await prisma.konfirmasi.findUnique({
            where: {
              id
            }
          });
        return res.status(200).json(getdata)
    }
})