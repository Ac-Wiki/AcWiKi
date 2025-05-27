<div align="center" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 40px 20px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin: 20px auto; max-width: 800px; position: relative;">
  <a href="https://github.com/Ac-Wiki/AcWiKi" class="logo-link" style="display: inline-block; transition: transform 0.3s ease;">
    <img src="../assets/logo_clear.png" alt="AcWiki Logo" width="200" style="margin-bottom: 20px; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));"/>
  </a>
  <h1 style="font-size: 4em; margin: 10px 0; background: linear-gradient(45deg, #2196f3, #9c27b0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800;">✨AcWiki</h1>
  <h3 style="color: #555; margin-top: 5px; margin-bottom: 15px; font-weight: 500; letter-spacing: 1px;">高等教育学社基础知识开源建设工程</h3>
  <p style="font-size: 1.1em; color: #444; max-width: 600px; margin: 0 auto 10px;"><em>专为大学生群体打造的知识共享平台，助力学业与社会衔接</em></p>
  <p style="font-size: 1.1em; color: #444;"><em>由 AcWiki 维护组及全体用户用 <span style="color: #ff5252;">❤️‍🔥</span> 制作。欢迎您的参与！</em></p>
  <div style="margin-top: 25px;">
    <a href="https://github.com/Ac-Wiki/AcWiKi" style="display: inline-block; background: linear-gradient(45deg, #2196f3, #00b0ff); color: white; text-decoration: none; padding: 10px 25px; border-radius: 30px; font-weight: bold; box-shadow: 0 4px 10px rgba(33, 150, 243, 0.3); transition: all 0.3s ease;">探索项目 →</a>
  </div>
</div>

<!-- 快捷导航菜单 -->
<div class="quick-nav" style="position: sticky; top: 20px; z-index: 100; background-color: white; padding: 10px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin: 30px auto; max-width: 90%; display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">
  <a href="#目录" style="display: inline-block; padding: 8px 15px; background: linear-gradient(45deg, #ff9800, #ff5722); color: white; text-decoration: none; border-radius: 20px; font-size: 14px; font-weight: 500; transition: all 0.3s ease;">📑 目录</a>
  <a href="#声明" style="display: inline-block; padding: 8px 15px; background: linear-gradient(45deg, #2196f3, #03a9f4); color: white; text-decoration: none; border-radius: 20px; font-size: 14px; font-weight: 500; transition: all 0.3s ease;">🔊 声明</a>
  <a href="#引用与致谢" style="display: inline-block; padding: 8px 15px; background: linear-gradient(45deg, #e91e63, #f06292); color: white; text-decoration: none; border-radius: 20px; font-size: 14px; font-weight: 500; transition: all 0.3s ease;">📎 引用</a>
  <a href="#联系我们" style="display: inline-block; padding: 8px 15px; background: linear-gradient(45deg, #03a9f4, #00bcd4); color: white; text-decoration: none; border-radius: 20px; font-size: 14px; font-weight: 500; transition: all 0.3s ease;">💁 联系</a>
  <a href="#本地部署" style="display: inline-block; padding: 8px 15px; background: linear-gradient(45deg, #4caf50, #8bc34a); color: white; text-decoration: none; border-radius: 20px; font-size: 14px; font-weight: 500; transition: all 0.3s ease;">🖥️ 部署</a>
</div>

<!-- 回到顶部按钮 -->
<div id="back-to-top" style="position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; background: linear-gradient(45deg, #2196f3, #03a9f4); border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 10px rgba(33, 150, 243, 0.4); cursor: pointer; z-index: 1000; opacity: 0; transition: opacity 0.3s ease; color: white; font-size: 24px;">
  ↑
</div>

<script>
// 回到顶部按钮功能
window.onload = function() {
  var backToTopBtn = document.getElementById("back-to-top");
  
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.opacity = "1";
    } else {
      backToTopBtn.style.opacity = "0";
    }
  });
  
  backToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
};
</script>

<div align="center" style="margin: 30px auto; background-color: rgba(250, 250, 250, 0.7); padding: 15px; border-radius: 10px; max-width: 90%; box-shadow: 0 2px 10px rgba(0,0,0,0.05); backdrop-filter: blur(5px);">
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">
    <a href="https://github.com/Ac-Wiki/AcWiKi/blob/main/LICENSE" style="margin: 5px; display: inline-block; transform: translateY(0); transition: all 0.2s ease;">
      <img src="https://img.shields.io/github/license/Ac-Wiki/AcWiKi?style=for-the-badge&color=2196f3" alt="License" style="filter: drop-shadow(0 2px 3px rgba(33, 150, 243, 0.3));"/>
    </a>
    <a href="https://github.com/Ac-Wiki/AcWiKi/stargazers" style="margin: 5px; display: inline-block; transform: translateY(0); transition: all 0.2s ease;">
      <img src="https://img.shields.io/github/stars/Ac-Wiki/AcWiKi?style=for-the-badge&logo=github&color=ff9800" alt="GitHub Stars" style="filter: drop-shadow(0 2px 3px rgba(255, 152, 0, 0.3));"/>
    </a>
    <a href="https://github.com/Ac-Wiki/AcWiKi/commits/main" style="margin: 5px; display: inline-block; transform: translateY(0); transition: all 0.2s ease;"> 
      <img src="https://img.shields.io/github/commit-activity/t/Ac-Wiki/AcWiKi?style=for-the-badge&logo=github&label=Commits&color=4caf50" alt="GitHub Commits" style="filter: drop-shadow(0 2px 3px rgba(76, 175, 80, 0.3));"/>
    </a>
    <a href="https://github.com/Ac-Wiki/AcWiKi/issues" style="margin: 5px; display: inline-block; transform: translateY(0); transition: all 0.2s ease;">
      <img src="https://img.shields.io/github/issues/Ac-Wiki/AcWiKi?style=for-the-badge&logo=github&color=f44336" alt="GitHub Issues" style="filter: drop-shadow(0 2px 3px rgba(244, 67, 54, 0.3));"/>
    </a>
    <a href="https://github.com/Ac-Wiki/AcWiKi/graphs/contributors" style="margin: 5px; display: inline-block; transform: translateY(0); transition: all 0.2s ease;">
      <img src="https://img.shields.io/github/contributors/Ac-Wiki/AcWiKi?style=for-the-badge&color=9c27b0" alt="GitHub Contributors" style="filter: drop-shadow(0 2px 3px rgba(156, 39, 176, 0.3));"/>
    </a>
  </div>
