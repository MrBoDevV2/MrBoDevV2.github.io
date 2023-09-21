import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as F,c as A,a as s,b as a,e as n,d as t,w as l,n as v,g as u,f as o}from"./app-aaaa3ca8.js";const D={},g=s("h1",{id:"vuepress常用命令和语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress常用命令和语法","aria-hidden":"true"},"#"),a(" Vuepress常用命令和语法")],-1),C=s("h2",{id:"官方文档地址",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#官方文档地址","aria-hidden":"true"},"#"),a(" 官方文档地址")],-1),f={href:"https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html",target:"_blank",rel:"noopener noreferrer"},x=o(`<h2 id="项目启动构建命令" tabindex="-1"><a class="header-anchor" href="#项目启动构建命令" aria-hidden="true">#</a> 项目启动构建命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#EA9A97;">npm</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">run</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">docs:dev</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">启动开发服务器</span></span>
<span class="line"><span style="color:#EA9A97;">npm</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">run</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">docs:build</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">构建项目并输出</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h2><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">::: tabs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">@tab 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> 此处，选项卡 1 的标题“标题 1”将用作值。 </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> tab 1 内容 </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">@tab 标题 2#值 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值</span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> tab 2 内容 </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h3>`,6),q=s("p",null,"123",-1),k=o(`<h2 id="代码块分组" tabindex="-1"><a class="header-anchor" href="#代码块分组" aria-hidden="true">#</a> 代码块分组</h2><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">安装 VuePress Plugin Markdown Enhance:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: code-tabs#shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">@tab pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">bash</span></span>
<span class="line"><span style="color:#EA9A97;">pnpm</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">add</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">-D</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">vuepress-plugin-md-enhance</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">@tab yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">bash</span></span>
<span class="line"><span style="color:#EA9A97;">yarn</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">add</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">-D</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">vuepress-plugin-md-enhance</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">@tab:active npm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">bash</span></span>
<span class="line"><span style="color:#EA9A97;">npm</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">i</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">-D</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">vuepress-plugin-md-enhance</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果-1" tabindex="-1"><a class="header-anchor" href="#效果-1" aria-hidden="true">#</a> 效果</h3><p>安装 VuePress Plugin Markdown Enhance:</p>`,5),B=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki rose-pine-moon",style:{"background-color":"#232136"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#EA9A97"}},"pnpm"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"add"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"-D"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"vuepress-plugin-md-enhance")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),_=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki rose-pine-moon",style:{"background-color":"#232136"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#EA9A97"}},"yarn"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"add"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"-D"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"vuepress-plugin-md-enhance")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),w=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki rose-pine-moon",style:{"background-color":"#232136"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#EA9A97"}},"npm"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"i"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"-D"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"vuepress-plugin-md-enhance")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),j=o(`<h2 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h2><h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">card</span></span>
<span class="line"><span style="color:#E0DEF4;">title: Mr.Hope</span></span>
<span class="line"><span style="color:#E0DEF4;">desc: Where there is light, there is hope</span></span>
<span class="line"><span style="color:#E0DEF4;">logo: https://mrhope.site/logo.svg</span></span>
<span class="line"><span style="color:#E0DEF4;">link: https://mrhope.site</span></span>
<span class="line"><span style="color:#E0DEF4;">color: rgba(253, 230, 138, 0.15)</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">card:json</span></span>
<span class="line"><span style="color:#E0DEF4;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  &quot;title&quot;: &quot;Mr.Hope&quot;,</span></span>
<span class="line"><span style="color:#E0DEF4;">  &quot;desc&quot;: &quot;Where there is light, there is hope&quot;,</span></span>
<span class="line"><span style="color:#E0DEF4;">  &quot;logo&quot;: &quot;https://mrhope.site/logo.svg&quot;,</span></span>
<span class="line"><span style="color:#E0DEF4;">  &quot;link&quot;: &quot;https://mrhope.site&quot;,</span></span>
<span class="line"><span style="color:#E0DEF4;">  &quot;color&quot;: &quot;rgba(253, 230, 138, 0.15)&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">}</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果-2" tabindex="-1"><a class="header-anchor" href="#效果-2" aria-hidden="true">#</a> 效果</h3>`,4),P=o(`<h2 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸" aria-hidden="true">#</a> 图片尺寸</h2><h3 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">!</span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">Alt</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;">(/example.png =200x300)</span></span>
<span class="line"><span style="color:#E0DEF4;">!</span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">Alt</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;">(/example.jpg &quot;图片标题&quot; =200x)</span></span>
<span class="line"><span style="color:#E0DEF4;">!</span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">Alt</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;">(/example.bmp =x300)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片" aria-hidden="true">#</a> 幻灯片</h2><h3 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">@slidestart </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">theme</span><span style="color:#908CAA;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> slide1 </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> slide2 </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> slide3 </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">@slideend</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果-3" tabindex="-1"><a class="header-anchor" href="#效果-3" aria-hidden="true">#</a> 效果</h3>`,7),V=o(`<h2 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐" aria-hidden="true">#</a> 自定义对齐</h2><h3 id="代码-5" tabindex="-1"><a class="header-anchor" href="#代码-5" aria-hidden="true">#</a> 代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#e0def4;">::: left</span></span>
<span class="line"><span style="color:#e0def4;">左对齐的内容</span></span>
<span class="line"><span style="color:#e0def4;">:::</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">::: center</span></span>
<span class="line"><span style="color:#e0def4;">居中的内容</span></span>
<span class="line"><span style="color:#e0def4;">:::</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">::: right</span></span>
<span class="line"><span style="color:#e0def4;">右对齐的内容</span></span>
<span class="line"><span style="color:#e0def4;">:::</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">::: justify</span></span>
<span class="line"><span style="color:#e0def4;">两端对齐的内容</span></span>
<span class="line"><span style="color:#e0def4;">:::</span></span>
<span class="line"><span style="color:#e0def4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2><h3 id="代码-6" tabindex="-1"><a class="header-anchor" href="#代码-6" aria-hidden="true">#</a> 代码</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">::: info</span></span>
<span class="line"><span style="color:#E0DEF4;">信息容器。</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: note</span></span>
<span class="line"><span style="color:#E0DEF4;">注释容器。</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: tip</span></span>
<span class="line"><span style="color:#E0DEF4;">提示容器</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: warning</span></span>
<span class="line"><span style="color:#E0DEF4;">警告容器</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: danger</span></span>
<span class="line"><span style="color:#E0DEF4;">危险容器</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: details</span></span>
<span class="line"><span style="color:#E0DEF4;">详情容器</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: info 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">一个有 </span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;">代码</span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;"> 和 </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">链接</span><span style="color:#908CAA;">](</span><span style="color:#E0DEF4;">#演示</span><span style="color:#908CAA;">)</span><span style="color:#E0DEF4;"> 的信息容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">js</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: note 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">一个有 </span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;">代码</span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;"> 和 </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">链接</span><span style="color:#908CAA;">](</span><span style="color:#E0DEF4;">#演示</span><span style="color:#908CAA;">)</span><span style="color:#E0DEF4;"> 的注释容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">js</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: tip 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">一个有 </span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;">代码</span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;"> 和 </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">链接</span><span style="color:#908CAA;">](</span><span style="color:#E0DEF4;">#演示</span><span style="color:#908CAA;">)</span><span style="color:#E0DEF4;"> 的提示容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">js</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: warning 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">一个有 </span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;">代码</span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;"> 和 </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">链接</span><span style="color:#908CAA;">](</span><span style="color:#E0DEF4;">#演示</span><span style="color:#908CAA;">)</span><span style="color:#E0DEF4;"> 的警告容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">js</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: danger 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">一个有 </span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;">代码</span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;"> 和 </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">链接</span><span style="color:#908CAA;">](</span><span style="color:#E0DEF4;">#演示</span><span style="color:#908CAA;">)</span><span style="color:#E0DEF4;"> 的危险容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">js</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: details 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">一个有 </span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;">代码</span><span style="color:#908CAA;">\`</span><span style="color:#E0DEF4;"> 和 </span><span style="color:#908CAA;">[</span><span style="color:#F6C177;">链接</span><span style="color:#908CAA;">](</span><span style="color:#E0DEF4;">#演示</span><span style="color:#908CAA;">)</span><span style="color:#E0DEF4;"> 的详情容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span><span style="color:#E0DEF4;">js</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: info 自定义信息</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: note 自定义注释</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: tip 自定义提示</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: warning 自定义警告</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">::: danger 自定义危险</span></span>
<span class="line"><span style="color:#E0DEF4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果-4" tabindex="-1"><a class="header-anchor" href="#效果-4" aria-hidden="true">#</a> 效果</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>信息容器。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>注释容器。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>危险容器</p></div><details class="hint-container details"><summary>详情</summary><p>详情容器</p></details><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的信息容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container note"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的注释容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的提示容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的警告容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的危险容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><details class="hint-container details"><summary>自定义标题</summary><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的详情容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><div class="hint-container info"><p class="hint-container-title">自定义信息</p></div><div class="hint-container note"><p class="hint-container-title">自定义注释</p></div><div class="hint-container tip"><p class="hint-container-title">自定义提示</p></div><div class="hint-container warning"><p class="hint-container-title">自定义警告</p></div><div class="hint-container danger"><p class="hint-container-title">自定义危险</p></div><h2 id="自定义颜色的徽章" tabindex="-1"><a class="header-anchor" href="#自定义颜色的徽章" aria-hidden="true">#</a> 自定义颜色的徽章</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#908CAA;">-</span><span style="color:#E0DEF4;"> &lt;Badge text=&quot;tip&quot; type=&quot;tip&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#908CAA;">-</span><span style="color:#E0DEF4;"> &lt;Badge text=&quot;warning&quot; type=&quot;warning&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#908CAA;">-</span><span style="color:#E0DEF4;"> &lt;Badge text=&quot;danger&quot; type=&quot;danger&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#908CAA;">-</span><span style="color:#E0DEF4;"> &lt;Badge text=&quot;info&quot; type=&quot;info&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#908CAA;">-</span><span style="color:#E0DEF4;"> &lt;Badge text=&quot;note&quot; type=&quot;note&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),z=o(`<h2 id="视频播放" tabindex="-1"><a class="header-anchor" href="#视频播放" aria-hidden="true">#</a> 视频播放</h2><details class="hint-container details"><summary>视频播放代码</summary><p>一个视频播放器:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;ArtPlayer src=&quot;https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个包含了封面的播放器:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;ArtPlayer</span></span>
<span class="line"><span style="color:#E0DEF4;">  src=&quot;https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">  poster=&quot;/assets/poster.svg&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个包含自定义设置的播放器:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;ArtPlayer</span></span>
<span class="line"><span style="color:#E0DEF4;">  src=&quot;https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">  airplay</span></span>
<span class="line"><span style="color:#E0DEF4;">  aspect-ratio</span></span>
<span class="line"><span style="color:#E0DEF4;">  auto-size</span></span>
<span class="line"><span style="color:#E0DEF4;">  auto-orientation</span></span>
<span class="line"><span style="color:#E0DEF4;">  auto-playback</span></span>
<span class="line"><span style="color:#E0DEF4;">  fast-forward</span></span>
<span class="line"><span style="color:#E0DEF4;">  flip</span></span>
<span class="line"><span style="color:#E0DEF4;">  fullscreen-web</span></span>
<span class="line"><span style="color:#E0DEF4;">  lock</span></span>
<span class="line"><span style="color:#E0DEF4;">  loop</span></span>
<span class="line"><span style="color:#E0DEF4;">  is-live</span></span>
<span class="line"><span style="color:#E0DEF4;">  muted</span></span>
<span class="line"><span style="color:#E0DEF4;">  mini-progress-bar</span></span>
<span class="line"><span style="color:#E0DEF4;">  pip</span></span>
<span class="line"><span style="color:#E0DEF4;">  screenshot</span></span>
<span class="line"><span style="color:#E0DEF4;">  subtitle-offset</span></span>
<span class="line"><span style="color:#E0DEF4;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个音频播放器:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;AudioPlayer src=&quot;/assets/assets/sample.mp3&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个拥有标题和封面的音频播放器:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;AudioPlayer</span></span>
<span class="line"><span style="color:#E0DEF4;">  src=&quot;/assets/assets/sample.mp3&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">  title=&quot;A Sample Audio&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">  poster=&quot;/logo.svg&quot;</span></span>
<span class="line"><span style="color:#E0DEF4;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 B 站视频:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;BiliBili bvid=&quot;BV1kt411o7C3&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个自定义空降地址的 B 站视频:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;">&lt;BiliBili aid=&quot;34304064&quot; cid=&quot;109293122&quot; ratio=&quot;9:16&quot; time=&quot;60&quot; page=&quot;2&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,2);function M(U,N){const E=p("ExternalLinkIcon"),y=p("Tabs"),m=p("CodeTabs"),r=p("VPCard"),b=p("Presentation"),d=p("BiliBili"),c=p("Badge");return F(),A("div",null,[g,C,s("p",null,[s("a",f,[a("点击直达"),n(E)])]),t(" more "),x,n(y,{id:"24",data:[{id:"卡片1"},{id:"卡片2"}]},{title0:l(({value:e,isActive:i})=>[a("卡片1")]),title1:l(({value:e,isActive:i})=>[a("卡片2")]),tab0:l(({value:e,isActive:i})=>[q,t(" 此处，选项卡 1 的标题“标题 1”将用作值。 "),t(" tab 1 内容 ")]),tab1:l(({value:e,isActive:i})=>[t(" 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值"),t(" tab 2 内容 ")]),_:1}),k,n(m,{id:"50",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:l(({value:e,isActive:i})=>[a("pnpm")]),title1:l(({value:e,isActive:i})=>[a("yarn")]),title2:l(({value:e,isActive:i})=>[a("npm")]),tab0:l(({value:e,isActive:i})=>[B]),tab1:l(({value:e,isActive:i})=>[_]),tab2:l(({value:e,isActive:i})=>[w]),_:1}),j,n(r,v(u({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mrhope.site/logo.svg",link:"https://mrhope.site",color:"rgba(253, 230, 138, 0.15)"})),null,16),n(r,v(u({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mrhope.site/logo.svg",link:"https://mrhope.site",color:"rgba(253, 230, 138, 0.15)"})),null,16),P,n(b,{id:"presentation-90",code:"eJzjerpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWSaEVBE4eXCnc9nrwOaDGeChFEVGusBLU5ISMgq5krOzysuUUhUsFUwtAYJgdSiKjXiUlHh8tKIKclILUmMN9CBMgw1gXpiiktz46szbQ1qQYoAcNhaiw==",theme:"auto"}),n(d,{bvid:"BV1kt411o7C3"}),V,s("ul",null,[s("li",null,[n(c,{text:"tip",type:"tip",vertical:"middle"})]),s("li",null,[n(c,{text:"warning",type:"warning",vertical:"middle"})]),s("li",null,[n(c,{text:"danger",type:"danger",vertical:"middle"})]),s("li",null,[n(c,{text:"info",type:"info",vertical:"middle"})]),s("li",null,[n(c,{text:"note",type:"note",vertical:"middle"})])]),z,n(d,{bvid:"BV1Do4y1x7cg"})])}const H=h(D,[["render",M],["__file","1.html.vue"]]);export{H as default};
