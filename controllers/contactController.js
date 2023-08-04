//description all contact
//route ge api/contact
//access public
const asyncHandler=require('express-async-handler')
const contactModel = require('../models/contactModel')

const getContacts=asyncHandler( async(req,res)=>{
    const contacts=await contactModel.find();
    res.status(200).json(contacts)
}
)
const createContact=asyncHandler(
    async(req,res)=>{
        const {name,email,phone}=req.body;
    
        if(!name || !email || !phone){
            res.status(404)
            throw new Error('required all filed')
        }
        const contact=await contactModel.create({
            name,email,phone
        })

        res.status(200).json(contact)
    }
)
const getContact=asyncHandler(async(req,res)=>{
    const contact=await contactModel.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error('Contact not found man opss no you are not good man')
    }

    res.status(200).json(contact)
})
const editContact=asyncHandler(
    async(req,res)=>{

        const contact=await contactModel.findById(req.params.id)
        if(!contact){
            res.status(404);
            throw new Error('Contact not found man opss no you are not good man')
        }
        const updatedContact=await contactModel.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new:true
            }
        )

        res.status(200).json(contact)
    }
)

const deleteContact=asyncHandler(
    async(req,res)=>{
        const contact=await contactModel.findByIdAndDelete(req.params.id)
        if(!contact){
            res.status(404).json('Not deleted because you are mad');
        }
        res.status(200).json(contact)
    }
)

module.exports={getContacts,createContact,editContact,getContact,deleteContact}  