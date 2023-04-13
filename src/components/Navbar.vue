<template>
  <nav
    class="bg-white shadow h-16 flex justify-around items-center sticky top-0 z-50"
  >
    <router-link :to="{ name: 'home' }">
      <img class="h-9 px-2" src="../assets/orbd-logo.png" alt="Logo" />
    </router-link>
    <div
      class="md:flex hidden uppercase items-center gap-6 font-[Poppins] text-sm"
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
      <!--  Mobile nav -->
      <ul class="md:hidden bg-white absulte w-full h-full bottom-0">
        <li>
          <router-link :to="{}" class="py-7 px-3 inline-block">
            Home
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
