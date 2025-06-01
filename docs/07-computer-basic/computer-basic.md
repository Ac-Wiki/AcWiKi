??? info "计算机基础技能"

    作为大学生，无论是设计、编程、看课件，还是作业，游戏，写论文，都会或多或少地与计算机打交道。本篇介绍了一些计算机的基础技能，希望能够帮助到你。

    欢迎大家指正或补充～

# **计算机基础技能**

## 选购与配置

电子产品的迭代速度是非常快的，你所购买的电脑经过很短的一段时间后便会迅速贬值，性能也会与最新的电脑拉开非常大的差距。所以尽量**买新不买旧**。

⚠️ 警告！**贵 ≠ 好看 ≠ 性能高**（这里的“好看”指的是有各种好看的灯光（RGB）以及电脑的其他外饰）

??? tip

    例如：华为的MateBook X Pro 酷睿 Ultra 微绒典藏版，售价为11199起，但其内部的锐炫显卡远远不如5000+价位就能买到的NVIDIA Geforce RTX 4060这样的独显。

**不推荐大学生购买台式机：**

1. 台式机耗电量更大，不适合寝室内使用
2. 台式机过于笨重，便携性太低

如果在预算足够（<s>家里有矿</s>）的情况下，可以尽量冲击自己喜欢的更高配置的电脑。一般而言，有关于电脑的参数，越大代表性能越高、存储空间更大、更先进和强大。如果按日常需求而言，一台 3000 左右的办公本是不错的选择；而如果有 AI 计算、游戏等的需求，那么 6000 左右的、带有比较好的显卡的游戏本是更佳的搭配。

如果不知道自己需要什么电脑，可以参考 bilibili 笔吧/百度贴吧笔记本电脑吧 的相关视频与介绍

### <s>家里有矿</s>

<s>既要又要，这里推荐高性能台式机 + 续航高（轻薄本）既满足游戏/ai 等高性能场景，也可以满足图书馆等复杂的外出场景。满足全场景。**（梦寐以求的场景）**</s>

### Q&A

> 为什么我购买的 1TB 固态硬盘，到手发现格式化后只有约 900GB？为什么我购买的 16GB 内存则不会像我的 16GB U 盘一样显示为约 14.9GB？

操作系统计算容量时使用的单位虽然显示为**GB**（Giga Byte），实际为**GiB**（Giga Binary Byte）。

我们规定如下：

1. 1 Giga Byte = 1,000,000,000 Bytes（1\*10<sup>9</sup>）
2. 1 Giga Binary Byte = 1,073,741,824 Bytes（1024<sup>3</sup>）

由于硬盘生产厂商生产硬盘时的计数单位为**GB**，而计算机系统统计时计数单位为**GiB**，导致最后统计出的空间会存在差异。另外，由于系统盘会有一定的隐藏空间（存放系统启动程序（如 Windows Boot Manager，GRUB 等等）），实际挂载在系统上的磁盘空间会小一些。

内存由于需要直接与 CPU 交互，因此必须使用 2 的倍数来计数，所以 16GB 内存实际为**16GiB**内存。因此不会出现变成 14.9GB 左右。然而，由于系统需要为硬件和系统基本运行预留存储空间（为硬件保留的内存），实际可用空间小于 16GB，这是正常的。

## 计算机操作系统

### Windows

理工科必选，你永远不知道你们专业课上用的软件到底是哪一代 windows 系统上面开发的（它很可能比你还大）。

其他所有的系统都只会成为你编程/交作业中的阻碍，毕竟**你的专业软件一定会提供 windows 版本**……

### MacOS

如果你是文科，那你可以美美的搞个 mac，不过要是你的专业与科研相关，例如研究《在 XX 条件下，市场对 XX 变化的反应》这种需要大量数据处理的（简而言之就是和理工科搭边的），那你还是去 Windows 比较好

此外，如果你的工作需要大量使用 Office3 件套（也可能是 4 件套），那还是 Windows 适合你

### Linux

只有知道自己为什么选择它的人才会选择它。总而言之，普通人远离。在它上面试图安装软件的时候会有超级多的 bug 等着你去克服和解决。（反正我会推荐 WSL）

### 其它

不入流，无需在意

## 下载软件

使用计算机势必会用到大量软件，但是在杂乱无章的互联网上，下载来自不明软件源的软件会给自己的机器带来风险。

