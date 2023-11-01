import mongoose from "mongoose";

const messageCollection = 'messages'

const messageSchema = new mongoose.Schema ({
        messageList: String,
        messageInput: String,
        sendButton: String,
      })

const messageModel = mongoose.model(messageCollection, messageSchema)

export default messageModel