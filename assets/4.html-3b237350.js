import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as r,c as i,a as s,b as n,e as l,w as o,f as p}from"./app-aaaa3ca8.js";const y="/assets/1-2676b959.png",d="/assets/2-7a67ca3d.png",E="/assets/3-be8f2007.png",v="/assets/4-c8bc6133.png",A="/assets/5-95df1d42.png",u={},C=s("h1",{id:"第4章-插槽",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第4章-插槽","aria-hidden":"true"},"#"),n(" 第4章 插槽")],-1),m=s("strong",null,"官方文档",-1),F={href:"https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html",target:"_blank",rel:"noopener noreferrer"},D=p('<h2 id="一-快速入门" tabindex="-1"><a class="header-anchor" href="#一-快速入门" aria-hidden="true">#</a> 一.快速入门</h2><h3 id="_1-创建新的组件demoslot" tabindex="-1"><a class="header-anchor" href="#_1-创建新的组件demoslot" aria-hidden="true">#</a> 1.创建新的组件DemoSlot</h3><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-在app-vue中引入demoslot-vue" tabindex="-1"><a class="header-anchor" href="#_2-在app-vue中引入demoslot-vue" aria-hidden="true">#</a> 2.在App.vue中引入DemoSlot.vue</h3><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-查看页面效果" tabindex="-1"><a class="header-anchor" href="#_3-查看页面效果" aria-hidden="true">#</a> 3.查看页面效果</h3><figure><img src="'+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>此时再App.vue父组件中的DemoSlot标签内部的内容无法正常在子组件DemoSlot中正常显示</p></blockquote><h3 id="_4-在demoslot-vue中添加slot插槽标签后查看效果" tabindex="-1"><a class="header-anchor" href="#_4-在demoslot-vue中添加slot插槽标签后查看效果" aria-hidden="true">#</a> 4.在DemoSlot.vue中添加slot插槽标签后查看效果</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">插槽</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11),g=s("p",null,"插槽指的就是在DemoSlot组件中添加的slot标签",-1),b=s("p",null,"插槽的作用其实就是支持在引用子组件时候，在父组件中直接将父组件内容渲染在子组件中",-1),h=p(`<h2 id="二-编译作用域" tabindex="-1"><a class="header-anchor" href="#二-编译作用域" aria-hidden="true">#</a> 二.编译作用域</h2><blockquote><p>插槽内容显示在哪取决于定义的位置</p></blockquote><h2 id="三-后备内容" tabindex="-1"><a class="header-anchor" href="#三-后备内容" aria-hidden="true">#</a> 三.后备内容</h2><blockquote><p>调用插槽时没有传递数据，则插槽什么都不显示，可以指定默认显示内容</p></blockquote><h2 id="四-具名插槽" tabindex="-1"><a class="header-anchor" href="#四-具名插槽" aria-hidden="true">#</a> 四.具名插槽</h2><ul><li>如下代码效果其实是三个div中内容在子容器的所有插槽中显示</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#EB6F92;">DemoSlot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">我是插槽内容1</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">我是插槽内容2</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">我是插槽内容3</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#EB6F92;">DemoSlot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">插槽</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">/&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">/&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">/&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;">------------------------------以上部分结束---------------------------------------</span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>效果</li></ul><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>如果想要将上面三个div内容在不同的slot中进行显示则需要使用<strong>具名插槽</strong></p></li><li><p>具体代码如下</p><p><strong>DemoSlot中的代码</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">插槽</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">name</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;top&quot;</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">/&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">name</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;main&quot;</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">/&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">name</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;bottom&quot;</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">/&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;">------------------------------以上部分结束-------------------------------------------</span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>App.Vue中代码 对于具名插槽必须在template标签中使用</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#E0DEF4;"> </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">id</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;app&quot;</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#EB6F92;">DemoSlot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">v-slot:top</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">        </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">我是插槽内容1</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">v-slot:main</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">        </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">我是插槽内容2</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">v-slot:bottom</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">        </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">我是插槽内容3</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#EB6F92;">DemoSlot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="五-作用域插槽" tabindex="-1"><a class="header-anchor" href="#五-作用域插槽" aria-hidden="true">#</a> 五.作用域插槽</h2>`,12),f=s("p",null,"数据在子组件但子组件需要将其传递给父组件处理完再回传到子组件进行显示",-1),_=p(`<p>子组件代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">插槽</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">h1</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">slot</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">:demo</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;demo&quot;</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">slot</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;">------------------------------以上部分结束-------------------------------------------</span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">script</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#3E8FB0;">export default </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#3E8FB0;">  </span><span style="color:#EA9A97;">data</span><span style="color:#908CAA;">()</span><span style="color:#3E8FB0;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#3E8FB0;">    return </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#3E8FB0;">      demo</span><span style="color:#908CAA;">:</span><span style="color:#3E8FB0;"> </span><span style="color:#F6C177;">&quot;子组件数据&quot;</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#3E8FB0;">    </span><span style="color:#908CAA;">};</span></span>
<span class="line"><span style="color:#3E8FB0;">  </span><span style="color:#908CAA;">},</span></span>
<span class="line"><span style="color:#908CAA;">};</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">script</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">style</span><span style="color:#6E6A86;">&gt;&lt;/</span><span style="color:#9CCFD8;">style</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki rose-pine-moon" style="background-color:#232136;" tabindex="0"><code><span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">template</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">v-slot:default</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;slotProps&quot;</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">      </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">h3</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">{{ slotProps.demo }}</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">h3</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">template</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(k,q){const t=e("ExternalLinkIcon"),a=e("font");return r(),i("div",null,[C,s("p",null,[m,n(":"),s("a",F,[n("https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html"),l(t)])]),l(a,{color:"blue"},{default:o(()=>[n("@作者:博哥")]),_:1}),D,s("blockquote",null,[l(a,null,{default:o(()=>[n("注意")]),_:1}),g,b]),h,s("blockquote",null,[l(a,null,{default:o(()=>[n("插槽的数据可以用回传的方式进行显示")]),_:1}),f]),_])}const z=c(u,[["render",x],["__file","4.html.vue"]]);export{z as default};