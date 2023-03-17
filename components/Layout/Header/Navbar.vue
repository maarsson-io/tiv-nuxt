<template>
  <!-- Navigation -->
  <nav id="navbar" class="navbar navbar-expand-lg navigation">
    <div class="container">
      <NuxtLink
        to="/"
        class="navbar-brand d-flex m-0"
      >
        <img src="/logo/logo_minimal.svg" alt="" class="logo">
        <img src="/logo/logo_text.svg" :alt="config.name" class="logo-text ml-3">
      </NuxtLink>
      <!-- Burger icon -->
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icofont-navigation-menu" />
      </button>
      <!-- Menu -->
      <div id="navbarmain" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li
            v-for="item in navigation"
            :key="item.link"
            :class="'nav-item' + (item.items ? ' dropdown' : null)"
          >
            <NuxtLink
              v-if="!item.items"
              :to="item.link"
              class="nav-link"
            >
              {{ item.title }}
            </NuxtLink>
            <template
              v-else
            >
              <a
                id="dropdown"
                class="nav-link dropdown-toggle"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click.prevent
              >Hjälp oss <i class="icofont-thin-down" /></a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown"
              >
                <li
                  v-for="subitem in item.items"
                  :key="subitem.link"
                  :class="'nav-item' + item.items ? ' dropdown' : null"
                >
                  <NuxtLink
                    :to="subitem.link"
                    class="dropdown-item"
                  >
                    {{ subitem.title }}
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    navigation: {
      type: Array,
      default: () => []
    }
  },

  setup () {
    const config = useAppConfig();

    return { config };
  }
};
</script>
