!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){var n,o,a={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,l=0,f=[],c=r(1);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(y(n.parts[i],t))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(y(n.parts[i],t));a[n.id]={id:n.id,refs:1,parts:s}}}}function p(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}function b(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,r);r.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return v(t,e.attrs),b(e,t),t}function v(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function y(e,t){var r,n,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=l++;r=u||(u=m(t)),n=k.bind(null,r,i,!1),o=k.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),b(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(n=c(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){h(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=p(e,t);return d(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var i=r[o];(s=a[i.id]).refs--,n.push(s)}e&&d(p(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function k(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){},,,function(e,t,r){"use strict";var n,o=r(7),a=(n=o)&&n.__esModule?n:{default:n};function i(e){var t=JSON.stringify(e);localStorage.setItem("Culture-Portal",t)}function s(e){var t=void 0;Object.keys(a.default).forEach(function(r){r===e&&(t=a.default[r])});Object.keys(t).forEach(function(e){document.getElementById(e).innerHTML=t[e]})}function u(){var e,t;s((null===(e=JSON.parse(localStorage.getItem("Culture-Portal")))&&(i("ru"),e="ru"),e)),t=void 0,Object.keys(a.default).forEach(function(e){"a-href"===e&&(t=a.default[e])}),Object.keys(t).forEach(function(e){document.getElementById(e).href=t[e]}),function(){var e=void 0;Object.keys(a.default).forEach(function(t){"src"===t&&(e=a.default[t])}),Object.keys(e).forEach(function(t){document.getElementById(t).src=e[t]})}(),document.getElementsByClassName("main__lang-buttons")[0].addEventListener("click",function(e){var t;e.preventDefault(),"ru"===(t=e.target.dataset.lang)||"en"===t||"by"===t?JSON.parse(localStorage.getItem("Culture-Portal"))!==t&&(i(t),s(t)):i("ru")})}r(2),window.onload=function(){u()}},function(e){e.exports={"a-href":{},src:{authorPhoto:"./img/author.jpg",authorPhotoGalleryImg1:"./img/gal1.jpg",authorPhotoGalleryImg2:"./img/gal2.jpg",authorPhotoGalleryImg3:"./img/gal3.jpg",authorVideoGalleryFilm:"https://www.youtube.com/embed/iauIqr1_Yn0",authorGeoImg1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18712.24441179573!2d27.178416138883552!3d54.10866182932192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbec59040878cd%3A0x89c684e28491971f!2z0JLRj9C30YvQvdC60LA!5e0!3m2!1sru!2sby!4v1548585529412"},en:{main__logo:"Belarusian writers",videoGalTitle:"Video gallery",photoGalTitle:"Photo gallery",authorName:"Yanka Kupala",authorAbout:"Yanka Kupala (also spelled Jánka Kupála or Janka Kupała, Belarusian: Я́нка Купа́ла; July 7 [O.S. June 25] 1882 – June 28, 1942) – was the pen name of Iván Daminíkavich Lutsévich (Ivan Daminikavič Łucevič, Belarusian: Іва́н Даміні́кавіч Луцэ́віч), a Belarusian poet and writer. Kupala is considered one of the greatest Belarusian-language writers of the 20th century. Kupala became recognised as a symbol of culture of Belarus during the Soviet era. A museum, organised in Minsk through the efforts of his widow in 1945, is the leading literary museum in Belarus. Hrodna State University was named after Yanka Kupala. There is also a park named after him with a monument to the poet, a theatre and a metro station (Kupalaŭskaja) named after him in Minsk. At the Arrow Park in Monroe, New York there is a monument of Yanka Kupala that was created by Belarusian sculptor Anatoly Anikeichik and architect Sergey Botkovsky. Since 1973 it is presented to the American Side. A monument to Kupala is placed on a square in the city of Ashdod in Israel.",authorWorks:"“Winter” (1907) <br> “To Anybody” (1907) <br> “Cripple” (1907) <br> “Paying off with Love” (1907) <br> “To Pilipovka” (1908) <br> “For What ? ”(1908) <br>“ The Eternal Song ”(1908) <br>“ Kurgan ”(1910) <br>“ Sleep on the Barrow ”(1910) <br>“ On Christmas Eve ”(1911) <br>“ On Dzyady ”(1911) <br>“ Bondarovna ”(1913) <br>“ The Tomb of the Lion ”(1913) <br>“ She and I ”(1913) <br>“ On Halt ”(1913) <br>“ Nameless (1924) <br> From the jubilee moods (1927) <br> Above the river Oressa (1933) <br> Tarasova share (1939)"},ru:{main__logo:"Писатели Беларуси",videoGalTitle:"Видео галлерея",photoGalTitle:"Фото галлерея",authorName:"Янка Купала",authorAbout:"Я́нка Купа́ла (настоящее имя Ива́н Домини́кович Луце́вич, белор. Іван Дамінікавіч Луцэвіч; 25 июня (7 июля) 1882 — 28 июня 1942) — белорусский поэт и переводчик, драматург, публицист. Классик белорусской литературы. Народный поэт БССР (1925). Академик АН БССР (1928) и АН УССР (1929). Лауреат Сталинской премии первой степени (1941). К 26 годам среди его творческих наработок уже были первые стихи. На протяжении 1908–1913 годов один за другим в Петербургском издательстве «Загляне сонца і ў наша ваконца» выходят его поэтические сборники: «Жалейка», «Гусляр», «Шляхам жыцця». Параллельно Янка Купала работает в «Нашей ниве» – первой белорусской национальной еженедельной газете, где печатает стихи и заметки, критические статьи и передовицы. В 1914 году основатели газеты Александр Власов и братья Иван и Антон Луцкевичи предложили Янке Купале должность главного редактора, и он с охотой согласился, отдав этой работе два года. К этому времени им уже были созданы произведения, которые станут бессмертными: поэмы «Адвечная песня» и «Сон на кургане», пьеса «Паўлінка». В 1919 году он переезжает в Минск, и здесь из-под его пера выходят такие произведения, как «Раскіданае гняздо» и «Прымакі», «Магіла льва» и «Курган». Была среди этих произведений и «Тутэйшыя» – пьеса, которая принесет Янке Купале честь и славу, правда, через десятилетия. Он тонко и точно чувствовал глубинную сущность перемен в обществе и национальном сознании. Именно отражение этих перемен, показ процесса пробуждения белорусского народа и привели к тому, что трагикомедия «Тутэйшыя» почти 60 лет была под запретом для постановки и опубликования. Жизнь поэта была наполнена не только творчеством, но и активной общественно-политической деятельностью, стычками с «сильными мира сего». Являясь кандидатом в члены и членом Центрального исполнительного комитета БССР, депутатом Верховного Совета республики, академиком Академии наук Беларуси и Украины, будучи награжден званием народного поэта БССР, тем не менее он всегда был «под прицелом» ОГПУ (потом – НКВД). Его пробовали склонить к сотрудничеству, заставить согласиться с ролью руководителя мифического Союза освобождения Беларуси, который якобы существовал в республике. В 1930 году Янка Купала предпринял попытку самоубийства, однако жена спасла его от гибели. 28 июня 1942 года, за несколько дней до своего 60-летия, поэт трагически погиб в Москве. Обстоятельства этой трагедии не выяснены до сих пор. В 1962 году урна с прахом белорусского классика перевезена в Минск и торжественно перезахоронена на Военном кладбище. ",authorWorks:"«Зимой» (1907)<br>«Никому» (1907)<br>«Калека» (1907)<br>«Расплата любовью» (1907)<br>«В Пилиповку» (1908)<br>«За что?» (1908)<br>«Извечная песня» (1908)<br>«Курган» (1910)<br>«Сон на кургане» (1910)<br>«В Сочельник» (1911)<br>«На Дзяды» (1911)<br>«Бондаровна» (1913)<br>«Могила льва» (1913)<br>«Она и я» (1913)<br>«На привале» (1913)<br>«Безымянное» (1924)<br>«Из юбилейных настроений» (1927)<br>«Над рекой Орессой» (1933)<br>«Тарасова доля» (1939)"},by:{main__logo:"Пісьменнікі Беларусі",videoGalTitle:"Відэа галерэя",photoGalTitle:"Фота галерэя",authorName:"Янка Купала",authorAbout:"Я́нка Купа́ла (сапр. — Іва́н Даміні́кавіч Луцэ́віч; 7 ліпеня [ст. ст. 25 чэрвеня] 1882; в. Вязынка, цяпер Маладэчанскі раён, Менская вобласьць, Беларусь — 28 чэрвеня 1942) — клясык беларускае літаратуры, паэт, драматург, публіцыст, заснавальнік (разам зь Якубам Коласам) новае беларускае літаратуры і беларускае літаратурнае мовы. Народны паэт Беларусі (1925). Акадэмік АН Беларусі і АН Украіны (1929). Ляўрэат Дзяржаўнай прэміі СССР (1941) за зборнік «Ад сэрца». Творчасьць Купалы прызнаецца за летапіс жыцьця беларускага народу, адбітак яго нацыянальнага характару і сьветаразуменьня. У сваіх сатырычных камэдыях «Паўлінка» (1912) і «Тутэйшыя» (1922), драмы «Раскіданае гняздо» (1913) выявіў духоўную прыгажосьць і маральныя заганы розных сацыяльных супольнасьцяў беларускага грамадзтва, складаны гістарычны лёс народу і самабытнасьць беларускае культуры. У раньняй паэзіі, блізкай да фальклёру сваёй вобразнасьцю, адлюстраваў цяжкую долю беларускага народу, адметныя рысы яго гістарычнага шляху і характару, сьветаўспрыманьня (зборнікі вершаў «Гусьляр», 1910; «Шляхам жыцьця», 1913; паэмы «Адвечная песьня», 1908; «Сон на кургане», 1910; «Магіла льва», 1913) і іншыя. З 1944 году дзейнічае Дзяржаўны літаратурны музэй Янкі Купалы. У гонар паэта ў 1957 годзе была заснаваная Літаратурная прэмія імя Янкі Купалы. З 1995 году сыстэматычна праводзяцца штогадовыя Купалаўскія чытаньні — прафэсійны форум для абмеркаваньня навуковых дасягненьняў і праблемаў купалазнаўства. У 1996 годзе быў створаны Міжнародны фонд Янкі Купалы. Імем паэта названы Нацыянальны акадэмічны тэатар імя Янкі Купалы, Гарадзенскі дзяржаўны ўнівэрсытэт імя Янкі Купалы, парк у Менску і станцыя менскага мэтрапалітэну. Адносна непрацяглы дарэвалюцыйны пэрыяд творчай актыўнасьці Янкі Купалы (1907—1913 гг.) зьяўляецца найбольш плённым ў ягонай літаратурнай біяграфіі. Менавіта ў гэтыя гады выходзіць тры зборнікі вершаў («Жалейка», 1908; «Гусьляр», 1910 і «Шляхам жыцьця», 1913) і тры з чатырох яго драматычных твораў (п’есы «Паўлінка», 1912; «Прымакі», 1913; «Раскіданае гняздо», 1913). У гэты ж час Купала стварае трынаццаць з 18 сваіх паэмаў. Умоўна Купалавы паэмы гэтага пэрыяду падзяляюць на раньнія («Зімою», «Нікому», «Калека», «Адплата каханьня», усе 1907 г.), фальклёрна-рамантычныя («Курган», 1910; «Бандароўна», «Магіла льва», «Яна і я», усе 1913 г.), драматычныя («Адвечная песьня», 1908; «Сон на кургане», 1910; «На папасе», 1913) і апавядальныя («У Піліпаўку», «За што?», абедзьве 1908 г.). Асэнсаваньнем неадназначных лёсавызначальных падзеяў у жыцьці беларускага грамадзтва ў першыя пасьлярэвалюцыйныя гады прасякнуты зборнік вершаў «Спадчына» (1922), трагікамэдыя «Тутэйшыя» (1922), рамантычная паэма «Безназоўнае» (1924), лірыка-публіцыстычная паэма «З угодкавых настрояў» (1927). Апошнія паэмы Купалы «Над ракою Арэсай» (1933), «Барысаў» (1934), «Тарасова доля» (1939) і зборнік вершаў «Ад сэрца» (1940) сталі сьведчаньнем трагічнага спыненьня творчага ўздыму паэта, пазбаўленага магчымасьці ствараць свабодна. Значную частку літаратурнай спадчыны Янкі Купалы ўтварае ягоны перакладчыцкі набытак. Зь пяці моваў (расейскай, украінскай, польскай, францускай і нямецкай) Купала пераклаў 92 творы 36 аўтараў (у тым ліку 9 невядомых), зь іх 71 верш, 15 паэмаў ці ўрыўкаў зь іх, опэрнае лібрэта «Галька» С.Манюшкі, драму «Эрас і Псіха» Е. Жулаўскага і інш. Найчасьцей зьвяртаўся да творчасьці Т.Шаўчэнкі (пераклаў 26 твораў), М.Канапніцкай (12), М.Някрасава (6), А.Міцкевіча (5) і Ул. Сыракомлі (5). Дзякуючы Купалу па-беларуску загучалі «Слова аб палку Ігаравым» (прозай і вершам), «Інтэрнацыянал», паэма А.Пушкіна «Медны коньнік» ды іншыя творы. Творы Купалы перакладзены на 117 моваў сьвету.",authorWorks:"«Зімою» (1907)<br>«Нікому» (1907)<br>«Калека» (1907)<br>«Адплата каханьня» (1907)<br>«У Піліпаўку» (1908)<br>«За што?» (1908)<br>«Адвечная песьня» (1908)<br>«Курган» (1910)<br>«Сон на кургане» (1910)<br>«На куцьцю» (1911)<br>«На Дзяды» (1911)<br>«Бандароўна» (1913)<br>«Магіла льва» (1913)<br>«Яна і я» (1913)<br>«На папасе» (1913)<br>«Безназоўнае» (1924)<br>«З угодкавых настрояў» (1927)<br>«Над ракою Арэсай» (1933)<br>«Барысаў» (1934)<br>«Тарасова доля» (1939)"}}}]);
//# sourceMappingURL=page2.js.map