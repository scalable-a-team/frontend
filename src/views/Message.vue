<template>
  <div>
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <div class="flex flex-col">

        <button @click="pingServer()">Ping Server</button>
        <button @click="chatNow()">Chat now</button>
        <button @click="bossqi()">join bossqi</button>
        <button @click="minnie()">join minnie</button>
    </div>
  </div>
</template>

<script>
import {io} from 'socket.io-client';
export default {
  data() {
    return {
      isConnected: false,
      socketMessage: '',
      socket: io('http://localhost:5000'),
    }
  },
  created(){
    // this.socket = io('http://localhost:5000')
    //  this.socket.emit('join_room',{
    //                 username: "yuqi",
    //                 room:1,
    //             });// x.on
    // this.socket.on()
    this.socket.on('receive_message', (data)=>{
        console.log(data);
        this.socketMessage += data.message;
    } )
    // this.socket.subscribe('receive_message', (data)=>{
    //     this.socketMessage = data.message;
    // } )
    // this.$socket.emit('send_message');
    // this.$socket.emit('send_message');
    // Vue.prototype.$socket.emit('send_message');
    // this.connection = new WebSocket('http://localhost:5000');
    // this.connection.onopen = function(e){
    //     console.log(e);
    //     console.log('succesful');
    // }
  },
//   created(){
//     this.socket.on('send_message', (data)=> {
//         console.log(data);
//     })
//   },
//   mounted(){
//     this.$socket.on('connect', (data)=> {
//         debugger;
//         console.log(data);
//         this.$socket.emit('send_message');
//     })
//   },
  sockets: {
    connect() {
        // this.socket.
      // Fired when the socket connects.
      console.log('connected');
      this.isConnected = true;
    },

    disconnect() {
        console.log('disconnected');
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    receiveMessage(data) {
      this.socketMessage = data
    }
  },

  methods: {
    pingServer() { 
        this.socket.emit('send_message',{
                    sender_id: "yuqi",
                    receiver_id: "minnie",
                    message: "hello",
                });
      // Send the "pingServer" event to the server.
    },
    async chatNow(){ 
        
        const res = await fetch('http://localhost:5000/api/establish_conn/minnie',
        {
           method: "GET" ,
            headers: {
                //  'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
  }});
        const data = await res.json();
        console.log(data);
        // this.socket.emit('send_message',{
        //             sender_id: "yuqi",
        //             receiver_id: "minnie",
        //             message: "hello",
        //         });
      // Send the "pingServer" event to the server.
    },
    minnie(){
        this.socket.emit('join_room',{
            room: 93879,
            username:'minnie',
        })
        this.socket.emit('send_message',{
                    sender_id: "minnie",
                    receiver_id: "bossqi",
                    message: "from minnie",
                });
    },
    bossqi(){

        this.socket.emit('join_room',{
            room: 11970,
            username:'bossqi',
        })
        this.socket.emit('send_message',{
                    sender_id: "bossqi",
                    receiver_id: "minnie",
                    message: "from bossqi",
                });
    }
  }
}
</script>