if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),g={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>g[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e5ce63c-fcbd62882d001e12.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/12-fdb28cfea2b2cf9f.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/162-63f7c9f6ff19c591.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/190-1c913b1eeb416173.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/207-39c065b2e9c33176.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/26.30fca5d0d9cb6983.js",revision:"30fca5d0d9cb6983"},{url:"/_next/static/chunks/318.395d428cd1f11c35.js",revision:"395d428cd1f11c35"},{url:"/_next/static/chunks/3a91511d-8c6991e761fab6b8.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/501-8a9061d72ae43d6c.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/544-45bfaa86fea6268d.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/550.78062c8e0f31c7e4.js",revision:"78062c8e0f31c7e4"},{url:"/_next/static/chunks/5ab80550-b00268c3225d7e0f.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/648-421a48ea940bb9a8.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/715-8ce2a9bf99ee437f.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/773-4e30c0ce61f9e850.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/835-37106b351165841e.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/842-bb6fd5cd2c3e137c.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/855-2e404dc7921ad046.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/860-f29cbd497b14a735.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/866.1c72dba058239720.js",revision:"1c72dba058239720"},{url:"/_next/static/chunks/9c560169-4e04186efb5cd1f1.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/_not-found/page-9aa576eda6be3229.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/dashboard/page-42447095eaa8d454.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/layout-e531660e0ba2d8c4.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/membership/page-66e3313291025688.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/ownership/page-188f8020800dbfd5.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/page-0e185f660587b917.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/profile/page-02ae64e3eb1468cb.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/app/sponsorship/page-975f87294160bb1c.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/fd9d1056-4dbce9af0b5236d8.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/main-44c900a5f5db7318.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/main-app-a9eea367e36b1772.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-a8559679a2f8f86a.js",revision:"lUY48aNWQjEEB_DggV7V-"},{url:"/_next/static/css/b9508fd6e9f0bcec.css",revision:"b9508fd6e9f0bcec"},{url:"/_next/static/lUY48aNWQjEEB_DggV7V-/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/lUY48aNWQjEEB_DggV7V-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/icons/192x192.png",revision:"9f530621905c55316f50497516b2cc23"},{url:"/icons/384x384.png",revision:"e224dd9533d0798a1d8ea87f8f905695"},{url:"/icons/512x512.png",revision:"79fa6e6f331363b5323dbb7b2435b196"},{url:"/images/construction.svg",revision:"6d85cd7af75d42e4c372720f61f5a242"},{url:"/images/kekeFeatures.svg",revision:"93c100af9bb375e32e0a7d676e3200aa"},{url:"/images/kekeFeaturesLorry.svg",revision:"b1a4dd7f896a78dde38764cf65d86e69"},{url:"/images/kekeHero.svg",revision:"31dcfb6f012754a6bb97995910595bee"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