</div>

<div style="padding: 30px; border-radius: 16px; background: linear-gradient(135deg, #fff9e6 0%, #fff5d6 100%); box-shadow: 0 10px 30px rgba(240, 192, 0, 0.15); margin: 40px 0; position: relative; overflow: hidden;">
  <div style="position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: radial-gradient(circle at top right, rgba(240, 192, 0, 0.2), transparent 70%); border-radius: 0 0 0 100%;"></div>
  <h2 style="margin-top: 0; font-size: 28px; display: flex; align-items: center; gap: 10px;"><span style="font-size: 36px;">🔥</span> 特别推荐</h2>
  <p style="font-size: 17px; line-height: 1.6; margin: 20px 0;"><strong><a href="https://kdocs.cn/l/cm7uuqpXuXew" style="color: #d4a000; text-decoration: none; border-bottom: 2px solid #f0c000;">ACwiki航站楼</a></strong> - 为解决互联网信息碎片化带来的搜索成本上升，我们计划发起一项大型共建在线文档，邀请你共同建设学术导航</p>
  <a href="https://kdocs.cn/l/cm7uuqpXuXew" style="display: inline-block; background: linear-gradient(45deg, #f0c000, #ffb300); color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; box-shadow: 0 4px 15px rgba(240, 192, 0, 0.3); transition: all 0.3s ease; transform: translateY(0);">
    立即访问 <span style="display: inline-block; margin-left: 5px;">→</span>
  </a>
</div>

<div style="padding: 30px; border-radius: 16px; background: linear-gradient(135deg, #e8f4fd 0%, #d4e9f7 100%); box-shadow: 0 10px 30px rgba(33, 150, 243, 0.15); margin: 40px 0; position: relative; overflow: hidden;">
  <div style="position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: radial-gradient(circle at top right, rgba(33, 150, 243, 0.2), transparent 70%); border-radius: 0 0 0 100%;"></div>
  <h2 style="margin-top: 0; font-size: 28px; display: flex; align-items: center; gap: 10px;"><span style="font-size: 36px;">🎓</span> 共建计划</h2>
  <div style="padding-left: 10px; border-left: 3px solid rgba(33, 150, 243, 0.5);">
    <p style="font-size: 17px; line-height: 1.6; margin-bottom: 15px;">好久不见！距离全国高考还有 15 天，在此祝小朋友们金榜题名！</p>
    <p style="font-size: 17px; line-height: 1.6; margin-bottom: 15px;">距离本项目启动已有近一年时间，在下一个开学季即将来临之际，我们将对 AcWiki 进行新一轮的更新扩充。</p>
    <p style="font-size: 17px; line-height: 1.6;">后期我们会在频道中征集对特定板块的建议并汇总，项目主页稍后会同步更新，我们呼吁更多志愿者参与文档共建，共同打通高等教育的"最后一公里"<span style="color: #e91e63;">💗</span></p>
  </div>
  <div style="margin-top: 20px;">
    <a href="https://github.com/Ac-Wiki/AcWiKi/issues/new" style="display: inline-block; background: linear-gradient(45deg, #2196f3, #03a9f4); color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3); transition: all 0.3s ease; transform: translateY(0);">
      提交建议 <span style="display: inline-block; margin-left: 5px;">→</span>
    </a>
  </div>
</div>

<div style="position: relative; height: 60px; margin: 50px 0; text-align: center;">
  <div style="height: 2px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.01)); margin: 30px 10%"></div>
  <div style="height: 1px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.05), rgba(0,0,0,0.01)); margin: 8px 5%"></div>
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 0 20px;">
    <span style="color: #999; font-size: 24px; display: inline-block;">✦</span>
  </div>
</div>

<h2 id="声明" style="display: inline-block; border-bottom: 2px solid #2196f3; padding-bottom: 5px; font-size: 28px;">🔊 声明</h2>

