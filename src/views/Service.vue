<template>
  <div class="h-[auto] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
    <div
      class="text-gray-500 border shadow-lg rounded-lg w-[40%] space-y-6 px-2"
    >
      <a href="" class="flex items-center space-x-2 px-4 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-10 h-10"
        >
          <path
            fill-rule="evenodd"
            d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-3xl font-semibold text-gray-500">Service</span>
      </a>

      <button
        @click="tab = 'Egov'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        E-Governance Solutions
      </button>
      <button
        @click="tab = 'Web'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        Web Application Solutions
      </button>
      <button
        @click="tab = 'Ecom'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        E-commerce Solutions
      </button>
      <button
        @click="tab = 'Software'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        Software Development
      </button>
      <button
        @click="tab = 'Mobile'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        Mobile App Development
      </button>
      <button
        @click="tab = 'Newsportal'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        News Portal Solutions
      </button>
      <button
        @click="tab = 'Seo'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        SEO
      </button>
      <button
        @click="tab = 'Vr'"
        class="flex items-center py-3 px-4 w-full hover:bg-orange-400 rounded"
      >
        VR
      </button>
    </div>

    <div class="w-[60%]">
      <component :is="tab" />
    </div>
  </div>
</template>

<script>
import Egov from "../components/E-Goverence.vue";
import Web from "../components/Web.vue";
import Ecom from "../components/E-commerce.vue";
import Software from "../components/Software.vue";
import Mobile from "../components/Mobile.vue";
import Newsportal from "../components/Newsportal.vue";
import Seo from "../components/Seo.vue";
import Vr from "../components/Vr.vue";

export default {
  components: {
    Egov,
    Web,
    Ecom,
    Software,
    Mobile,
    Newsportal,
    Seo,
    Vr,
  },
  data() {
    return {
      tab: "Egov",
    };
  },
};
</script>
