<template>
  <!-- Testimonials -->
  <section class="section testimonial-2 gray-bg">
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
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12 testimonial-wrap-2">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :navigation="false"
            :breakpoints="{ 920: { slidesPerView: 2 } }"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 4000 }"
          >
            <swiper-slide
              v-for="(block, index) in testimonials"
              :key="index"
            >
              <div class="testimonial-block style-2 gray-bg">
                <div class="testimonial-thumb">
                  <img :src="block.logo" alt="" class="img-fluid">
                </div>
                <div class="client-info">
                  <h4>
                    <a :href="block.linlk" target="_blank">
                      {{ block.medium }} <i class="icofont-external-link" />
                    </a>
                  </h4>
                  <span>{{ block.date }}</span>
                  <p>{{ block.text }}</p>
                </div>
                <i class="icofont-quote-right" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    content: {
      type: Object,
      default: () => ({})
    },
    testimonials: {
      type: Object,
      default: () => ({})
    }
  },

  async setup () {
    return {
      modules: [Navigation, Pagination, Autoplay]
    };
  }
};
</script>
