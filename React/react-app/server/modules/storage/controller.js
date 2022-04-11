const {generateResumableUrl,StorageInstance} = require('./service')

const getReumableUrlController=async(req,res,next)=>{
    const request=req.query
    console.log(request)
    const resumableUrl =await generateResumableUrl(request);
    console.log(resumableUrl.data)
    res.send(resumableUrl.data)
   
}
const getStorageInstanceController=async(req,res)=>{
    const instance=req.query.id
    console.log(instance)
    const storageInstance=await StorageInstance(instance)
    res.send(storageInstance)
    
    
}
module.exports={getReumableUrlController,getStorageInstanceController}

