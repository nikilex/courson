<template>
  <b-container>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 my-5 border-top">
      <b-col class="mb-3">
        <a
          href="/"
          class="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          <img
            src="https://cdn.courson.ru/dist/images/logo.svg"
            alt="Courson"
            class="footer-logo"
          />
        </a>
        <p class="text-muted">© {{nowYear}}</p>
      </b-col>

      <b-col class="mb-3"></b-col>

      <b-col class="mb-3" v-for="(item, index) in footer" :key="index">
        <h5>{{ item.title }}</h5>
        <ul class="nav flex-column">
          <li
            class="nav-item mb-2"
            v-for="(link, indexLink) in item.links"
            :key="indexLink"
          >
            <b-link
              :to="{ name: 'HomePage' }"
              class="nav-link p-0 text-muted"
              >{{ link }}</b-link
            >
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      footer: [],
    };
  },
  created() {},
  computed: {
    nowYear() {
      return new Date().getFullYear() 
    }
  },
  methods: {
    init() {
      for (let i = 0; i < 3; i++) {
        this.footer.push({ links: [], title: `Section ${i + 1}` });
      }

      this.footer = this.footer.map((item) => {
        for (let i = 0; i < 5; i++) {
          item.links.push(`Ссылка ${i + 1}`);
        }
        return item;
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.footer-logo {
  height: 24px;
  max-width: 100%;
}
</style>
