const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add the contact name']

    },
    email:{
        type:String,
        required:[true,'please add the email first']

    },
    phone:{
        type:String,
        required:[true,'please input your number ']
    },

},
{
    Timestamp:true
}
)
module.exports=mongoose.model('Contact',contactSchema)