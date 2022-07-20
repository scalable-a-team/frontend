<template>
  <div class="m-4 h-full">
    <!-- Top Bar -->
    <div class="h-12 flex justify-center items-center">
      <h1 class="text-2xl">
        {{ receiver }}
      </h1>
    </div>
    <!-- Chat -->
    <div class="h-full bg">
      <div class="themedBorder">
        <ChatBubble :isSender="1 == 1"> </ChatBubble>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import ChatBubble from "../components/ChatBubble.vue";
export default {
  components: {
    ChatBubble,
  },
  data() {
    return {
      isConnected: false,
      socketMessage: "",
      receiver: null,
      socket: io("http://localhost:5000"),
      room_id: null,
    };
  },
  mounted() {
    // joinRoom();
    // console.log("test");
    this.joinRoom();
  },
  created() {
    // this.socket.emit('')
    console.log(this.$route.query.sender_id);
    console.log(this.$route.query.receiver_id);
    // this.socket = io('http://localhost:5000')
    this.receiver = this.$route.query.receiver_id;
    //  this.socket.emit('join_room',{
    //                 username: "yuqi",
    //                 room:1,
    //             });// x.on
    // this.socket.on()
    this.socket.on("receive_message", (data) => {
      console.log(data);
      this.socketMessage += data.message;
    });
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
      console.log("connected");
      this.isConnected = true;
    },

    disconnect() {
      console.log("disconnected");
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    receiveMessage(data) {
      this.socketMessage = data;
    },
  },

  methods: {
    pingServer() {
      this.socket.emit("send_message", {
        sender_id: "yuqi",
        receiver_id: "minnie",
        message: "hello",
      });
      // Send the "pingServer" event to the server.
    },
    async joinRoom() {
      console.log(this.$route.query.sender_id);
      if (this.$route.query.sender_id === undefined) return;
      const sender = this.$route.query.sender_id;
      const res = await fetch(
        `http://localhost:5000/api/establish_conn/${sender}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      this.room_id = data["session_id"];
      console.log(this.room_id);
      this.socket.emit("join_room", {
        username: sender,
        room_id: this.room_id,
      });
      // this.socket.emit('send_message',{
      //             sender_id: "yuqi",
      //             receiver_id: "minnie",
      //             message: "hello",
      //         });
      // Send the "pingServer" event to the server.
    },
    minnie() {
      this.socket.emit("join_room", {
        room: 69765,
        username: "minnie",
      });
      this.socket.emit("send_message", {
        sender_id: "minnie",
        receiver_id: "bossqi",
        message: "from minnie",
      });
    },
    bossqi() {
      this.socket.emit("join_room", {
        room: 88829,
        username: "bossqi",
      });
      this.socket.emit("send_message", {
        sender_id: "bossqi",
        receiver_id: "minnie",
        message: "from bossqi",
      });
    },
  },
};
</script>
<style scoped>
.themedBorder {
  @apply border-[#44BFD7] border-2 h-full m-10 border-opacity-30 rounded-lg px-5 py-5;
}
</style>
