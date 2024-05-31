import mongoose,{mongoose, model }from "mongoose"
const contactschema=new mongoose.schema({
    name:{type:string},
    Number:{type:Number}
})

export default mongoose.model.contacts || mongoose.model('ccontact',contactschema)