import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req,res){
    if(req.method === "GET"){
        const now = new Date();
        const userId = req.user.userId;
        const buktiBayar = await prisma.bukti_bayar.findFirst({
            where: {
              id_mitra: userId,
            }
          });
        if(!buktiBayar || buktiBayar.expire < now){
            return res.status(200).json({"status":false})
        }
        if(buktiBayar.status === 0){
            return res.status(200).json({"status":true,"tolak":false})
        }
        else if(buktiBayar.status === 2){
            return res.status(200).json({"status":true,"tolak":true})
        }
        else{
            return res.status(200).json({"status":true})
        }
    }
})