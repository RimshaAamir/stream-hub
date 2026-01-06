import mongoose, {Mongoose, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    {
        videoFile: {
            type: String, // cloudinary url
            required: true
        },
        thumbnail: {
            type: String, // cloudinary url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number,     // will get from cloudinary  
            required: true
        },
        views: [{
            type:Number,
            default:0
        }],
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)



//mongoose-aggregate-paginate-v2 is a Mongoose plugin that adds pagination support 
// to aggregation pipelines, returning only the requested page of results along 
// with useful pagination metadata (total pages, next page, previous page, 
// total documents, etc.).
videoSchema.plugin(mongooseAggregatePaginate); 

export const Video = mongoose.model("Video", videoSchema)