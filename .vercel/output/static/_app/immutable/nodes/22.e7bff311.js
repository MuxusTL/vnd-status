import{s as lt,p as tt,q as ft,c as Tt,u as Rt,g as Vt,a as Bt,e as D,d as I,f as V,i as u,v as L,k as b,n as te,P as At,x as Dt,ai as Ut,aj as Ht,o as Nt,b as T,j as R,l as p,A as Ge,t as W,h as J,I as ke,z as Ke,y as We,Q as Ve,m as Ae,B as Je,w as Ce}from"../chunks/scheduler.0a362f98.js";import{S as rt,i as at,c as g,b as _,m as h,t as m,a as d,d as v,g as ge,e as _e,f as Ye}from"../chunks/index.61e7fc56.js";import{e as ve}from"../chunks/each.ffdd26ad.js";import{b as ue}from"../chunks/paths.b39379cc.js";import{C as Pt}from"../chunks/card.bbd2d50c.js";import{C as jt}from"../chunks/card-content.e34b4e25.js";import{C as qt}from"../chunks/card-description.89f4d538.js";import{C as Ot,a as zt}from"../chunks/card-title.426c01ad.js";import"../chunks/index.5b185319.js";import{I as It}from"../chunks/input.8acfbd51.js";import{L as Le}from"../chunks/label.41a26f0b.js";import"../chunks/index.642f5c17.js";import{S as Be,a as Ue,b as He,V as Ne,G as Pe,c as je,d as De}from"../chunks/index.994ec092.js";import{C as nt}from"../chunks/A11ySingleNotice.svelte_svelte_type_style_lang.01ba2f5a.js";import{d as Gt}from"../chunks/stores.39e3bb50.js";import{A as Wt,a as Jt,b as Yt}from"../chunks/alert-title.7c77d46b.js";import{g as yt,a as Kt}from"../chunks/spread.8a54911c.js";import{I as Ft}from"../chunks/Icon.90354235.js";import{B as ye}from"../chunks/button.b47727db.js";import{C as Fe}from"../chunks/check.dd09a4ed.js";import{C as Qe}from"../chunks/copy.e41a980e.js";function Qt(a){let e;const n=a[2].default,t=Tt(n,a,a[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&8)&&Rt(t,n,r,r[3],e?Bt(n,r[3],l,null):Vt(r[3]),null)},i(r){e||(m(t,r),e=!0)},o(r){d(t,r),e=!1},d(r){t&&t.d(r)}}}function Xt(a){let e,n;const t=[{name:"siren"},a[1],{iconNode:a[0]}];let r={$$slots:{default:[Qt]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)r=tt(r,t[l]);return e=new Ft({props:r}),{c(){g(e.$$.fragment)},l(l){_(e.$$.fragment,l)},m(l,s){h(e,l,s),n=!0},p(l,[s]){const i=s&3?yt(t,[t[0],s&2&&Kt(l[1]),s&1&&{iconNode:l[0]}]):{};s&8&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){d(e.$$.fragment,l),n=!1},d(l){v(e,l)}}}function Zt(a,e,n){let{$$slots:t={},$$scope:r}=e;const l=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]];return a.$$set=s=>{n(1,e=tt(tt({},e),ft(s))),"$$scope"in s&&n(3,r=s.$$scope)},e=ft(e),[l,e,t,r]}class xt extends rt{constructor(e){super(),at(this,e,Zt,Xt,lt,{})}}const en=xt;function tn(a){let e;return{c(){e=D("div"),this.h()},l(n){e=I(n,"DIV",{id:!0}),V(e).forEach(u),this.h()},h(){L(e,"id",a[0])},m(n,t){b(n,e,t)},p:te,i:te,o:te,d(n){n&&u(e)}}}function nn(a,e,n){const t=At();let{monitor:r}=e,{theme:l="light"}=e,{bgc:s="transparent"}=e,{locale:i="en"}=e,o,f,$=`embed-container-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,c=!1,C,k,S,A;return Dt(()=>{if(!r)return;c=!0,C=r,k=l,S=s,A=i;const B=document.getElementById($);if(!B)return;const N="KENER_"+~~(new Date().getTime()/864e5),M=`${r}?theme=${l}&bgc=${s}&locale=${i}`;o=document.createElement("iframe"),o.src=M,o.id=N,o.width="0%",o.height="0",o.frameBorder="0",o.allowTransparency=!0,o.sandbox="allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads",o.allow="midi; geolocation; microphone; camera; display-capture; encrypted-media;",B.appendChild(o);const z=Y=>{Y.height!==void 0&&(o.height=Y.height)},Z=Y=>{Y.width!==void 0&&(o.width=Y.width)};f=Y=>{Y.data&&Y.data.height!==void 0&&z(Y.data),Y.data&&Y.data.width!==void 0&&Z(Y.data)},window.addEventListener("message",f,!1)}),Ut(()=>{c&&o&&(r!==C||l!==k||s!==S||i!==A)&&(o.src=`${r}?theme=${l}&bgc=${s}&locale=${i}`,C=r,k=l,S=s,A=i,t("update",{monitor:C,theme:k,bgc:S,locale:A}))}),Ht(()=>{o&&(window.removeEventListener("message",f),o.remove())}),a.$$set=B=>{"monitor"in B&&n(1,r=B.monitor),"theme"in B&&n(2,l=B.theme),"bgc"in B&&n(3,s=B.bgc),"locale"in B&&n(4,i=B.locale)},[$,r,l,s,i]}class ln extends rt{constructor(e){super(),at(this,e,nn,tn,lt,{monitor:1,theme:2,bgc:3,locale:4})}}const rn=`<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";

  export let monitor;
  export let theme = "light";
  export let bgc = "transparent";
  export let locale = "en";

  let iframe, listeners;
  let containerId = \`embed-container-\${Date.now()}-\${Math.random().toString(36).substr(2, 5)}\`;
  let isMounted = false;
  let prevMonitor, prevTheme, prevBgc, prevLocale;

  onMount(() => {
    if (!monitor) return;

    isMounted = true;
    prevMonitor = monitor;
    prevTheme = theme;
    prevBgc = bgc;
    prevLocale = locale;

    const container = document.getElementById(containerId);
    if (!container) return;

    const uid = "KENER_" + ~~(new Date().getTime() / 86400000);
    const uriEmbedded = \`\${monitor}?theme=\${theme}&bgc=\${bgc}&locale=\${locale}\`;

    iframe = document.createElement("iframe");
    iframe.src = uriEmbedded;
    iframe.id = uid;
    iframe.width = "0%";
    iframe.height = "0";
    iframe.frameBorder = "0";
    iframe.allowTransparency = true;
    iframe.sandbox =
      "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";
    iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";

    container.appendChild(iframe);

    const setHeight = (data) => {
      if (data.height !== undefined) {
        iframe.height = data.height;
      }
    };

    const setWidth = (data) => {
      if (data.width !== undefined) {
        iframe.width = data.width;
      }
    };

    listeners = (event) => {
      if (event.data && event.data.height !== undefined) {
        setHeight(event.data);
      }
      if (event.data && event.data.width !== undefined) {
        setWidth(event.data);
      }
    };

    window.addEventListener("message", listeners, false);
  });

  beforeUpdate(() => {
    if (
      isMounted &&
      iframe &&
      (monitor !== prevMonitor || theme !== prevTheme || bgc !== prevBgc || locale !== prevLocale)
    ) {
      iframe.src = \`\${monitor}?theme=\${theme}&bgc=\${bgc}&locale=\${locale}\`;

      // Update previous values
      prevMonitor = monitor;
      prevTheme = theme;
      prevBgc = bgc;
      prevLocale = locale;
    }
  });

  onDestroy(() => {
    if (iframe) {
      window.removeEventListener("message", listeners);
      iframe.remove();
    }
  });
<\/script>

<!-- Dynamic container with unique ID -->
<div id={containerId}></div>
`,an=`<script>
	import EmbedMonitor from "./EmbedMonitor.svelte";
<\/script>

<EmbedMonitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"/>`,on=`import { useEffect, useRef, useState } from "react";

const EmbedMonitor = ({ monitor, theme = "light", bgc = "transparent", locale = "en" }) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [uid] = useState(\`embed-container-\${Date.now()}-\${Math.random().toString(36).substr(2, 5)}\`);

  useEffect(() => {
    if (!monitor || !containerRef.current) return;

    const container = containerRef.current;

    // Remove previous iframe if exists
    if (iframeRef.current) {
      iframeRef.current.remove();
    }

    // Create a new iframe
    const iframe = document.createElement("iframe");
    iframe.src = \`\${monitor}?theme=\${theme}&bgc=\${bgc}&locale=\${locale}\`;
    iframe.width = "0%";
    iframe.height = "0";
    iframe.frameBorder = "0";
    iframe.allowTransparency = true;
    iframe.sandbox =
      "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";
    iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";

    container.appendChild(iframe);
    iframeRef.current = iframe;

    const setHeight = (data) => {
      if (data.height !== undefined) {
        iframe.height = data.height;
      }
    };

    const setWidth = (data) => {
      if (data.width !== undefined) {
        iframe.width = data.width;
      }
    };

    const messageListener = (event) => {
      if (event.data && event.data.height !== undefined) {
        setHeight(event.data);
      }
      if (event.data && event.data.width !== undefined) {
        setWidth(event.data);
      }
    };

    window.addEventListener("message", messageListener);

    return () => {
      window.removeEventListener("message", messageListener);
      if (iframe) {
        iframe.remove();
      }
    };
  }, [monitor, theme, bgc, locale]);

  return <div id={uid} ref={containerRef}></div>;
};

export default EmbedMonitor;`,sn=`import EmbedMonitor from "./EmbedMonitor";

function App() {
  return (
    <div>
      <h2>React Embed</h2>
      <EmbedMonitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"/>
    </div>
  );
}

export default App;`,fn=`<template>
  <div :id="containerId" ref="containerRef"></div>
</template>

<script>
import { ref, watchEffect, onMounted, onBeforeUnmount } from "vue";

export default {
  props: {
    monitor: String,
    theme: { type: String, default: "light" },
    bgc: { type: String, default: "transparent" },
    locale: { type: String, default: "en" }
  },
  setup(props) {
    const containerRef = ref(null);
    const iframeRef = ref(null);
    const containerId = ref(\`embed-container-\${Date.now()}-\${Math.random().toString(36).substr(2, 5)}\`);

    let messageListener = null;

    const createIframe = () => {
      if (!props.monitor || !containerRef.value) return;

      // Remove existing iframe if any
      if (iframeRef.value) {
        iframeRef.value.remove();
      }

      const iframe = document.createElement("iframe");
      iframe.src = \`\${props.monitor}?theme=\${props.theme}&bgc=\${props.bgc}&locale=\${props.locale}\`;
      iframe.width = "0%";
      iframe.height = "0";
      iframe.frameBorder = "0";
      iframe.allowTransparency = true;
      iframe.sandbox =
        "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";
      iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";

      containerRef.value.appendChild(iframe);
      iframeRef.value = iframe;

      messageListener = (event) => {
        if (event.data?.height) iframe.height = event.data.height;
        if (event.data?.width) iframe.width = event.data.width;
      };

      window.addEventListener("message", messageListener);
    };

    onMounted(createIframe);

    watchEffect(() => {
      createIframe();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("message", messageListener);
      if (iframeRef.value) {
        iframeRef.value.remove();
      }
    });

    return { containerRef, containerId };
  }
};
<\/script>`,cn=`<template>
  <div>
    <h2>Vue Embed</h2>
    <EmbedMonitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"/>
  </div>
</template>

<script>
import EmbedMonitor from "./EmbedMonitor.vue";

export default {
  components: { EmbedMonitor }
};
<\/script>`,un=`import { Component, Input, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-embed-monitor',
  template: \`<div [id]="containerId"></div>\`
})
export class EmbedMonitorComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() monitor!: string;
  @Input() theme: string = "light";
  @Input() bgc: string = "transparent";
  @Input() locale: string = "en";

  containerId = \`embed-container-\${Date.now()}-\${Math.random().toString(36).substr(2, 5)}\`;
  private iframe: HTMLIFrameElement | null = null;
  private messageListener!: (event: MessageEvent) => void;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createIframe();
  }

  ngOnChanges() {
    this.createIframe();
  }

  createIframe() {
    const container = this.el.nativeElement.querySelector(\`#\${this.containerId}\`);
    if (!this.monitor || !container) return;

    // Remove previous iframe if it exists
    if (this.iframe) {
      this.iframe.remove();
    }

    this.iframe = document.createElement("iframe");
    this.iframe.src = \`\${this.monitor}?theme=\${this.theme}&bgc=\${this.bgc}&locale=\${this.locale}\`;
    this.iframe.width = "0%";
    this.iframe.height = "0";
    this.iframe.frameBorder = "0";
    this.iframe.allowTransparency = true;
    this.iframe.sandbox =
      "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";
    this.iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";

    container.appendChild(this.iframe);

    this.messageListener = (event: MessageEvent) => {
      if (event.data?.height) this.iframe!.height = event.data.height;
      if (event.data?.width) this.iframe!.width = event.data.width;
    };

    window.addEventListener("message", this.messageListener);
  }

  ngOnDestroy() {
    window.removeEventListener("message", this.messageListener);
    if (this.iframe) {
      this.iframe.remove();
    }
  }
}`,mn='<app-embed-monitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"></app-embed-monitor>',$n=`<iframe 
	src="{siteURL}{base}/embed/monitor-{selectedMonitor.value}?bgc={embedBgc.substr(1)}&locale={embedLocale.value}&theme={embedTheme}" 
	width="100%" 
	height="200" 
	allowfullscreen="allowfullscreen" 
	allowpaymentrequest 
	frameborder="0">
</iframe>`,dn='<script async src="{siteURL}{base}/embed/monitor-{selectedMonitor.value}/js?bgc={embedBgc.substr(1)}&locale={embedLocale.value}&theme={embedTheme}&monitor={siteURL}{base}/embed/monitor-{selectedMonitor.value}"><\/script>';function ct(a,e,n){const t=a.slice();return t[37]=e[n],t}function ut(a,e,n){const t=a.slice();return t[40]=e[n],t}function mt(a,e,n){const t=a.slice();return t[43]=e[n],t[44]=e,t[45]=n,t}function $t(a,e,n){const t=a.slice();return t[46]=e[n],t}function dt(a,e,n){const t=a.slice();return t[49]=e[n],t}function pn(a){let e,n="Badges";return{c(){e=D("div"),e.textContent=n},l(t){e=I(t,"DIV",{"data-svelte-h":!0}),Ge(e)!=="svelte-16ql548"&&(e.textContent=n)},m(t,r){b(t,e,r)},p:te,d(t){t&&u(e)}}}function gn(a){let e;return{c(){e=W("Create Badges for your monitors")},l(n){e=J(n,"Create Badges for your monitors")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function _n(a){let e,n,t,r;return e=new zt({props:{class:"flex justify-between",$$slots:{default:[pn]},$$scope:{ctx:a}}}),t=new qt({props:{$$slots:{default:[gn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function hn(a){let e,n;return e=new Wt({props:{variant:"destructive",$$slots:{default:[wn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function vn(a){let e;return{c(){e=W("Error")},l(n){e=J(n,"Error")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function bn(a){let e,n,t="Set site URL";return{c(){e=W(`Badges will not work as you have not set the site URL in the settings.
            `),n=D("a"),n.textContent=t,this.h()},l(r){e=J(r,`Badges will not work as you have not set the site URL in the settings.
            `),n=I(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ge(n)!=="svelte-1v9ojsm"&&(n.textContent=t),this.h()},h(){L(n,"href",ue+"/manage/app/site"),L(n,"class","text-card-foreground")},m(r,l){b(r,e,l),b(r,n,l)},p:te,d(r){r&&(u(e),u(n))}}}function wn(a){let e,n,t,r,l,s;return e=new en({props:{class:"h-4 w-4"}}),t=new Jt({props:{$$slots:{default:[vn]},$$scope:{ctx:a}}}),l=new Yt({props:{$$slots:{default:[bn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment),r=T(),g(l.$$.fragment)},l(i){_(e.$$.fragment,i),n=R(i),_(t.$$.fragment,i),r=R(i),_(l.$$.fragment,i)},m(i,o){h(e,i,o),b(i,n,o),h(t,i,o),b(i,r,o),h(l,i,o),s=!0},p(i,o){const f={};o[1]&2097152&&(f.$$scope={dirty:o,ctx:i}),t.$set(f);const $={};o[1]&2097152&&($.$$scope={dirty:o,ctx:i}),l.$set($)},i(i){s||(m(e.$$.fragment,i),m(t.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(e.$$.fragment,i),d(t.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(n),u(r)),v(e,i),v(t,i),v(l,i)}}}function En(a){let e;return{c(){e=W("Select Monitor")},l(n){e=J(n,"Select Monitor")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function kn(a){let e,n;return e=new Ne({props:{placeholder:"Select Monitor"}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:te,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ln(a){let e;return{c(){e=W("Select Monitor")},l(n){e=J(n,"Select Monitor")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Cn(a){let e=a[49].label+"",n;return{c(){n=W(e)},l(t){n=J(t,e)},m(t,r){b(t,n,r)},p:te,d(t){t&&u(n)}}}function pt(a){let e,n;return e=new De({props:{value:a[49].value,class:"text-sm font-medium",$$slots:{default:[Cn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Dn(a){let e,n,t,r;e=new je({props:{$$slots:{default:[Ln]},$$scope:{ctx:a}}});let l=ve(a[8]),s=[];for(let o=0;o<l.length;o+=1)s[o]=pt(dt(a,l,o));const i=o=>d(s[o],1,1,()=>{s[o]=null});return{c(){g(e.$$.fragment),n=T();for(let o=0;o<s.length;o+=1)s[o].c();t=Ce()},l(o){_(e.$$.fragment,o),n=R(o);for(let f=0;f<s.length;f+=1)s[f].l(o);t=Ce()},m(o,f){h(e,o,f),b(o,n,f);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(o,f);b(o,t,f),r=!0},p(o,f){const $={};if(f[1]&2097152&&($.$$scope={dirty:f,ctx:o}),e.$set($),f[0]&256){l=ve(o[8]);let c;for(c=0;c<l.length;c+=1){const C=dt(o,l,c);s[c]?(s[c].p(C,f),m(s[c],1)):(s[c]=pt(C),s[c].c(),m(s[c],1),s[c].m(t.parentNode,t))}for(ge(),c=l.length;c<s.length;c+=1)i(c);_e()}},i(o){if(!r){m(e.$$.fragment,o);for(let f=0;f<l.length;f+=1)m(s[f]);r=!0}},o(o){d(e.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)d(s[f]);r=!1},d(o){o&&(u(n),u(t)),v(e,o),Ke(s,o)}}}function In(a){let e,n;return e=new Pe({props:{$$slots:{default:[Dn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Sn(a){let e,n,t,r;return e=new Ue({props:{id:"mm",class:"w-full",$$slots:{default:[kn]},$$scope:{ctx:a}}}),t=new He({props:{$$slots:{default:[In]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function gt(a){let e,n,t,r,l,s,i,o,f,$,c,C,k,S,A,B,N,M,z,Z,Y,F,Q=ve(a[1]),j=[];for(let U=0;U<Q.length;U+=1)j[U]=vt(mt(a,Q,U));const re=U=>d(j[U],1,1,()=>{j[U]=null});c=new ye({props:{variant:"ghost",class:"copybtn relative mt-1 h-5 w-5 p-0",$$slots:{default:[Fn]},$$scope:{ctx:a}}}),c.$on("click",a[26]),Z=new ye({props:{variant:"ghost",class:"copybtn relative mt-1 h-5 w-5 p-0",$$slots:{default:[Qn]},$$scope:{ctx:a}}}),Z.$on("click",a[27]);let O=a[0].value!="_"&&bt(a);return{c(){e=D("div");for(let U=0;U<j.length;U+=1)j[U].c();n=T(),t=D("div"),r=D("div"),l=D("div"),s=D("img"),o=W(`
                  Liveness Badge`),f=T(),$=D("div"),g(c.$$.fragment),C=T(),k=D("div"),S=D("div"),A=D("img"),N=W(`
                  Animated Liveness Badge`),M=T(),z=D("div"),g(Z.$$.fragment),Y=T(),O&&O.c(),this.h()},l(U){e=I(U,"DIV",{class:!0});var P=V(e);for(let ae=0;ae<j.length;ae+=1)j[ae].l(P);n=R(P),t=I(P,"DIV",{class:!0});var X=V(t);r=I(X,"DIV",{class:!0});var y=V(r);l=I(y,"DIV",{class:!0});var G=V(l);s=I(G,"IMG",{id:!0,src:!0,alt:!0,class:!0}),o=J(G,`
                  Liveness Badge`),G.forEach(u),f=R(y),$=I(y,"DIV",{});var ne=V($);_(c.$$.fragment,ne),ne.forEach(u),y.forEach(u),C=R(X),k=I(X,"DIV",{class:!0});var ie=V(k);S=I(ie,"DIV",{class:!0});var se=V(S);A=I(se,"IMG",{id:!0,src:!0,alt:!0,class:!0}),N=J(se,`
                  Animated Liveness Badge`),se.forEach(u),M=R(ie),z=I(ie,"DIV",{});var ee=V(z);_(Z.$$.fragment,ee),ee.forEach(u),ie.forEach(u),X.forEach(u),Y=R(P),O&&O.l(P),P.forEach(u),this.h()},h(){L(s,"id","oooo_img"),ke(s.src,i=`${ue}/badge/${a[0].value}/dot`)||L(s,"src",i),L(s,"alt","Uptime badge"),L(s,"class","inline-block"),L(l,"class","text-lg font-semibold"),L(r,"class","flex w-1/2 justify-between rounded-sm border p-2"),L(A,"id","oooo_img"),ke(A.src,B=`${ue}/badge/${a[0].value}/dot?animate=ping`)||L(A,"src",B),L(A,"alt","Uptime badge"),L(A,"class","inline-block"),L(S,"class","text-lg font-semibold"),L(k,"class","flex w-1/2 justify-between rounded-sm border p-2"),L(t,"class","col-span-2 flex flex-row gap-x-2"),L(e,"class","grid grid-cols-2 gap-2")},m(U,P){b(U,e,P);for(let X=0;X<j.length;X+=1)j[X]&&j[X].m(e,null);p(e,n),p(e,t),p(t,r),p(r,l),p(l,s),p(l,o),p(r,f),p(r,$),h(c,$,null),p(t,C),p(t,k),p(k,S),p(S,A),p(S,N),p(k,M),p(k,z),h(Z,z,null),p(e,Y),O&&O.m(e,null),F=!0},p(U,P){if(P[0]&1091){Q=ve(U[1]);let G;for(G=0;G<Q.length;G+=1){const ne=mt(U,Q,G);j[G]?(j[G].p(ne,P),m(j[G],1)):(j[G]=vt(ne),j[G].c(),m(j[G],1),j[G].m(e,n))}for(ge(),G=Q.length;G<j.length;G+=1)re(G);_e()}(!F||P[0]&1&&!ke(s.src,i=`${ue}/badge/${U[0].value}/dot`))&&L(s,"src",i);const X={};P[1]&2097152&&(X.$$scope={dirty:P,ctx:U}),c.$set(X),(!F||P[0]&1&&!ke(A.src,B=`${ue}/badge/${U[0].value}/dot?animate=ping`))&&L(A,"src",B);const y={};P[1]&2097152&&(y.$$scope={dirty:P,ctx:U}),Z.$set(y),U[0].value!="_"?O?(O.p(U,P),P[0]&1&&m(O,1)):(O=bt(U),O.c(),m(O,1),O.m(e,null)):O&&(ge(),d(O,1,1,()=>{O=null}),_e())},i(U){if(!F){for(let P=0;P<Q.length;P+=1)m(j[P]);m(c.$$.fragment,U),m(Z.$$.fragment,U),m(O),F=!0}},o(U){j=j.filter(Boolean);for(let P=0;P<j.length;P+=1)d(j[P]);d(c.$$.fragment,U),d(Z.$$.fragment,U),d(O),F=!1},d(U){U&&u(e),Ke(j,U),v(c),v(Z),O&&O.d()}}}function Mn(a){let e;return{c(){e=W("Custom Label")},l(n){e=J(n,"Custom Label")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Tn(a){let e;return{c(){e=W("Badge Style")},l(n){e=J(n,"Badge Style")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Rn(a){let e,n;return e=new Ne({props:{placeholder:"Select Style"}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:te,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Vn(a){let e;return{c(){e=W("Select Style")},l(n){e=J(n,"Select Style")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Bn(a){let e=a[46]+"",n;return{c(){n=W(e)},l(t){n=J(t,e)},m(t,r){b(t,n,r)},p:te,d(t){t&&u(n)}}}function _t(a){let e,n;return e=new De({props:{value:a[46],class:"text-sm font-medium",$$slots:{default:[Bn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function An(a){let e,n,t,r;e=new je({props:{$$slots:{default:[Vn]},$$scope:{ctx:a}}});let l=ve(a[10]),s=[];for(let o=0;o<l.length;o+=1)s[o]=_t($t(a,l,o));const i=o=>d(s[o],1,1,()=>{s[o]=null});return{c(){g(e.$$.fragment),n=T();for(let o=0;o<s.length;o+=1)s[o].c();t=Ce()},l(o){_(e.$$.fragment,o),n=R(o);for(let f=0;f<s.length;f+=1)s[f].l(o);t=Ce()},m(o,f){h(e,o,f),b(o,n,f);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(o,f);b(o,t,f),r=!0},p(o,f){const $={};if(f[1]&2097152&&($.$$scope={dirty:f,ctx:o}),e.$set($),f[0]&1024){l=ve(o[10]);let c;for(c=0;c<l.length;c+=1){const C=$t(o,l,c);s[c]?(s[c].p(C,f),m(s[c],1)):(s[c]=_t(C),s[c].c(),m(s[c],1),s[c].m(t.parentNode,t))}for(ge(),c=l.length;c<s.length;c+=1)i(c);_e()}},i(o){if(!r){m(e.$$.fragment,o);for(let f=0;f<l.length;f+=1)m(s[f]);r=!0}},o(o){d(e.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)d(s[f]);r=!1},d(o){o&&(u(n),u(t)),v(e,o),Ke(s,o)}}}function Un(a){let e,n;return e=new Pe({props:{$$slots:{default:[An]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Hn(a){let e,n,t,r;return e=new Ue({props:{id:"mm2"+a[45],class:"mt-2 w-full",$$slots:{default:[Rn]},$$scope:{ctx:a}}}),t=new He({props:{$$slots:{default:[Un]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function ht(a){let e,n,t,r,l,s,i,o,f,$,c,C;t=new Le({props:{for:"customLabel22"+a[45],$$slots:{default:[Nn]},$$scope:{ctx:a}}});function k(B){a[23](B,a[43])}let S={class:"mt-2",type:"text",id:"customLabel22"+a[45],placeholder:"duration in seconds"};a[43].sinceLast!==void 0&&(S.value=a[43].sinceLast),l=new It({props:S}),We.push(()=>Ye(l,"value",k)),f=new Le({props:{for:"customLabel23"+a[45],$$slots:{default:[Pn]},$$scope:{ctx:a}}});function A(...B){return a[24](a[43],a[44],a[45],...B)}return c=new Be({props:{portal:null,onSelectedChange:A,selected:{label:a[43].hideDuration,value:a[43].hideDuration},$$slots:{default:[Jn]},$$scope:{ctx:a}}}),{c(){e=D("div"),n=D("div"),g(t.$$.fragment),r=T(),g(l.$$.fragment),i=T(),o=D("div"),g(f.$$.fragment),$=T(),g(c.$$.fragment),this.h()},l(B){e=I(B,"DIV",{class:!0});var N=V(e);n=I(N,"DIV",{});var M=V(n);_(t.$$.fragment,M),r=R(M),_(l.$$.fragment,M),M.forEach(u),i=R(N),o=I(N,"DIV",{});var z=V(o);_(f.$$.fragment,z),$=R(z),_(c.$$.fragment,z),z.forEach(u),N.forEach(u),this.h()},h(){L(e,"class","grid grid-cols-2 gap-x-2")},m(B,N){b(B,e,N),p(e,n),h(t,n,null),p(n,r),h(l,n,null),p(e,i),p(e,o),h(f,o,null),p(o,$),h(c,o,null),C=!0},p(B,N){a=B;const M={};N[1]&2097152&&(M.$$scope={dirty:N,ctx:a}),t.$set(M);const z={};!s&&N[0]&2&&(s=!0,z.value=a[43].sinceLast,Je(()=>s=!1)),l.$set(z);const Z={};N[1]&2097152&&(Z.$$scope={dirty:N,ctx:a}),f.$set(Z);const Y={};N[0]&2&&(Y.onSelectedChange=A),N[0]&2&&(Y.selected={label:a[43].hideDuration,value:a[43].hideDuration}),N[1]&2097152&&(Y.$$scope={dirty:N,ctx:a}),c.$set(Y)},i(B){C||(m(t.$$.fragment,B),m(l.$$.fragment,B),m(f.$$.fragment,B),m(c.$$.fragment,B),C=!0)},o(B){d(t.$$.fragment,B),d(l.$$.fragment,B),d(f.$$.fragment,B),d(c.$$.fragment,B),C=!1},d(B){B&&u(e),v(t),v(l),v(f),v(c)}}}function Nn(a){let e;return{c(){e=W("Duration in seconds")},l(n){e=J(n,"Duration in seconds")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Pn(a){let e;return{c(){e=W("Duration Label")},l(n){e=J(n,"Duration Label")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function jn(a){let e,n;return e=new Ne({props:{placeholder:"Duration Label"}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:te,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function qn(a){let e;return{c(){e=W("Duration Label")},l(n){e=J(n,"Duration Label")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function On(a){let e;return{c(){e=W("Show Label")},l(n){e=J(n,"Show Label")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function zn(a){let e;return{c(){e=W("Hide Label")},l(n){e=J(n,"Hide Label")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Gn(a){let e,n,t,r,l,s;return e=new je({props:{$$slots:{default:[qn]},$$scope:{ctx:a}}}),t=new De({props:{value:"Show Label",class:"text-sm font-medium",$$slots:{default:[On]},$$scope:{ctx:a}}}),l=new De({props:{value:"Hide Label",class:"text-sm font-medium",$$slots:{default:[zn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment),r=T(),g(l.$$.fragment)},l(i){_(e.$$.fragment,i),n=R(i),_(t.$$.fragment,i),r=R(i),_(l.$$.fragment,i)},m(i,o){h(e,i,o),b(i,n,o),h(t,i,o),b(i,r,o),h(l,i,o),s=!0},p(i,o){const f={};o[1]&2097152&&(f.$$scope={dirty:o,ctx:i}),e.$set(f);const $={};o[1]&2097152&&($.$$scope={dirty:o,ctx:i}),t.$set($);const c={};o[1]&2097152&&(c.$$scope={dirty:o,ctx:i}),l.$set(c)},i(i){s||(m(e.$$.fragment,i),m(t.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(e.$$.fragment,i),d(t.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(n),u(r)),v(e,i),v(t,i),v(l,i)}}}function Wn(a){let e,n;return e=new Pe({props:{$$slots:{default:[Gn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Jn(a){let e,n,t,r;return e=new Ue({props:{id:"mm3"+a[45],class:"mt-2 w-full",$$slots:{default:[jn]},$$scope:{ctx:a}}}),t=new He({props:{$$slots:{default:[Wn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function Yn(a){let e,n,t;return{c(){e=D("img"),this.h()},l(r){e=I(r,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){L(e,"id",n=a[43].id+"_img"),ke(e.src,t=`${ue}/badge/${a[0].value}/uptime?labelColor=${a[43].labelColor.substr(1)}&color=${a[43].color.substr(1)}&style=${a[43].style}&label=${a[43].label}&sinceLast=${a[43].sinceLast}&hideDuration=${a[43].hideDuration.includes("Hide")}`)||L(e,"src",t),L(e,"alt","Uptime badge"),L(e,"class","mt-1")},m(r,l){b(r,e,l)},p(r,l){l[0]&2&&n!==(n=r[43].id+"_img")&&L(e,"id",n),l[0]&3&&!ke(e.src,t=`${ue}/badge/${r[0].value}/uptime?labelColor=${r[43].labelColor.substr(1)}&color=${r[43].color.substr(1)}&style=${r[43].style}&label=${r[43].label}&sinceLast=${r[43].sinceLast}&hideDuration=${r[43].hideDuration.includes("Hide")}`)&&L(e,"src",t)},d(r){r&&u(e)}}}function yn(a){let e,n,t;return{c(){e=D("img"),this.h()},l(r){e=I(r,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){L(e,"id",n=a[43].id+"_img"),ke(e.src,t=`${ue}/badge/${a[0].value}/status?labelColor=${a[43].labelColor.substr(1)}&color=${a[43].color.substr(1)}&style=${a[43].style}&label=${a[43].label}`)||L(e,"src",t),L(e,"alt","Status badge"),L(e,"class","mt-1")},m(r,l){b(r,e,l)},p(r,l){l[0]&2&&n!==(n=r[43].id+"_img")&&L(e,"id",n),l[0]&3&&!ke(e.src,t=`${ue}/badge/${r[0].value}/status?labelColor=${r[43].labelColor.substr(1)}&color=${r[43].color.substr(1)}&style=${r[43].style}&label=${r[43].label}`)&&L(e,"src",t)},d(r){r&&u(e)}}}function Kn(a){let e,n,t,r,l,s;return n=new Fe({props:{class:"inline-block h-4 w-4 text-green-500"}}),l=new Qe({props:{class:" inline-block h-4 w-4"}}),{c(){e=D("span"),g(n.$$.fragment),t=T(),r=D("span"),g(l.$$.fragment),this.h()},l(i){e=I(i,"SPAN",{class:!0});var o=V(e);_(n.$$.fragment,o),o.forEach(u),t=R(i),r=I(i,"SPAN",{class:!0});var f=V(r);_(l.$$.fragment,f),f.forEach(u),this.h()},h(){L(e,"class","check-btn absolute top-0"),L(r,"class","copy-btn absolute top-0")},m(i,o){b(i,e,o),h(n,e,null),b(i,t,o),b(i,r,o),h(l,r,null),s=!0},p:te,i(i){s||(m(n.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(n.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(e),u(t),u(r)),v(n),v(l)}}}function vt(a){let e,n,t,r=a[43].name+"",l,s,i,o=a[43].description+"",f,$,c,C,k,S,A,B,N,M,z,Z,Y,F,Q,j,re,O,U,P,X,y,G,ne,ie,se,ee,ae,he,be,fe,E,w;function H(q){a[17](q,a[43])}function le(...q){return a[18](a[43],a[44],a[45],...q)}let me={position:"responsive",isAlpha:!1,isDark:a[6]=="dark",isTextInput:!0,label:"Label Color"};a[43].labelColor!==void 0&&(me.hex=a[43].labelColor),k=new nt({props:me}),We.push(()=>Ye(k,"hex",H)),k.$on("input",le);function we(q){a[19](q,a[43])}function Ee(...q){return a[20](a[43],a[44],a[45],...q)}let Ie={position:"responsive",isAlpha:!1,isDark:a[6]=="dark",isTextInput:!0,label:"Status Color"};a[43].color!==void 0&&(Ie.hex=a[43].color),M=new nt({props:Ie}),We.push(()=>Ye(M,"hex",we)),M.$on("input",Ee),j=new Le({props:{for:"customLabel"+a[45],$$slots:{default:[Mn]},$$scope:{ctx:a}}});function de(q){a[21](q,a[43])}let pe={class:"mt-2",type:"text",id:"customLabel"+a[45],placeholder:"any label name"};a[43].label!==void 0&&(pe.value=a[43].label),O=new It({props:pe}),We.push(()=>Ye(O,"value",de)),y=new Le({props:{for:"mm2"+a[45],$$slots:{default:[Tn]},$$scope:{ctx:a}}});function $e(...q){return a[22](a[43],a[44],a[45],...q)}ne=new Be({props:{portal:null,onSelectedChange:$e,selected:{label:a[43].style,value:a[43].style},$$slots:{default:[Hn]},$$scope:{ctx:a}}});let x=a[43].id=="uptime_themed"&&ht(a);function ot(q,K){if(q[43].id=="status_themed")return yn;if(q[43].id=="uptime_themed")return Yn}let Me=ot(a),oe=Me&&Me(a);function St(){return a[25](a[43])}return fe=new ye({props:{variant:"ghost",class:"copybtn relative mt-1 h-5 w-5 p-0",$$slots:{default:[Kn]},$$scope:{ctx:a}}}),fe.$on("click",St),{c(){e=D("div"),n=D("div"),t=D("h3"),l=W(r),s=T(),i=D("p"),f=W(o),$=T(),c=D("div"),C=D("div"),S=D("div"),g(k.$$.fragment),B=T(),N=D("div"),z=D("div"),g(M.$$.fragment),Y=T(),F=D("div"),Q=D("div"),g(j.$$.fragment),re=T(),g(O.$$.fragment),P=T(),X=D("div"),g(y.$$.fragment),G=T(),g(ne.$$.fragment),ie=T(),x&&x.c(),se=T(),ee=D("div"),ae=D("div"),oe&&oe.c(),he=T(),be=D("div"),g(fe.$$.fragment),this.h()},l(q){e=I(q,"DIV",{class:!0,id:!0});var K=V(e);n=I(K,"DIV",{class:!0});var ce=V(n);t=I(ce,"H3",{class:!0});var Te=V(t);l=J(Te,r),Te.forEach(u),s=R(ce),i=I(ce,"P",{class:!0});var qe=V(i);f=J(qe,o),qe.forEach(u),$=R(ce),c=I(ce,"DIV",{class:!0});var Se=V(c);C=I(Se,"DIV",{class:!0});var Oe=V(C);S=I(Oe,"DIV",{style:!0});var Re=V(S);_(k.$$.fragment,Re),Oe.forEach(u),B=R(Se),N=I(Se,"DIV",{class:!0});var ze=V(N);z=I(ze,"DIV",{style:!0});var Mt=V(z);_(M.$$.fragment,Mt),ze.forEach(u),Se.forEach(u),Y=R(ce),F=I(ce,"DIV",{class:!0});var Xe=V(F);Q=I(Xe,"DIV",{});var Ze=V(Q);_(j.$$.fragment,Ze),re=R(Ze),_(O.$$.fragment,Ze),Ze.forEach(u),P=R(Xe),X=I(Xe,"DIV",{});var xe=V(X);_(y.$$.fragment,xe),G=R(xe),_(ne.$$.fragment,xe),xe.forEach(u),Xe.forEach(u),ie=R(ce),x&&x.l(ce),ce.forEach(u),se=R(K),ee=I(K,"DIV",{class:!0});var et=V(ee);ae=I(et,"DIV",{});var st=V(ae);oe&&oe.l(st),st.forEach(u),he=R(et),be=I(et,"DIV",{});var it=V(be);_(fe.$$.fragment,it),it.forEach(u),et.forEach(u),K.forEach(u),this.h()},h(){L(t,"class","text-lg font-semibold"),L(i,"class","text-sm font-medium text-muted-foreground"),Ve(S,"display","contents"),Ve(S,"--input-size","16px"),L(C,"class","like-input mt-0.5 h-10 rounded-sm border px-1.5 py-1.5 text-sm font-medium"),Ve(z,"display","contents"),Ve(z,"--input-size","16px"),L(N,"class","like-input mt-0.5 h-10 rounded-sm border px-1.5 py-1.5 text-sm font-medium"),L(c,"class","flex flex-row gap-x-2"),L(F,"class","grid grid-cols-2 gap-x-2"),L(n,"class","flex flex-col gap-y-2"),L(ee,"class","my-2 flex justify-between rounded-sm border p-2"),L(e,"class","col-span-1 flex flex-col justify-between gap-y-4 rounded-md border p-3"),L(e,"id",E=a[43].id)},m(q,K){b(q,e,K),p(e,n),p(n,t),p(t,l),p(n,s),p(n,i),p(i,f),p(n,$),p(n,c),p(c,C),p(C,S),h(k,S,null),p(c,B),p(c,N),p(N,z),h(M,z,null),p(n,Y),p(n,F),p(F,Q),h(j,Q,null),p(Q,re),h(O,Q,null),p(F,P),p(F,X),h(y,X,null),p(X,G),h(ne,X,null),p(n,ie),x&&x.m(n,null),p(e,se),p(e,ee),p(ee,ae),oe&&oe.m(ae,null),p(ee,he),p(ee,be),h(fe,be,null),w=!0},p(q,K){a=q,(!w||K[0]&2)&&r!==(r=a[43].name+"")&&Ae(l,r),(!w||K[0]&2)&&o!==(o=a[43].description+"")&&Ae(f,o);const ce={};K[0]&64&&(ce.isDark=a[6]=="dark"),!A&&K[0]&2&&(A=!0,ce.hex=a[43].labelColor,Je(()=>A=!1)),k.$set(ce);const Te={};K[0]&64&&(Te.isDark=a[6]=="dark"),!Z&&K[0]&2&&(Z=!0,Te.hex=a[43].color,Je(()=>Z=!1)),M.$set(Te);const qe={};K[1]&2097152&&(qe.$$scope={dirty:K,ctx:a}),j.$set(qe);const Se={};!U&&K[0]&2&&(U=!0,Se.value=a[43].label,Je(()=>U=!1)),O.$set(Se);const Oe={};K[1]&2097152&&(Oe.$$scope={dirty:K,ctx:a}),y.$set(Oe);const Re={};K[0]&2&&(Re.onSelectedChange=$e),K[0]&2&&(Re.selected={label:a[43].style,value:a[43].style}),K[1]&2097152&&(Re.$$scope={dirty:K,ctx:a}),ne.$set(Re),a[43].id=="uptime_themed"?x?(x.p(a,K),K[0]&2&&m(x,1)):(x=ht(a),x.c(),m(x,1),x.m(n,null)):x&&(ge(),d(x,1,1,()=>{x=null}),_e()),Me===(Me=ot(a))&&oe?oe.p(a,K):(oe&&oe.d(1),oe=Me&&Me(a),oe&&(oe.c(),oe.m(ae,null)));const ze={};K[1]&2097152&&(ze.$$scope={dirty:K,ctx:a}),fe.$set(ze),(!w||K[0]&2&&E!==(E=a[43].id))&&L(e,"id",E)},i(q){w||(m(k.$$.fragment,q),m(M.$$.fragment,q),m(j.$$.fragment,q),m(O.$$.fragment,q),m(y.$$.fragment,q),m(ne.$$.fragment,q),m(x),m(fe.$$.fragment,q),w=!0)},o(q){d(k.$$.fragment,q),d(M.$$.fragment,q),d(j.$$.fragment,q),d(O.$$.fragment,q),d(y.$$.fragment,q),d(ne.$$.fragment,q),d(x),d(fe.$$.fragment,q),w=!1},d(q){q&&u(e),v(k),v(M),v(j),v(O),v(y),v(ne),x&&x.d(),oe&&oe.d(),v(fe)}}}function Fn(a){let e,n,t,r,l,s;return n=new Fe({props:{class:"inline-block h-4 w-4 text-green-500"}}),l=new Qe({props:{class:" inline-block h-4 w-4"}}),{c(){e=D("span"),g(n.$$.fragment),t=T(),r=D("span"),g(l.$$.fragment),this.h()},l(i){e=I(i,"SPAN",{class:!0});var o=V(e);_(n.$$.fragment,o),o.forEach(u),t=R(i),r=I(i,"SPAN",{class:!0});var f=V(r);_(l.$$.fragment,f),f.forEach(u),this.h()},h(){L(e,"class","check-btn absolute top-0"),L(r,"class","copy-btn absolute top-0")},m(i,o){b(i,e,o),h(n,e,null),b(i,t,o),b(i,r,o),h(l,r,null),s=!0},p:te,i(i){s||(m(n.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(n.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(e),u(t),u(r)),v(n),v(l)}}}function Qn(a){let e,n,t,r,l,s;return n=new Fe({props:{class:"inline-block h-4 w-4 text-green-500"}}),l=new Qe({props:{class:" inline-block h-4 w-4"}}),{c(){e=D("span"),g(n.$$.fragment),t=T(),r=D("span"),g(l.$$.fragment),this.h()},l(i){e=I(i,"SPAN",{class:!0});var o=V(e);_(n.$$.fragment,o),o.forEach(u),t=R(i),r=I(i,"SPAN",{class:!0});var f=V(r);_(l.$$.fragment,f),f.forEach(u),this.h()},h(){L(e,"class","check-btn absolute top-0"),L(r,"class","copy-btn absolute top-0")},m(i,o){b(i,e,o),h(n,e,null),b(i,t,o),b(i,r,o),h(l,r,null),s=!0},p:te,i(i){s||(m(n.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(n.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(e),u(t),u(r)),v(n),v(l)}}}function bt(a){let e,n,t="Embed Monitor",r,l,s="Embed your monitor on your website. You can customize the theme, background color, and locale.",i,o,f,$,c,C,k,S,A,B,N,M,z,Z,Y,F,Q,j,re,O,U,P,X,y,G,ne="Get the Code",ie,se,ee,ae,he;$=new Le({props:{for:"theme",$$slots:{default:[Xn]},$$scope:{ctx:a}}}),C=new Be({props:{portal:null,onSelectedChange:a[28],selected:{label:a[2],value:a[2]},$$slots:{default:[rl]},$$scope:{ctx:a}}}),A=new Le({props:{for:"bgc",$$slots:{default:[al]},$$scope:{ctx:a}}});function be(w){a[29](w)}let fe={position:"responsive",isAlpha:!1,isDark:a[6]=="dark",isTextInput:!0,label:"Background Color"};a[3]!==void 0&&(fe.hex=a[3]),M=new nt({props:fe}),We.push(()=>Ye(M,"hex",be)),M.$on("input",a[30]),Q=new Le({props:{for:"locale",$$slots:{default:[ol]},$$scope:{ctx:a}}}),re=new Be({props:{portal:null,onSelectedChange:a[31],selected:a[4],$$slots:{default:[ml]},$$scope:{ctx:a}}}),P=new ln({props:{monitor:a[7]+ue+"/embed/monitor-"+a[0].value,theme:a[2],bgc:a[3].substr(1),locale:a[4].value}}),P.$on("update",a[14]),ee=new Be({props:{portal:null,onSelectedChange:a[32],$$slots:{default:[hl]},$$scope:{ctx:a}}});let E=!!a[5]&&kt(a);return{c(){e=D("div"),n=D("h3"),n.textContent=t,r=T(),l=D("p"),l.textContent=s,i=T(),o=D("div"),f=D("div"),g($.$$.fragment),c=T(),g(C.$$.fragment),k=T(),S=D("div"),g(A.$$.fragment),B=T(),N=D("div"),z=D("div"),g(M.$$.fragment),Y=T(),F=D("div"),g(Q.$$.fragment),j=T(),g(re.$$.fragment),O=T(),U=D("div"),g(P.$$.fragment),X=T(),y=D("div"),G=D("h3"),G.textContent=ne,ie=T(),se=D("div"),g(ee.$$.fragment),ae=T(),E&&E.c(),this.h()},l(w){e=I(w,"DIV",{class:!0});var H=V(e);n=I(H,"H3",{class:!0,"data-svelte-h":!0}),Ge(n)!=="svelte-k5k8su"&&(n.textContent=t),r=R(H),l=I(H,"P",{class:!0,"data-svelte-h":!0}),Ge(l)!=="svelte-s4bxuk"&&(l.textContent=s),i=R(H),o=I(H,"DIV",{class:!0});var le=V(o);f=I(le,"DIV",{class:!0});var me=V(f);_($.$$.fragment,me),c=R(me),_(C.$$.fragment,me),me.forEach(u),k=R(le),S=I(le,"DIV",{class:!0});var we=V(S);_(A.$$.fragment,we),B=R(we),N=I(we,"DIV",{class:!0});var Ee=V(N);z=I(Ee,"DIV",{style:!0});var Ie=V(z);_(M.$$.fragment,Ie),Ee.forEach(u),we.forEach(u),Y=R(le),F=I(le,"DIV",{class:!0});var de=V(F);_(Q.$$.fragment,de),j=R(de),_(re.$$.fragment,de),de.forEach(u),le.forEach(u),O=R(H),U=I(H,"DIV",{class:!0});var pe=V(U);_(P.$$.fragment,pe),pe.forEach(u),X=R(H),y=I(H,"DIV",{class:!0});var $e=V(y);G=I($e,"H3",{class:!0,"data-svelte-h":!0}),Ge(G)!=="svelte-w3uljh"&&(G.textContent=ne),ie=R($e),se=I($e,"DIV",{});var x=V(se);_(ee.$$.fragment,x),x.forEach(u),ae=R($e),E&&E.l($e),$e.forEach(u),H.forEach(u),this.h()},h(){L(n,"class","text-lg font-semibold"),L(l,"class","text-sm font-medium text-muted-foreground"),L(f,"class","w-48"),Ve(z,"display","contents"),Ve(z,"--input-size","16px"),L(N,"class","like-input mt-0.5 h-10 rounded-sm border px-1.5 py-1.5 text-sm font-medium"),L(S,"class","flex flex-col gap-y-2 pt-1.5"),L(F,"class","w-48"),L(o,"class","flex flex-row gap-x-2"),L(U,"class","my-2"),L(G,"class","text-lg font-semibold"),L(y,"class","flex flex-col gap-y-2"),L(e,"class","col-span-2 flex flex-col gap-y-2 rounded-md border p-3")},m(w,H){b(w,e,H),p(e,n),p(e,r),p(e,l),p(e,i),p(e,o),p(o,f),h($,f,null),p(f,c),h(C,f,null),p(o,k),p(o,S),h(A,S,null),p(S,B),p(S,N),p(N,z),h(M,z,null),p(o,Y),p(o,F),h(Q,F,null),p(F,j),h(re,F,null),p(e,O),p(e,U),h(P,U,null),p(e,X),p(e,y),p(y,G),p(y,ie),p(y,se),h(ee,se,null),p(y,ae),E&&E.m(y,null),he=!0},p(w,H){const le={};H[1]&2097152&&(le.$$scope={dirty:H,ctx:w}),$.$set(le);const me={};H[0]&4&&(me.onSelectedChange=w[28]),H[0]&4&&(me.selected={label:w[2],value:w[2]}),H[1]&2097152&&(me.$$scope={dirty:H,ctx:w}),C.$set(me);const we={};H[1]&2097152&&(we.$$scope={dirty:H,ctx:w}),A.$set(we);const Ee={};H[0]&64&&(Ee.isDark=w[6]=="dark"),!Z&&H[0]&8&&(Z=!0,Ee.hex=w[3],Je(()=>Z=!1)),M.$set(Ee);const Ie={};H[1]&2097152&&(Ie.$$scope={dirty:H,ctx:w}),Q.$set(Ie);const de={};H[0]&16&&(de.onSelectedChange=w[31]),H[0]&16&&(de.selected=w[4]),H[1]&2097152&&(de.$$scope={dirty:H,ctx:w}),re.$set(de);const pe={};H[0]&1&&(pe.monitor=w[7]+ue+"/embed/monitor-"+w[0].value),H[0]&4&&(pe.theme=w[2]),H[0]&8&&(pe.bgc=w[3].substr(1)),H[0]&16&&(pe.locale=w[4].value),P.$set(pe);const $e={};H[1]&2097152&&($e.$$scope={dirty:H,ctx:w}),ee.$set($e),w[5]?E?(E.p(w,H),H[0]&32&&m(E,1)):(E=kt(w),E.c(),m(E,1),E.m(y,null)):E&&(ge(),d(E,1,1,()=>{E=null}),_e())},i(w){he||(m($.$$.fragment,w),m(C.$$.fragment,w),m(A.$$.fragment,w),m(M.$$.fragment,w),m(Q.$$.fragment,w),m(re.$$.fragment,w),m(P.$$.fragment,w),m(ee.$$.fragment,w),m(E),he=!0)},o(w){d($.$$.fragment,w),d(C.$$.fragment,w),d(A.$$.fragment,w),d(M.$$.fragment,w),d(Q.$$.fragment,w),d(re.$$.fragment,w),d(P.$$.fragment,w),d(ee.$$.fragment,w),d(E),he=!1},d(w){w&&u(e),v($),v(C),v(A),v(M),v(Q),v(re),v(P),v(ee),E&&E.d()}}}function Xn(a){let e;return{c(){e=W("Theme")},l(n){e=J(n,"Theme")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function Zn(a){let e,n;return e=new Ne({props:{placeholder:"Select Theme"}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:te,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function xn(a){let e;return{c(){e=W("Select Theme")},l(n){e=J(n,"Select Theme")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function el(a){let e;return{c(){e=W("Light")},l(n){e=J(n,"Light")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function tl(a){let e;return{c(){e=W("Dark")},l(n){e=J(n,"Dark")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function nl(a){let e,n,t,r,l,s;return e=new je({props:{$$slots:{default:[xn]},$$scope:{ctx:a}}}),t=new De({props:{value:"light",class:"text-sm font-medium",$$slots:{default:[el]},$$scope:{ctx:a}}}),l=new De({props:{value:"dark",class:"text-sm font-medium",$$slots:{default:[tl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment),r=T(),g(l.$$.fragment)},l(i){_(e.$$.fragment,i),n=R(i),_(t.$$.fragment,i),r=R(i),_(l.$$.fragment,i)},m(i,o){h(e,i,o),b(i,n,o),h(t,i,o),b(i,r,o),h(l,i,o),s=!0},p(i,o){const f={};o[1]&2097152&&(f.$$scope={dirty:o,ctx:i}),e.$set(f);const $={};o[1]&2097152&&($.$$scope={dirty:o,ctx:i}),t.$set($);const c={};o[1]&2097152&&(c.$$scope={dirty:o,ctx:i}),l.$set(c)},i(i){s||(m(e.$$.fragment,i),m(t.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(e.$$.fragment,i),d(t.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(n),u(r)),v(e,i),v(t,i),v(l,i)}}}function ll(a){let e,n;return e=new Pe({props:{$$slots:{default:[nl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function rl(a){let e,n,t,r;return e=new Ue({props:{id:"theme",class:"mt-2 w-full",$$slots:{default:[Zn]},$$scope:{ctx:a}}}),t=new He({props:{$$slots:{default:[ll]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function al(a){let e;return{c(){e=W("Background Color")},l(n){e=J(n,"Background Color")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function ol(a){let e;return{c(){e=W("Locale")},l(n){e=J(n,"Locale")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function sl(a){let e,n;return e=new Ne({props:{placeholder:"Select Locale"}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:te,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function il(a){let e;return{c(){e=W("Select Locale")},l(n){e=J(n,"Select Locale")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function fl(a){let e=a[40].label+"",n;return{c(){n=W(e)},l(t){n=J(t,e)},m(t,r){b(t,n,r)},p:te,d(t){t&&u(n)}}}function wt(a){let e,n;return e=new De({props:{value:a[40].value,class:"text-sm font-medium",$$slots:{default:[fl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function cl(a){let e,n,t,r;e=new je({props:{$$slots:{default:[il]},$$scope:{ctx:a}}});let l=ve(a[9]),s=[];for(let o=0;o<l.length;o+=1)s[o]=wt(ut(a,l,o));const i=o=>d(s[o],1,1,()=>{s[o]=null});return{c(){g(e.$$.fragment),n=T();for(let o=0;o<s.length;o+=1)s[o].c();t=Ce()},l(o){_(e.$$.fragment,o),n=R(o);for(let f=0;f<s.length;f+=1)s[f].l(o);t=Ce()},m(o,f){h(e,o,f),b(o,n,f);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(o,f);b(o,t,f),r=!0},p(o,f){const $={};if(f[1]&2097152&&($.$$scope={dirty:f,ctx:o}),e.$set($),f[0]&512){l=ve(o[9]);let c;for(c=0;c<l.length;c+=1){const C=ut(o,l,c);s[c]?(s[c].p(C,f),m(s[c],1)):(s[c]=wt(C),s[c].c(),m(s[c],1),s[c].m(t.parentNode,t))}for(ge(),c=l.length;c<s.length;c+=1)i(c);_e()}},i(o){if(!r){m(e.$$.fragment,o);for(let f=0;f<l.length;f+=1)m(s[f]);r=!0}},o(o){d(e.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)d(s[f]);r=!1},d(o){o&&(u(n),u(t)),v(e,o),Ke(s,o)}}}function ul(a){let e,n;return e=new Pe({props:{$$slots:{default:[cl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function ml(a){let e,n,t,r;return e=new Ue({props:{id:"locale",class:"mt-2 w-full",$$slots:{default:[sl]},$$scope:{ctx:a}}}),t=new He({props:{$$slots:{default:[ul]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function $l(a){let e,n;return e=new Ne({props:{placeholder:"Select Language"}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:te,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function dl(a){let e;return{c(){e=W("Select Language")},l(n){e=J(n,"Select Language")},m(n,t){b(n,e,t)},d(n){n&&u(e)}}}function pl(a){let e=a[37].title+"",n;return{c(){n=W(e)},l(t){n=J(t,e)},m(t,r){b(t,n,r)},p:te,d(t){t&&u(n)}}}function Et(a){let e,n;return e=new De({props:{value:a[37].title,class:"text-sm font-medium",$$slots:{default:[pl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function gl(a){let e,n,t,r;e=new je({props:{$$slots:{default:[dl]},$$scope:{ctx:a}}});let l=ve(a[12]),s=[];for(let o=0;o<l.length;o+=1)s[o]=Et(ct(a,l,o));const i=o=>d(s[o],1,1,()=>{s[o]=null});return{c(){g(e.$$.fragment),n=T();for(let o=0;o<s.length;o+=1)s[o].c();t=Ce()},l(o){_(e.$$.fragment,o),n=R(o);for(let f=0;f<s.length;f+=1)s[f].l(o);t=Ce()},m(o,f){h(e,o,f),b(o,n,f);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(o,f);b(o,t,f),r=!0},p(o,f){const $={};if(f[1]&2097152&&($.$$scope={dirty:f,ctx:o}),e.$set($),f[0]&4096){l=ve(o[12]);let c;for(c=0;c<l.length;c+=1){const C=ct(o,l,c);s[c]?(s[c].p(C,f),m(s[c],1)):(s[c]=Et(C),s[c].c(),m(s[c],1),s[c].m(t.parentNode,t))}for(ge(),c=l.length;c<s.length;c+=1)i(c);_e()}},i(o){if(!r){m(e.$$.fragment,o);for(let f=0;f<l.length;f+=1)m(s[f]);r=!0}},o(o){d(e.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)d(s[f]);r=!1},d(o){o&&(u(n),u(t)),v(e,o),Ke(s,o)}}}function _l(a){let e,n;return e=new Pe({props:{$$slots:{default:[gl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const l={};r[1]&2097152&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function hl(a){let e,n,t,r;return e=new Ue({props:{id:"docs",class:"mt-2 w-48",$$slots:{default:[$l]},$$scope:{ctx:a}}}),t=new He({props:{$$slots:{default:[_l]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function kt(a){let e,n,t,r=!!a[5].code&&Lt(a),l=!!a[5].howto&&Ct(a);return{c(){e=D("div"),r&&r.c(),n=T(),l&&l.c(),this.h()},l(s){e=I(s,"DIV",{class:!0});var i=V(e);r&&r.l(i),n=R(i),l&&l.l(i),i.forEach(u),this.h()},h(){L(e,"class","flex flex-col gap-y-2")},m(s,i){b(s,e,i),r&&r.m(e,null),p(e,n),l&&l.m(e,null),t=!0},p(s,i){s[5].code?r?(r.p(s,i),i[0]&32&&m(r,1)):(r=Lt(s),r.c(),m(r,1),r.m(e,n)):r&&(ge(),d(r,1,1,()=>{r=null}),_e()),s[5].howto?l?(l.p(s,i),i[0]&32&&m(l,1)):(l=Ct(s),l.c(),m(l,1),l.m(e,null)):l&&(ge(),d(l,1,1,()=>{l=null}),_e())},i(s){t||(m(r),m(l),t=!0)},o(s){d(r),d(l),t=!1},d(s){s&&u(e),r&&r.d(),l&&l.d()}}}function Lt(a){let e,n=a[5].guide1+"",t,r,l,s,i,o,f,$=a[5].code+"",c,C;return s=new ye({props:{variant:"secondary",class:"copybtn absolute right-2 top-2 mt-1 h-8 w-8",$$slots:{default:[vl]},$$scope:{ctx:a}}}),s.$on("click",a[33]),{c(){e=D("p"),t=W(n),r=T(),l=D("div"),g(s.$$.fragment),i=T(),o=D("pre"),f=D("code"),c=W($),this.h()},l(k){e=I(k,"P",{});var S=V(e);t=J(S,n),S.forEach(u),r=R(k),l=I(k,"DIV",{class:!0});var A=V(l);_(s.$$.fragment,A),i=R(A),o=I(A,"PRE",{class:!0});var B=V(o);f=I(B,"CODE",{class:!0});var N=V(f);c=J(N,$),N.forEach(u),B.forEach(u),A.forEach(u),this.h()},h(){L(f,"class","language-js"),L(o,"class","max-h-96 overflow-auto"),L(l,"class","relative rounded-md bg-background p-3 text-sm")},m(k,S){b(k,e,S),p(e,t),b(k,r,S),b(k,l,S),h(s,l,null),p(l,i),p(l,o),p(o,f),p(f,c),C=!0},p(k,S){(!C||S[0]&32)&&n!==(n=k[5].guide1+"")&&Ae(t,n);const A={};S[1]&2097152&&(A.$$scope={dirty:S,ctx:k}),s.$set(A),(!C||S[0]&32)&&$!==($=k[5].code+"")&&Ae(c,$)},i(k){C||(m(s.$$.fragment,k),C=!0)},o(k){d(s.$$.fragment,k),C=!1},d(k){k&&(u(e),u(r),u(l)),v(s)}}}function vl(a){let e,n,t,r,l,s;return n=new Fe({props:{class:"inline-block h-4 w-4 text-green-500"}}),l=new Qe({props:{class:" inline-block h-4 w-4"}}),{c(){e=D("span"),g(n.$$.fragment),t=T(),r=D("span"),g(l.$$.fragment),this.h()},l(i){e=I(i,"SPAN",{class:!0});var o=V(e);_(n.$$.fragment,o),o.forEach(u),t=R(i),r=I(i,"SPAN",{class:!0});var f=V(r);_(l.$$.fragment,f),f.forEach(u),this.h()},h(){L(e,"class","check-btn absolute top-1"),L(r,"class","copy-btn absolute top-1")},m(i,o){b(i,e,o),h(n,e,null),b(i,t,o),b(i,r,o),h(l,r,null),s=!0},p:te,i(i){s||(m(n.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(n.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(e),u(t),u(r)),v(n),v(l)}}}function Ct(a){let e,n=a[5].guide2+"",t,r,l,s,i,o,f,$=a[5].howto+"",c,C;return s=new ye({props:{variant:"secondary",class:"copybtn absolute right-2 top-2 mt-1 h-8 w-8",$$slots:{default:[bl]},$$scope:{ctx:a}}}),s.$on("click",a[34]),{c(){e=D("p"),t=W(n),r=T(),l=D("div"),g(s.$$.fragment),i=T(),o=D("pre"),f=D("code"),c=W($),this.h()},l(k){e=I(k,"P",{});var S=V(e);t=J(S,n),S.forEach(u),r=R(k),l=I(k,"DIV",{class:!0});var A=V(l);_(s.$$.fragment,A),i=R(A),o=I(A,"PRE",{class:!0});var B=V(o);f=I(B,"CODE",{class:!0});var N=V(f);c=J(N,$),N.forEach(u),B.forEach(u),A.forEach(u),this.h()},h(){L(f,"class","language-js"),L(o,"class","overflow-auto"),L(l,"class","relative rounded-md bg-background p-3 text-sm")},m(k,S){b(k,e,S),p(e,t),b(k,r,S),b(k,l,S),h(s,l,null),p(l,i),p(l,o),p(o,f),p(f,c),C=!0},p(k,S){(!C||S[0]&32)&&n!==(n=k[5].guide2+"")&&Ae(t,n);const A={};S[1]&2097152&&(A.$$scope={dirty:S,ctx:k}),s.$set(A),(!C||S[0]&32)&&$!==($=k[5].howto+"")&&Ae(c,$)},i(k){C||(m(s.$$.fragment,k),C=!0)},o(k){d(s.$$.fragment,k),C=!1},d(k){k&&(u(e),u(r),u(l)),v(s)}}}function bl(a){let e,n,t,r,l,s;return n=new Fe({props:{class:"inline-block h-4 w-4 text-green-500"}}),l=new Qe({props:{class:" inline-block h-4 w-4"}}),{c(){e=D("span"),g(n.$$.fragment),t=T(),r=D("span"),g(l.$$.fragment),this.h()},l(i){e=I(i,"SPAN",{class:!0});var o=V(e);_(n.$$.fragment,o),o.forEach(u),t=R(i),r=I(i,"SPAN",{class:!0});var f=V(r);_(l.$$.fragment,f),f.forEach(u),this.h()},h(){L(e,"class","check-btn absolute top-1"),L(r,"class","copy-btn absolute top-1")},m(i,o){b(i,e,o),h(n,e,null),b(i,t,o),b(i,r,o),h(l,r,null),s=!0},p:te,i(i){s||(m(n.$$.fragment,i),m(l.$$.fragment,i),s=!0)},o(i){d(n.$$.fragment,i),d(l.$$.fragment,i),s=!1},d(i){i&&(u(e),u(t),u(r)),v(n),v(l)}}}function wl(a){let e,n,t,r,l,s,i,o=!a[7]&&hn(a);t=new Le({props:{for:"customLabsasd",$$slots:{default:[En]},$$scope:{ctx:a}}}),l=new Be({props:{portal:null,onSelectedChange:a[16],selected:a[0],$$slots:{default:[Sn]},$$scope:{ctx:a}}});let f=!!a[0]&&gt(a);return{c(){o&&o.c(),e=T(),n=D("div"),g(t.$$.fragment),r=T(),g(l.$$.fragment),s=T(),f&&f.c(),this.h()},l($){o&&o.l($),e=R($),n=I($,"DIV",{class:!0});var c=V(n);_(t.$$.fragment,c),r=R(c),_(l.$$.fragment,c),s=R(c),f&&f.l(c),c.forEach(u),this.h()},h(){L(n,"class","flex flex-col gap-y-2")},m($,c){o&&o.m($,c),b($,e,c),b($,n,c),h(t,n,null),p(n,r),h(l,n,null),p(n,s),f&&f.m(n,null),i=!0},p($,c){const C={};c[1]&2097152&&(C.$$scope={dirty:c,ctx:$}),t.$set(C);const k={};c[0]&1&&(k.onSelectedChange=$[16]),c[0]&1&&(k.selected=$[0]),c[1]&2097152&&(k.$$scope={dirty:c,ctx:$}),l.$set(k),$[0]?f?(f.p($,c),c[0]&1&&m(f,1)):(f=gt($),f.c(),m(f,1),f.m(n,null)):f&&(ge(),d(f,1,1,()=>{f=null}),_e())},i($){i||(m(o),m(t.$$.fragment,$),m(l.$$.fragment,$),m(f),i=!0)},o($){d(o),d(t.$$.fragment,$),d(l.$$.fragment,$),d(f),i=!1},d($){$&&(u(e),u(n)),o&&o.d($),v(t),v(l),f&&f.d()}}}function El(a){let e,n,t,r;return e=new Ot({props:{class:"border-b",$$slots:{default:[_n]},$$scope:{ctx:a}}}),t=new jt({props:{class:"flex flex-col gap-y-4 pt-4",$$slots:{default:[wl]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){_(e.$$.fragment,l),n=R(l),_(t.$$.fragment,l)},m(l,s){h(e,l,s),b(l,n,s),h(t,l,s),r=!0},p(l,s){const i={};s[1]&2097152&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const o={};s[0]&127|s[1]&2097152&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){r||(m(e.$$.fragment,l),m(t.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(t.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l),v(t,l)}}}function kl(a){let e,n,t;return n=new Pt({props:{class:"mt-4",$$slots:{default:[El]},$$scope:{ctx:a}}}),{c(){e=D("div"),g(n.$$.fragment),this.h()},l(r){e=I(r,"DIV",{class:!0});var l=V(e);_(n.$$.fragment,l),l.forEach(u),this.h()},h(){L(e,"class","min-h-[70vh]")},m(r,l){b(r,e,l),h(n,e,null),t=!0},p(r,l){const s={};l[0]&127|l[1]&2097152&&(s.$$scope={dirty:l,ctx:r}),n.$set(s)},i(r){t||(m(n.$$.fragment,r),t=!0)},o(r){d(n.$$.fragment,r),t=!1},d(r){r&&u(e),v(n)}}}function Ll(a){let e=document.getElementById(`${a}_img`);e=e.src,navigator.clipboard.writeText(e);let n=document.querySelector(`#${a} button`);setTimeout(()=>{n.blur()},2e3)}function Cl(a,e,n){let t;Nt(a,Gt,E=>n(6,t=E));let{data:r}=e,l=r.siteName,s=r.siteURL,i=r.monitors.map(E=>({label:E.name,value:E.tag})),o={label:l,value:"_"};i.unshift(o);let f=r.i18n.locales.filter(E=>E.selected).map(E=>({label:E.name,value:E.code})),$=i[0];Dt(()=>{k()});let c=["flat","flat-square","for-the-badge","plastic","social"],C=[{name:"Create Status Badge",description:"Create a status badge for your monitor. You can customize the label color, status color, and style.",url:"",labelColor:"",color:"",style:"flat",id:"status_themed",label:""},{name:"Create Uptime Badge",description:"Create an uptime badge for your monitor. You can customize the label color, status color, and style.",url:"",labelColor:"#333",color:"#7a44dc",style:"flat",id:"uptime_themed",label:"",sinceLast:90*24*60*60,hideDuration:"Show Label"}];function k(){n(1,C=C.map(E=>$.value=="_"?(E.label=l,E):(E.label=r.monitors.find(w=>w.tag==$.value).name,E)))}let S="dark",A="#212226",B=f.find(E=>E.value==r.i18n.defaultLocale),N=[{title:"Svelte 4",code:rn,howto:an,guide1:"To embed the monitor on your website, you can use the following code snippet. Save the below snippet in a svelte file example: EmbedMonitor.svelte",guide2:"Then, import the Embed component in your svelte file and use it as shown below:"},{title:"React",code:on,howto:sn,guide1:"To embed the monitor on your website, you can use the following code snippet. Save the below snippet in a react file example: EmbedMonitor.jsx",guide2:"Then, import the Embed component in your react file and use it as shown below:"},{title:"Vue 3",code:fn,howto:cn,guide1:"To embed the monitor on your website, you can use the following code snippet. Save the below snippet in a vue file example: EmbedMonitor.vue",guide2:"Then, import the Embed component in your vue file and use it as shown below:"},{title:"Angular",code:un,howto:mn,guide1:"To embed the monitor on your website, you can use the following code snippet. Save the snippet in an Angular component file, for example: `embed-monitor.component.ts`.",guide2:"Then, import the `EmbedMonitorComponent` in your Angular module or component and use it as shown below:"},{title:"HTML",code:"",howto:$n,guide1:"",guide2:"To embed the monitor on your website, you can use the following code snippet. This uses an iframe to embed the monitor."},{title:"JavaScript",code:"",howto:dn,guide1:"",guide2:"To embed the monitor on your website, you can use the following code snippet. You can paste this line of code in your HTML file. It will get updated automatically."}],M;function z(E){n(5,M=JSON.parse(JSON.stringify(N.find(w=>w.title==E)))),n(5,M.howto=M.howto.replaceAll("{embedTheme}",S),M),n(5,M.howto=M.howto.replaceAll("{embedBgc.substr(1)}",A.substr(1)),M),n(5,M.howto=M.howto.replaceAll("{embedLocale.value}",B.value),M),n(5,M.howto=M.howto.replaceAll("{selectedMonitor.value}",$.value),M),n(5,M.howto=M.howto.replaceAll("{siteURL}",r.siteURL),M),n(5,M.howto=M.howto.replaceAll("{base}",ue),M)}function Z(){M&&z(M.title)}const Y=E=>{n(0,$=E),k()};function F(E,w){a.$$.not_equal(w.labelColor,E)&&(w.labelColor=E,n(1,C))}const Q=(E,w,H,le)=>{n(1,w[H].labelColor=le.detail.hex,C)};function j(E,w){a.$$.not_equal(w.color,E)&&(w.color=E,n(1,C))}const re=(E,w,H,le)=>{n(1,w[H].color=le.detail.hex,C)};function O(E,w){a.$$.not_equal(w.label,E)&&(w.label=E,n(1,C))}const U=(E,w,H,le)=>{n(1,w[H].style=le.value,C)};function P(E,w){a.$$.not_equal(w.sinceLast,E)&&(w.sinceLast=E,n(1,C))}const X=(E,w,H,le)=>{n(1,w[H].hideDuration=le.value,C)},y=E=>{Ll(E.id)},G=()=>{window.navigator.clipboard.writeText(`${ue}/badge/${$.value}/dot`)},ne=()=>{window.navigator.clipboard.writeText(`${ue}/badge/${$.value}/dot?animate=ping`)},ie=E=>{n(2,S=E.value)};function se(E){A=E,n(3,A)}const ee=E=>{n(3,A=E.detail.hex)},ae=E=>{n(4,B=E)},he=E=>{z(E.value)},be=()=>{navigator.clipboard.writeText(M.code)},fe=()=>{navigator.clipboard.writeText(M.howto)};return a.$$set=E=>{"data"in E&&n(15,r=E.data)},[$,C,S,A,B,M,t,s,i,f,c,k,N,z,Z,r,Y,F,Q,j,re,O,U,P,X,y,G,ne,ie,se,ee,ae,he,be,fe]}class yl extends rt{constructor(e){super(),at(this,e,Cl,kl,lt,{data:15},null,[-1,-1])}}export{yl as component};
