# 浏览器插件推荐：扩展你的浏览器能力

纯净的浏览器功能精简，但通过安装**浏览器插件**（也称为**扩展**或**Add-on**），你可以为其添加各种强大功能，提升效率、安全性和浏览体验。

## 浏览器插件的基础知识

### 插件获取渠道

- **官方商店（推荐）**：

  - Chrome/Edge：[Chrome 网上应用店](https://chrome.google.com/webstore/category/extensions)
  - Firefox：[Firefox 附加组件](https://addons.mozilla.org)
  - _注：访问 Chrome 商店需要科学上网_

- **第三方渠道**：
  - 插件官网（如 uBlock Origin 的 [GitHub 页面](https://github.com/gorhill/uBlock)）
  - 可信赖的扩展下载站（如 [Crx4Chrome](https://www.crx4chrome.com/)）

### 离线安装方法（详细图解）

1. 获取 `.crx` 文件（Chrome/Edge）或 `.xpi` 文件（Firefox）
2. 打开扩展管理页面：
   - Chrome/Edge：地址栏输入 `chrome://extensions/`
   - Firefox：地址栏输入 `about:addons`
3. **开启开发者模式**（右上角开关）
4. 将插件文件拖拽到页面空白区域
5. 确认安装提示
   ![安装浏览器插件](../img/chap2_add_plugins.png)

### 插件管理技巧

- **权限控制**：安装时注意插件请求的权限
- **更新检查**：定期在 `chrome://extensions/` 检查更新
- **禁用而非删除**：暂时不需要的插件可禁用而非卸载
- **快捷键设置**：在扩展详情页设置专属快捷键

## 必备插件推荐

| 插件名称              | 功能              | 安装链接                                                                                                  | 特别提示                     |
| --------------------- | ----------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **uBlock Origin**     | 高效广告拦截      | [Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)        | 比 AdBlock Plus 节省 40%内存 |
| **Tampermonkey**      | 用户脚本管理      | [官网](https://www.tampermonkey.net/)                                                                     | 支持自动更新脚本             |
| **Infinity 新标签页** | 自定义起始页      | [Chrome](https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh) | 支持云同步配置               |
| **Dark Reader**       | 全局深色模式      | [Chrome](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)          | 保护眼睛利器                 |
| **SingleFile**        | 网页保存为单文件  | [Chrome](https://chrome.google.com/webstore/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle)           | 学术研究必备                 |
| **集装箱**            | 谷歌镜像/网盘加速 | [官网](https://aikefu.run/t/)                                                                             | 国内用户福音                 |

## 油猴（Tampermonkey）终极指南

### 什么是油猴？

Tampermonkey 是**用户脚本管理器**，允许你安装脚本修改网页行为，实现：

- 去除广告和限制
- 增强网站功能
- 自定义界面样式
- 自动化操作

### 脚本安装全流程

1. 点击油猴图标 > "获取新脚本"
   ![获取新脚本](../img/chap2_tampermonkey_add_new_plugins.png)
2. 选择脚本源：
   - [Greasy Fork](https://greasyfork.org/)（中文友好）
   - [OpenUserJS](https://openuserjs.org/)
   - [GitHub Gist](https://gist.github.com/)
3. 搜索所需功能（如"CSDN 去广告"）
   ![搜索脚本GF](../img/chap2_tampermonkey_find_new_plugins_from_GF.png)
4. 点击"安装此脚本"
   ![安装脚本](../img/chap2_tampermonkey_install_new_plugins.png)
5. 查看安装详情并确认

### 精品脚本推荐

| 脚本名称             | 功能              | 链接                                                  | 使用场景      |
| -------------------- | ----------------- | ----------------------------------------------------- | ------------- |
| **CSDN 净化器**      | 去广告/免登录复制 | [安装](https://greasyfork.org/scripts/378351)         | 技术文档查阅  |
| **Bilibili Evolved** | B 站功能增强      | [GitHub](https://github.com/the1812/Bilibili-Evolved) | 视频学习/娱乐 |
| **AC-baidu**         | 搜索引擎优化      | [安装](https://greasyfork.org/scripts/14178)          | 高效信息检索  |
| **网页限制解除**     | 解除复制/右键限制 | [安装](https://greasyfork.org/scripts/28497)          | 文献资料收集  |
| **知乎增强**         | 去广告/优化阅读   | [安装](https://greasyfork.org/scripts/419081)         | 知识获取      |
| **网盘直链助手**     | 百度网盘直链提取  | [安装](https://greasyfork.org/scripts/418182)         | 文件下载加速  |

### 脚本管理高级技巧

1. **脚本冲突解决**：

   - 在油猴仪表盘中调整脚本执行顺序
   - 使用`@exclude`排除特定网站

2. **自定义脚本**：

   ```javascript
   // ==UserScript==
   // @name         My Custom Script
   // @namespace    http://tampermonkey.net/
   // @version      0.1
   // @description  自定义示例脚本
   // @author       You
   // @match        *://*.example.com/*
   // @grant        none
   // ==/UserScript==

   (function () {
     "use strict";
     // 在此添加你的代码
     document.body.style.backgroundColor = "#f0f0f0";
   })();
   ```

3. **脚本自动更新**：
   - 在脚本设置中启用"自动更新"
   - 定期检查脚本的 GitHub 页面

### 安全使用指南

1. **来源审查**：

   - 优先选择 Greasy Fork 验证脚本
   - 检查脚本最后更新时间
   - 查看用户评价和安装量

2. **权限警惕**：

   - 警惕请求`*://*/*`权限的脚本
   - 使用浏览器开发者工具监控脚本行为

3. **沙盒测试**：
   - 新脚本先在虚拟机中测试
   - 使用浏览器隐身模式测试

## 插件与脚本的进阶应用

### 效率组合方案

1. **学术研究套件**：

   - Zotero Connector（文献管理）
   - Kami（PDF 标注）

   * 油猴脚本：Google Scholar 增强

2. **媒体下载方案**：

   - Video DownloadHelper

   * 油猴脚本：B 站/YouTube 下载增强

3. **隐私保护组合**：
   - Privacy Badger
   - Decentraleyes
   * 油猴脚本：防追踪增强

### 常见问题解决

1. **插件冲突**：

   - 逐个禁用插件排查
   - 使用浏览器的"安全模式"测试

2. **脚本失效**：

   - 检查网站 DOM 结构变化
   - 查看脚本的 GitHub Issues
   - 临时使用开发者工具调试

3. **性能优化**：
   - 限制广告拦截插件的过滤规则数量
   - 禁用非活动标签页的插件运行

> **重要提示**：浏览器插件虽强大，但应保持精简。建议安装不超过 15 个扩展，定期审查插件权限和必要性。

通过合理配置浏览器插件和油猴脚本，你可以打造高效、安全、个性化的浏览环境，大幅提升网络使用体验。