<div class="declaration-section" style="padding: 20px; background: linear-gradient(to right, rgba(33, 150, 243, 0.05), rgba(33, 150, 243, 0.02)); border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
  <div class="declaration-item" style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #2196f3; background-color: rgba(255,255,255,0.7); border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-size: 16px; line-height: 1.6;"><span style="color: #2196f3; font-weight: bold;">1.1.</span> 本项目完全为自发组织的公益项目，我们随时欢迎您的参与和使用，并对您的付出与建议表达衷心的感谢</p>
  </div>
  
  <div class="declaration-item" style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #2196f3; background-color: rgba(255,255,255,0.7); border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-size: 16px; line-height: 1.6;"><span style="color: #2196f3; font-weight: bold;">1.2.</span> 本项目英文名称 AcWiki 中，Ac 为 Academy（学术）的简称，Wiki 意为百科，本项目与"AcFun",信息奥赛中的"Accepted"等并无主观或客观上的联系</p>
  </div>
  
  <div class="declaration-item" style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #2196f3; background-color: rgba(255,255,255,0.7); border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-size: 16px; line-height: 1.6;"><span style="color: #2196f3; font-weight: bold;">1.3.</span> 本项目更新的信息 / 内容 / 文件等资料，可能来自贡献者本人或各类已有书籍 / 资料 / 文献，同时会积极的在互联网中引用，我们秉持尊重原则，会积极标明引用情况，引用情况请参阅相关页面注释</p>
  </div>
  
  <div class="declaration-item" style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #2196f3; background-color: rgba(255,255,255,0.7); border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-size: 16px; line-height: 1.6;"><span style="color: #2196f3; font-weight: bold;">1.4.</span> 这是一个用爱发电的项目，因此更新频率及生命周期可能无法保证，我们特别呼吁愿意贡献 / 有过 Wiki 编辑经验 / 各行业专家参与到项目的维护与完善中，本着自愿参与原则，我们将对贡献者在 GitHub Profile 页面展示致谢</p>
  </div>
  
  <div class="declaration-item" style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #2196f3; background-color: rgba(255,255,255,0.7); border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-size: 16px; line-height: 1.6;"><span style="color: #2196f3; font-weight: bold;">1.5.</span> 频道关联群组<a href="https://t.me/AcFourm" style="color: #2196f3; text-decoration: none; border-bottom: 1px dashed #2196f3;">TG</a>/<a href="https://qm.qq.com/q/rmBHBLvpew" style="color: #2196f3; text-decoration: none; border-bottom: 1px dashed #2196f3;">QQ</a> 用作维护组与用户交流的场所，欢迎建言献策，友好沟通，群内交流并无过多约束，请理性讨论</p>
  </div>
  
  <div class="declaration-item" style="padding: 10px; border-left: 3px solid #2196f3; background-color: rgba(255,255,255,0.7); border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-size: 16px; line-height: 1.6;"><span style="color: #2196f3; font-weight: bold;">1.6.</span> 本项目并不局限于此平台，考虑到使用者群体，我们后期会积极建立各式网站，并会迁移已有的更新内容</p>
  </div>
</div>

<div style="position: relative; height: 60px; margin: 50px 0; text-align: center;">
  <div style="height: 2px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.01)); margin: 30px 10%"></div>
  <div style="height: 1px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.05), rgba(0,0,0,0.01)); margin: 8px 5%"></div>
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 0 20px;">
    <span style="color: #999; font-size: 24px; display: inline-block;">✦</span>
  </div>
</div>

<h1 id="目录" style="display: inline-block; border-bottom: 2px solid #4caf50; padding-bottom: 5px; font-size: 32px;">🎯 目录</h1>

<h2 class="section-heading" style="padding-left: 15px; border-left: 4px solid #ff9800; margin: 40px 0 20px 0; position: relative; font-size: 26px;">
  <span style="background: linear-gradient(45deg, #ff9800, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🌟 生活经验</span>
  <div style="position: absolute; bottom: -6px; left: 15px; width: 60px; height: 2px; background: linear-gradient(to right, #ff9800, transparent);"></div>
</h2>

