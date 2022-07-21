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
        <div class="flex h-[38rem] flex-col overflow-auto mb-10">
          <div v-for="message in messages" :key="message.id">
            <ChatBubble
              :message="message.message"
              :isSender="message.sender_id === this.sender"
              :timestamp="message.timestamp"
            ></ChatBubble>
          </div>
        </div>
        <div class="sticky bottom-0 left-0 right-0 flex justify-center">
          <!-- <p>test</p> -->
          <MessageBox
            @sendMessage="getMessage"
            :socket="socket"
            :sender_id="sender"
            :receiver_id="receiver"
          ></MessageBox>
        </div>
        <!-- <ChatBubble :isSender="1 == 1"> </ChatBubble>
        <ChatBubble :isSender="1 == 1"> </ChatBubble> -->
        <!-- <ChatBubble :isSender="1 == 2"> </ChatBubble>
        <ChatBubble :isSender="1 == 2"> </ChatBubble>
        <ChatBubble :isSender="1 == 2"> </ChatBubble> -->
        <!-- <p>textx</p> <p>textx</p>
        <p>textx</p>
        <p>textx</p> -->
        <!-- <ChatBubble :isSender="1 == 1"> </ChatBubble>
        <ChatBubble :isSender="1 == 1"> </ChatBubble>
        <ChatBubble :isSender="1 == 1"> </ChatBubble> -->
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import ChatBubble from "../components/ChatBubble.vue";
import MessageBox from "@/components/MessageBox.vue";
export default {
  components: {
    ChatBubble,
    MessageBox,
    ChatBubble,
  },
  data() {
    return {
      messages: [],
      isConnected: false,
      socketMessage: "",
      receiver: null,
      sender: null,
      socket: io("http://localhost:5000"),
      // data: null,
      room_id: null,
    };
  },
  mounted() {
    // joinRoom();
    // console.log("test");
    this.joinRoom();
    this.getMessages();
  },
  created() {
    // this.socket.emit('')
    console.log(this.$route.query.sender_id);
    console.log(this.$route.query.receiver_id);
    // this.socket = io('http://localhost:5000')
    this.receiver = this.$route.query.receiver_id;
    this.sender = this.$route.query.sender_id;
    //  this.socket.emit('join_room',{
    //                 username: "yuqi",
    //                 room:1,
    //             });// x.on
    // this.socket.on()
    this.socket.on("receive_message", (data) => {
      console.log("new message for ya");
      // console.log(data.sender_id);
      // console.log(this.sender);
      this.messages.push(data);
      // this.socketMessage += data.message;
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
    getMessage(data) {
      // console.log(data);
      this.messages.push(data);
    },
    async getMessages() {
      const res = await fetch(
        `http://localhost:5000/api/get_messages/${this.sender}/${this.receiver}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.length === 0) return;
      for (var i = 0; i < data.length; i++) {
        const message = {
          sender_id: data[i]["sender_id"],
          receiver_id: data[i]["receiver_id"],
          message: data[i]["message"],
          timestamp: data[i]["ts"],
        };
        this.messages.push(message);
      }
      console.log(this.messages.length);
      // console.log(data[0]);
      // console.log(data[0]["message"]);
    },
    async joinRoom() {
      if (this.sender === undefined) return;
      // const sender = this.$route.query.sender_id;
      const res = await fetch(
        `http://localhost:5000/api/establish_conn/${this.sender}`,
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
        username: this.sender,
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
  @apply border-[#44BFD7] border-2  m-10 border-opacity-30 rounded-lg px-5 py-5;
}
</style>
