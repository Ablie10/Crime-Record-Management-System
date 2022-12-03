const mongoose = require('mongoose')

const securitySchema=new mongoose.Schema(
    {
        "user":{
            type:String,
            require:true,
        },
            "email":{
             type: String,
             required: true,
              unique: true,
              trim: true
            },
        "password":{
            type:String,
            require:true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    }
)
{timestamps: true}


securitySchema.set('toJSON',{
    transform: (document, returnedObject)=>{
        returnedObject.id =returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
        //the password should not be revealed
        delete returnedObject.password
    }
})


const security = mongoose.model('security',securitySchema)

module.exports = security