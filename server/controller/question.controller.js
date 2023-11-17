const express = require("express")
const question = require("../model/question.model")
const router = express.Router()
const { upload, FILES_PATH } = require("../middlewares/multer");
const fs = require('fs')

router.get('/', async (req, res) => {
    try {
        const docs = await question.find().sort({ "submit_time": -1 });

        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})
// router.get('/', async (req, res) => {
//     try {
//         const docs = await question.find().sort({ "submit_time": -1 }).skip().limit(1);
//         console.log("🚀 ~ docs:", docs)
//         res.send(docs)
//     } catch (error) {
//         res.send(error)
//     }
// })


router.get('/:id', async (req, res) => {
    try {
        const docs = await question.findById(req.params.id)
        docs.image = fs.readFileSync(FILES_PATH + docs.image, "base64")
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.post("/", upload.single("que-image"), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        data.image = req.file.filename
        data.submit_time = new Date();
        console.log("🚀 ~ data post:", data)
        const docs = await question.create(data)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;