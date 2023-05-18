import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "GET"){
        const now = new Date();
        const userId = req.user.userId;
        const buktiBayar = await prisma.bukti_bayar.findFirst({
            where: {
              id_mitra: userId,
              status: 1
            }
          });
        if(!buktiBayar || buktiBayar.expire < now){
            return res.status(200).json({"status":false})
        }
        return res.status(200).json({"status":true})
   
    }
})