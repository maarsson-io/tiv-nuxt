<template>
  <article>
    <StartpageSlider
      :content="data.slider"
    />
    <StartpageThreeBoxes
      :content="data.three_boxes"
    />
    <StartpageAbout
      :content="data.about"
    />
    <StartpageCounterBoxes
      :content="data.counter_boxes"
    />
    <StartpageTestimonials
      :content="data.testimonials"
      :testimonials="testimonials.blocks"
    />
    <StartpageSponsors
      :content="data.sponsors"
      :sponsors="sponsors.sponsors"
    />
  </article>
</template>

<script setup lang="ts">
const { data } = await useContentData('home');
const { data: testimonials } = await useContentData('testimonials');
const { data: sponsors } = await useContentData('sponsors');
</script>
