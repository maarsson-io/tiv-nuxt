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
    <AboutListBlock
      :content="data.list_block"
    />
    <AboutTextBlock
      :content="data.text_block_two"
    />
    <AboutImageRow
      :content="data.image_row_block"
    />
    <AboutTextBlock
      :content="data.text_block_three"
    />
    <AboutTestimonials
      :content="data.testimonials"
      :testimonials="testimonials.blocks"
    />
  </article>
</template>

<script setup lang="ts">
const { data } = await useContentData('about');
const { data: testimonials } = await useContentData('testimonials');
</script>
