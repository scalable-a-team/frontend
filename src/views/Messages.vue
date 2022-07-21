<template>
  <div>
    <div v-if="this.messages_channel.length > 3">
      <div
        v-for="index in 3"
        :key="index"
        class="flex flex-col items-center w-full"
      >
        <MessageCard
          :sender_id="this.$route.query.sender_id"
          :receiver_id="messages_channel[3 * page + (index - 1)]"
        />
      </div>
      <Pagination @clicked="onClickHandler" />
    </div>
    <div v-else>
      <div
        v-for="message_channel in messages_channel"
        :key="message_channel.index"
        class="flex flex-col items-center w-full"
      >
        <!-- {{ messages_channel }}
        {{ message_channel }} -->

        <MessageCard :receiver_id="message_channel" />
      </div>
      <!-- hello -->
    </div>
  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
import HighlightedText from "../components/HighlightedText.vue";
import Pagination from "./Pagination.vue";
import MessageCard from "./MessageCard.vue";
export default {
  name: "OrderHistory",
  components: {
    StatusCard,
    HighlightedText,
    Pagination,
    MessageCard,
  },
  data() {
    return {
      searchInput: "",
      messages_channel: "",
      orders: [
        {
          customer: {
            name: "Rick 0.1",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: 1,
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.2",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: 2,
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.3",
            desc: "Where is my pencil ?",
          },
          detail: {
            type: "Apple pencil",
            amount: 3,
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.4",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: 4,
            dim: "XXX",
          },
        },
      ],
      page: 0,
    };
  },
  created() {
    console.log("test");
    this.getMessagesChannel();
  },
  methods: {
    onClickHandler(page) {
      this.page = page - 1;
    },
    filterOrders() {
      return this.orders.filter((order) =>
        order.detail.type.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    sortAZ(isReverse) {
      this.orders.sort(function (a, b) {
        if (a.detail.type < a.detail.type) return !isReverse ? -1 : 1;
        else if (a.detail.type > b.detail.type) return !isReverse ? 1 : -1;
        return 0;
      });
    },
    sortAmount(isReverse) {
      this.orders.sort(function (a, b) {
        if (a.detail.amount < a.detail.amount) return !isReverse ? -1 : 1;
        else if (a.detail.amount > b.detail.amount) return !isReverse ? 1 : -1;
        return 0;
      });
    },
    async getMessagesChannel() {
      if (this.$route.query.sender_id === undefined) return;
      const res = await fetch(
        `http://localhost:5000/api/get_messages_channel/${this.$route.query.sender_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      this.messages_channel = data;
      console.log(data);
      console.log(this.messages_channel);
      //   this.room_id = data["session_id"];
      //   console.log(this.room_id);
      //   this.socket.emit("join_room", {
      //     username: this.sender,
      //     room_id: this.room_id,
      //   });
    },
  },
};
// import { ref } from "vue";
// let input = ref("");
// const fruits = ["apple", "banana", "orange"];
// function filteredList() {
//   return fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(input.value.toLowerCase())
//   );
// }
</script>
