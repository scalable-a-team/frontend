<template>
  <div
    class="w-full sticky top-0 z-50 h-32 border-b border-[#232D40] flex flex-row items-center bg-[#161F31]"
  >
    <!-- Logo -->
    <div class="basis-3/5 ml-28 cursor-pointer" @click="$router.push('/')">
      <h1 class="text-2xl font-semibold">Printaverse</h1>
    </div>
    <!-- Search bar -->
    <div class="basis-1/5 mx-10">
      <div class="flex items-center justify-center">
        <div class="w-64 relative">
          <!-- {{ this.searchInput }} -->
          <!-- @submit.prevent="performSearch" -->
          <!-- v-on:keyup.enter="performSearch" -->
          <button
            @click="performSearch"
            class="absolute inset-y-0 right-0 flex items-center pr-5"
          >
            <!-- <router-link to="/?query=glass"> -->
            <SearchIcon class="h-5 w-5 text-[#2F394D]" />
            <!-- </router-link> -->
            <!-- <router-view :key="$route.fullPath" @showLoading="showLoading"> -->
            <!-- </router-view> -->
          </button>
          <input
            type="text"
            required
            class="bg-transparent border border-[#2F394D] w-full rounded-full h-10 px-4 text-sm peer outline-none"
            v-model="searchInput"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
    <!-- Profile -->
    <div class="flex flex-row items-center basis-1/5 space-x-2">
      <template v-if="$store.state.isLoggedIn">
        <div class="mr-5">
          <p style="text-transform: uppercase; font-weight: bold">
            {{ $store.state.role }} ACCOUNT
          </p>
        </div>
        <!-- <div @click="$router.push('/')" class="h-16 w-16 cursor-pointer mr-5">
          <img
            src="https://img.wattpad.com/ff54a8ffdbb8a23597558f8525770d350b2d9dcc/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f52344c51585f43773230715270673d3d2d3133312e313632303361666136366566373565623134373734313533353136372e6a7067?s=fit&w=720&h=720"
            alt="" class="rounded-full" />
        </div> -->
        <div>
          <h1 class="font-semibold">{{ $store.state.username }}</h1>
          <h1 class="font-semibold">Balance: $ {{ $store.state.balance }}</h1>
          <div v-if="$store.state.role === 'customer'">
            <button @click="add_balance" class="font-semibold">
              Add balance
            </button>
          </div>
        </div>
      </template>
      <template v-else>
        <router-link to="/login"> Login </router-link>
      </template>
      <Menu as="div" class="relative inline-block">
        <div v-if="$store.state.isLoggedIn">
          <MenuButton class="inline-flex justify-center w-full">
            <ChevronDownIcon
              class="h-5 w-5 text-[#444B65]"
              aria-hidden="true"
            />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#1F2A44] ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <div
                v-for="item in $store.getters.getMenuItem"
                :key="item.title"
                router
                :to="item.route"
              >
                <div class="relative">
                  <UserIcon
                    v-if="item.title == 'My Profile'"
                    class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                  />
                  <LoginIcon
                    v-if="item.title == 'Login'"
                    class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                  />
                  <LoginIcon
                    v-if="item.title == 'Register'"
                    class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                  />
                  <InboxIcon
                    v-if="item.title == 'Message'"
                    class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                  />
                  <MenuItem v-slot="{ active }">
                    <a
                      :href="item.route"
                      :class="[
                        active ? 'bg-gray-700 text-white' : 'text-white',
                        'block pl-10 px-4 py-2 text-sm',
                      ]"
                      >{{ item.title }}</a
                    >
                  </MenuItem>
                </div>
              </div>
              <div @click.prevent="onLogout">
                <div class="relative">
                  <LogoutIcon
                    class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                  />
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-700 text-white' : 'text-white',
                        'block pl-10 px-4 py-2 text-sm',
                      ]"
                      >Logout</a
                    >
                  </MenuItem>
                </div>
              </div>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <!-- <tra -->
    </div>
    <!-- <FlagIcon class="h-5 w-5 text-blue-500" /> -->
  </div>
</template>

<script>
import { MenuItems, MenuItem, Menu, MenuButton } from "@headlessui/vue";
import customerService from "@/service/customerService";
import {
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
  InboxIcon,
  BellIcon,
  LogoutIcon,
  LoginIcon,
} from "@heroicons/vue/outline";
export default {
  name: "NavBar",
  data: () => ({
    account_balance: 0,
  }),
  components: {
    ChevronDownIcon,
    SearchIcon,
    UserIcon,
    InboxIcon,
    BellIcon,
    LogoutIcon,
    LoginIcon,
    MenuItems,
    MenuItem,
    Menu,
    MenuButton,
  },
  // watch: {
  //   $route: function () {
  //     this.loadData();
  //   },
  // },
  methods: {
    async onLogout() {
      this.$store.dispatch("clearUser");
      window.localStorage.removeItem("vuex");
      this.$router.push("/");
      this.account_balance = 0;
    },

    async add_balance() {
      const payload = { add_balance: 150 };
      customerService
        .increaseBalance(payload)
        .then((balance_response) => {
          this.$store.dispatch("update_user_balance", balance_response.data);
        })
        .catch((balance_response) => {
          console.log(balance_response);
        });
    },
    performSearch() {
      if (!window.location.hash) {
        window.location.replace("/" + `?query=${this.searchInput}`);
      }
    },
    async load_balance() {
      if (this.$store.state.role == "customer") {
        customerService
          .getProfile()
          .then((profile_response) => {
            console.log(profile_response);
            console.log(profile_response.wallet_balance);
            this.$store.dispatch("update_user_balance", {
              new_balance: profile_response.wallet_balance,
            });
          })
          .catch((profile_error) => {
            console.log(profile_error);
          });
      } else {
        sellerService
          .getProfile()
          .then((profile_response) => {
            this.$store.dispatch("update_user_balance", {
              new_balance: profile_response.wallet_balance,
            });
          })
          .catch((profile_error) => {
            console.log(profile_error);
          });
      }
    },
  },
  mounted() {
    if (this.$store.state.isLoggedIn) {
      this.load_balance();
    }
  },
};
</script>

<style></style>
