<template>
  <section class="banner" :style="bannerBackground">
    <div class="figure-caption">
      Foto: &copy; {{ content.credits }}
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-xl-7">
          <div class="block inverted">
            <div class="divider mb-3" />
            <span class="text-uppercase text-sm letter-spacing ">{{ content.subtitle }}</span>
            <h1 class="mb-3 mt-3">
              {{ content.title }}
            </h1>
            <div class="btn-container ">
              <NuxtLink to="/about" class="btn btn-main-2 btn-icon btn-round-full">
                {{ content.button }} <i class="icofont-simple-right ml-2" />
              </NuxtLink>
            </div>
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
  },

  computed: {
    bannerBackground () {
      return 'background-image: url(' + this.content.image + ');';
    }
  }
};
</script>
