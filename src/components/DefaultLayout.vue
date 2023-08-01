<template>
  <div>
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
