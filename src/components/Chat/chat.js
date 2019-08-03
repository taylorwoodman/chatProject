import React from "react";
import io from "socket.io-client";


class Chat extends React.Component{

    constructor(){
        super()

        this.state = {

        }
    }

    componentDidMount(){
        this.socket = io()
        io.on('chat joined', data => {
            this.joinSuccess(data)
        })
    }



    joinSuccess(){

    }

    render(){
        return(
            <div>This is Chats!</div>
        )
    }
}

export default Chat;