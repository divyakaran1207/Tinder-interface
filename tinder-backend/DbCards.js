import mongoose from 'mongoose'

const cardsSchema = mongoose.Schema({
    name:String,
    url:String,

})

export default mongoose.model('cards', cardsSchema);