<template>
  <section class="section pt-3-touch about">
    <div class="container">
      <div class="row px-3">
        <!-- Image grid -->
        <div class="col-xl-4 col-lg-6">
          <div class="about-img d-flex flex-wrap h-100 w-100">
            <figure class="figure m-0 w-100">
              <img
                src="/images/blog-9_480x320.jpg"
                class="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              >
              <figcaption class="figure-caption">
                &copy; Gert Svensson
              </figcaption>
            </figure>
            <figure class="figure m-0 mt-4 w-100">
              <img
                src="/images/blog-2_400x225.jpg"
                class="img-fluid h-100 w-100 object-fit-cover"
                alt=""
              >
              <figcaption class="figure-caption text-light">
                &copy; Lars Angantyr / Sveriges Radio
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 mt-4 mt-lg-0">
          <div class="about-img d-flex flex-wrap h-100">
            <figure class="figure m-0 w-100">
              <img
                src="/images/sivard-1_340x340.jpg"
                class="img-fluid h-100 w-100 object-fit-cover"
              >
              <figcaption class="figure-caption text-light">
                &copy; Mikael Persson / Norra Skåne
              </figcaption>
            </figure>
          </div>
        </div>
        <!-- Description -->
        <div class="col-xl-4 mt-4 mt-xs-0 mt-lg-4 mt-xl-0">
          <div class="about-content">
            <h2 class="title-color">
              {{ content.title }}
            </h2>
            <p class="my-3">
              {{ content.text_1 }}
            </p>
            <p class="mt-3 mb-5">
              {{ content.text_2 }}
            </p>
            <NuxtLink
              to="/about"
              class="btn btn-main-2 btn-round-full btn-icon"
            >
              {{ content.button }} <i class="icofont-simple-right ml-1" />
            </NuxtLink>
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
      default: () => ({}),
    },
  },
};
</script>
