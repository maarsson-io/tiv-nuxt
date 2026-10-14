<template>
  <!-- Three boxes -->
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="feature-block d-lg-flex">
            <!-- Box left -->
            <StartpageThreeBox>
              <div class="feature-icon mb-4">
                <i class="icofont-support" />
              </div>
              <span>{{ content.box1.subtitle }}</span>
              <h4 class="mb-3">
                <LinkPhoneMain />
              </h4>
              <p>
                {{ content.box1.text }}<br>
                <strong>{{ content.box1.warning }} <LinkPhone :number="'112'" /></strong>
              </p>
            </StartpageThreeBox>
            <!-- Box middle -->
            <StartpageThreeBox>
              <div class="feature-icon mb-4">
                <i class="icofont-police-cap" />
              </div>
              <span>{{ content.box2.subtitle }}</span>
              <h4 class="mb-3">
                {{ content.box2.title }}
              </h4>
              <p class="mb-4">
                {{ content.box2.text }}
              </p>
              <NuxtLink
                to="/contact-driver"
                class="btn btn-main btn-round-full"
              >
                {{ content.box2.button }} <i class="icofont-simple-right ml-2" />
              </NuxtLink>
            </StartpageThreeBox>
            <!-- Box right -->
            <StartpageThreeBox>
              <div class="row mb-4">
                <div class="col-4">
                  <div class="feature-icon">
                    <i class="icofont-credit-card" />
                  </div>
                </div>
                <div class="col-8 text-right">
                  <img class="swish-logo mt-1" src="/assets/swish-logo.svg" alt="">
                </div>
              </div>
              <span>{{ content.box3.subtitle }}</span>
              <h4 class="mb-3">
                {{ content.box3.title }}
              </h4>
              <p class="mb-4">
                {{ content.box3.text }}
              </p>
              <NuxtLink
                to="/sponsoring"
                class="btn btn-main btn-round-full"
              >
                {{ content.box3.button }} <i class="icofont-simple-right ml-2" />
              </NuxtLink>
            </StartpageThreeBox>
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
