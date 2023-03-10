<template>
  <!-- Text section -->
  <section class="contact-form-wrap section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <template
              v-for="(html, index) in content"
              :key="index"
            >
              <div
                class="mb-5"
                v-html="html"
              />
              <div
                v-if="index < content.length - 1"
                class="divider mx-auto my-4"
              />
            </template>
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
