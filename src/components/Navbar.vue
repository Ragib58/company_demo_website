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
      <!--
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'byAbout' }"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'byService' }"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          >
            Service
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'byProject' }"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          >
            Our Project
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'byTeam' }"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          >
            Our Team
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'byContact' }"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          >
            Contact Us
          </router-link>
        </li>
      </ul>
      -->
    </div>
  </nav>
</template>
