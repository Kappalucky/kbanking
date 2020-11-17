<template>
  <header>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/"
                ><img
                  class="block h-8 w-auto"
                  src="@/assets/images/atom.png"
                  alt="Workflow logo"
              /></router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <template v-for="item in navbarItems">
                  <a
                    :href="item.path"
                    :key="item.id"
                    class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                    >{{ item.text }}
                  </a>
                </template>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <i class="far fa-bell"></i>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  v-on:click="profileMenu = !profileMenu"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                v-show="profileMenu"
              >
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <template v-for="item in dropdownItems">
                    <router-link
                      :to="item.path"
                      :key="item.id"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                      >{{ item.text }}
                    </router-link>
                  </template>
                  <ul>
                    <li
                      @click="logout()"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      style="cursor: pointer; color: red;"
                      role="menuitem"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      profileMenu: false,
      title: "KB",
      navbarItems: [],
      dropdownItems: [
        {
          text: "Profile",
          path: "#"
        },
        {
          text: "Support",
          path: "#"
        }
      ]
    };
  },
  methods: {
    logout() {
      console.log("Logout");
    }
  }
};
</script>

<style></style>
