import Message from "../models/message.model.js";
import { getRecieverSocketId,io } from "../lib/socket.js";

export const getMessages =async(req,res) =>{
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id

        const message = await Message.find({
            $or:[
                {senderId:senderId,recieverId:userToChatId},
                {senderId:userToChatId,recieverId:senderId}
            ]
        })
        res.status(200).json(message)
    } catch (error) {
        console.log("error in getMessage controller ",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const sendMessages = async(req,res) =>{
    try {
        const {text} = req.body;
        const {id:recieverId} = req.params
        const senderId = req.user._id
        
        const newMessage = new Message({
            senderId,
            recieverId,
            text,
        })

        await newMessage.save()

        const recieverSocketId  = getRecieverSocketId(recieverId)
        if(recieverSocketId){
            io.to(recieverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("error in sendMessage controller ",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}