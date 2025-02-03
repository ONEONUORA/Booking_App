import Rooms from "../models/Rooms.js";
import Room from "../models/Rooms.js";
import { createError } from "../utils/error.js";


export const createRoom = async (req, res,next)=>{

    const roomId = req.prams.roomId;
    const newRoom = new Rooms(req.body)

    try{
        const savedRoom = await newRoom.save ()
        try{
            await Room.findByIdAndUpdate(roomId,{$push: {rooms:savedRoom._id},
                });
            

        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom);
        
    }catch(err){
        next(err)
    }
};

  export const updateRoom = async(req, res, next)=>{;
    try{
            const updatedRoom = await Room.findByIdAndUpdate(
                req.params.id ,
                {$set:req.body},
                {new:true}
            );
            res.status(200).json(updatedRoom);
    
        }catch(err){
            next(err)
        }
    }
   


    export const deleteRoom = async(req,res,next)=>{
    try{
            await Room.findByIdAndDelete(req.params.id);
           res.status(200).json("Room has been deleted");
   
       }catch(err){
           next(err);
       }
    }
    
    export const getRoom = async(req, res, next)=>{
    try{
           const room = await Room.findByI(
               req.params.id 
               
           );
           res.status(200).json(room);
   
       }catch(err){
           next(err);
       }
    }


export const getRooms = async (req, res, next) => {
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);

    }catch(err){
       next(err)
        
}
}
 
 
    



