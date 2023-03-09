<template>
  <LayoutPageTitle
    :content="data.header"
  />
  <LayoutMainImage
    :content="data.main_image"
  />
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`,
  () => queryContent()
    .where({ _path: path })
    .only(['header', 'main_image'])
    .findOne()
);
</script>
