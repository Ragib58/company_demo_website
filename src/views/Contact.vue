<template>
  <div class="flex w-full min-h-screen justify-center items-center">
    <div
      class="flex flex-col md:flex-row md:space-x-6 md:space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden"
    >
      <div class="flex flex-col space-y-6 justify-between">
        <div>
          <h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
          <p class="pt-2 text-cyan-100">
            Feel free to let us know what you think
          </p>
        </div>
        <div class="flex flex-col space-y-6">
          <div class="inline-flex space-x-2 items-center">
            <ion-icon name="call" class="text-teal-300 text-xl"></ion-icon>
            <span>+8801713243678</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
            <ion-icon name="call" class="text-teal-300 text-xl"></ion-icon>
            <span>+880 2-8414548-49</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
            <ion-icon name="mail" class="text-teal-300 text-xl"></ion-icon>
            <span>info@orangebd.com</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
            <ion-icon name="globe" class="text-teal-300 text-xl"></ion-icon>
            <span>www.orangebd.com</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
            <ion-icon name="time" class="text-teal-300 text-xl"></ion-icon>
            <span>Sunday-Thursday 09.30-06.00</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
            <ion-icon name="location" class="text-teal-300 text-xl"></ion-icon>
            <span
              >Lane - 1, House - 171 (3rd Floor), BARIDHARA DOHS, Dhaka-1206,
              Bangladesh</span
            >
          </div>
        </div>
        <div class="flex space-x-4 text-2xl">
          <a href="https://www.facebook.com/orangebdltd">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/company/orangebd/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
      <div class="relative">
        <div
          class="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"
        ></div>
        <div
          class="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"
        ></div>
        <div
          class="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80"
        >
          <form action="" class="flex flex-col space-y-4">
            <div>
              <label for="" class="text-lg">Your Name</label>

              <input
                type="text"
                placeholder="Your Name"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label for="" class="text-lg">Email Address</label>

              <input
                type="email"
                placeholder="Email Address"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label for="" class="text-lg">Message</label>

              <textarea
                placeholder="Message"
                rows="4"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              ></textarea>
            </div>
            <button
              class="inline-block self-end bg-orange-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-full min-h-screen justify-center items-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0953449317126!2d90.41229007366952!3d23.815208378626185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c758aa2fffff%3A0x1c7bcf9515b3457d!2sOrange%20Business%20Development%20Ltd.!5e0!3m2!1sen!2sbd!4v1688613735958!5m2!1sen!2sbd"
      width="100%"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script></script>
