import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if (req.method === "POST"){
        const userId = req.user.userId;
        const {id} = req.body;
        const getdata = await prisma.detail_pencatatan.findMany({
            where:{
                detail_dari:id
            }
        })
        return res.status(200).json(getdata)
    }
})