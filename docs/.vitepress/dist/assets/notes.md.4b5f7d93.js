import{_ as s,o as n,c as a,S as e}from"./chunks/framework.6eb13cf1.js";const D=JSON.parse('{"title":"Things to note","description":"","frontmatter":{},"headers":[],"relativePath":"notes.md","filePath":"notes.md"}'),l={name:"notes.md"},p=e(`<h1 id="things-to-note" tabindex="-1">Things to note <a class="header-anchor" href="#things-to-note" aria-label="Permalink to &quot;Things to note&quot;">​</a></h1><ol><li>Component sizes cannot be edited directly.</li></ol><p>To scale the size, put the component in a <code>div</code> tag and set the <code>transform</code> property to <code>scale(value)</code>. <code>value</code> is by how much it should be scaled.</p><p><em>Example:</em></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;vueCard </span></span>
<span class="line"><span style="color:#A6ACCD;">    :name=name</span></span>
<span class="line"><span style="color:#A6ACCD;">    :text=description</span></span>
<span class="line"><span style="color:#A6ACCD;">    :image=image</span></span>
<span class="line"><span style="color:#A6ACCD;">    :link=link</span></span>
<span class="line"><span style="color:#A6ACCD;">    :linktext=linktxt</span></span>
<span class="line"><span style="color:#A6ACCD;">    :isButton=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :action=action</span></span>
<span class="line"><span style="color:#A6ACCD;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>This scales the card to half its default dimensions (<code>width: 350px</code> and <code>height: 300px</code>).</p><ol start="2"><li><p>Colors can only be modified by using the props: (<code>bgColor</code>, <code>mainColor</code> and <code>txtColor</code>)</p></li><li><p>When specifying the <code>image</code> prop, if a <strong>PATH</strong> is specified, be sure to wrap it in the <code>require</code> property so it can be bound properly to the <code>src</code> of the <code>img</code> tag.</p></li></ol><p><em>Example:</em></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vueCard</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">image</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  import vueCard from &#39;./components/vueCard.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;App&#39;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      vueCard,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;Jimmy&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: &#39;Lorem ipsum dolor sit, amet!&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        image: require(&#39;./assets/images/img.jpg&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p><a href="/vue-card-documentation/">Back to home</a></p>`,10),o=[p];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{D as __pageData,m as default};
