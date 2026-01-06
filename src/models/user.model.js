import mongoose, {Mongoose, Schema} from "mongoose";

const UserSchema = new Schema(
    {
        username: {
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
        fullname: {
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

export const User = mongoose.model("User", UserSchema)