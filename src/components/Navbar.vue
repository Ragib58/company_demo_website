<template>
  <nav
    class="bg-white shadow h-16 flex justify-between px-6 items-center sticky top-0 z-50 border-orange-400"
  >
    <router-link :to="{ name: 'home' }">
      <img class="h-10 px-2" src="../assets/orbd-logo.png" alt="Logo" />
    </router-link>

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div
      class="hidden w-full md:block md:w-auto uppercase items-center gap-6 font-[Poppins] text-sm"
    >
      <router-link
        :to="{ name: 'home' }"
        class="py-7 px-3 inline-block hover:text-orange-500 transition-5s"
      >
        Home
      </router-link>
      <router-link
        :to="{ name: 'byAbout' }"
        class="py-7 px-3 inline-block hover:text-orange-500 transition-5s"
      >
        About Us
      </router-link>
      <router-link
        :to="{ name: 'byService' }"
        class="py-7 px-3 inline-block hover:text-orange-500 transition-5s"
      >
        Service
      </router-link>
      <router-link
        :to="{ name: 'byProject' }"
        class="py-7 px-3 inline-block hover:text-orange-500 transition-5s"
      >
        Our Project
      </router-link>
      <router-link
        :to="{ name: 'byTeam' }"
        class="py-7 px-3 inline-block hover:text-orange-500 transition-5s"
      >
        Our Team
      </router-link>
      <router-link
        :to="{ name: 'byContact' }"
        class="py-7 px-3 inline-block hover:text-orange-500 transition-5s"
      >
        Contact us
      </router-link>
    </div>
  </nav>
</template>

<!--
<template>
  <div class="bg-white py-6 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center cursor-pointer">
      <img class="h-8 px-4" src="../assets/orbd-logo.png" alt="Logo" />
    </div>

    <span
      @click="MenuOpen()"
      class="absolute md:hidden right-6 top-1.5 cursor-pointer text-2xl"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    <ul
      class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-4 md:static absolute bg-white md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6" v-bind:key="link in Links">
        <a
          :href="link.link"
          class="text-lg text-gray-600 hover:text-orange-400"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    let open = ref(false);
    let Links = [
      { name: "Home", link: "#" },
      { name: "About", link: "#" },
      { name: "Service", link: "#" },
      { name: "Our Project", link: "#" },
      { name: "Our Team", link: "#" },
      { name: "Contact Us", link: "#" },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }

    return { Links, open, MenuOpen };
  },
};
</script>
-->
