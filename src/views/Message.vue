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
    console.log(this.$route.query.sender_id);
    console.log(this.$route.query.receiver_id);
    this.receiver = this.$route.query.receiver_id;
    this.sender = this.$route.query.sender_id;
    this.socket.on("receive_message", (data) => {
      console.log("new message for ya");
      this.messages.push(data);
    });
  },

  methods: {
    getMessage(data) {
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
    },
    async joinRoom() {
      if (this.sender === undefined) return;
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
    },
  },
};
</script>
<style scoped>
.themedBorder {
  @apply border-[#44BFD7] border-2  m-10 border-opacity-30 rounded-lg px-5 py-5;
}
</style>
