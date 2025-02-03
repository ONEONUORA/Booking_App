import mongoose from "mongoose";


const RoomSchema = new mongoose.Schema({
    title: {
        type :String,
        require :true,
    },
    price: {
        type :String,
        require :true,
    },
    maxPeople: {
        type :String,
        require :true,
    },
    desc: {
        type :String,
        require :true,
    },
    roomNumbers: [{Number:Number, unavailable: [{type:[Date]}] }],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

},
{timestamps:true}
);

export default mongoose.model("Room", RoomSchema)


