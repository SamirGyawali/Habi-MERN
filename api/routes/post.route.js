import express from 'express';

const router = express.Router();
router.get("/test", (req, res)=>{
    console.log("Server is running");
})

export default router;