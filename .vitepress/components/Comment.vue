<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

// 从环境变量获取配置（推荐）
const repo = import.meta.env.VITE_GISCUS_REPO;
const repoId = import.meta.env.VITE_GISCUS_REPO_ID;
const category = import.meta.env.VITE_GISCUS_CATEGORY;
const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID;

// 或直接硬编码配置
const giscusConfig = {
  src: "https://giscus.app/client.js",
  "data-repo": "Ac-Wiki/AcWiKi", // 替换为你的仓库
  "data-repo-id": "R_kgDONCnJnA", // 从 giscus.app 获取
  "data-category": "Announcements",
  "data-category-id": "DIC_kwDONCnJnM4Cjk4S", // 从 giscus.app 获取
  "data-mapping": "title",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "1",
  "data-input-position": "top",
  "data-theme": "https://giscus.app/themes/custom_example.css", // 自动切换暗/亮模式
  "data-lang": "zh-CN",
  crossorigin: "anonymous",
  async: "",
};

// 动态加载 Giscus
const loadGiscus = () => {
  const container = document.querySelector("#giscus-container");
  if (!container) return;

  // 移除旧实例
  const existingScript = document.querySelector("script[data-repo]");
  if (existingScript) existingScript.remove();

  // 创建新实例
  const script = document.createElement("script");
  Object.entries(giscusConfig).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  container.appendChild(script);
};

onMounted(() => {
  // 初始加载
  loadGiscus();

  // 监听路由变化
  watch(
    () => route.path,
    () => {
      // 等待页面切换完成
      setTimeout(loadGiscus, 500);
    }
  );
});
</script>

<template>
  <div id="giscus-container" class="giscus" />
</template>

<style scoped>
.giscus {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
