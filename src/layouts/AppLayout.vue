<template>
  <div class="body-container">
    <header>
      <NavBarComponent />
    </header>
    <main>
      <b-container class="py-5">
        <router-view />
      </b-container>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

export default {
  name: "AppLayout",
  components: {
    NavBarComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.body-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  margin: 0 auto;
  max-width: 80ch;
}

footer {
  margin-top: auto;
}
</style>
