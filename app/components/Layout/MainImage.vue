<template>
  <!-- Main image -->
  <section class="section department-single pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="department-img">
            <figure class="figure m-0 w-100">
              <img
                class="figure-img img-fluid"
                :src="content.src"
                :alt="content.alt"
              >
              <figcaption class="figure-caption text-light">
                &copy; {{ content.credits }}
              </figcaption>
            </figure>
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
