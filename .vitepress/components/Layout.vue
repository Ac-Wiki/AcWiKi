<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <Footer />
    </template>
    <template #doc-after>
      <Comment />
    </template>
  </Layout>
</template>
