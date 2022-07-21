# 对LoveIt主题的个人改动


> 首先附上LoveIt主题的[doc](https://hugoloveit.com/zh-cn/)。本人不会前端，完全是面向搜索引擎和各个大佬（尤其感谢[雨临Lewis](https://lewky.cn/)）的教程进行修改，主要修改了原主题css样式边边角角的一些效果，此处留档。

## 修改某些css样式

{{< admonition >}}

> 根据[雨临Lewis](https://lewky.cn/)大佬的[这篇文章](https://lewky.cn/posts/hugo-3.html/#%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84_customscss)建议：
> 
> *LoveIt主题提供了一个自定义的`_custom.scss`，可以在该文件里添加自定义的css样式。该文件目录位于`\themes\LoveIt\assets\css\_custom.scss`，不建议直接在该文件里写css代码。*
> 
> *Hugo在渲染页面时优先读取站点根目录下的同名字的目录和文件，所以可以利用这个特点来美化主题。**只需要把想修改的主题模板文件拷贝到根目录下同样的目录中并进行修改，这样就可以在不改动原本的主题文件的情况下实现主题美化。***
> 
> *首先在站点根目录下创建一个自定义的文件：`\assets\css\_custom.scss`，这样Hugo就会最终以该文件来渲染页面的样式。*

{{< /admonition >}}

- 加圆角：通过F12定位到样式后参考[菜鸟CSS教程](https://www.runoob.com/css3/css3-border-radius.html)修改`border-radius`，其中还可以单独调各个方向圆角，详看教程。
- 颜色：通过VsCode插件和浏览器开发工具便捷可视化修改。
- 磨砂效果：将`background-color`调成`rgba`带透明度的格式，然后加上`backdrop-filter: blur(4px)`，其中`4px`可以自定义调整，效果如图：

{{< figure src="/img/磨砂效果.png" title="磨砂效果" >}}

## 设置背景轮播

参照[雨临Lewis](https://lewky.cn/)大佬的[这篇文章](https://lewky.cn/posts/hugo-3.html/#%E6%B7%BB%E5%8A%A0%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E8%BD%AE%E6%92%AD)。

## 添加DPlayer播放器

参照[Jay](https://blog.233so.com/)的[这篇文章](https://blog.233so.com/2020/04/hugo-loveit-with-dplayer-supported/)，其中不知道为什么引入`DPlayer`的`css`和`Js`失败，后看到[Kreee](https://blog.ohmykreee.top/)的[这篇文章](https://blog.ohmykreee.top/article/music-player-in-hugo-page/)，直接将以下代码：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dplayer@1.25.0/dist/DPlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/dplayer@1.25.0/dist/DPlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hls.js@0.13.2/dist/hls.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flv.js@1.5.0/dist/flv.min.js"></script>
```

复制到`\mysite\layouts\_default\baseof.html`的`<head> </head>`中间，DPlayer成功加载，基本使用语法如下：

```markdown
{{</* video id="u" url="url"  pic="pic"> */>}}
```

其中`id`用来标识是同一个页面哪一个视频，`url`是视频地址，`pic`是视频封面，效果如下：

{{< video id="a" url="https://%62%2E%32%30%30%30%31%32%30%37%2E%78%79%7A/api/raw/?path=/blogs%20src/YOASOBI%E3%80%8C%E3%81%82%E3%81%AE%E5%A4%A2%E3%82%92%E3%81%AA%E3%81%9E%E3%81%A3%E3%81%A6%20(Ballade%20Ver.)%E3%80%8D%20-%20%E3%82%B9%E3%83%9E%E3%83%9B%E6%98%A0%E7%94%BB%E3%80%8E%E5%A4%A2%E3%81%AE%E9%9B%AB%E3%81%A8%E6%98%9F%E3%81%AE%E8%8A%B1%E3%80%8F%E3%82%B3%E3%83%A9%E3%83%9C%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC.mkv"  video.pic=“/img/featured-image.jpg” lang="en" >}}

## 修改侧边栏目录样式

详见[这篇文章](https://lewky.cn/posts/hugo-3.2.html/#%E4%BF%AE%E6%94%B9%E4%BE%A7%E8%BE%B9%E6%A0%8F%E7%9B%AE%E5%BD%95%E6%A0%B7%E5%BC%8F)，下面是在其基础上的一些改动：

```CSS
[theme=dark] .toc {
    background: #43434a;
    opacity: 0.85;
}
[theme=dark] #toc-auto {
    border-left-color: #6f6a6a;
}
.toc .toc-content {
    font-size: 1rem;
}
.toc .toc-content code {
    border: none;
    color: #f9785e;
    font-size: 1em;
}
nav#TableOfContents ol {
    padding-inline-start: 20px;
    border-radius: 4px;
    & ol {
        padding-inline-start: 15px;
        font-size: .75rem;
        display: none;
    }
    & li.has-active ol {
        display: block;
    }
}
```

未完待续......

