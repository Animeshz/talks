import{d as u,z as d,o as c,b as m,e as p,f,h as _,c as v,q as $,s as k,B as a}from"../modules/vue-BqjJt-9x.js";import{u as l,f as g}from"./context-B1UgOPCW.js";import"../index-j3Q8uPyg.js";import"../modules/shiki-DQ91SLbT.js";function n(e){return e.startsWith("/")?"/talks/rust-memory/"+e.slice(1):e}function h(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${n(e)})`:`url("${n(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const y={class:"my-auto w-full"},x=u({__name:"cover",props:{background:{default:""}},setup(e){l();const s=e,o=d(()=>h(s.background,!0));return(t,r)=>(c(),m("div",{class:"slidev-layout cover",style:_(o.value)},[p("div",y,[f(t.$slots,"default")])],4))}}),q={__name:"rust-memory.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:B,$renderContext:b,$frontmatter:i}=l();return t.setup(),(C,z)=>(c(),v(x,$(k(a(g)(a(i),0))),null,16))}};export{q as default};