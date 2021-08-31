'use strict';

import mongoose from 'mongoose'

const pageSchema =  new mongoose.Schema({
    url:String,
    html:String,
})

const Page = mongoose.model('Page', pageSchema)

export default Page
