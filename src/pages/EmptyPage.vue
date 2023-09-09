<template>
  <div class="text-center p-5">
    <h1>Пустая страница {{ pageId }}</h1>
  </div>
</template>

<script>
export default {
  name: "EmptyPage",
  props: {
    pageId: {
      type: String,
    }
  },
  metaInfo: {
    title: "Пустая страница",
  },
};
</script>

<style lang="scss" scoped></style>
