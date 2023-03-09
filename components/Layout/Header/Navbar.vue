<template>
  <!-- Navigation -->
  <nav id="navbar" class="navbar navbar-expand-lg navigation">
    <div class="container">
      <a class="navbar-brand d-flex m-0" href="/">
        <img src="/logo/logo_minimal.svg" alt="" class="logo">
        <img src="/logo/logo_text.svg" :alt="config.name" class="logo-text ml-3">
      </a>
      <!-- Burger icon -->
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icofont-navigation-menu" />
      </button>
      <!-- Menu -->
      <div id="navbarmain" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/contact">Kontakt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Verksamheten</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/news">Nyheter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/sponsors">Sponsorer</a>
          </li>
          <li class="nav-item dropdown">
            <a id="dropdown02" class="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hjälp oss <i class="icofont-thin-down" /></a>
            <ul class="dropdown-menu" aria-labelledby="dropdown02">
              <li><a class="dropdown-item" href="/contact-tips">Tipsa oss</a></li>
              <li><a class="dropdown-item" href="/sponsoring">Sponsra oss</a></li>
              <li><a class="dropdown-item" href="/contact-driver">Bli nattchaufför</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  setup () {
    const config = useAppConfig();

    return { config };
  }
};
</script>