<div class="content-category" style="background: linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 235, 59, 0.05) 100%); padding: 20px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); margin-bottom: 30px;">
  <h3 style="color: #ff9800; display: flex; align-items: center; gap: 8px; margin-top: 5px; font-size: 20px;">
    <span style="font-size: 20px;">📚</span> 
    <span>学生优惠</span>
  </h3>
  <ul style="list-style-type: none; padding-left: 20px; margin: 15px 0;">
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #4caf50; font-size: 18px; margin-right: 8px;">✅</span> 
      <a href="./01-student-discounts/student-discounts.md" style="color: #333; text-decoration: none; border-bottom: 1px dashed #ff9800; font-weight: 500;">学生优惠</a>
    </li>
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
      <span style="font-weight: 500; color: #555;">编程 / 开发 / 新质生产力</span>
    </li>
  </ul>
  <h3 style="color: #ff9800; display: flex; align-items: center; gap: 8px; margin-top: 25px; font-size: 20px;">
    <span style="font-size: 20px;">🤝</span> 
    <span>圆梦帮扶</span>
  </h3>
  <ul style="list-style-type: none; padding-left: 20px; margin: 15px 0;">
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #4caf50; font-size: 18px; margin-right: 8px;">✅</span> 
      <a href="./08-Dream-Realization-Assistance/scholarship.md" style="color: #333; text-decoration: none; border-bottom: 1px dashed #ff9800; font-weight: 500;">奖/助学金申请</a>
    </li>
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
      <span style="font-weight: 500; color: #555;">勤工俭学申请</span>
    </li>
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #4caf50; font-size: 18px; margin-right: 8px;">✅</span> 
      <a href="./01-student-discounts/student-assistance/national-student-loan-FAQ.md" style="color: #333; text-decoration: none; border-bottom: 1px dashed #ff9800; font-weight: 500;">国家助学贷款（常见问题）</a>
    </li>
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
      <span style="font-weight: 500; color: #555;">大学生创业扶持</span>
    </li>
  </ul>

  <h3 style="color: #555;">🏫 校园生活</h3>
  <ul style="list-style-type: none; padding-left: 20px;">
    <li style="margin-bottom: 8px;">🚧 <strong>开学第 0 课</strong>（宿舍购置物品 / 所学专业的培养计划 / 绩点、学分计算方式 / 大学课表工作方式（常用课表软件））</li>
    <li style="margin-bottom: 8px;">🚧 <strong>选修课 / 必修课 / 兴趣（个性化）课 / 网络课程</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>签到考勤</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>转专业须知</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>辅修 / 第二学位须知</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>如何申请学生邮箱</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>图书馆</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>化解矛盾</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>人际关系</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>脱单技巧</strong></li>
  </ul>

  <h3 style="color: #555;">🌎 社会生活</h3>
  <ul style="list-style-type: none; padding-left: 20px;">
    <li style="margin-bottom: 8px;">🚧 <strong>五险一金（大章节）</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>储 / 蓄款、信用卡、贷款须知</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>（第一份工作）就业指导</strong>（如何查找用人单位 / 企业、工作岗位薪资 / 福利 / 休假评估指南 / 名词解释（年终奖等））</li>
    <li style="margin-bottom: 8px;">🚧 <strong>如何乘坐高铁、飞机</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>国家计划</strong>（西部计划、支教计划）</li>
    <li style="margin-bottom: 8px;">🚧 <strong>服兵役须知</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>大学生创业政策、国家补助、创业贷款</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>保持健康</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>出境须知</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>实习/入职</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>正确维权</strong></li>
  </ul>
</div>

<h2 class="section-heading" style="padding-left: 15px; border-left: 4px solid #2196f3; margin: 40px 0 20px 0; position: relative; font-size: 26px;">
  <span style="background: linear-gradient(45deg, #2196f3, #03a9f4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🔬 学术技能</span>
  <div style="position: absolute; bottom: -6px; left: 15px; width: 60px; height: 2px; background: linear-gradient(to right, #2196f3, transparent);"></div>
</h2>

