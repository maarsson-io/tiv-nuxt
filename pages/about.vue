<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <LayoutMainImage
      :content="data.main_image"
    />
    <AboutTextBlock
      :content="data.text_block_one"
    />
    <AboutImageRow
      :content="data.image_row_block"
    />
    <AboutTextBlock
      :content="data.text_block_two"
    />
    <AboutTestimonials
      :content="data.testimonials"
    />
  </article>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`,
  () => queryContent()
    .where({ _path: path })
    .findOne()
);
</script>
