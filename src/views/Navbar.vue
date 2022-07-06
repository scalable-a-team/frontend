<template>
  <div
    class="w-full sticky top-0 z-50 h-32 border-b border-[#232D40] flex flex-row items-center"
  >
    <!-- Logo -->
    <div class="basis-3/5 ml-28">
      <h1 class="text-2xl font-semibold">Printaverse</h1>
    </div>
    <!-- Search bar -->
    <div class="basis-1/5 mx-10">
      <div class="flex items-center justify-center">
        <div class="w-64 relative">
          <span class="absolute inset-y-0 right-0 flex items-center pr-5">
            <SearchIcon class="h-5 w-5 text-[#2F394D]" />
          </span>
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
      <div class="h-16 w-16 cursor-pointer">
        <img
          :src="`https://avatars.dicebear.com/api/pixel-art/${this.profile}.svg`"
          alt=""
        />
      </div>

      <h1 class="font-semibold">대한민국</h1>
      <Menu as="div" class="relative inline-block">
        <div>
          <MenuButton class="inline-flex justify-center w-full">
            <ChevronDownIcon
              class="h-5 w-5 text-[#444B65]"
              aria-hidden="true"
            />
          </MenuButton>
        </div>
        <!-- <ChevronDownIcon class="h-5 w-5 text-[#444B65] cursor-pointer" /> -->
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
              <router-link to="profile">
                <div class="relative">
                  <UserIcon
                    class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                  />
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-700 text-white' : 'text-white',
                        'block pl-10 px-4 py-2 text-sm',
                      ]"
                      >My Profile</a
                    >
                  </MenuItem>
                </div>
              </router-link>
              <div class="relative">
                <BellIcon
                  class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                />
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-700 text-white' : 'text-white',
                      'block pl-10 px-4 py-2 text-sm',
                    ]"
                    >Notifications</a
                  >
                </MenuItem>
              </div>
              <div class="relative">
                <InboxIcon
                  class="h-7 w-7 text-[#37445F] absolute left-0 pl-2 flex items-center"
                />
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-700 text-white' : 'text-white',
                      'block pl-10 px-4 py-2 text-sm',
                    ]"
                    >Message</a
                  >
                </MenuItem>
              </div>
              <!-- <form method="POST" action="#"> -->
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
              <!-- </form> -->
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
import {
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
  InboxIcon,
  BellIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import { MenuItems, MenuItem, Menu, MenuButton } from "@headlessui/vue";
// import {} from '@'
export default {
  name: "NavbarTop",
  components: {
    ChevronDownIcon,
    SearchIcon,
    UserIcon,
    InboxIcon,
    BellIcon,
    LogoutIcon,
    MenuItems,
    MenuItem,
    Menu,
    MenuButton,
  },
};
</script>

<style></style>
