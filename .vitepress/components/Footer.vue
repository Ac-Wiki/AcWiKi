<template>
  <div class="footer">
    <div>
      Copyright &copy; 2024 - {{ new Date().getFullYear() }}
      <a href="https://github.com/Ac-Wiki/AcWiKi/" target="_blank">AcWiki</a>
    </div>
    <div>
      本页阅读量 <span id="vercount_value_page_pv">Loading</span> 次 |
      全站访问量 <span id="vercount_value_site_pv">Loading</span> 次 |
      全站访客数 <span id="vercount_value_site_uv">Loading</span> 人
      <small
        >(<a href="https://cn.vercount.one/" target="_blank">Vercount</a
        >)</small
      >
    </div>
    使用
    <a href="https://vitepress.dev/zh/" target="_blank" rel="noopener">
      vitepress
    </a>
    构建
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 动态加载 Vercount 统计脚本
  const script = document.createElement("script");
  script.src = "https://cdn.vercount.one/js/vercount.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<style scoped>
.footer {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 0.9rem;
}
</style>
