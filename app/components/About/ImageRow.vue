<template>
  <!-- Image row -->
  <section class="section fetaure-page pb-5 mb-0">
    <div class="container mb-0">
      <div class="row">
        <div
          v-for="(image_box, index) in content"
          :key="index"
          class="col-lg-3 col-md-6"
        >
          <div class="about-block-item">
            <figure class="figure m-0">
              <img
                :src="image_box.src"
                :alt="image_box.alt"
                class="figure-img img-fluid"
              >
              <figcaption class="figure-caption text-light">
                &copy; {{ image_box.credits }}
              </figcaption>
            </figure>
            <h4 class="mt-3">
              {{ image_box.title }}
            </h4>
            <p class="text-justify">
              {{ image_box.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
