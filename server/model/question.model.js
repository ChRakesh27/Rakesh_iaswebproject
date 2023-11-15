const mongoose = require("mongoose")

const Schema = mongoose.Schema

const questionsSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    image: { type: String },
    url: { type: String, require: true },
    submit_time: { type: Date, required: true },
    subject: { type: String, required: true },
    topic: { type: String, required: true }
}, {
    versionKey: false
})

const question = mongoose.model("questions", questionsSchema);
module.exports = question