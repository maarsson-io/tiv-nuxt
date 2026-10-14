<template>
  <div>
    <NuxtLayout>
      <LayoutPageTitle
        :content="data.header"
      />
      <!-- Error page -->
      <section class="section py-5">
        <div class="container">
          <div class="row my-5 text-center">
            <div class="col-lg-6 offset-lg-3">
              <h1 class="title-color">
                {{ error.statusCode }}
              </h1>
              <p>{{ error.message }}</p>
              <button
                class="btn btn-main btn-round-full mt-5"
                @click="handleError"
              >
                {{ data.button }} <i class="icofont-simple-right ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Bundled instead of queried: on the static 404 fallback no content query is prerendered.
import data from '~~/content/error.json';

defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>
