<template>
  <div class="gradient-form h-full bg-gray-200 md:h-screen">
    <div class="container h-full py-12 px-6">
      <div class="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
        <div class="xl:w-10/12">
          <div class="block rounded-lg bg-white shadow-lg">
            <div class="g-0 lg:flex lg:flex-wrap">
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6 md:p-12">
                  <div class="text-center">
                    <img class="mx-auto w-48"
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo" />
                    <h4 class="mt-1 mb-12 pb-1 text-xl font-semibold">Printaverse</h4>
                  </div>
                  <form>
                    <p class="mb-4">Please login to your {{seller_account_type ? 'customer' : 'seller'}} account</p>
                    <div class="mb-4">
                      <input type="text"
                        class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="username" placeholder="Username" v-model="username" required />
                    </div>
                    <div class="mb-4">
                      <input type="password"
                        class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="password" placeholder="Password" v-model="password" required />
                    </div>
                    <div class="mb-12 pt-1 pb-1 text-center">
                      <button @click="onLogin"
                        class="mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" style="
                        background: linear-gradient(to right, #a19aee, #9a92ee, #9289ee, #8b81ee, #8378ee, #7b6fee, #7265ee, #695cee, #5d4fed, #5041ec, #4131eb, #2f1ee9);
                      ">
                        Log in
                      </button>
                    </div>
                    <div class="flex items-center justify-between pb-6">
                      <p class="mb-0 mr-2">Don't have an account?</p>
                      <button @click="pushRegisterPage" type="button"
                        class="inline-block rounded border-2 border-purple-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-purple-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">Register</button>
                    </div>
                    <div class="mb-4">
                      <a href="#" @click.prevent="update_login_type" class="no-underline hover:underline ...">Go to {{
                          seller_account_type ? 'Seller Login' : 'Customer Login'}}</a>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style="
                background: linear-gradient(to right, #a19aee, #9a92ee, #9289ee, #8b81ee, #8378ee, #7b6fee, #7265ee, #695cee, #5d4fed, #5041ec, #4131eb, #2f1ee9);
              ">
                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 class="mb-6 text-xl font-semibold">We are more than just a company</h4>
                  <p class="text-sm">Printaverse mission is to provide a safe and easy to use platform for object based
                    printing. Our mediary service will facilitate a trustworthy link between a client and supplier to
                    give both safety and security to both parties involved. We aim to make object based printing more
                    accessible to a wider range of consumers and small businesses in order to aid in growth and hobbies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sellerService from '@/service/sellerService';
import customerService from '@/service/customerService';
export default {
  name: "Login",
  data: () => ({
    seller_account_type: false,
    login_label: 'Seller login',
    username: "",
    password: ""
  }),
  components: {
  },
  methods: {
    async onLogin() {
      const userMap = {
        'username': this.username,
        'password': this.password
      }
      if (this.seller_account_type) {
        sellerService.login(userMap)
          .then((login_response) => {
            const user_store_info = {
              'isLoggedIn': true,
              'username': userMap.username,
              'role': 'seller',
              'access_token': login_response.data.access_token,
              'refresh_token': login_response.data.refresh_token
            }
            console.log(user_store_info)
            this.$store.dispatch('setLoggedInUser', user_store_info)
            this.$router.push("/")
          }).catch((login_error) => {
            console.log(login_error)
          })

      }
      else {
        customerService.login(userMap)
          .then((login_response) => {
            const user_store_info = {
              'isLoggedIn': true,
              'username': userMap.username,
              'role': 'customer',
              'access_token': login_response.data.access_token,
              'refresh_token': login_response.data.refresh_token
            }
            console.log(user_store_info)
            this.$store.dispatch('setLoggedInUser', user_store_info)
            this.$router.push("/")
          }).catch((login_error) => {
            console.log(login_error)
          })
      }
    },
    pushRegisterPage: async function () {
      this.$router.push("/Register")
    },
    update_login_type() {
      this.seller_account_type = !this.seller_account_type
    }
  },
}
</script>

<style>
.themedBorder {
  @apply border-[#44BFD7] border-2 m-10 border-opacity-30 rounded-lg px-5 py-5;
}
</style>
