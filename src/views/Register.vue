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
                    <p class="mb-4 font-semibold">Register</p>
                    <div class="mb-4">
                      <input type="text"
                        class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="firstname" placeholder="Firstname" required />
                    </div>
                    <div class="mb-4">
                      <input type="text"
                        class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="lastname" placeholder="Lastname" required />
                    </div>
                    <div class="mb-4">
                      <input type="text"
                        class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="username" placeholder="Username" required />
                    </div>
                    <div class="mb-4">
                      <input type="password"
                        class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="password" placeholder="Password" required />
                    </div>
                    <div class="block">
                      <div class="mb-4">
                        <label class="inline-flex items-center">
                          <input type="checkbox" class="h-6 w-6 rounded" id="type" />
                          <span class="ml-2 font-semibold">Register as a seller account</span>
                        </label>
                      </div>
                    </div>
                    <div class="mb-12 pt-1 pb-1 text-center">
                      <button @click="createUser"
                        class="mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" style="
                        background: linear-gradient(to right, #a19aee, #9a92ee, #9289ee, #8b81ee, #8378ee, #7b6fee, #7265ee, #695cee, #5d4fed, #5041ec, #4131eb, #2f1ee9);
                      ">
                        Create account
                      </button>
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
import customerService  from '@/service/customerService';
export default {
  name: "Register",
  components: {
    data: function () {
      return {
      }
    }
  },
  methods: {
    async createUser() {
      let seller_account_type = document.getElementById("type").checked
      const userMap = {
        'first_name': firstname.value,
        'last_name': lastname.value,
        'username': username.value,
        'password': password.value
      }
      console.log(userMap)
      if (seller_account_type) {
        sellerService.register(userMap)
          .then((register_response) => { // this mean we got 200 OK
            const loginMap = {
              'username': userMap.username,
              'password': userMap.password,
            }
            sellerService.login(loginMap)
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
          }).catch((error) => {
            console.log(error)
          })
      }
      else { // use customer/register endpoints 
        customerService.register(userMap)
          .then((register_response) => { 
            const loginMap = {
              'username': userMap.username,
              'password': userMap.password,
            }
            customerService.login(loginMap)
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
          }).catch((error) => {
            console.log(error)
          })
      }
    },
  },
};
</script>

<style>
.themedBorder {
  @apply border-[#44BFD7] border-2 m-10 border-opacity-30 rounded-lg px-5 py-5;
}
</style>
