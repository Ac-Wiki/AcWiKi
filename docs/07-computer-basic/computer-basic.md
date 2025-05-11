+???+ info "计算机基础技能"

    作为大学生，无论是设计、编程、看课件，还是作业，游戏，写论文，都会或多或少地与计算机打交道。本篇介绍了一些计算机的基础技能，希望能够帮助到你。

    欢迎大家指正或补充～

# **计算机基础技能**

## 选购与配置

电子产品的迭代速度是非常快的，正如摩尔定律所说，“集成电路上可容纳的晶体管数目，每隔约两年便会增加一倍”[<sup>1</sup>](https://zh.wikipedia.org/zh-hans/%E6%91%A9%E5%B0%94%E5%AE%9A%E5%BE%8B)。因此必须要认识到的是：你所购买的电脑经过很短的一段时间后便会迅速贬值，性能也会与最新的电脑拉开非常大的差距。

有一大误区是，**“越贵、越好看**（这里指的是有各种好看的灯光（RGB）以及电脑的其他外饰）**的电脑性能越高”**，这实际上是不正确的。

??? tip

    例如：华为的MateBook X Pro 酷睿 Ultra 微绒典藏版，售价为11199起，但其内部的锐炫显卡远远不如5000+价位就能买到的NVIDIA Geforce RTX 4060这样的独显。

**不推荐大学生购买台式机** 1. 台式机耗电量更大，不适合寝室内使用。2. 台式机过于笨重，便携性太低。

如果在预算足够 ~~家里有矿~~ 的情况下，可以尽量冲击自己喜欢的更高配置的电脑。一般而言，有关于电脑的参数，越大代表性能越高、存储空间更大、更先进和强大。如果按日常需求而言，一台 3000 左右的办公本是不错的选择；而如果有 AI 计算、游戏等的需求，那么 6000 左右的、带有比较好的显卡的游戏本是更佳的搭配。

### <del>家里有矿</del>

<del>既要又要，这里推荐高性能台式机 + 续航高（轻薄本）既满足游戏/ai 等高性能场景，也可以满足图书馆等复杂的外出场景。满足全场景。**（梦寐以求的场景）**</del>

### Q&A

> 为什么我购买的 1TB 固态硬盘，到手发现格式化后只有约 900GB？为什么我购买的 16GB 内存则不会像我的 16GB U 盘一样显示为约 14.9GB？

操作系统计算容量时使用的单位虽然显示为**GB**（Giga Byte），实际为**GiB**（Giga Binary Byte）。

我们规定如下：

1. 1 Giga Byte = 1,000,000,000 Bytes（1\*10<sup>9</sup>）
2. 1 Giga Binary Byte = 1,073,741,824 Bytes（1024<sup>3</sup>）

由于硬盘生产厂商生产硬盘时的计数单位为**GB**，而计算机系统统计时计数单位为**GiB**，导致最后统计出的空间会存在差异。另外，由于系统盘会有一定的隐藏空间（存放系统启动程序（如 Windows Boot Manager，GRUB 等等）），实际挂载在系统上的磁盘空间会小一些。

内存由于需要直接与 CPU 交互，因此必须使用 2 的倍数来计数，所以 16GB 内存实际为**16GiB**内存。因此不会出现变成 14.9GB 左右。然而，由于系统需要为硬件和系统基本运行预留存储空间（为硬件保留的内存），实际可用空间小于 16GB，这是正常的。

## 计算机操作系统

下面列举常见的主流计算机操作系统

---

#### <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Windows_logo_and_wordmark_-_2021.svg" height="90" alt=""><br> [ **Microsoft Windows**](https://www.microsoft.com/zh-hk/windows/?r=1)

##### Microsoft Windows 的重大版本更新历史

<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Suite_des_versions_de_Windows.svg"  height="250" alt=""><br>

**Microsoft Windows**是最广泛使用的个人电脑操作系统，由**微软**开发。它有多个版本，包括我们熟知的 Windows 10 和 Windows 11。

<br>

##### Windows 1.0/2.0/3.0

1985 年 11 月 20 日，微软推出了历史上第一款视窗操作系统——Windows 1.0
早期的 Windows 并不是一个真正意义上的操作系统，它更像是在 MS-DOS 基础上运行的一个图形环境，是微软与苹果的 Macintosh 竞争的产物。
<img src="https://raw.githubusercontent.com/Ac-Wiki/AcWiKi/main/docs/07-computer-basic/resources/img1.png" alt=""><br>

在 Intel 推出 Intel 80286 后，微软适时推出了 Windows/286，在 DOS 程序的基础上添加了对**保护模式**的支持。自 Windows 3.0 开始，Windows 逐步增强了对**多语言**的支持，由此还衍生出一个仅有简体中文的 Windows 版本：**_Windows 3.02_**。

##### Windows 9x & Windows NT

<img src="https://raw.githubusercontent.com/Ac-Wiki/AcWiKi/main/docs/07-computer-basic/resources/img2.png" height="250" alt=""><br>
<img src="https://raw.githubusercontent.com/Ac-Wiki/AcWiKi/main/docs/07-computer-basic/resources/img3.png" height="250" alt=""><br>

为了与 Macintosh 在个人电脑领域进行竞争，在 20 世纪的最后几年内，微软相继推出了 Windows 95 / 98 / Me 等被称为**Windows 9x**的系统，以及 Windows NT 3.1/ NT 3.5/ NT 4.0/ 2000 等被称为**Windows NT**的系统。其中，Windows 9x 被认为是 DOS 内核的延续，复杂的混合 16 位/32 位内核，薄弱的安全机制，不完全的内存保护等等导致 Windows 9x 极其不稳定。而基于 OS/2 新技术，拥有完整 32 位内核的 Windows NT 具有更好的安全性和稳定性。在长期的发展中，微软抛弃了以往的 Windows 9x 内核。

##### **Windows XP**

<img src="https://raw.githubusercontent.com/Ac-Wiki/AcWiKi/main/docs/07-computer-basic/resources/img4.png"  height="250" alt=""><br>
步入 21 世纪，微软推出了迄今为止最为成功的操作系统版本——**Windows XP**。它兼具 NT 的安全稳定以及 9x 系列（尤其是 Windows Me）的娱乐性。Windows XP 长期霸占计算机操作系统市场，直到 2014 年 4 月 8 日微软宣布停止支持 Windows XP 才逐渐衰落。

在 Windows XP 后，微软也发布了诸如 Windows Vista、Windows 7、Windows 8/8.1、Windows 10 和 Windows 11 等新版本。目前主流市场上为 Windows 10 和 Windows 11，其中 Windows 10 的市场份额更大。[<sup>1</sup>](https://gs.statcounter.com/windows-version-market-share/desktop/worldwide/) Windows 10 的占用更小，而[Windows 11](https://zh.wikipedia.org/wiki/Windows_11)对新的处理器（尤其是 Intel 12 代及以后推出大小核）、新的内存（DDR5）支持更好。可以根据自己的电脑类型、性能和需求选择适合自己的系统。

---

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/MacOS_wordmark_%282017%29.svg/1920px-MacOS_wordmark_%282017%29.svg.png" width="100" alt="">

#### **macOS**

<img src="https://www.apple.com/newsroom/images/2023/09/macos-sonoma-is-available-today/article/Apple-macOS-Sonoma-3up_big.jpg.large.jpg"  height="100" alt=""><br>
[**macOS**](https://zh.wikipedia.org/wiki/MacOS)是**苹果公司**为其 Mac 系列电脑开发的操作系统。macOS 以其稳定性和易用性而闻名。

早期的 Mac OS 是苹果基于 Lisa OS 进行研发的，作为首个拥有图形化界面的个人电脑操作系统，Lisa 并没有 Macintosh 成功。苹果基于“将个人电脑变成家电”的理念设计了早期的 Mac OS（在 Mac OS 7.0 以前被称为 System Software）。史蒂夫·乔布斯离职后，苹果一度陷入危机。为了挽救，苹果决定收购乔布斯创立的 NeXT 公司，通过这种方式使得乔布斯回到苹果。乔布斯回到苹果后着手于改造 Mac OS，基于 NeXTSTEP 的设计，Mac OS 逐渐走向成熟。到了 Mac OS 9.0 后，苹果决定放弃原有的 Mac OS，转向以 Mach 为基础的 XNU 内核设计的 Darwin 新底层，从而使得 Mac OS 发生了本质上的不同，苹果将其称为 Mac OS X（2012～2015 年间被称为 OS X，而 2015 年以后则称为 macOS），而 9.0 以前的版本则被称为 Classic Mac OS。

---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png" height="50" alt=""> <br>

#### **Linux**

[Linux](https://zh.wikipedia.org/wiki/Linux)是一种自由和开放源码的类 UNIX 操作系统。该操作系统的内核由林纳斯·托瓦兹在 1991 年 10 月 5 日首次发布，再加上用户空间的应用程序之后，就成为了 Linux 操作系统。Linux 也是自由软件和开放源代码软件发展中最著名的例子。只要遵循 GNU 通用公共许可证（GPL），任何个人和机构都可以自由地使用 Linux 的所有底层源代码，也可以自由地修改和再发布。大多数 Linux 系统还包括像提供 GUI 的 X Window 之类的程序。除了一部分专家之外，大多数人都是直接使用 Linux 发行版，而不是自己选择每一样组件或自行设置。
Linux 严格来说是单指操作系统的内核，因操作系统中包含了许多用户图形接口和其他实用工具。如今 Linux 常用来指基于 Linux 的完整操作系统，内核则改以 Linux 内核称之。由于这些支持用户空间的系统工具和库主要由理查德·斯托曼于 1983 年发起的 GNU 计划提供，自由软件基金会提议将其组合系统命名为 GNU/Linux，但 Linux 不属于 GNU 计划，这个名称并没有得到社群的一致认同。
通常情况下，Linux 被打包成供个人计算机和服务器使用的 Linux 发行版，一些流行的主流 Linux 发布版，包括 Debian（及其派生版本 Ubuntu、Linux Mint）、Fedora（及其相关版本 Red Hat Enterprise Linux）和 openSUSE 等。

#### <img src="https://github.com/user-attachments/assets/8a9fbed4-7aa0-4d29-ac8f-4e5fe1f62cf4" height="50" alt=""> <br> **Chrome OS**

<img src="https://github.com/user-attachments/assets/0afcd79e-6cca-4bc0-9bf9-59303dbbbee1" height="100" alt=""><br>
ChromeOS，前称 Chrome OS，是由 Google 设计基于 Linux 内核的操作系统，并使用 Google Chrome 浏览器作为其主要用户界面。因此，Chrome OS 主要支持 Web 应用程序，2016 年起开始陆续兼容 Android 应用程序（可通过 Google Play 商店下载）和 Linux 应用程序。

---

## 下载软件

使用计算机势必会用到大量软件，但是在杂乱无章的互联网上，下载来自不明软件源的软件会给自己的机器带来风险。

### 软件下载安全的方式

目前诸如 Linux（软件包管理器），macOS（AppStore）等系统，由于其具有特定的软件下载方式，所以不容易下载到流氓软件。然而，由于 Windows 开放兼容的特性，导致从 Windows 9x 时代开始流氓软件就严重泛滥。这里推荐官方的、安全的下载方式以及那些不安全的软件源。

#### 安全的下载方式

1. 官网：通过搜索引擎（参考[搜索平台](../02-search-platforms/search-platforms.md)以获取更加详尽的描述）搜索该软件的官网，从而获得安装程序。
2. GitHub：多数开源软件在 GitHub 都有自己的官方仓库，你可以通过在 GitHub 上搜索获取这些开源软件已经编译好的安装程序或者尝试自己编译安装。
3. 软件包管理器（如 winget，apt，pacman，yum 等等）：通过软件包管理器，你可以仅靠一条指令就能直接从镜像源获取安装。
4. 针对 macOS：App Store 由苹果提供软件源，因此相对安全。
5. 终极大招——应用商店：因为百度和 bing 会把广告位放到前面，然后有一些人把网站做的比真正的官网还真，下载下来打开之后才发现自己掉入了“P2P 下崽器”里了。所以，如果你个人以为你对官网的分辨不是特别清楚的话，这里更推荐使用应用商店下载相关软件；这里只推荐：Microsoft store（一般情况下你的电脑会自带这个软件）和 [联想应用商店](https://lestore.lenovo.com/) 这样在大部分情况下你是不会在遇到类似"P2P 下崽器"之类的了

### 软件 Hall of Shame

#### 2345

臭名昭著的 2345 及 2345 全家桶，自 2005 年开始通过制作盗版 Windows XP 以及捆绑在其他安装包的行为进行传播。安装后将自己的内核写入注册表和系统内核程序，甚至在安全模式下也无法避免加载 2345 的程序。（可参见视频：【2345 到底有多流氓？又该如何彻底清除？】https://www.bilibili.com/video/BV13L4y1s7pF）

## 数据备份与安全

“煎蛋🍳不能放在一个篮子里”需要个人的重要数据进行备份，有无数的可能导致你的数据丢失<dr>
(软件：误删/被安全系统删除/被巨硬【微软】吃掉了/被[Ciallo～(∠·ω< )⌒★](https://mzh.moegirl.org.cn/%E5%9B%A0%E5%B9%A1%E5%B7%A1#%E7%9B%B8%E5%85%B3) 掉了
硬件：洗衣机/丢失/芯片断裂/等等）
)

## 参考链接

https://zh.wikipedia.org/wiki/Linux
https://zh.wikipedia.org/wiki/Windows_11
https://zhuanlan.zhihu.com/p/503458188
https://zh.wikipedia.org/wiki/MacOS
https://commons.wikimedia.org/w/index.php?curid=94951746 作者 Kristiyan Bogdanov - File:Windows_Updated_Family_Tree.png，CC BY-SA 3.0，  
https://en.wikipedia.org/w/index.php?curid=65836114 By Apple Inc. - Screenshot taken from my personal MacBook Pro., Fair use,
https://commons.wikimedia.org/w/index.php?curid=118370375 作者 Exopeditor101 - 自己的作品，CC BY-SA 4.0

[Windows 1.02](./resources/img1.png)、[Windows 95](./resources/img2.png)、 [Windows NT](./resources/img3.png)、[Windows XP](./resources/img4.png) 图像来源 [GitHub@Coconut-Aero](https://github.com/Coconut-Aero)，Microsoft Windows 操作系统界面版权归微软所有

【2345 到底有多流氓？又该如何彻底清除？】https://www.bilibili.com/video/BV13L4y1s7pF

## 开发者笔记

Windows 95 不能运行在 CPU 主频高于 2.1GHz 的电脑/虚拟机上，需要补丁予以解决。有关这一情况，你可以访问[Windows 95 2.1GHz CPU Limit BROKEN!](https://msfn.org/board/topic/141402-windows-95-21ghz-cpu-limit-broken/)来了解。

诸如 MS-DOS、Windows 1.0、Windows 95、Windows NT 4.0、macOS Classic 等系统的镜像，你可以从[WinWorldPC](https://winworldpc.com/)处得到，这是一个具有 20 年历史的互联网博物馆。
