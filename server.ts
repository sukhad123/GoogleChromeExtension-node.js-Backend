import { mainController } from './Feature/infrastructure/controller/MainController';
const port = 3000;
import express, { Request, Response } from 'express'
import cors from 'cors'
const host = 'localhost';
const app = express();
 
app.use(cors());
app.use(express.json());
//it will make a call
app.post('/api', async (req: any, res: any) => {
    
    const { text, style } = req.body;
    const value = await mainController(text, style);
   
    return res.json({ text: value });
    
});
// Start the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
