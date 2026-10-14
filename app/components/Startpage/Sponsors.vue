<template>
  <section class="section clients">
    <!-- Sponsors title -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="section-title text-center">
            <h2>{{ content.title }}</h2>
            <div class="divider mx-auto my-4" />
            <p>{{ content.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sponsors slider -->
    <div class="container">
      <div
        class="row clients-logo"
        data-testid="sponsor-carousel"
      >
        <swiper
          :modules="modules"
          :slides-per-view="2"
          :navigation="false"
          :breakpoints="{ 640: { slidesPerView: 4 }, 920: { slidesPerView: 6 } }"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 2000 }"
        >
          <swiper-slide
            v-for="(sponsor, index) in premiumSponsors"
            :key="index"
          >
            <div class="col-lg-12">
              <div
                :data-tooltip="sponsor.name"
                class="client-thumb text-center"
              >
                <img
                  v-if="sponsor.logo"
                  :src="sponsor.logo"
                  :alt="sponsor.name"
                  class="img-fluid"
                >
                <div
                  v-else
                >
                  {{ sponsor.name }}
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Sponsors button -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <NuxtLink
            to="/sponsors"
            class="btn btn-main-2 btn-round-full btn-icon mt-5"
          >
            {{ content.button }}<i class="icofont-simple-right ml-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
    sponsors: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },

  computed: {
    premiumSponsors() {
      return activeSponsors(this.sponsors).filter(sponsor => sponsor.premium);
    },
  },
};
</script>
