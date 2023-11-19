const express = require("express")
const question = require("../model/question.model")
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        if (!req.query.p) {
        } else {
            const page = req.query.p
        }
        const docs = await question.find().sort({ "submit_time": -1 }).select({ question: 1, url: 1 }).exec();
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})



router.get('/:id', async (req, res) => {
    try {
        const docs = await question.findById(req.params.id)
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        data.submit_time = new Date();
        const docs = await question.create(data)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;