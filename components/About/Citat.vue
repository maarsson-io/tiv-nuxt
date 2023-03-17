<template>
  <section class="section testimonial mt-3 py-0">
    <div class="row">
      <!-- Image -->
      <div class="col-lg-6">
        <figure class="figure m-0 w-100">
          <img src="images/sivard-1_1080x720.jpg" class="img-fluid w-100 object-fit-cover" alt="{{ content.image.alt }}">
          <figcaption class="figure-caption text-light">
            &copy; {{ content.image.credits }}
          </figcaption>
        </figure>
      </div>
      <!-- Lead -->
      <div class="col-lg-6">
        <div class="row">
          <div class="col-12">
            <div class="section-title p-3 p-lg-0 mb-0">
              <h2 class="mb-4">
                Om oss i lokala medier
              </h2>
              <div class="divider  my-4" />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-lg-9 mb-5">
            <div class="testimonial-wrap p-3 p-lg-0">
              <swiper
                :modules="modules"
                :slides-per-view="1"
                :navigation="false"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 3500 }"
              >
                <swiper-slide
                  v-for="(block, index) in content.blocks"
                  :key="index"
                >
                  <div class="testimonial-block">
                    <div class="client-info ">
                      <h4>
                        <a :href="block.link" target="_blank">
                          {{ block.medium }}
                        </a>
                      </h4>
                      <span>{{ block.date }}</span>
                    </div>
                    <p>{{ block.text }}</p>
                    <i class="icofont-quote-right" />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
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
    }
  },

  setup () {
    return {
      modules: [Navigation, Pagination, Autoplay]
    };
  }
};
</script>
