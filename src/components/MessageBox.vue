<template>
  <div class="w-full">
    <div class="mx-20">
      <div class="flex items-center justify-center">
        <div class="w-full relative">
          <span
            @click="sendMessage"
            class="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer hover:scale-110"
          >
            <ChatAltIcon class="h-8 w-8 text-[#44BFD7]" />
          </span>
          <input
            type="text"
            required
            class="bg-transparent border border-[#2F394D] w-full rounded-full h-10 px-4 text-sm peer outline-none"
            v-model="message"
            placeholder="Type message"
          />
          <!-- <span class="absolute left-0 flex items-center">
            <SearchIcon class="h-5 w-5 text-[#2F394D]" />
          </span> -->
          <!-- {{ searchInput }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChatAltIcon } from "@heroicons/vue/solid";
export default {
  name: "MessageBox",
  data() {
    return {
      message: "",
    };
  },
  components: {
    ChatAltIcon,
  },
  props: ["socket", "sender_id", "receiver_id"],
  methods: {
    sendMessage() {
      if (this.message === "") return;

      //   data = {
      //     sender_id: this.sender_id,
      //     receiver_id: this.receiver_id,
      //     message: this.message,
      //   };
      //   console.log(data.message);
      this.socket.emit("send_message", {
        sender_id: this.sender_id,
        receiver_id: this.receiver_id,
        message: this.message,
      });
      this.$emit("sendMessage", {
        sender_id: this.sender_id,
        receiver_id: this.receiver_id,
        message: this.message,
      });
      this.message = "";
    },
  },
};
</script>