<div class="content-category" style="background: linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(3, 169, 244, 0.05) 100%); padding: 20px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); margin-bottom: 30px;">
  <h3 style="color: #2196f3; display: flex; align-items: center; gap: 8px; margin-top: 5px; font-size: 20px;">
    <span style="font-size: 20px;">📘</span> 
    <span>方法论</span>
  </h3>
  <ul style="list-style-type: none; padding-left: 20px; margin: 15px 0;">
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #4caf50; font-size: 18px; margin-right: 8px;">✅</span> 
      <a href="./02-search-platforms/search-platforms.md" style="color: #333; text-decoration: none; border-bottom: 1px dashed #2196f3; font-weight: 500;">高效检索信息/获取资源</a>
    </li>
    
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
        <span style="font-weight: 500; color: #555;">第一篇论文</span>
      </div>
      <div style="background-color: #f9f9f9; padding: 12px; border-radius: 8px; margin-top: 5px; border-left: 3px solid #03a9f4;">
        <details style="cursor: pointer;">
          <summary style="font-weight: 500; color: #03a9f4; padding: 5px 0;">查看子项目列表</summary>
          <ul style="list-style-type: none; padding-left: 10px; margin-top: 10px;">
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">学术规范与学术不端行为解释</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">论文是什么，有哪些分类</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">正确设置格式</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">怎样获取参考文献</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">论文组成部分详解</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">如何丰富论文—使用多种工具绘制图表</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">论文查重率 / AIGC 率检测与降低</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">审阅与修订</span>
            </li>
            <li style="margin-bottom: 8px; padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">国内外著名期刊简介、分区、投稿方式</span>
            </li>
            <li style="padding: 5px; background-color: rgba(255, 255, 255, 0.7); border-radius: 5px;">
              <span style="color: #ff9800; font-size: 14px; margin-right: 8px;">🚧</span> 
              <span style="color: #555;">其他学术名词解释：什么是影响因子，论文审稿流程，作者顺序与影响</span>
            </li>
          </ul>
        </details>
      </div>
    </li>
    
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #4caf50; font-size: 18px; margin-right: 8px;">✅</span> 
      <a href="./07-computer-basic/computer-basic.md" style="color: #333; text-decoration: none; border-bottom: 1px dashed #2196f3; font-weight: 500;">计算机基础技能</a>
    </li>
    
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
      <span style="font-weight: 500; color: #555;">运用新质生产力</span>
    </li>
    
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
      <span style="font-weight: 500; color: #555;">合理规划时间</span>
    </li>
    
    <li style="margin-bottom: 12px; transition: transform 0.2s ease; padding: 6px 10px; border-radius: 8px; background-color: rgba(255, 255, 255, 0.7);">
      <span style="color: #ff9800; font-size: 18px; margin-right: 8px;">🚧</span> 
      <span style="font-weight: 500; color: #555;">高效学习技巧</span>
    </li>
  </ul>

  <h3 style="color: #555;">🛠 工具平台</h3>
  <ul style="list-style-type: none; padding-left: 20px;">
    <li style="margin-bottom: 8px;">🚧 <strong>获取资源</strong></li>
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/tools.md"><strong>效率优化</strong></a></li>
    <li style="margin-bottom: 8px;">🚧 <strong>学术网站</strong></li>
    <li style="margin-bottom: 8px;">🚧 <strong>数据检索</strong></li>
  </ul>

  <h4 style="color: #666; margin-left: 15px;">🔒 网络安全</h4>
  <ul style="list-style-type: none; padding-left: 35px;">
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/Android/加密通讯.md"><strong>通讯安全</strong></a></li>
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/cyber%20security/password_manage1.md"><strong>密码管理</strong></a></li>
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/cyber%20security/Authenticator.md"><strong>账号安全</strong></a></li>
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/cyber%20security/privacy.md"><strong>隐私保护</strong></a></li>
  </ul>

  <h4 style="color: #666; margin-left: 15px;">🏃 校园应用</h4>
  <ul style="list-style-type: none; padding-left: 35px;">
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/qi-ji-yin-qiao/campus-running.md"><strong>风驰电掣</strong></a></li>
    <li style="margin-bottom: 8px;">✅ <a href="./03-tools/qi-ji-yin-qiao/pointless-courses.md"><strong>珍惜时间</strong></a></li>
  </ul>

  <h3 style="color: #555;">🏆 考赛介绍</h3>
  <ul style="list-style-type: none; padding-left: 20px;">
    <li style="margin-bottom: 8px;">🚧 <strong>学科等级</strong></li>
    <li style="margin-bottom: 8px;">✅ <a href="./04-study/certification.md"><strong>专业技能</strong></a></li>
    <li style="margin-bottom: 8px;">✅ <a href="./04-study/study.md"><strong>考试竞赛</strong></a></li>
    <li style="margin-bottom: 8px;">✅ <a href="./04-study/yanzhao.md"><strong>研招</strong></a></li>
  </ul>
</div>

<h2 style="padding-left: 15px; border-left: 4px solid #9c27b0; margin: 30px 0 15px 0; position: relative;">
  <span style="font-size: 26px; background: linear-gradient(45deg, #9c27b0, #673ab7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">⏳ 待补充</span>
  <div style="position: absolute; bottom: -10px; left: 15px; width: 50px; height: 2px; background: linear-gradient(to right, #9c27b0, transparent);"></div>
</h2>

<div style="padding: 20px; background-color: rgba(156, 39, 176, 0.05); border-radius: 12px; margin: 20px 0; text-align: center;">
  <p style="font-size: 16px; color: #666;">更多内容正在筹备中，欢迎加入共建！</p>
  <a href="https://github.com/Ac-Wiki/AcWiKi/issues/new" style="display: inline-block; margin-top: 10px; background: linear-gradient(45deg, #9c27b0, #673ab7); color: #fff; padding: 8px 20px; text-decoration: none; border-radius: 20px; font-size: 14px; font-weight: 500; box-shadow: 0 2px 10px rgba(156, 39, 176, 0.3);">
    <span>提出内容建议</span>
  </a>
</div>

<div style="position: relative; height: 60px; margin: 50px 0; text-align: center;">
  <div style="height: 2px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.01)); margin: 30px 10%"></div>
  <div style="height: 1px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.05), rgba(0,0,0,0.01)); margin: 8px 5%"></div>
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 0 20px;">
    <span style="color: #999; font-size: 24px; display: inline-block;">✦</span>
  </div>
</div>

<h1 id="引用与致谢" style="display: inline-block; border-bottom: 2px solid #e91e63; padding-bottom: 5px; font-size: 32px;">📎 引用与致谢</h1>

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  <div class="reference-card" style="flex: 1; min-width: 300px; max-width: 450px; background: linear-gradient(135deg, #fff9f9, #fff); padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(233, 30, 99, 0.1); border-top: 3px solid #e91e63; transition: all 0.3s ease; transform: translateY(0); &:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(233, 30, 99, 0.2); };">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #e91e63; display: flex; justify-content: center; align-items: center; margin-right: 15px;">
        <span style="font-size: 20px; color: white;">🙏</span>
      </div>
      <h3 style="margin: 0; font-size: 18px; color: #333;">方山厨子</h3>
    </div>
    <p style="margin: 0 0 15px 0; font-size: 15px; color: #666; line-height: 1.6;">
      <a href="https://b23.tv/YOrG3A5" style="color: #e91e63; text-decoration: none; border-bottom: 1px dashed #e91e63;">《成年人社会生活常识课》</a> - 提供了大量实用的社会生活知识，是本项目重要的参考资源。
    </p>
    <div style="text-align: right;">
      <a href="https://space.bilibili.com/274459325" style="display: inline-block; background: linear-gradient(45deg, #e91e63, #f06292); color: white; padding: 6px 12px; border-radius: 20px; text-decoration: none; font-size: 14px; box-shadow: 0 2px 8px rgba(233, 30, 99, 0.3);">
        访问主页 <span style="margin-left: 5px;">→</span>
      </a>
    </div>
  </div>
