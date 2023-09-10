<template>
  <div class="body-container">
    <header>
      <NavBarComponent />
    </header>
    <main>
      <v-app>
        <v-container>
          <router-view />
        </v-container>
      </v-app>
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

footer {
  margin-top: auto;
}
</style>
