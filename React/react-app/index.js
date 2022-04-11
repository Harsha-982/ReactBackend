const express = require('express')
const Storage = require("@adaptavant/fullstorage-api-js-client");
const cors = require('cors');
const res = require('express/lib/response');
const app = express()
app.use(cors({ origin: '*' }));



let storageFileService = new Storage.StorageFileService('stage', "MdXy4G7.LnggStdMyMxT52VtqjiK97AGijz63niR");
let request1 = {
    userId: 'e96880cd-f3ac-4738-9534-9fd694fcf358',
    acctId: 'SEN42',
    // md5Hash: 'cBOcES/+15nGh6qX7Byf4Q==', //'cBOcES/+15nGh6qX7Byf4Q==', // BASE64 encoded MD5 hash
    // fileSize: 2561961,//2561961,
    accessType: 'PUBLIC',
    users: ['user'],
    groups: ['group'],
    tags: ['tags'],
    // title: 'title',
    origin: 'http://localhost:3000',

}

async function Start() {
    resumableUrl = await storageFileService.generateResumableUrl(request1);
    console.log(request1.fileSize)
    console.log(request1.md5Hash)
    console.log(request1.title)
}
// Start();


app.get(`/requestUrl`, async (req, res) => {

    request1['fileSize'] = Number(req.query.size)
    request1['md5Hash'] = req.query.hash
    request1['title'] = req.query.fileName
    await Start();
    res.send(resumableUrl)

})
app.listen(3001)