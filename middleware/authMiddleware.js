const jwt = require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const authHeader=req.header("Authorization")
    if(!authHeader) return res.status(401).json({message:"Invalid authorization"})

        const token=authHeader.split(" ")[1]

        if(!token) return res.status(401).json({message:"no token provided"})

        try{
        const verified =jwt.verify(token,process.env.JWT_SECRET)
        req.user=verified
        next()
        }
        catch(err){
            return res.status(401).json({message: "invaild token"})
        }
}


module.exports=authMiddleware


//for understanding purpose
//Authorization:Bearer,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdkYjBjYmM1YWFiYjdkMzA0YWM4ZiIs
// ImlhdCI6MTc0MjE5OTU3N30.FPhghGAkBjgPq0xfS5pcnpbVrFY7NijiMUT_8BkcQzM