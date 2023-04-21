import { sign } from "jsonwebtoken";
import prisma from "@/lib/prisma";
const JWT_SECRET = "My-Lover";
import { compare } from "bcrypt";
export default async function handler(req, res){
    
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required'});
        }

        const visitor = await prisma.Visitor.findUnique({ where: { email } });
        const mitra = await prisma.Mitra.findUnique({ where: { email } });
        const admin = await prisma.Admin.findUnique({ where: { email } });
        

        if (!visitor&&!mitra&&!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        if (visitor){
            const passwordMatch = await compare(password, visitor.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
            const user = "visitor";
            const token = sign({ userId: visitor.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ token,user});
        }
        if (admin){
            const passwordMatch = await compare(password, admin.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
            const user = "admin";
            const token = sign({ userId: admin.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ token,user });
        }
        if (mitra){
            const passwordMatch = await compare(password, mitra.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
            const user = "mitra";
            const token = sign({ userId: mitra.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ token,user });
        }
}
}