
import jwt from "jsonwebtoken";


const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            throw new Error("token missinng")
            res.status(404).json("Invalid token")
        }
        const isCustomAuth = token?.length < 500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token,'test');
            req.userId = decodedData?.id;
           
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
           
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;