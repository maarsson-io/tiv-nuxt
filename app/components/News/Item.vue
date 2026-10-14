<template>
  <div class="col-lg-12 col-md-12 mb-5">
    <div class="blog-item">
      <div class="blog-thumb">
        <figure class="figure m-0 w-100">
          <img
            :src="content.image.src"
            class="figure-img img-fluid w-100"
            :alt="content.image.alt"
          >
          <figcaption class="figure-caption text-light">
            &copy; {{ content.image.credits }}
          </figcaption>
        </figure>
      </div>
      <div class="blog-item-content">
        <div class="blog-item-meta mb-3 mt-4">
          <span class="text-black text-uppercase mr-1"><i class="icofont-calendar mr-3" />{{ content.date }}</span>
        </div>
        <h2 class="mt-3 mb-3">
          <a
            :href="content.link"
            target="_blank"
          >{{ content.title }}</a>
        </h2>
        <p class="mb-4">
          {{ content.text }}
        </p>
        <a
          :href="content.link"
          target="_blank"
          class="btn btn-main btn-icon btn-round-full"
        >
          {{ content.button }} <i class="icofont-simple-right ml-2" />
        </a>
      </div>
    </div>
  </div>
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
