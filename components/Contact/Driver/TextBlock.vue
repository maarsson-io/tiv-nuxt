<template>
  <!-- Lead -->
  <section class="section doctor-single pb-5">
    <div class="container">
      <div class="row">
        <!-- Image -->
        <div class="col-lg-4 col-md-6">
          <div class="doctor-img-block">
            <figure class="figure m-0">
              <img src="/images/sivard-3_360x250.jpg" class="figure-img img-fluid" :alt="content.image.alt">
              <figcaption class="figure-caption text-light">
                &copy; {{ content.image.credits }}
              </figcaption>
            </figure>
            <div class="info-block mt-4">
              <h4 class="mb-0">
                {{ content.image.name }}
              </h4>
              <p>{{ content.image.title }}</p>
            </div>
          </div>
        </div>
        <!-- Text -->
        <div class="col-lg-8 col-md-6">
          <div class="doctor-details mt-4 mt-md-0">
            <h2 class="text-md">
              {{ content.title }}
            </h2>
            <div class="divider my-4" />
            <p
              v-for="(paragraph, index) in content.paragraphs"
              :key="index"
            >
              {{ paragraph }}
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
      type: Object,
      default: () => ({})
    }
  }
};
</script>
