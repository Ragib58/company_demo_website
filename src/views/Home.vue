<template>
  <div class="text-center">
    <div
      class="bg-[url(https://orangebd.com/images/slider/01.png)] h-96 w-full bg-cover bg-center p-24"
    >
      <h4 class="text-orange-500 text-lg font-semibold text-center">
        Leading Software Company In Bangladesh
      </h4>
      <h1 class="text-white text-2xl font-smeibold text-center py-6">
        Innovation Starts From Here
      </h1>
      <p class="text-gray-200 text-center">
        We’re so glad to have you on our Site! This guide is meant to provide
        team specific information to help you get off with information and
        details about the organization.
      </p>
      <div class="mt-4">
        <a
          href="/contact"
          class="bg-white hover:bg-orange-400 font-bold uppercase hover:text-white px-4 py-2 rounded-full"
          >Contact Us</a
        >
      </div>
    </div>
  </div>

  <div class="mt-4 grid lg:grid-cols-2 w-[1200px]">
    <div class="col-span-1">
      <h3 class="font-bold">About Us</h3>
    </div>
    <div class="col-span-1">
      <h2 class="font-bold">WE TRANSFORM YOUR IDEA INTO SOLUTION</h2>
    </div>
    <p class="">
      Since 2005, Our mission has been “Building IT solutions for Life”. We
      believe in living in the Present and Future!<br />
      Orangebd is an award-winning web development company in Bangladesh. We
      pledge to offer a wide range of web applications and development solutions
      to meet any kind of business demand. Organizations from many Corporate
      sectors and Businesses have depended on us with full trust and
      confidence.....
    </p>
    <a href="/about" class="text-orange-400">Read More..</a>
  </div>
  <div class="h-100 flex justify-center items-center group">
    <img
      class="absulate z-10 h-4/6 2xl:h-3/4 group-hover:animate-trans-right"
      src="../assets/image1.png"
    />
    <img
      class="rotate-12 h-4/6 2xl:h-5/6 relative -top-10 left-14 group-hover:animate-trans-left"
      src="../assets/image2.png"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
</script>
