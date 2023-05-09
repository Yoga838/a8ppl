import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if (req.method === "GET"){
        const userId = req.user.userId;
        const getdata = await prisma.pencatatan.findMany({
            select: {
                id: true,
                nama_pencatatan: true,
              }
        })
        return res.status(200).json(getdata)
    }
})