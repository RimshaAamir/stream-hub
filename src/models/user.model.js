import mongoose, {Mongoose, Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true, 
            trim: true,
            index: true // for searching
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true, 
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String,  // cloudinary url 
            required: true,
            trim: true,
        },
        coverImage: {
            type: String,  // cloudinary url 
            trim: true,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,  // string that we will encrypt
            required: [true, 'Password is required'] 
        },
        refreshToken:{
            type: String
        }
    },
    {
        timestamps: true
    }
)

UserSchema.pre("save", async function(next){    // can't use callback here as we need this reference
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);    // salts and hash rounds 
    next();
})

//custom method injection
UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) // compare returns true/false
}


UserSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


UserSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", UserSchema)