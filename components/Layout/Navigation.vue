<template>
  <header>
    <!-- Top bar -->
    <div class="header-top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 d-none d-sm-none d-lg-block">
            <ul class="top-bar-info list-inline-item pl-0 mb-0">
              <li class="list-inline-item">
                <LinkMail with-icon />
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="text-lg-right top-right-bar mt-2 mt-lg-0">
              <h4 class="m-0">
                <LinkPhoneMain with-icon />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation -->
    <nav id="navbar" class="navbar navbar-expand-lg navigation">
      <div class="container">
        <a class="navbar-brand d-flex m-0" href="/">
          <img src="/logo/logo_minimal.svg" alt="" class="logo">
          <img src="/logo/logo_text.svg" alt="Trygg i Vittsjö" class="logo-text ml-3">
        </a>
        <!-- Burger icon -->
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icofont-navigation-menu" />
        </button>
        <!-- Menu -->
        <div id="navbarmain" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/contact.html">Kontakt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about.html">Verksamheten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/news.html">Nyheter</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/sponsors.html">Sponsorer</a>
            </li>
            <li class="nav-item dropdown">
              <a id="dropdown02" class="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hjälp oss <i class="icofont-thin-down" /></a>
              <ul class="dropdown-menu" aria-labelledby="dropdown02">
                <li><a class="dropdown-item" href="/contact-tips.html">Tipsa oss</a></li>
                <li><a class="dropdown-item" href="/sponsoring.html">Sponsra oss</a></li>
                <li><a class="dropdown-item" href="/contact-driver.html">Bli nattchaufför</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