</div>

<div style="position: relative; height: 60px; margin: 50px 0; text-align: center;">
  <div style="height: 2px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.01)); margin: 30px 10%"></div>
  <div style="height: 1px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.05), rgba(0,0,0,0.01)); margin: 8px 5%"></div>
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 0 20px;">
    <span style="color: #999; font-size: 24px; display: inline-block;">✦</span>
  </div>
</div>

<h1 id="联系我们" style="display: inline-block; border-bottom: 2px solid #03a9f4; padding-bottom: 5px; font-size: 32px;">💁 联系我们</h1>

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 40px 0;">
  <a href="https://t.me/AcWiki" class="contact-button" style="text-decoration: none; background: linear-gradient(135deg, rgba(106, 27, 154, 0.8), rgba(74, 20, 140, 0.9)); color: white; display: flex; align-items: center; padding: 15px 25px; border-radius: 12px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(106, 27, 154, 0.3); transform: translateY(0);">
    <div style="width: 24px; height: 24px; margin-right: 12px;">
      <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.64,8.8c-0.15,1.58-0.8,5.42-1.13,7.19 c-0.14,0.75-0.41,1-0.68,1.03c-0.58,0.05-1.02-0.38-1.58-0.75c-0.88-0.57-1.39-0.94-2.24-1.5c-0.99-0.65-0.35-1.01,0.22-1.59 c0.15-0.15,2.71-2.48,2.76-2.69c0.01-0.03,0.01-0.12-0.05-0.17c-0.06-0.05-0.14-0.03-0.21-0.02c-0.09,0.02-1.49,0.95-4.22,2.79 c-0.4,0.27-0.76,0.41-1.08,0.4c-0.36-0.01-1.04-0.2-1.55-0.37c-0.63-0.2-1.12-0.31-1.08-0.66c0.02-0.18,0.27-0.36,0.74-0.55 c2.92-1.27,4.86-2.1,5.83-2.5c2.78-1.15,3.36-1.35,3.73-1.36C16.37,7.54,16.79,7.6,16.64,8.8z"/>
      </svg>
    </div>
    <div>
      <div style="font-weight: bold; font-size: 16px;">Telegram Channel</div>
      <div style="font-size: 14px; opacity: 0.9;">AcWiKi</div>
    </div>
  </a>
  
  <a href="https://t.me/AcFourm" class="contact-button" style="text-decoration: none; background: linear-gradient(135deg, rgba(255, 152, 0, 0.8), rgba(230, 81, 0, 0.9)); color: white; display: flex; align-items: center; padding: 15px 25px; border-radius: 12px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3); transform: translateY(0);">
    <div style="width: 24px; height: 24px; margin-right: 12px;">
      <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9,4c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8S13.42,4,9,4z M16,13h-3v3c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-3H8 c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h3V8c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3h3c0.55,0,1,0.45,1,1v0 C17,12.55,16.55,13,16,13z M20.5,4c-1.86,0-3.43,1.15-4.08,2.77C18.52,8.13,20,10.36,20,13c0,1.06-0.22,2.06-0.61,2.97 c0.8,0.6,1.77,0.97,2.83,1C23.81,17,25,15.81,25,14.22V7.78C25,5.97,23.36,4.5,21.53,4.5L20.5,4z"/>
      </svg>
    </div>
    <div>
      <div style="font-weight: bold; font-size: 16px;">Telegram Group</div>
      <div style="font-size: 14px; opacity: 0.9;">AcWiKi</div>
    </div>
  </a>
  
  <a href="https://qm.qq.com/q/WJI3hgBcm4" class="contact-button" style="text-decoration: none; background: linear-gradient(135deg, rgba(3, 169, 244, 0.8), rgba(0, 140, 220, 0.9)); color: white; display: flex; align-items: center; padding: 15px 25px; border-radius: 12px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(3, 169, 244, 0.3); transform: translateY(0);">
    <div style="width: 24px; height: 24px; margin-right: 12px;">
      <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.08 13.8c-.4.28-.92.48-1.5.62-.58.14-1.18.21-1.79.21-.92 0-1.73-.18-2.44-.54-.7-.37-1.25-.88-1.63-1.52-.38-.65-.57-1.4-.57-2.24 0-.98.23-1.82.7-2.54.47-.71 1.1-1.26 1.9-1.65.79-.39 1.68-.58 2.66-.58.58 0 1.16.08 1.74.25.59.16 1.09.39 1.5.68h.01v-2.21l-6 1.36v2.2c0 .075.05.15.15.22.1.08.21.11.33.11h.25V11.7c.27-.08.52-.12.76-.12.43 0 .83.08 1.2.23.36.16.68.37.94.64.27.28.47.59.62.95.15.35.22.73.22 1.12 0 .48-.1.91-.3 1.28z"/>
      </svg>
    </div>
    <div>
      <div style="font-weight: bold; font-size: 16px;">QQ群</div>
      <div style="font-size: 14px; opacity: 0.9;">860675581</div>
    </div>
  </a>
