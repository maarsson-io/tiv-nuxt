<template>
  <!-- Contact form -->
  <section class="contact-form-wrap section pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <form id="contact-form" class="contact__form " method="post" action="mail.php">
            <div class="row">
              <div class="col-12">
                <div class="alert alert-success contact__msg" style="display: none" role="alert">
                  Ditt meddelande skickades.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <input id="name" name="name" type="text" class="form-control" placeholder="Ditt namn">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input id="email" name="email" type="email" class="form-control" placeholder="Din e-postaddress" required>
                </div>
              </div>
            </div>
            <div class="form-group-2 mb-4">
              <textarea id="message" name="message" class="form-control" rows="8" placeholder="Skriv ditt meddelande här" required />
            </div>
            <div>
              <input class="btn btn-main btn-round-full" name="submit" type="submit" value="Skicka">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
