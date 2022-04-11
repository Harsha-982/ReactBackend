const Storage = require("@adaptavant/fullstorage-api-js-client");
let storageFileService = new Storage.StorageFileService('stage', "apikey");

const StorageInstance=async(fileId)=>{
    console.log(fileId)
    return await storageFileService.getFile(fileId)
     
}
let request ={
    userId: 'use',
    acctId: 'hs',
    accessType: 'PUBLIC',
    users: ['user'],
    groups: ['group'],
    tags: ['tags'],
    origin: 'http://localhost:3000',
}
async function generateResumableUrl(data) {
 
    request['fileSize'] = Number(data.fileSize)
    request['md5Hash'] = data.md5Hash
    request['title'] = data.title
    const resumableUrl = await storageFileService.generateResumableUrl(request);
    console.log(request.title);

    return resumableUrl;
    
}

module.exports={generateResumableUrl,StorageInstance}