---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AcWiki"
  text: "大学生的百科全书"
  tagline: 属于大学生群体的真·青年大学习
  actions:
    - theme: brand
      text: 翻阅目录
      link: /toc
    - theme: alt
      text: Ac-WiKi 航站楼
      link: https://kdocs.cn/l/cm7uuqpXuXew
---

# ✨AcWiki

高等教育学社基础知识开源建设工程

专为大学生群体打造的知识共享平台，助力学业与社会衔接  
由 AcWiki 维护组及全体用户用 ❤️‍🔥 制作。欢迎您的参与！

[![访问 WIKI](https://img.shields.io/static/v1?label=GitHub&message=访问WIKI&color=2196f3&style=for-the-badge&logo=github&logoColor=white)](https://ac-wiki.org)

## 项目状态

[![License](https://img.shields.io/github/license/Ac-Wiki/AcWiKi?style=for-the-badge&color=2196f3)](https://github.com/Ac-Wiki/AcWiKi/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Ac-Wiki/AcWiKi?style=for-the-badge&logo=github&color=ff9800)](https://github.com/Ac-Wiki/AcWiKi/stargazers)
[![GitHub Commits](https://img.shields.io/github/commit-activity/t/Ac-Wiki/AcWiKi?style=for-the-badge&logo=github&label=Commits&color=4caf50)](https://github.com/Ac-Wiki/AcWiKi/commits/main)
[![GitHub Issues](https://img.shields.io/github/issues/Ac-Wiki/AcWiKi?style=for-the-badge&logo=github&color=f44336)](https://github.com/Ac-Wiki/AcWiKi/issues)
[![GitHub Contributors](https://img.shields.io/github/contributors/Ac-Wiki/AcWiKi?style=for-the-badge&color=9c27b0)](https://github.com/Ac-Wiki/AcWiKi/graphs/contributors)

## 🔥 特别推荐

**[ACwiki 航站楼](https://kdocs.cn/l/cm7uuqpXuXew)** - 为解决互联网信息碎片化带来的搜索成本上升，我们计划发起一项大型共建在线文档，邀请你共同建设学术导航

[![立即访问](https://img.shields.io/static/v1?label=&message=立即访问&color=f0c000&style=for-the-badge&logo=internetexplorer&logoColor=white)](https://kdocs.cn/l/cm7uuqpXuXew)

## 🎓 共建计划

<script setup>
function getDaysUntilGaokao() {
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // 创建今年高考时间（6 月 7 日 9:00）
  let gaokaoTime = new Date(currentYear, 5, 7, 9, 0, 0);
  
  // 若今年高考已过，设置为明年高考
  if (gaokaoTime < now) {
    gaokaoTime = new Date(currentYear + 1, 5, 7, 9, 0, 0);
  }
  
  // 计算剩余天数（最小 1 天）
  const timeDiff = gaokaoTime - now;
  const daysRemaining = Math.max(1, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
  
  return daysRemaining;
}
</script>

好久不见！距离全国高考还有 {{getDaysUntilGaokao()}} 天，在此祝小朋友们金榜题名！

距离本项目启动已有近一年时间，在下一个开学季即将来临之际，我们将对 AcWiki 进行新一轮的更新扩充。

后期我们会在频道中征集对特定板块的建议并汇总，项目主页稍后会同步更新，我们呼吁更多志愿者参与文档共建，共同打通高等教育的"最后一公里"💗

[![提交建议](https://img.shields.io/static/v1?label=&message=提交建议&color=2196f3&style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ac-Wiki/AcWiKi/issues/new)

## 🔊 声明

1. 本项目完全为自发组织的公益项目，我们随时欢迎您的参与和使用，并对您的付出与建议表达衷心的感谢

2. 本项目英文名称 AcWiki 中，Ac 为 Academy（学术）的简称，Wiki 意为百科，本项目与"AcFun",信息奥赛中的"Accepted"等并无主观或客观上的联系

3. 本项目更新的信息 / 内容 / 文件等资料，可能来自贡献者本人或各类已有书籍 / 资料 / 文献，同时会积极的在互联网中引用，我们秉持尊重原则，会积极标明引用情况，引用情况请参阅相关页面注释

4. 这是一个用爱发电的项目，因此更新频率及生命周期可能无法保证，我们特别呼吁愿意贡献 / 有过 Wiki 编辑经验 / 各行业专家参与到项目的维护与完善中，本着自愿参与原则，我们将对贡献者在 GitHub Profile 页面展示致谢

5. 频道关联群组[TG](https://t.me/AcFourm)/[QQ](https://qm.qq.com/q/rmBHBLvpew) 用作维护组与用户交流的场所，欢迎建言献策，友好沟通，群内交流并无过多约束，请理性讨论

6. 本项目并不局限于此平台，考虑到使用者群体，我们后期会积极建立各式网站，并会迁移已有的更新内容

[![提出内容建议](https://img.shields.io/static/v1?label=&message=提出内容建议&color=9c27b0&style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ac-Wiki/AcWiKi/issues/new)

## 📎 引用与致谢

### 方山厨子

[《成年人社会生活常识课》](https://www.bilibili.com/video/BV1eWxneME3Q) - 提供了大量实用的社会生活知识，是本项目重要的参考资源。

[![访问主页](https://img.shields.io/static/v1?label=&message=访问主页&color=e91e63&style=for-the-badge&logo=bilibili&logoColor=white)](https://space.bilibili.com/274459325)

### 高校课程资源共享项目

我们向以下优秀的高校课程资源共享项目致敬，他们的开源精神与知识共享理念为本项目提供了重要参考：

#### 北京大学

[![贵校课程](https://img.shields.io/static/v1?label=&message=贵校课程&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/lib-pku/libpku)
[![气垫船](https://img.shields.io/static/v1?label=&message=气垫船&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/martinwu42/project-hover)
[![信科资料](https://img.shields.io/static/v1?label=&message=信科资料&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/EECS-PKU-XSB/Shared-learning-materials)
[![大作业](https://img.shields.io/static/v1?label=&message=大作业&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/tongtzeho/PKUCourse)

#### 清华大学

[![计算机](https://img.shields.io/static/v1?label=&message=计算机&color=34a853&style=for-the-badge&logo=github&logoColor=white)](https://github.com/PKUanonym/REKCARC-TSC-UHT)

#### 浙江大学

[![课程攻略](https://img.shields.io/static/v1?label=&message=课程攻略&color=ea4335&style=for-the-badge&logo=github&logoColor=white)](https://github.com/QSCTech/zju-icicles)

#### 中国科学技术大学

[![计算机](https://img.shields.io/static/v1?label=&message=计算机&color=fbbc05&style=for-the-badge&logo=github&logoColor=white)](https://github.com/USTC-Resource/USTC-Course)

#### 上海交通大学

[![课程资料](https://img.shields.io/static/v1?label=&message=课程资料&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/CoolPhilChen/SJTU-Courses/)
[![生存手册](https://img.shields.io/static/v1?label=&message=生存手册&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/SurviveSJTU/SurviveSJTUManual)

#### 南京大学

[![复习资料](https://img.shields.io/static/v1?label=&message=复习资料&color=34a853&style=for-the-badge&logo=github&logoColor=white)](https://github.com/idealclover/NJU-Review-Materials)

#### 东南大学

[![课程共享](https://img.shields.io/static/v1?label=&message=课程共享&color=ea4335&style=for-the-badge&logo=github&logoColor=white)](https://github.com/zjdx1998/seucourseshare)

#### 中山大学

[![课程资料](https://img.shields.io/static/v1?label=&message=课程资料&color=fbbc05&style=for-the-badge&logo=github&logoColor=white)](https://github.com/sysuexam/SYSU-Exam)

#### 郑州大学

[![复习资料](https://img.shields.io/static/v1?label=&message=复习资料&color=4285f4&style=for-the-badge&logo=github&logoColor=white)](https://github.com/CooperNiu/ZZU-Courses-Resource)

#### 广东工业大学

[![课程攻略](https://img.shields.io/static/v1?label=&message=课程攻略&color=34a853&style=for-the-badge&logo=github&logoColor=white)](https://github.com/brenner8023/gdut-course)

## 💁 联系我们

[![Telegram 频道](https://img.shields.io/static/v1?label=Telegram&message=频道&color=26A5E4&style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/AcWiki)
[![Telegram 群组](https://img.shields.io/static/v1?label=Telegram&message=群组&color=26A5E4&style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/AcFourm)
[![QQ 群](https://img.shields.io/static/v1?label=QQ群&message=860675581&color=12B7F5&style=for-the-badge&logo=tencentqq&logoColor=white)](https://qm.qq.com/q/WJI3hgBcm4)

[![Star History Chart](https://api.star-history.com/svg?repos=Ac-Wiki/AcWiKi&type=Date)](https://star-history.com/#Ac-Wiki/AcWiKi&Date)

### 贡献/参与者

感谢所有参与到开发/测试中的朋友们，是大家的帮助让 AcWiki 越来越好！ (\*´▽ ｀) ノノ

[![贡献者](https://contributors-img.web.app/image?repo=Ac-Wiki/AcWiKi&max=105&columns=15)](https://github.com/Ac-Wiki/AcWiKi/graphs/contributors)

## 🖥️ 本地部署

### 本地调试

这种方法用于对本项目进行贡献

#### 0. 环境准备

确保您的系统已安装以下工具：

- [Node.js](https://nodejs.org/) (建议使用 LTS 版本)
- 可选的，安装 [pnpm](https://pnpm.io/) (可通过 `npm install -g pnpm` 安装)
- Git (用于克隆仓库)

#### 1. 克隆仓库

```bash
git clone https://github.com/Ac-Wiki/Ac-WiKi.git
cd Ac-WiKi
```

#### 2. 安装依赖

```bash
pnpm install
```

此命令会安装项目所需的所有依赖项

#### 3. 启动开发服务器

```bash
pnpm dev
```

开发服务器启动后，通常会监听在 `http://localhost:3000`。您可以在浏览器中访问该地址查看本地运行的 AcWiki。

#### 4. 开发工作流

- 修改文件后，开发服务器会自动重新加载
- 使用 `Ctrl+C` 停止开发服务器
- 提交更改前请运行测试和代码检查

#### 5. 贡献代码

完成修改后，请：

1. 创建新的分支
2. 提交清晰的 commit 信息
3. 创建 Pull Request 到主仓库