</div>

<div style="margin: 40px auto 20px; max-width: 600px; text-align: center;">
  <p style="font-size: 16px; color: #666; line-height: 1.6;">有问题、建议或想参与贡献？欢迎通过以上渠道联系我们，或在 GitHub 上提交 Issue！</p>
  <a href="https://github.com/Ac-Wiki/AcWiKi/issues/new" style="display: inline-block; background: linear-gradient(45deg, #333, #666); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; margin-top: 10px; font-weight: 500; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
    <span style="display: inline-block; margin-right: 8px;">
      <svg fill="#ffffff" height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
      </svg>
    </span>
    提交 Issue
  </a>
</div>

<div align="center" style="margin: 30px 0;">
  <a href="https://star-history.com/#Ac-Wiki/AcWiKi&Date">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Ac-Wiki/AcWiKi&type=Date&theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Ac-Wiki/AcWiKi&type=Date" />
      <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Ac-Wiki/AcWiKi&type=Date" style="max-width: 100%; height: auto;"/>
    </picture>
  </a>
</div>

<div style="text-align: center; margin: 60px 0 20px; position: relative;">
  <h2 style="display: inline-block; position: relative; color: #333; font-size: 28px; padding-bottom: 10px;">
    <span style="background: linear-gradient(45deg, #9c27b0, #03a9f4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">贡献/参与者</span>
    <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60px; height: 3px; background: linear-gradient(to right, #9c27b0, #03a9f4);"></div>
  </h2>
</div>

<div style="background: linear-gradient(135deg, rgba(156, 39, 176, 0.05) 0%, rgba(3, 169, 244, 0.05) 100%); padding: 30px; border-radius: 16px; margin: 20px auto; max-width: 90%; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
  <p style="text-align: center; margin-bottom: 30px; font-size: 17px; color: #555; line-height: 1.6;">感谢所有参与到开发/测试中的朋友们，是大家的帮助让 AcWiKi 越来越好！ <span style="color: #ff5252;">(*´▽｀) ノノ</span></p>

  <div align="center" style="position: relative; padding: 10px; background-color: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
    <a href="https://github.com/Ac-Wiki/AcWiKi/graphs/contributors" style="display: block;">
      <img src="https://contributors-img.web.app/image?repo=Ac-Wiki/AcWiKi&max=105&columns=15" alt="贡献者" style="max-width: 100%; height: auto; border-radius: 8px;"/>
    </a>
    <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background-color: #9c27b0; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 14px; box-shadow: 0 4px 10px rgba(156, 39, 176, 0.3);">
      贡献者墙
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 30px;">
    <a href="https://github.com/Ac-Wiki/AcWiKi/blob/main/CONTRIBUTING.md" style="display: inline-block; background: linear-gradient(45deg, #9c27b0, #03a9f4); color: white; padding: 10px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3); transition: all 0.3s ease;">
      成为贡献者 <span style="margin-left: 5px;">→</span>
    </a>
  </div>
</div>

<div style="position: relative; height: 60px; margin: 50px 0; text-align: center;">
  <div style="height: 2px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.01)); margin: 30px 10%"></div>
  <div style="height: 1px; background: linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.05), rgba(0,0,0,0.01)); margin: 8px 5%"></div>
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 0 20px;">
    <span style="color: #999; font-size: 24px; display: inline-block;">✦</span>
  </div>
</div>

<h1 id="本地部署" style="display: inline-block; border-bottom: 2px solid #4caf50; padding-bottom: 5px; font-size: 32px;">🖥️ 本地部署</h1>

<div class="deployment-guide" style="background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(33, 150, 243, 0.05) 100%); padding: 30px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
  <h2 style="color: #2196f3; font-size: 24px; display: flex; align-items: center; margin-top: 0;">
    <span style="background: linear-gradient(45deg, #4caf50, #2196f3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">5.1 克隆仓库</span>
  </h2>
  <p style="font-size: 16px; line-height: 1.6;">确保您安装了 git，可于<a href="https://git-scm.com/" style="color: #2196f3; text-decoration: none; border-bottom: 1px dashed #2196f3;">Git官网</a>下载</p>
  <p style="font-size: 16px; line-height: 1.6;">在终端执行以下命令克隆仓库：</p>
  <pre style="background-color: #263238; padding: 15px; border-radius: 8px; overflow-x: auto; color: #eeffff; border-left: 4px solid #4caf50; margin: 15px 0;"><code style="font-family: 'Fira Code', monospace;">git clone https://github.com/Ac-Wiki/AcWiKi.git</code><span style="position: absolute; right: 10px; top: 5px; font-size: 12px; color: #607d8b;">bash</span></pre>

  <h2 style="color: #2196f3; font-size: 24px; display: flex; align-items: center; margin-top: 20px;">
    <span style="background: linear-gradient(45deg, #4caf50, #2196f3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">5.2 初始化虚拟环境</span>
  </h2>
  <p style="font-size: 16px; line-height: 1.6;">进入仓库根目录，使用以下命令创建虚拟环境</p>
  <pre style="background-color: #263238; padding: 15px; border-radius: 8px; overflow-x: auto; color: #eeffff; border-left: 4px solid #4caf50; margin: 15px 0;"><code style="font-family: 'Fira Code', monospace;">python3 -m venv venv</code><span style="position: absolute; right: 10px; top: 5px; font-size: 12px; color: #607d8b;">bash</span></pre>

  <div style="margin: 20px 0; display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 300px; background-color: rgba(255, 255, 255, 0.7); padding: 15px; border-radius: 8px; border-top: 3px solid #ff9800;">
      <p style="font-weight: bold; color: #ff9800;"><svg style="width:20px;height:20px;vertical-align:middle;margin-right:5px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#ff9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#ff9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> Linux / macOS 用户</p>
      <p style="font-size: 16px; line-height: 1.6;">在终端中执行以下命令进入虚拟环境：</p>
      <pre style="background-color: #263238; padding: 15px; border-radius: 8px; overflow-x: auto; color: #eeffff; border-left: 4px solid #ff9800; margin: 15px 0;"><code style="font-family: 'Fira Code', monospace;">source venv/bin/activate</code><span style="position: absolute; right: 10px; top: 5px; font-size: 12px; color: #607d8b;">bash</span></pre>
    </div>

    <div style="flex: 1; min-width: 300px; background-color: rgba(255, 255, 255, 0.7); padding: 15px; border-radius: 8px; border-top: 3px solid #03a9f4;">
      <p style="font-weight: bold; color: #03a9f4;"><svg style="width:20px;height:20px;vertical-align:middle;margin-right:5px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#03a9f4" stroke-width="2"/>
        <path d="M6 8H10" stroke="#03a9f4" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 8H18" stroke="#03a9f4" stroke-width="2" stroke-linecap="round"/>
        <path d="M6 12H10" stroke="#03a9f4" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 12H18" stroke="#03a9f4" stroke-width="2" stroke-linecap="round"/>
        <path d="M6 16H10" stroke="#03a9f4" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 16H18" stroke="#03a9f4" stroke-width="2" stroke-linecap="round"/>
      </svg> Windows 用户</p>
      <p style="font-size: 16px; line-height: 1.6;">在 PowerShell 中执行以下命令进入虚拟环境：</p>
      <pre style="background-color: #263238; padding: 15px; border-radius: 8px; overflow-x: auto; color: #eeffff; border-left: 4px solid #03a9f4; margin: 15px 0;"><code style="font-family: 'Fira Code', monospace;">venv\Scripts\activate</code><span style="position: absolute; right: 10px; top: 5px; font-size: 12px; color: #607d8b;">powershell</span></pre>
    </div>
  </div>

  <h2 style="color: #2196f3; font-size: 24px; display: flex; align-items: center; margin-top: 20px;">
    <span style="background: linear-gradient(45deg, #4caf50, #2196f3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">5.3 安装依赖</span>
  </h2>
  <p style="font-size: 16px; line-height: 1.6;">仓库根目录下有<code style="background-color: #f1f1f1; padding: 2px 4px; border-radius: 3px; font-family: 'Fira Code', monospace;">requirements.txt</code>，在虚拟环境中执行以下命令安装依赖：</p>
  <pre style="background-color: #263238; padding: 15px; border-radius: 8px; overflow-x: auto; color: #eeffff; border-left: 4px solid #4caf50; margin: 15px 0;"><code style="font-family: 'Fira Code', monospace;">pip install -r requirements.txt</code><span style="position: absolute; right: 10px; top: 5px; font-size: 12px; color: #607d8b;">bash</span></pre>

  <h2 style="color: #2196f3; font-size: 24px; display: flex; align-items: center; margin-top: 20px;">
    <span style="background: linear-gradient(45deg, #4caf50, #2196f3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">5.4 构建本地网页</span>
  </h2>
  <p style="font-size: 16px; line-height: 1.6;">执行以下命令：</p>
  <pre style="background-color: #263238; padding: 15px; border-radius: 8px; overflow-x: auto; color: #eeffff; border-left: 4px solid #4caf50; margin: 15px 0;"><code style="font-family: 'Fira Code', monospace;">mkdocs serve</code><span style="position: absolute; right: 10px; top: 5px; font-size: 12px; color: #607d8b;">bash</span></pre>
  
  <div style="background-color: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50; margin-top: 20px;">
    <p style="font-size: 16px; line-height: 1.6; margin: 0;">一般情况下，将会部署在本地的<code style="background-color: #f1f1f1; padding: 2px 4px; border-radius: 3px; font-family: 'Fira Code', monospace;">8000</code>端口，可根据终端输出判断端口号。访问 <code style="background-color: #f1f1f1; padding: 2px 4px; border-radius: 3px; font-family: 'Fira Code', monospace;">http://127.0.0.1:端口号</code> 即可查看本地网页。</p>
  </div>
</div>

<!-- 页脚 -->
<footer style="margin-top: 80px; padding-top: 30px; border-top: 1px solid #eee; text-align: center;">
  <div style="color: #666; font-size: 14px; margin: 20px 0;">
    <p>最后更新于: 2025年5月27日</p>
    <p>© 2024-2025 AcWiki 团队 版权所有</p>
  </div>
</footer>
