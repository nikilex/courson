<template>
  <b-navbar class="px-2" toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand href="#"
        ><img src="https://cdn.courson.ru/dist/images/logo.svg" alt="Courson"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'HomePage' }">Главная</b-nav-item>
          <b-nav-item-dropdown text="Страницы" right>
            <template v-for="num in 5">
              <b-dropdown-item
                :key="num"
                :to="{ name: 'EmptyPage', params: { pageId: `${num}` } }"
                >Страница {{ num }}</b-dropdown-item
              >
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "NavNar",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
