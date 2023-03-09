<template>
  <!-- Page title -->
  <section class="page-title bg-1">
    <div class="overlay" />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block text-center">
            <h1 class="text-capitalize mb-1 text-lg">
              {{ data.header.title }}
            </h1>
            <span class="text-white">{{ data.header.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`,
  () => queryContent()
    .where({ _path: path })
    .only(['header'])
    .findOne()
);
</script>
