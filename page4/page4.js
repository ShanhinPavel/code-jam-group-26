!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){var n,o,a={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],c=r(1);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(v(n.parts[i],t))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(v(n.parts[i],t));a[n.id]={id:n.id,refs:1,parts:s}}}}function b(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}function h(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,r);r.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function v(e,t){var r,n,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=u++;r=l||(l=m(t)),n=S.bind(null,r,i,!1),o=S.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(n=c(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){p(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){p(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=b(e,t);return d(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var i=r[o];(s=a[i.id]).refs--,n.push(s)}e&&d(b(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function S(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){},,,,,,,function(e,t,r){"use strict";var n,o=r(11),a=(n=o)&&n.__esModule?n:{default:n};function i(e){var t=JSON.stringify(e);localStorage.setItem("Culture-Portal",t)}function s(e){var t=void 0;Object.keys(a.default).forEach(function(r){r===e&&(t=a.default[r])});Object.keys(t).forEach(function(e){document.getElementById(e).innerHTML=t[e]})}function l(){var e,t;s((null===(e=JSON.parse(localStorage.getItem("Culture-Portal")))&&(i("ru"),e="ru"),e)),t=void 0,Object.keys(a.default).forEach(function(e){"a-href"===e&&(t=a.default[e])}),Object.keys(t).forEach(function(e){document.getElementById(e).href=t[e]}),function(){var e=void 0;Object.keys(a.default).forEach(function(t){"src"===t&&(e=a.default[t])}),Object.keys(e).forEach(function(t){document.getElementById(t).src=e[t]})}(),document.getElementsByClassName("main__lang-buttons")[0].addEventListener("click",function(e){var t;e.preventDefault(),"ru"===(t=e.target.dataset.lang)||"en"===t||"by"===t?JSON.parse(localStorage.getItem("Culture-Portal"))!==t&&(i(t),s(t)):i("ru")})}r(2),window.onload=function(){l()}},function(e){e.exports={"a-href":{},src:{authorPhoto:"./img/author.jpg",authorPhotoGalleryImg1:"./img/gal1.jpg",authorPhotoGalleryImg2:"./img/gal2.jpg",authorPhotoGalleryImg3:"./img/gal3.jpg",authorVideoGalleryFilm:"https://www.youtube.com/embed/Y2ql2QcpUio",authorGeoImg1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19031.518328217953!2d27.13236803715175!3d53.39801691933964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d90b5d6f81f855%3A0x806519e3b87d3035!2z0J3QuNC30L7Qug!5e0!3m2!1sru!2sby!4v1548587081489"},en:{main__logo:"Belarusian writers",videoGalTitle:"Video gallery",photoGalTitle:"Photo gallery",authorName:"Kandrat Krapiva",authorAbout:"Kondrat Krapiva (Belarusian: Кандрат Крапіва, 5 March 1896 – 7 January 1991) was a Belarusian writer, playwright, social activist, and literary critic. He was the winner of two Stalin Prizes in 1941 and 1951 and winner of the USSR State Prize in 1971. From 1950 he was a member of the Academy of Sciences of the Belorussian SSR. He was a writer for the magazine, Polymya. Krapiva served in the Tsarist army from 1915, the Red Army from 1920 to 1923, and was involved in the campaign for the liberation of western Byelorussia in 1939 and the Great Patriotic War (1941–45). His began his literary career in 1922, writing fables, poems, narrative poems, and short stories. Among his notable short stories are The Nettle (1925), Fables (1927), Neighbors (1928), and Live Phenomena (1930). He published the novel The Medvedichi in 1932. He was also a notable playwright, writing plays such as The Partisans (1937), a heroic drama, and He Who Laughs Last (1939), a comedy which earned him the State Prize of the USSR in 1941. Post-war plays include With the People (1948) and People and Devils (1958).",authorWorks:"Astio (1925) <br> Nettle (1925) <br> The Bible (1926) <br> Fables (1927) <br> The Ukhabs on the Road (1930) <br> About Our pests, priests and saints ”(1930) <br>“ Fedos - Red Nose ”(1931, poem in fairy tales) <br>“ The prickly system ”(1932) <br>“ Selected fables ”(1932) <br>“ Selected poems (1935) <br> The Selected Satyr (1938) <br> Selected Works (1941, 1947, 1948) <br> Laughter and Anger (1946) <br> Satire and Humor (1954) <br> “Toad in a rut” (1957) <br> “Fables, poems and plays” (1960) <br> “Forty fables” (1966) <br> “Poems and fables” (1967, 1990) <br> “Fables and Poems” (1971) <br> Book for Children “The Mysteries of Kondrat’s Grandfather” (1986)."},ru:{main__logo:"Писатели Беларуси",videoGalTitle:"Видео галлерея",photoGalTitle:"Фото галлерея",authorName:"Кондрат Крапива",authorAbout:"Кондра́т Крапива́ (белор. Кандрат Крапіва, настоящее имя — Кондра́т Кондра́тович Атрахо́вич; белор. Кандрат Атраховіч; 1896—1991) — белорусский советский писатель, поэт, драматург и переводчик, литературовед, сатирик, общественный деятель. Доктор филологических наук, академик АН Белорусской ССР (1950). Член ВКП(б) с 1941 года. Народный писатель Белорусской ССР (1956). Герой Социалистического Труда (1975). Лауреат двух Сталинских премий (1941, 1951) и Государственной премии СССР (1971).",authorWorks:"«Астё» (1925)<br>«Крапива» (1925)<br>«Библия» (1926)<br>«Басни» (1927)<br>«Ухабы на дороге» (1930)<br>«Про наших вредителей, попов и угодников» (1930)<br>«Федос — Красный нос» (1931, стихотворная сказка)<br>«Колючий строй» (1932)<br>«Избранные басни» (1932)<br>«Избранные стихи» (1935)<br>«Избранная сатира» (1938)<br>«Избранные произведения» (1941, 1947, 1948)<br>«Смех и гнев» (1946)<br>«Сатира и юмор» (1954)<br>«Жаба в колее» (1957)<br>«Басни, стихи и пьесы» (1960)<br>«Сорок басен» (1966)<br>«Стихи и басни» (1967, 1990)<br>«Басни и стихи» (1971)<br>Книга для детей «Загадки деда Кондрата» (1986)."},by:{main__logo:"Пісьменнікі Беларусі",videoGalTitle:"Відэа галерэя",photoGalTitle:"Фота галерэя",authorName:"Кандрат Крапіва",authorAbout:"Кандра́т Крапіва́, сапр.: Кандра́т Кандра́тавіч Атрахо́віч (5 сакавіка 1896, в. Нізок, цяпер Уздзенскі раён — 7 студзеня 1991, Мінск) — беларускі пісьменнік, паэт, сатырык, драматург, перакладчык, грамадскі дзеяч, літаратуразнавец. Народны пісьменнік Беларусі (1956). Герой Сацыялістычнай Працы (1975). Лаўрэат дзвюх Сталінскіх прэмій (1941, 1951) і Дзяржаўнай прэміі СССР (1971). З 1940 — член-карэспандэнт, а з 1950 — акадэмік АН БССР. Доктар філалагічных навук.",authorWorks:"«Астё» (1925) <br> «Крапіва» (1925) <br> «Біблія» (1926) <br> «Байкі» (1927) <br> «Выбоіны на дарозе» (1930) <br> «Пра нашых шкоднікаў, папоў і угоднікаў »(1930) <br>« Хвядос - Чырвоны нос (1931, вершаваная казка) <br>« Калючы строй »(1932) <br>« Выбраныя байкі »(1932) <br>« Выбраныя вершы »(1935) <br>« Выбраная сатыра (1938) <br>« Выбраныя творы (1941, 1947, 1948) <br>« Смех і гнеў (1946) <br>« сатыра і гумар »(1954) <br> «Жаба ў каляіне» (1957) <br> «байкі, вершы і п'есы» (1960) <br> «Сорак баек» (1966) <br> «вершы і байкі» (1967, 1990) <br> «Байкі і вершы» (1971) <br> Кніга для дзяцей «Загадкі дзеда Кандрата» (1986)."}}}]);
//# sourceMappingURL=page4.js.map