import jwt from "jsonwebtoken";

const isAuthenticated = async (req,res,next) => {
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Please login again!"
            });
        }

        const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY);

        if(!decode){
            return res.status(401).json({
                success:false,
                message: "Invalid Token"
            });
        }
        req.id = decode.userId;
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({ success: false, message: "Authentication failed" });
    }
}

export default isAuthenticated;