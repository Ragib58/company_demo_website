<template>
  <div class="text-left">
    <div
      class="bg-[url(https://orangebd.com/images/slider/01-2.png)] h-100 w-full bg-cover bg-center p-24"
    >
      <h4 class="text-orange-500 text-lg font-semibold text-left">
        Leading Software Company In Bangladesh
      </h4>
      <h1 class="text-white text-2xl font-smeibold text-left py-6">
        Innovation Starts From Here
      </h1>
      <p class="text-gray-200 w-96 leading-relaxed text-left">
        We’re so glad to have you on our Site! This guide is meant to provide
        team specific information to help you get off with information and
        details about the organization.
      </p>
      <div class="mt-6">
        <a
          href="/contact"
          class="bg-white hover:bg-orange-400 font-bold uppercase hover:text-white px-4 py-2 rounded-full"
          >Contact Us</a
        >
      </div>
    </div>
  </div>

  <div class="max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
    <div class="mt-20 px-10 basis-[55%] pb-10">
      <h1 class="text-2xl font-bold text-orange-400">
        About<br />
        <span class="font-semibold py-3 text-gray-900"
          >WE TRANSFORM YOUR IDEA INTO SOLUTION</span
        >
      </h1>
      <p class="py-3">
        Since 2005, Our mission has been “Building IT solutions for Life”. We
        believe in living in the Present and Future!<br />
        Orangebd is an award-winning web development company in Bangladesh. We
        pledge to offer a wide range of web applications and development
        solutions to meet any kind of business demand. Organizations from many
        Corporate sectors and Businesses have depended on us with full trust and
        confidence.....
      </p>
      <a href="/about" class="text-orange-400">Read More..</a>
    </div>

    <div
      class="basis-[45%] max-w-[1000px] flex justify-center items-center group"
    >
      <img
        class="absulate z-10 h-4/6 2xl:h-3/4 group-hover:animate-trans-right"
        src="../assets/image1.png"
      />
      <img
        class="rotate-12 h-4/6 2xl:h-5/6 relative -top-10 left-14 group-hover:animate-trans-left"
        src="../assets/image2.png"
      />
    </div>
  </div>

  <div class="max-w-[1000px] md:py-[80] py-3 mx-auto">
    <h1 class="text-2xl font-semibold text-orange-400 text-center">
      Our Service
    </h1>
    <p class="text-center py-5">
      Orangebd has 290+ clients of various categories including the Daily &
      Online Newspaper, e-Paper, Digital Archiving, Government, Corporate,
      College, School, Universities, Real Estate, IT Firm, NGO, Garments/ Buying
      House and so on. Beside the national market we have clients across the
      Philippines, United States, Canada and Russia as well.
    </p>
  </div>

  <div
    class="max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-1 gap-6"
  >
    <div class="shadow-lg p-4 rounded-lg text-center">
      <img
        class="h-32 w-full object-contain animate-bounce"
        src="../assets/image14.png"
      />
      <h3 class="text-xl font-medium py-2">E-Governance Solutions</h3>
      <p class="text-sm text-gray-500">
        Our focus is on improving public administration services and processes.
      </p>
    </div>
    <div class="shadow-lg p-4 rounded-lg text-center">
      <img
        class="h-32 w-full object-contain animate-bounce"
        src="../assets/image15.png"
      />
      <h3 class="text-xl font-medium py-2">Web Application Solutions</h3>
      <p class="text-sm text-gray-500">
        We at Orangebd, give top-quality service, work with a responsive team,
        and we work to make clients' vision a reality.
      </p>
    </div>
    <div class="shadow-lg p-4 rounded-lg text-center">
      <img
        class="h-32 w-full object-contain animate-bounce"
        src="../assets/service2.png"
      />
      <h3 class="text-xl font-medium py-2">E-commerce Solutions</h3>
      <p class="text-sm text-gray-500">
        E-commerce website application is a solution that is geared to help a
        company conduct business electonically.
      </p>
    </div>
    <div class="shadow-lg p-4 rounded-lg text-center">
      <img
        class="h-32 w-full object-contain animate-bounce"
        src="../assets/image17.png"
      />
      <h3 class="text-xl font-medium py-2">Software Development</h3>
      <p class="text-sm text-gray-500">
        Software development services are aimed at designing, engineering,
        supporting, and evolving various software types.
      </p>
    </div>
    <div class="shadow-lg p-4 rounded-lg text-center">
      <img
        class="h-32 w-full object-contain animate-bounce"
        src="../assets/image18.png"
      />
      <h3 class="text-xl font-medium py-2">Mobile Application Solutions</h3>
      <p class="text-sm text-gray-500">
        Our mobile app developers have expertise in building solutions that meet
        market demands and encourage business growth and expansion.
      </p>
    </div>
    <div class="shadow-lg p-4 rounded-lg text-center">
      <img
        class="h-32 w-full object-contain animate-bounce"
        src="../assets/service1.png"
      />
      <h3 class="text-xl font-medium py-2">News Portal Solutions</h3>
      <p class="text-sm text-gray-500">
        News portal is a platform where the mass people can access the latest
        updates or national news.
      </p>
    </div>
  </div>

  <div class="max-w-[1000px] py-3 mx-auto">
    <h1 class="text-2xl font-semibold text-orange-400 text-center">
      Our Project
    </h1>

    <div class="px-6 mt-6 mx-auto h-[450px] max-w-[1000px]">
      <swiper
        :slidesPerView="3"
        :centeredSlides="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :spaceBetween="20"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper1 mt-8 mx-auto"
      >
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="https://sisimpurvillage.com/">
              <img
                src="../assets/image8.png"
                class="p-6 mx-auto text-center"
                alt=""
              />
              <img src="../assets/test-1-1.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-auto">
                Sisimpur is an e-learning interactive platform to reinforce the
                message in Sisimpur's television episodes...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="https://www.mygov.bd/">
              <img
                src="../assets/image9.png"
                class="p-6 mx-auto text-center"
                alt=""
              />
              <img src="../assets/test-2-2.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-2">
                myGov serves as a centralized platform,offering citizens a
                convenient single access point to avail themselves of a wide...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="http://www.rdcd.gov.bd/">
              <img
                src="../assets/image56-new.png"
                class="p-4 mt-4 mx-auto text-center"
                alt=""
              />
              <img src="../assets/test-3-3.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-auto">
                Integrated Digital Service Delivery Platform (IDSDP) project is
                developed automating the whole RDCD...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="https://bangladesh.gov.bd/index.php">
              <img
                src="../assets/image57.png"
                class="p-4 mt-4 mx-auto w-[300px] text-center"
                alt=""
              />
              <img src="../assets/test-2-2.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-2">
                Bangladesh National Portal is the largest digital
                platform(Portal). It has sites with all kinds of information and
                services about all the Division...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="https://muktopaath.gov.bd/">
              <img
                src="../assets/image58.png"
                class="p-6 mx-auto w-[150px] text-center"
                alt=""
              />
              <img src="../assets/test-2-2.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-auto">
                Open e-learning platform in Bengali language for those intersted
                in acquiring professional knowledge and skills.Right now
                there...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="https://sisimpurvillage.com/">
              <img
                src="../assets/image59-new.png"
                class="p-6 mx-auto w-[120px] text-center"
                alt=""
              />
              <img src="../assets/test-2-2.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-2">
                myCourt is the service delivery platform for all the courts of
                Bangladesh. Lawyers on behalf of the citizens can apply for the
                Bail...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[220px] h-[400px] mx-auto text-center border shadow-lg rounded-lg"
          >
            <a href="https://sisimpurvillage.com/">
              <img
                src="../assets/mycourt2.png"
                class="p-6 mx-auto w-[180px] text-center"
                alt=""
              />
              <img src="../assets/test-2-2.png" class="mx-auto" alt="" />
              <p class="text-gray-600 text-base text-center mx-2">
                Judicial Portal Framework is the one-stop judiciary information
                and service access platform for the citizens of Bangladesh. The
                judicial...
              </p>
              <div class="mt-6"></div>
              <span class="text-green-600 text-base font-semibold underline p-2"
                >View More</span
              >
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <div class="max-w-[1000px] md:py-[80] py-3 mx-auto">
    <h1 class="text-4xl font-semibold text-orange-400 text-center">
      ISO 9001:2015 Certified Company
    </h1>
    <p class="text-center py-5">
      Our company has been ISO certified for Quality Management Systems since
      2009. Orange Business Development Limited, Orangebd in short is a
      developed organization and providing quality IT solutions to the different
      Govt. and Private Organizations and solving their problems of aligning IT
      with business direction.
    </p>
  </div>
  <div class="max-w-[1000px] mx-auto text-center h-[350px]">
    <h1 class="text-lg font-semibold">Our Happy Clients</h1>
    <h2 class="text-2xl">What they say about us</h2>
    <swiper
      :slidesPerView="1"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :spaceBetween="40"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper mt-8 mx-auto"
    >
      <swiper-slide>
        <div
          class="w-full h-[250px] mx-auto bg-white border shadow-lg rounded-lg"
        >
          <div class="flex mx-auto md:flex-row flex-row space-x-8">
            <div class="basis-[65%]">
              <p class="text-gray-500 mx-auto px-2 p-4">
                "A company will only be successful when they know what their
                customer wants the most and what their company is best at. And
                here at Orangebd we serve our customer's wants with what we do
                best."
              </p>
              <img
                src="../assets/NTV_(Bangladesh)_logo.png"
                class="mt-2 py-2 ml-4 inline-flex w-[100px] h-[100px] rounded-lg"
                alt=""
              />
            </div>
            <div class="basis-[35%]">
              <img
                src="../assets/image23.png"
                class="mt-4 mx-auto w-[120px] h-[120px]"
                alt=""
              />
              <h1 class="text-xl font-semibold mt-4">Fakruddin Jewel</h1>
              <h1 class="mt-2">NTV Online ( Head of NTV Online )</h1>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-full h-[250px] mx-auto bg-white border shadow-lg rounded-lg"
        >
          <div class="flex mx-auto md:flex-row flex-row space-x-8">
            <div class="basis-[65%]">
              <p class="text-gray-500 mx-auto px-2 p-4">
                "Orangebd is one of the most reliable software organisations
                among the digital News Industry in Bangladesh.All the people
                there are skilled, innovative and trustworthy"
              </p>
              <img
                src="../assets/image58.png"
                class="mt-2 py-2 ml-4 inline-flex w-[100px] h-[100px] rounded-lg"
                alt=""
              />
            </div>
            <div class="basis-[35%]">
              <img
                src="../assets/image24.png"
                class="mt-4 mx-auto w-[120px] h-[120px]"
                alt=""
              />
              <h1 class="text-xl font-semibold mt-4 px-2">
                Md. Hafijur Rahman
              </h1>
              <h1 class="mt-2">a2i ( Solution Architect )</h1>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-full h-[250px] mx-auto bg-white border shadow-lg rounded-lg"
        >
          <div class="flex mx-auto md:flex-row flex-row space-x-8">
            <div class="basis-[65%]">
              <p class="text-gray-500 mx-auto px-2 p-4">
                "Everything went extremely well. I was very impressed with their
                fantastic team, communications and willingness to move
                directions. I can recommend Orangebd for any web applications."
              </p>
              <img
                src="../assets/unfpa.png"
                class="mt-2 py-2 ml-4 inline-flex w-[100px] h-[100px] rounded-lg"
                alt=""
              />
            </div>
            <div class="basis-[35%]">
              <img
                src="../assets/image25.jpg"
                class="mt-4 mx-auto w-[120px] h-[120px]"
                alt=""
              />
              <h1 class="text-xl font-semibold mt-4 px-2">
                Ahasan Uddin Bhuiyan Abir
              </h1>
              <h1 class="mt-2">UNFPA Bangladesh ( IT Officer )</h1>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-full h-[250px] mx-auto bg-white border shadow-lg rounded-lg"
        >
          <div class="flex mx-auto md:flex-row flex-row space-x-8">
            <div class="basis-[65%]">
              <p class="text-gray-500 mx-auto px-2 p-4">
                "We have been working with Orangebd since 2016. They are very
                professional and client centric"
              </p>
              <img
                src="../assets/banasree-dental-and-implant-center.jpg"
                class="mt-2 py-2 ml-4 inline-flex w-[100px] h-[100px] rounded-lg"
                alt=""
              />
            </div>
            <div class="basis-[35%]">
              <img
                src="../assets/image22.png"
                class="mt-4 mx-auto w-[120px] h-[120px]"
                alt=""
              />
              <h1 class="text-xl font-semibold mt-4 px-2">
                Dr. Abdullah-Al-Mamun
              </h1>
              <h1 class="mt-2">Banasree Dental and Implant Center</h1>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-full h-[250px] mx-auto bg-white border shadow-lg rounded-lg"
        >
          <div class="flex mx-auto md:flex-row flex-row space-x-8">
            <div class="basis-[65%]">
              <p class="text-gray-500 mx-auto px-2 p-4">
                "Working with Orangebd has always been a great pleasure.
                Orangebd serves their clients with the best of their abilities
                and they are flexible and agile. I love their devotion and
                integrity"
              </p>
              <img
                src="../assets/nrbtv-social1.png"
                class="mt-2 py-2 ml-4 inline-flex w-[100px] h-[100px] rounded-lg"
                alt=""
              />
            </div>
            <div class="basis-[35%]">
              <img
                src="../assets/image21.png"
                class="mt-4 mx-auto w-[120px] h-[120px]"
                alt=""
              />
              <h1 class="text-xl font-semibold mt-4 px-2">
                Shahidul Islam Mintu
              </h1>
              <h1 class="mt-2">
                NRB TV ( CEO )<br />
                Bengali Times ( Editor )
              </h1>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="px-6 mt-6 mx-auto h-[300px] max-w-[1000px]">
    <h1 class="text-4xl font-semibold text-center">We are working with</h1>
    <swiper
      :slidesPerView="4"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :spaceBetween="20"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper mt-8 mx-auto"
    >
      <swiper-slide>
        <div
          class="w-[150px] h-[150px] mx-auto text-center bg-gray-100 border shadow-lg rounded-lg"
        >
          <img
            src="../assets/test-10-new.png"
            class="p-10 mx-auto text-center"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-[150px] h-[150px] mx-auto text-center bg-gray-100 border shadow-lg rounded-lg"
        >
          <img
            src="../assets/test-11-new.png"
            class="p-10 mx-auto text-center"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-[150px] h-[150px] mx-auto text-center bg-gray-100 border shadow-lg rounded-lg"
        >
          <img
            src="../assets/test-12-new.png"
            class="p-10 mx-auto text-center"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-[150px] h-[150px] mx-auto text-center bg-gray-100 border shadow-lg rounded-lg"
        >
          <img
            src="../assets/test-13-new.png"
            class="p-10 mx-auto text-center"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-[150px] h-[150px] mx-auto text-center bg-gray-100 border shadow-lg rounded-lg"
        >
          <img
            src="../assets/test-14-new.png"
            class="p-10 mx-auto text-center"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="w-[150px] h-[150px] mx-auto text-center bg-white border shadow-lg rounded-lg"
        >
          <img
            src="../assets/test-15-new.png"
            class="p-10 mx-auto text-center"
            alt=""
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { computed } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
