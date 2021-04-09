'use strict';

import mongoose from 'mongoose'

const questionSchema =  new mongoose.Schema({
    topic:String,
    answer:String,
    create_time: String,
    update_time: String
})

const Question = mongoose.model('Question', questionSchema)

export default Question