### 软件下载安全的方式

目前诸如 Linux（软件包管理器），macOS（AppStore）等系统，由于其具有特定的软件下载方式，所以不容易下载到流氓软件。然而，由于 Windows 开放兼容的特性，导致从 Windows 9x 时代开始流氓软件就严重泛滥。这里推荐官方的、安全的下载方式以及那些不安全的软件源。

#### 安全的下载方式

1. 官网：通过搜索引擎（参考[搜索平台](../02-search-platforms/search-platforms.md)以获取更加详尽的描述）搜索该软件的官网，从而获得安装程序（**拒绝百度人人有责**）。
2. GitHub：多数开源软件在 GitHub 都有自己的官方仓库，你可以通过在 GitHub 上搜索获取这些开源软件已经编译好的安装程序或者尝试自己编译安装。
3. 软件包管理器：通过软件包管理器，你可以仅靠一条指令就能直接从镜像源获取安装。
4. 针对 MacOS：App Store 由苹果提供软件源，因此相对安全。
5. 终极大招——应用商店

因为百度和 bing 会把广告位放到前面，然后有一些人把网站做的比真正的官网还真，下载下来打开之后才发现自己掉入了“P2P 下崽器”里了。所以，如果你个人以为你对官网的分辨不是特别清楚的话，这里更推荐使用应用商店下载相关软件；这里只推荐：Microsoft store（一般情况下 Windows 电脑会自带这个软件）和 [联想应用商店](https://lestore.lenovo.com/)（大概在 2024 年后购买的联想电脑自带）这样在大部分情况下你是不会在遇到类似"P2P 下崽器"之类的了（但是还可能遇到李鬼，之前有个仿 VSCode 的收费软件简直让人笑掉大牙，但是好歹能用，不是下崽器……）

#### 软件包管理器

- Windows 可以使用官方提供的 [WinGet](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/) 也可以参考少数派文章来挑选：[Windows 系统缺失的包管理器：Chocolatey、WinGet 和  Scoop - 少数派](https://sspai.com/post/65933)
  > WinGet 命令行工具仅在 Windows 10 1709（版本 16299）或更高版本上受支持
  >
  > ── 使用 WinGet 安装和管理应用程序 | Microsoft Learn [ref](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/)
- Linux 发行版会有对应的包管理（例如：apt、pacman、yum 等等）
- ~~或许可以试试 nix-shell~~

### 软件 Hall of Shame

#### 2345

臭名昭著的 2345 及 2345 全家桶，自 2005 年开始通过制作盗版 Windows XP 以及捆绑在其他安装包的行为进行传播。安装后将自己的内核写入注册表和系统内核程序，甚至在安全模式下也无法避免加载 2345 的程序。（可参见视频：[2345 到底有多流氓？又该如何彻底清除？](https://www.bilibili.com/video/BV13L4y1s7pF)）

## 参考链接

- [https://zh.wikipedia.org/wiki/Linux](https://zh.wikipedia.org/wiki/Linux)
- [https://zh.wikipedia.org/wiki/Windows_11](https://zh.wikipedia.org/wiki/Windows_11)
- [https://zhuanlan.zhihu.com/p/503458188](https://zhuanlan.zhihu.com/p/503458188)
- [https://zh.wikipedia.org/wiki/MacOS](https://zh.wikipedia.org/wiki/MacOS)
- [https://commons.wikimedia.org/w/index.php?curid=94951746](https://commons.wikimedia.org/w/index.php?curid=94951746) 作者 Kristiyan Bogdanov - File:Windows_Updated_Family_Tree.png，CC BY-SA 3.0，
- [https://en.wikipedia.org/w/index.php?curid=65836114](https://en.wikipedia.org/w/index.php?curid=65836114) By Apple Inc. - Screenshot taken from my personal MacBook Pro., Fair use,
- [https://commons.wikimedia.org/w/index.php?curid=118370375](https://commons.wikimedia.org/w/index.php?curid=118370375) 作者 Exopeditor101 - 自己的作品，CC BY-SA 4.0

## 开发者笔记

诸如 MS-DOS、Windows 1.0、Windows 95、Windows NT 4.0、macOS Classic 等系统的镜像，你可以从[WinWorldPC](https://winworldpc.com/)处得到，这是一个具有 20 年历史的互联网博物馆。
