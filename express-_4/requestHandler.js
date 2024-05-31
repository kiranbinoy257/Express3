export async function addcontact(req,res){
    try{
        const{name,number}=req.body;
        await contactschema
        .create({name,number})
        .then(()=>{
            res.status(201).send({msg:"sucessfully created"})
        })
     }catch(error){
        res.ststus(500).send(error)
     }

}