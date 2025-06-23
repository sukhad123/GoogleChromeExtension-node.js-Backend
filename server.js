 
// Define the port and host
const port = 3000;
import express from 'express'
import cors from 'cors'
const host = 'localhost';
const app = express();
 
app.use(cors());
app.use(express.json());
//it will make a call
app.post('/api', (req, res) => {
    console.log('Body:', req.body);
    const { text, style } = req.body;
    return "Hey how are you";
});
// Start the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
