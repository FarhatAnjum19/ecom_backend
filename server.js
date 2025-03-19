const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');

const app=express();
//middleware

// const allowedOrigins=["ecom-frontend-4sw70ig3r-farhatanjums-projects.vercel.app",
//     "ecom-frontend-seven-omega.vercel.app"]
   

const allowedOrigins = [
    'https://ecom-fronted-taupe.vercel.app',
    'http://localhost:5173' // Add localhost for testing
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

// app.use(cors({
//     origin: 'ecom-frontend-seven-omega.vercel.app','https://ecom-fronted-taupe.vercel.app'
// }));


// app.use(cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // Allows cookies and authentication headers if needed
//   }))

app.use(express.json())

connectDB()

app.use("/auth",router)
app.use("/cart", cartrouter)


app.get('/',(req,res)=>{
    res.send('Hello, World!')
})



const port=5000

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})