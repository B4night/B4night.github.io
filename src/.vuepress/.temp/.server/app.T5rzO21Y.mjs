import { defineAsyncComponent, readonly, ref, reactive, defineComponent, onMounted, computed, h as h$2, inject, toRef, unref, getCurrentInstance, camelize, capitalize, shallowRef, Transition, watch, nextTick, onUnmounted, resolveComponent, TransitionGroup, watchEffect, provide, useSSRContext, createSSRApp } from "vue";
import { isString, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isFunction, isPlainObject, isLinkExternal, ensureLeadingSlash, ensureEndingSlash, isLinkWithProtocol, removeEndingSlash } from "@vuepress/shared";
import { useRouter, useRoute, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { tryOnMounted, tryOnUnmounted, noop, toValue, isClient } from "@vueuse/shared";
import "ts-debounce";
import { useElementSize, useWindowSize, useWindowScroll, useClipboard, useEventListener, useStorage, useToggle, useFullscreen, useScrollLock, useThrottleFn, useMutationObserver, computedWithControl, usePreferredDark, useSessionStorage } from "@vueuse/core";
import { compareSync } from "bcrypt-ts/browser";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-YW9_ARpt.js"
  ).then(({ data }) => data),
  // path: /intro.html
  "v-184f4da6": () => import(
    /* webpackChunkName: "v-184f4da6" */
    "./assets/intro.html-Paio_NGJ.js"
  ).then(({ data }) => data),
  // path: /posts/%20Download%20_.torrent_%20file%20under%20Fedora.html
  "v-6f3cd246": () => import(
    /* webpackChunkName: "v-6f3cd246" */
    "./assets/ Download _.torrent_ file under Fedora.html-MguIArhL.js"
  ).then(({ data }) => data),
  // path: /posts/%20Fedora%20set%20display%20scale%20150%25(gnome).html
  "v-19144f4a": () => import(
    /* webpackChunkName: "v-19144f4a" */
    "./assets/ Fedora set display scale 150%(gnome).html-AuNEw0sZ.js"
  ).then(({ data }) => data),
  // path: /posts/%20Git%20switch%20branches%20with%20modified%20files.html
  "v-327653c2": () => import(
    /* webpackChunkName: "v-327653c2" */
    "./assets/ Git switch branches with modified files.html-FwOaxgoE.js"
  ).then(({ data }) => data),
  // path: /posts/%20Joplin%20exits%20full%20screen%20in%20Linux.html
  "v-7bc29e63": () => import(
    /* webpackChunkName: "v-7bc29e63" */
    "./assets/ Joplin exits full screen in Linux.html-BElZubtU.js"
  ).then(({ data }) => data),
  // path: /posts/%20Linux%20Trick_%20Create%20desktop%20entries%20for%20apps.html
  "v-8c8262f4": () => import(
    /* webpackChunkName: "v-8c8262f4" */
    "./assets/ Linux Trick_ Create desktop entries for apps.html-2eu7RZ0f.js"
  ).then(({ data }) => data),
  // path: /posts/%20Open%20folder%20at%20terminal.%20Linux.html
  "v-5d6ace1c": () => import(
    /* webpackChunkName: "v-5d6ace1c" */
    "./assets/ Open folder at terminal. Linux.html-ksCGRXGV.js"
  ).then(({ data }) => data),
  // path: /posts/%20Program%20executed%20by%20Linux%20Terminal%20has%20the%20same%20proxy%20with%20the%20terminal_.html
  "v-5a6c26be": () => import(
    /* webpackChunkName: "v-5a6c26be" */
    "./assets/ Program executed by Linux Terminal has the same proxy with the terminal_.html-Vcbkktia.js"
  ).then(({ data }) => data),
  // path: /posts/%20Redirect%20terminal%20output%20to%20clipboard..html
  "v-4fd75f66": () => import(
    /* webpackChunkName: "v-4fd75f66" */
    "./assets/ Redirect terminal output to clipboard..html-uY9VAudD.js"
  ).then(({ data }) => data),
  // path: /posts/%20Set%20Bluetooth%20off%20as%20default%20at%20rebooting%20in%20Fedora.html
  "v-598ffdfd": () => import(
    /* webpackChunkName: "v-598ffdfd" */
    "./assets/ Set Bluetooth off as default at rebooting in Fedora.html-Facy9EXj.js"
  ).then(({ data }) => data),
  // path: /posts/%20Set%20default%20editor%20in%20Linux.html
  "v-1b503f84": () => import(
    /* webpackChunkName: "v-1b503f84" */
    "./assets/ Set default editor in Linux.html-KHVyG-aY.js"
  ).then(({ data }) => data),
  // path: /posts/%20Typora_upgit_tcyun_%20upload%20img%20to%20imgbed.html
  "v-1a499874": () => import(
    /* webpackChunkName: "v-1a499874" */
    "./assets/ Typora_upgit_tcyun_ upload img to imgbed.html-1BaMI4SQ.js"
  ).then(({ data }) => data),
  // path: /posts/%20Useful%20script%20sharing_%20easy%20git%20push.html
  "v-153a8874": () => import(
    /* webpackChunkName: "v-153a8874" */
    "./assets/ Useful script sharing_ easy git push.html-IBWw-gFl.js"
  ).then(({ data }) => data),
  // path: /posts/%20Using%20ssh%20through%20SOCKS5%20proxy..html
  "v-519070c2": () => import(
    /* webpackChunkName: "v-519070c2" */
    "./assets/ Using ssh through SOCKS5 proxy..html-FMQSUxnX.js"
  ).then(({ data }) => data),
  // path: /posts/%20Vue%20Download%20failure%20about%20Ipv4.html
  "v-6bb8daf5": () => import(
    /* webpackChunkName: "v-6bb8daf5" */
    "./assets/ Vue Download failure about Ipv4.html-kmu4lHDw.js"
  ).then(({ data }) => data),
  // path: /posts/%20Watch%20a%20process%20with%20pid%20under%20Linux..html
  "v-4dd815f7": () => import(
    /* webpackChunkName: "v-4dd815f7" */
    "./assets/ Watch a process with pid under Linux..html-uvvsB2zz.js"
  ).then(({ data }) => data),
  // path: /posts/%20git%20push%20fatal_%20The%20remote%20end%20hung%20up%20unexpectedly.html
  "v-ea1b8e4a": () => import(
    /* webpackChunkName: "v-ea1b8e4a" */
    "./assets/ git push fatal_ The remote end hung up unexpectedly.html-nltb4J6x.js"
  ).then(({ data }) => data),
  // path: /posts/%20git%20rebase%20and%20git%20amend.html
  "v-62801227": () => import(
    /* webpackChunkName: "v-62801227" */
    "./assets/ git rebase and git amend.html-U9QyVcZi.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-wfRb5ajw.js"
  ).then(({ data }) => data),
  // path: /posts/
  "v-e1e3da16": () => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-hxb5VIqE.js"
  ).then(({ data }) => data),
  // path: /category/
  "v-5bc93818": () => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-i14RcDGw.js"
  ).then(({ data }) => data),
  // path: /tag/
  "v-744d024e": () => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-s-PZxvBQ.js"
  ).then(({ data }) => data),
  // path: /article/
  "v-e52c881c": () => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-IIKg9Cbc.js"
  ).then(({ data }) => data),
  // path: /star/
  "v-154dc4c4": () => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-e2MjkASz.js"
  ).then(({ data }) => data),
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-oZcXxS1I.js"
  ).then(({ data }) => data),
  // path: /category/useful-skills/
  "v-b76cabe4": () => import(
    /* webpackChunkName: "v-b76cabe4" */
    "./assets/index.html-aXEnBKp9.js"
  ).then(({ data }) => data),
  // path: /category/download-_.torrent_-file-under-fedora.md/
  "v-ba8712f2": () => import(
    /* webpackChunkName: "v-ba8712f2" */
    "./assets/index.html-_Lxj2tzg.js"
  ).then(({ data }) => data),
  // path: /category/fedora-set-display-scale-150%25(gnome).md/
  "v-5b4fb80a": () => import(
    /* webpackChunkName: "v-5b4fb80a" */
    "./assets/index.html-F2MFgUPu.js"
  ).then(({ data }) => data),
  // path: /category/git-switch-branches-with-modified-files.md/
  "v-0525bf66": () => import(
    /* webpackChunkName: "v-0525bf66" */
    "./assets/index.html-BUavd34t.js"
  ).then(({ data }) => data),
  // path: /category/joplin-exits-full-screen-in-linux.md/
  "v-3ceb3e80": () => import(
    /* webpackChunkName: "v-3ceb3e80" */
    "./assets/index.html-YstiWoyu.js"
  ).then(({ data }) => data),
  // path: /category/linux-trick!-create-desktop-entries-for-apps.md/
  "v-4d6da251": () => import(
    /* webpackChunkName: "v-4d6da251" */
    "./assets/index.html-JovLu_sE.js"
  ).then(({ data }) => data),
  // path: /category/open-folder-at-terminal.-linux.md/
  "v-588c5fc6": () => import(
    /* webpackChunkName: "v-588c5fc6" */
    "./assets/index.html-8rB2XB0Q.js"
  ).then(({ data }) => data),
  // path: /category/program-executed-by-linux-terminal-has-the-same-proxy-with-the-terminal.md/
  "v-2e4d6271": () => import(
    /* webpackChunkName: "v-2e4d6271" */
    "./assets/index.html-vk__r-wK.js"
  ).then(({ data }) => data),
  // path: /category/redirect-terminal-output-to-clipboard.md/
  "v-155deb02": () => import(
    /* webpackChunkName: "v-155deb02" */
    "./assets/index.html-BCjR-9ev.js"
  ).then(({ data }) => data),
  // path: /category/set-bluetooth-off-as-default-at-rebooting-in-fedora.md/
  "v-2ea034e8": () => import(
    /* webpackChunkName: "v-2ea034e8" */
    "./assets/index.html-FLesL5CY.js"
  ).then(({ data }) => data),
  // path: /category/set-default-editor-in-linux.md/
  "v-44c267a7": () => import(
    /* webpackChunkName: "v-44c267a7" */
    "./assets/index.html-c8zZgnu8.js"
  ).then(({ data }) => data),
  // path: /category/typora_upgit_tcyun!-upload-img-to-imgbed.md/
  "v-c3235d12": () => import(
    /* webpackChunkName: "v-c3235d12" */
    "./assets/index.html-uZLKhbhK.js"
  ).then(({ data }) => data),
  // path: /category/useful-script-sharing!-easy-git-push.md/
  "v-d80667f6": () => import(
    /* webpackChunkName: "v-d80667f6" */
    "./assets/index.html-pBuhsWEz.js"
  ).then(({ data }) => data),
  // path: /category/using-ssh-through-socks5-proxy.md/
  "v-7a50a282": () => import(
    /* webpackChunkName: "v-7a50a282" */
    "./assets/index.html-QgbVI7O0.js"
  ).then(({ data }) => data),
  // path: /category/vue-download-failure-about-ipv4-.md/
  "v-06aeb3ae": () => import(
    /* webpackChunkName: "v-06aeb3ae" */
    "./assets/index.html-H1WIttLa.js"
  ).then(({ data }) => data),
  // path: /category/watch-a-process-with-pid-under-linux.md/
  "v-ae57df40": () => import(
    /* webpackChunkName: "v-ae57df40" */
    "./assets/index.html-u2DPhj-j.js"
  ).then(({ data }) => data),
  // path: /category/git-push-fatal!-the-remote-end-hung-up-unexpectedly.md/
  "v-b1cfa3c0": () => import(
    /* webpackChunkName: "v-b1cfa3c0" */
    "./assets/index.html-2LwA_vvI.js"
  ).then(({ data }) => data),
  // path: /category/git-rebase-and-git-amend.md/
  "v-74d8ee32": () => import(
    /* webpackChunkName: "v-74d8ee32" */
    "./assets/index.html-PYzcxpei.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"B4night","description":"A place where I post my thoughts","head":[],"locales":{}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-YI_ccdv2.js"
  )),
  // path: /intro.html
  "v-184f4da6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-184f4da6" */
    "./assets/intro.html-xlvtW15z.js"
  )),
  // path: /posts/%20Download%20_.torrent_%20file%20under%20Fedora.html
  "v-6f3cd246": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6f3cd246" */
    "./assets/ Download _.torrent_ file under Fedora.html-H-9wlEKR.js"
  )),
  // path: /posts/%20Fedora%20set%20display%20scale%20150%25(gnome).html
  "v-19144f4a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-19144f4a" */
    "./assets/ Fedora set display scale 150%(gnome).html-yclx6JQT.js"
  )),
  // path: /posts/%20Git%20switch%20branches%20with%20modified%20files.html
  "v-327653c2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-327653c2" */
    "./assets/ Git switch branches with modified files.html-uX5KLWKY.js"
  )),
  // path: /posts/%20Joplin%20exits%20full%20screen%20in%20Linux.html
  "v-7bc29e63": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7bc29e63" */
    "./assets/ Joplin exits full screen in Linux.html-KC7JZUhZ.js"
  )),
  // path: /posts/%20Linux%20Trick_%20Create%20desktop%20entries%20for%20apps.html
  "v-8c8262f4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8c8262f4" */
    "./assets/ Linux Trick_ Create desktop entries for apps.html-6pVaDXOx.js"
  )),
  // path: /posts/%20Open%20folder%20at%20terminal.%20Linux.html
  "v-5d6ace1c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5d6ace1c" */
    "./assets/ Open folder at terminal. Linux.html-6kcWR63v.js"
  )),
  // path: /posts/%20Program%20executed%20by%20Linux%20Terminal%20has%20the%20same%20proxy%20with%20the%20terminal_.html
  "v-5a6c26be": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5a6c26be" */
    "./assets/ Program executed by Linux Terminal has the same proxy with the terminal_.html-mlxNOljQ.js"
  )),
  // path: /posts/%20Redirect%20terminal%20output%20to%20clipboard..html
  "v-4fd75f66": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4fd75f66" */
    "./assets/ Redirect terminal output to clipboard..html-DH0_0qlo.js"
  )),
  // path: /posts/%20Set%20Bluetooth%20off%20as%20default%20at%20rebooting%20in%20Fedora.html
  "v-598ffdfd": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-598ffdfd" */
    "./assets/ Set Bluetooth off as default at rebooting in Fedora.html-u0LmuUVL.js"
  )),
  // path: /posts/%20Set%20default%20editor%20in%20Linux.html
  "v-1b503f84": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1b503f84" */
    "./assets/ Set default editor in Linux.html-a7ysAn8P.js"
  )),
  // path: /posts/%20Typora_upgit_tcyun_%20upload%20img%20to%20imgbed.html
  "v-1a499874": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1a499874" */
    "./assets/ Typora_upgit_tcyun_ upload img to imgbed.html-YxjajAJo.js"
  )),
  // path: /posts/%20Useful%20script%20sharing_%20easy%20git%20push.html
  "v-153a8874": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-153a8874" */
    "./assets/ Useful script sharing_ easy git push.html-pW1PAFwL.js"
  )),
  // path: /posts/%20Using%20ssh%20through%20SOCKS5%20proxy..html
  "v-519070c2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-519070c2" */
    "./assets/ Using ssh through SOCKS5 proxy..html-H6lOsoN2.js"
  )),
  // path: /posts/%20Vue%20Download%20failure%20about%20Ipv4.html
  "v-6bb8daf5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6bb8daf5" */
    "./assets/ Vue Download failure about Ipv4.html-OHpX-H3e.js"
  )),
  // path: /posts/%20Watch%20a%20process%20with%20pid%20under%20Linux..html
  "v-4dd815f7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4dd815f7" */
    "./assets/ Watch a process with pid under Linux..html-FOxmDKgB.js"
  )),
  // path: /posts/%20git%20push%20fatal_%20The%20remote%20end%20hung%20up%20unexpectedly.html
  "v-ea1b8e4a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ea1b8e4a" */
    "./assets/ git push fatal_ The remote end hung up unexpectedly.html-EMmtUSYe.js"
  )),
  // path: /posts/%20git%20rebase%20and%20git%20amend.html
  "v-62801227": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-62801227" */
    "./assets/ git rebase and git amend.html-9zCdlrtS.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-WIsEjIiE.js"
  )),
  // path: /posts/
  "v-e1e3da16": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-HpBVxENG.js"
  )),
  // path: /category/
  "v-5bc93818": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-newe0RiV.js"
  )),
  // path: /tag/
  "v-744d024e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-qBLAIpYr.js"
  )),
  // path: /article/
  "v-e52c881c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-hdfoReGd.js"
  )),
  // path: /star/
  "v-154dc4c4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-3FDEjq1K.js"
  )),
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-Y34BkUtc.js"
  )),
  // path: /category/useful-skills/
  "v-b76cabe4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b76cabe4" */
    "./assets/index.html-p-_rw9rd.js"
  )),
  // path: /category/download-_.torrent_-file-under-fedora.md/
  "v-ba8712f2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ba8712f2" */
    "./assets/index.html-I4OSBcxP.js"
  )),
  // path: /category/fedora-set-display-scale-150%25(gnome).md/
  "v-5b4fb80a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5b4fb80a" */
    "./assets/index.html-Q_q7JYgX.js"
  )),
  // path: /category/git-switch-branches-with-modified-files.md/
  "v-0525bf66": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0525bf66" */
    "./assets/index.html-Nv_SYA__.js"
  )),
  // path: /category/joplin-exits-full-screen-in-linux.md/
  "v-3ceb3e80": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3ceb3e80" */
    "./assets/index.html-uPKSmAkY.js"
  )),
  // path: /category/linux-trick!-create-desktop-entries-for-apps.md/
  "v-4d6da251": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4d6da251" */
    "./assets/index.html-Xc7LixKQ.js"
  )),
  // path: /category/open-folder-at-terminal.-linux.md/
  "v-588c5fc6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-588c5fc6" */
    "./assets/index.html-Vn3iPZBt.js"
  )),
  // path: /category/program-executed-by-linux-terminal-has-the-same-proxy-with-the-terminal.md/
  "v-2e4d6271": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e4d6271" */
    "./assets/index.html-UfmK-8-T.js"
  )),
  // path: /category/redirect-terminal-output-to-clipboard.md/
  "v-155deb02": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-155deb02" */
    "./assets/index.html-iVYIaH7k.js"
  )),
  // path: /category/set-bluetooth-off-as-default-at-rebooting-in-fedora.md/
  "v-2ea034e8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2ea034e8" */
    "./assets/index.html-5-meL6ED.js"
  )),
  // path: /category/set-default-editor-in-linux.md/
  "v-44c267a7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-44c267a7" */
    "./assets/index.html-d82pf9ll.js"
  )),
  // path: /category/typora_upgit_tcyun!-upload-img-to-imgbed.md/
  "v-c3235d12": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c3235d12" */
    "./assets/index.html-ETnYr_qt.js"
  )),
  // path: /category/useful-script-sharing!-easy-git-push.md/
  "v-d80667f6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d80667f6" */
    "./assets/index.html-CvE4oFjR.js"
  )),
  // path: /category/using-ssh-through-socks5-proxy.md/
  "v-7a50a282": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7a50a282" */
    "./assets/index.html-CSV4Jrhf.js"
  )),
  // path: /category/vue-download-failure-about-ipv4-.md/
  "v-06aeb3ae": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-06aeb3ae" */
    "./assets/index.html-xC_V-f97.js"
  )),
  // path: /category/watch-a-process-with-pid-under-linux.md/
  "v-ae57df40": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ae57df40" */
    "./assets/index.html-Q8BPOnSV.js"
  )),
  // path: /category/git-push-fatal!-the-remote-end-hung-up-unexpectedly.md/
  "v-b1cfa3c0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b1cfa3c0" */
    "./assets/index.html-Hc5TYevX.js"
  )),
  // path: /category/git-rebase-and-git-amend.md/
  "v-74d8ee32": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-74d8ee32" */
    "./assets/index.html-VNROKwMK.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pageDataSymbol = Symbol(
  ""
);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var usePageData = () => {
  const pageData = inject(pageDataSymbol);
  if (!pageData) {
    throw new Error("pageData() is called without provider.");
  }
  return pageData;
};
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var pagesData = ref(pagesData$1);
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData) => pageData.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...Array.isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page, siteLocale) => page.lang || siteLocale.lang || "en-US",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => {
    var _a2;
    return {
      ...site,
      ...site.locales[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        ...((_a2 = site.locales[routeLocale]) == null ? void 0 : _a2.head) ?? [],
        ...site.head ?? []
      ]
    };
  }
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h$2(pageComponent.value)
    ) : (
      // fallback content
      h$2(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const clientConfig0 = {};
const useLocaleConfig$1 = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b[i2]; j2 < b[i2 + 1]; ++j2) {
      r2[j2] = j2 - b[i2] << 5 | i2;
    }
  }
  return { b, r: r2 };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$3 = 0; i$3 < 32768; ++i$3) {
  var x$3 = (i$3 & 43690) >> 1 | (i$3 & 21845) << 1;
  x$3 = (x$3 & 52428) >> 2 | (x$3 & 13107) << 2;
  x$3 = (x$3 & 61680) >> 4 | (x$3 & 3855) << 4;
  rev[i$3] = ((x$3 & 65280) >> 8 | (x$3 & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$3 = 0; i$3 < 144; ++i$3)
  flt[i$3] = 8;
for (var i$3 = 144; i$3 < 256; ++i$3)
  flt[i$3] = 9;
for (var i$3 = 256; i$3 < 280; ++i$3)
  flt[i$3] = 7;
for (var i$3 = 280; i$3 < 288; ++i$3)
  flt[i$3] = 8;
var fdt = new u8(32);
for (var i$3 = 0; i$3 < 32; ++i$3)
  fdt[i$3] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  return new u8(v2.subarray(s2, e2));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, st2, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st2.i != 2;
  var noSt = st2.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt2 = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt2);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt2, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt2 = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt2 += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        if (bt2 < dt2) {
          var shift = dl - dt2, dend = Math.min(dt2, end);
          if (shift + bt2 < 0)
            err(3);
          for (; bt2 < dend; ++bt2)
            buf[bt2] = dict[shift + bt2];
        }
        for (; bt2 < end; ++bt2)
          buf[bt2] = buf[bt2 - dt2];
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 != buf.length && noBuf ? slc(buf, 0, bt2) : buf.subarray(0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return { s: r2, r: slc(d2, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s2;
  }
}
const decodeData = (base64) => {
  const binary = Buffer.from(base64, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(binary, true)));
};
const isDef = (val) => typeof val !== "undefined";
const isNumber = (val) => typeof val === "number";
const isArray = Array.isArray;
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const endsWith = (str, suffix) => isString(str) && str.endsWith(suffix);
const entries = Object.entries;
const fromEntries = Object.fromEntries;
const keys = Object.keys;
const getDate = (input) => {
  if (input) {
    if (typeof input === "number")
      return new Date(input);
    const date = Date.parse(input.toString());
    if (!Number.isNaN(date))
      return new Date(date);
  }
  return null;
};
const isLinkAbsolute = (test) => startsWith(test, "/");
const c$1 = ({ name: e2 = "", color: n2 = "currentColor" }, { slots: t2 }) => {
  var _a2;
  return h$2("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${e2} icon` }, (_a2 = t2.default) == null ? void 0 : _a2.call(t2));
};
c$1.displayName = "IconBase";
const x$2 = ({ size: e2 = 48, stroke: n2 = 4, wrapper: t2 = true, height: i2 = 2 * e2 }) => {
  const s2 = h$2("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$2("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$2("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h$2("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$2("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return t2 ? h$2("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, s2) : s2;
};
x$2.displayName = "LoadingIcon";
const J$2 = (e2, { slots: n2 }) => {
  var _a2;
  return (_a2 = n2.default) == null ? void 0 : _a2.call(n2);
}, ae$1 = (e2, n2) => {
  let t2 = 1;
  for (let i2 = 0; i2 < e2.length; i2++)
    t2 += e2.charCodeAt(i2), t2 += t2 << 10, t2 ^= t2 >> 6;
  return t2 += t2 << 3, t2 ^= t2 >> 11, t2 % n2;
};
let re$1 = class re {
  constructor() {
    this.messageElements = {};
    const n2 = "message-container", t2 = document.getElementById(n2);
    t2 ? this.containerElement = t2 : (this.containerElement = document.createElement("div"), this.containerElement.id = n2, document.body.appendChild(this.containerElement));
  }
  pop(n2, t2 = 2e3) {
    const i2 = document.createElement("div"), s2 = Date.now();
    return i2.className = "message move-in", i2.innerHTML = n2, this.containerElement.appendChild(i2), this.messageElements[s2] = i2, t2 > 0 && setTimeout(() => {
      this.close(s2);
    }, t2), s2;
  }
  close(n2) {
    if (n2) {
      const t2 = this.messageElements[n2];
      t2.classList.remove("move-in"), t2.classList.add("move-out"), t2.addEventListener("animationend", () => {
        t2.remove(), delete this.messageElements[n2];
      });
    } else
      keys(this.messageElements).forEach((t2) => this.close(Number(t2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
const C$1 = /#.*$/u, L$1 = (e2) => {
  const n2 = C$1.exec(e2);
  return n2 ? n2[0] : "";
}, d$2 = (e2) => decodeURI(e2).replace(C$1, "").replace(/\/index\.html$/i, "/").replace(/\.html$/i, "").replace(/(README|index)?\.md$/i, ""), ce$1 = (e2, n2) => {
  if (!isDef(n2))
    return false;
  const t2 = d$2(e2.path), i2 = d$2(n2), s2 = L$1(n2);
  return s2 ? s2 === e2.hash && (!i2 || t2 === i2) : t2 === i2;
};
const me$1 = (e2) => isLinkHttp(e2) ? e2 : `https://github.com/${e2}`, ue$1 = (e2) => !isLinkHttp(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, h$1 = (e2, ...n2) => {
  const t2 = e2.resolve(...n2), i2 = t2.matched[t2.matched.length - 1];
  if (!(i2 == null ? void 0 : i2.redirect))
    return t2;
  const { redirect: s2 } = i2, a2 = isFunction(s2) ? s2(t2) : s2, r2 = isString(a2) ? { path: a2 } : a2;
  return h$1(e2, { hash: t2.hash, query: t2.query, params: t2.params, ...r2 });
}, p = (e2) => {
  var _a2;
  if (!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey) && !e2.defaultPrevented && !(isDef(e2.button) && e2.button !== 0) && !(e2.currentTarget && ((_a2 = e2.currentTarget.getAttribute("target")) == null ? void 0 : _a2.match(/\b_blank\b/iu))))
    return e2.preventDefault(), true;
}, z$4 = (e2) => {
  const n2 = useRouter(), t2 = useRoute(), i2 = computed(() => h$1(n2, unref(e2))), s2 = computed(() => i2.value.fullPath === t2.fullPath), a2 = (r2 = {}) => p(r2) ? n2.push(unref(e2)).catch() : Promise.resolve();
  return { route: i2, href: computed(() => i2.value.href), isActive: s2, navigate: a2 };
};
defineComponent({ name: "RouterLink", props: { to: { type: String, required: true } }, slots: Object, setup(e2, { slots: n2 }) {
  const t2 = toRef(e2, "to"), i2 = z$4(t2);
  return () => {
    var _a2;
    return h$2("a", { class: ["vp-link", { "vp-active": i2.isActive.value }], href: i2.href.value, onClick: i2.navigate }, (_a2 = n2.default) == null ? void 0 : _a2.call(n2, i2));
  };
} });
const $$1 = (e2) => (e2.endsWith(".md") && (e2 = `${e2.slice(0, -3)}.html`), !e2.endsWith("/") && !e2.endsWith(".html") && (e2 = `${e2}.html`), e2 = e2.replace(/(^|\/)(?:README|index).html$/iu, "$1"), e2), A$5 = (e2) => {
  const [n2, t2 = ""] = e2.split("#");
  return n2 ? `${$$1(n2)}${t2 ? `#${t2}` : ""}` : e2;
}, S$2 = (e2) => isPlainObject(e2) && isString(e2.name), pe$1 = (e2, n2 = false) => e2 ? isArray(e2) ? e2.map((t2) => isString(t2) ? { name: t2 } : S$2(t2) ? t2 : null).filter((t2) => t2 !== null) : isString(e2) ? [{ name: e2 }] : S$2(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], g$1 = (e2, n2) => {
  if (e2) {
    if (isArray(e2) && e2.every(isString))
      return e2;
    if (isString(e2))
      return [e2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, ge$2 = (e2) => g$1(e2, "category"), fe$3 = (e2) => g$1(e2, "tag"), N$2 = ({ to: e2 = "", class: n2 = "", ...t2 }, { slots: i2 }) => {
  var _a2;
  const s2 = useRouter(), a2 = A$5(e2), r2 = (u2 = {}) => p(u2) ? s2.push(e2).catch() : Promise.resolve();
  return h$2("a", { ...t2, class: ["vp-link", n2], href: startsWith(a2, "/") ? withBase(a2) : a2, onClick: r2 }, (_a2 = i2.default) == null ? void 0 : _a2.call(i2));
};
N$2.displayName = "VPLink";
const P$2 = () => h$2(c$1, { name: "github" }, () => h$2("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
P$2.displayName = "GitHubIcon";
const R$2 = () => h$2(c$1, { name: "gitlab" }, () => h$2("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
R$2.displayName = "GitLabIcon";
const H$4 = () => h$2(c$1, { name: "gitee" }, () => h$2("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
H$4.displayName = "GiteeIcon";
const T = () => h$2(c$1, { name: "bitbucket" }, () => h$2("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
T.displayName = "BitbucketIcon";
const B$1 = () => h$2(c$1, { name: "source" }, () => h$2("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
B$1.displayName = "SourceIcon";
const ve$1 = (e2, n2) => {
  var _a2;
  const t2 = (_a2 = (n2 == null ? void 0 : n2._instance) || getCurrentInstance()) == null ? void 0 : _a2.appContext.components;
  return t2 ? e2 in t2 || camelize(e2) in t2 || capitalize(camelize(e2)) in t2 : false;
};
const defaultDocument = isClient ? window.document : void 0;
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el) {
      el = document2.createElement("script");
      el.type = type;
      el.async = async;
      el.src = toValue(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document2.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el)
      document2.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
var a$1 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"fas fa-"}${o2.icon}`;
    return n2.push("fa-fw fa-sm"), n2.push(o2.icon.includes(" ") ? o2.icon : t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), keys(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$2("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const t$1 = ({ type: a2 = "info", text: l2 = "", vertical: e2, color: o2 }, { slots: r2 }) => {
  var _a2;
  return h$2("span", { class: ["vp-badge", a2, { diy: o2 }], style: { verticalAlign: e2 ?? false, backgroundColor: o2 ?? false } }, ((_a2 = r2.default) == null ? void 0 : _a2.call(r2)) || l2);
};
t$1.displayName = "Badge";
const n$4 = ({ title: d2, desc: e2 = "", logo: o2, background: s2, color: t2, link: c2 }) => {
  const l2 = [o2 ? h$2("img", { class: "vp-card-logo", src: withBase(o2), loading: "lazy", "no-view": "" }) : null, h$2("div", { class: "vp-card-content" }, [h$2("div", { class: "vp-card-title", innerHTML: d2 }), h$2("hr"), h$2("div", { class: "vp-card-desc", innerHTML: e2 })])], a2 = {};
  return s2 && (a2.background = s2), t2 && (a2.color = t2), c2 ? isLinkExternal(c2) ? h$2("a", { class: "vp-card", href: c2, target: "_blank", style: a2 }, l2) : h$2(N$2, { to: c2, class: "vp-card", style: a2 }, () => l2) : h$2("div", { class: "vp-card", style: a2 }, l2);
};
n$4.displayName = "VPCard";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!ve$1("FontIcon"))
      app.component("FontIcon", a$1);
    if (!ve$1("Badge"))
      app.component("Badge", t$1);
    if (!ve$1("VPCard"))
      app.component("VPCard", n$4);
  },
  setup: () => {
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
  },
  rootComponents: []
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
let e$2 = (t2) => isString(t2.title) ? { title: t2.title } : null;
const o$4 = Symbol(""), r = (t2) => {
  e$2 = t2;
}, a = () => inject(o$4), n$3 = (t2) => {
  t2.provide(o$4, e$2);
};
var define_AUTO_CATALOG_LOCALES_default = { "/": { title: "Catalog", empty: "No catalog" } };
var W$5 = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean, hideHeading: Boolean }, setup(a$12) {
  const A2 = a(), f = useLocaleConfig$1(define_AUTO_CATALOG_LOCALES_default), y2 = usePageData(), S2 = useRouter(), _2 = useSiteData(), L2 = shallowRef(S2.getRoutes().filter(({ path: t2 }) => endsWith(t2, ".html") && !endsWith(t2, "/index.html") || endsWith(t2, "/")).map(({ meta: t2, path: s2 }) => {
    const r2 = A2(t2);
    if (!r2)
      return null;
    const n2 = s2.split("/").length;
    return { level: endsWith(s2, "/") ? n2 - 2 : n2 - 1, base: s2.replace(/\/[^/]+\/?$/, "/"), path: s2, ...r2 };
  }).filter((t2) => isPlainObject(t2) && isString(t2.title))), g2 = computed(() => {
    const t2 = a$12.base ? ensureLeadingSlash(ensureEndingSlash(a$12.base)) : y2.value.path.replace(/\/[^/]+$/, "/"), s2 = t2.split("/").length - 2, r2 = [];
    return L2.value.filter(({ level: n2, path: o2 }) => {
      if (!startsWith(o2, t2) || o2 === t2)
        return false;
      if (t2 === "/") {
        const i2 = keys(_2.value.locales).filter((l2) => l2 !== "/");
        if (o2 === "/404.html" || i2.some((l2) => startsWith(o2, l2)))
          return false;
      }
      return n2 - s2 <= a$12.level;
    }).sort(({ title: n2, level: o2, order: i2 }, { title: l2, level: c2, order: p2 }) => o2 - c2 || (isNumber(i2) ? isNumber(p2) ? i2 > 0 ? p2 > 0 ? i2 - p2 : -1 : p2 < 0 ? i2 - p2 : 1 : i2 : isNumber(p2) ? p2 : n2.localeCompare(l2, void 0, { numeric: true, sensitivity: "accent" }))).forEach((n2) => {
      var _a2;
      const { base: o2, level: i2 } = n2;
      switch (i2 - s2) {
        case 1: {
          r2.push(n2);
          break;
        }
        case 2: {
          const l2 = r2.find((c2) => c2.path === o2);
          l2 && (l2.children ?? (l2.children = [])).push(n2);
          break;
        }
        default: {
          const l2 = r2.find((c2) => c2.path === o2.replace(/\/[^/]+\/$/, "/"));
          if (l2) {
            const c2 = (_a2 = l2.children) == null ? void 0 : _a2.find((p2) => p2.path === o2);
            c2 && (c2.children ?? (c2.children = [])).push(n2);
          }
        }
      }
    }), r2;
  });
  return () => {
    const t2 = g2.value.some((s2) => s2.children);
    return h$2("div", { class: ["vp-catalog-wrapper", { index: a$12.index }] }, [a$12.hideHeading ? null : h$2("h2", { class: "vp-catalog-main-title" }, f.value.title), g2.value.length ? h$2(a$12.index ? "ol" : "ul", { class: ["vp-catalogs", { deep: t2 }] }, g2.value.map(({ children: s2 = [], title: r2, path: n2, content: o2 }) => {
      const i2 = h$2(N$2, { class: "vp-catalog-title", to: n2 }, () => o2 ? h$2(o2) : r2);
      return h$2("li", { class: "vp-catalog" }, t2 ? [h$2("h3", { id: r2, class: ["vp-catalog-child-title", { "has-children": s2.length }] }, [h$2("a", { href: `#${r2}`, class: "header-anchor", "aria-hidden": true }, "#"), i2]), s2.length ? h$2(a$12.index ? "ol" : "ul", { class: "vp-child-catalogs" }, s2.map(({ children: l2 = [], content: c2, path: p2, title: v2 }) => h$2("li", { class: "vp-child-catalog" }, [h$2("div", { class: ["vp-catalog-sub-title", { "has-children": l2.length }] }, [h$2("a", { href: `#${v2}`, class: "header-anchor" }, "#"), h$2(N$2, { class: "vp-catalog-title", to: p2 }, () => c2 ? h$2(c2) : v2)]), l2.length ? h$2(a$12.index ? "ol" : "div", { class: a$12.index ? "vp-sub-catalogs" : "vp-sub-catalogs-wrapper" }, l2.map(({ content: h2, path: b, title: x2 }) => a$12.index ? h$2("li", { class: "vp-sub-catalog" }, h$2(N$2, { to: b }, () => h2 ? h$2(h2) : x2)) : h$2(N$2, { class: "vp-sub-catalog-link", to: b }, () => h2 ? h$2(h2) : x2))) : null]))) : null] : h$2("div", { class: "vp-catalog-child-title" }, i2));
    })) : h$2("p", { class: "vp-empty-catalog" }, f.value.empty)]);
  };
} }), q$1 = defineClientConfig({ enhance: ({ app: a2 }) => {
  n$3(a2), ve$1("AutoCatalog", a2) || a2.component("AutoCatalog", W$5);
} });
var define_BACK_TO_TOP_LOCALES_default = { "/": { backToTop: "Back to top" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup(props) {
    const pageFrontmatter = usePageFrontmatter();
    const locale = useLocaleConfig$1(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize();
    const { y: y2 } = useWindowScroll();
    const show = computed(() => pageFrontmatter.value.backToTop !== false && y2.value > 100);
    const progress = computed(() => y2.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h$2(Transition, { name: "back-to-top" }, () => show.value ? h$2("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h$2("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h$2("svg", h$2("circle", {
        cx: "50%",
        cy: "50%",
        style: {
          "stroke-dasharray": `calc(${Math.PI * progress.value}% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${4 * Math.PI}px)`
        }
      }))),
      h$2("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const clientConfig4 = defineClientConfig({
  rootComponents: [BackToTop]
});
const svg = h$2("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$2("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$2("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$2("span", [
      svg,
      h$2("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
var define_EXTERNAL_LINK_ICON_LOCALES_default = {};
const locales = define_EXTERNAL_LINK_ICON_LOCALES_default;
const clientConfig5 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$2(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress.isStarted();
    n2 = clamp(n2, nprogress.settings.minimum, 1);
    nprogress.status = n2 === 1 ? null : n2;
    const progress = nprogress.render(!started);
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const speed = nprogress.settings.speed;
    const ease = nprogress.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.status === "number",
  start: () => {
    if (!nprogress.status)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.status)
          return;
        nprogress.trickle();
        work();
      }, nprogress.settings.trickleSpeed);
    };
    if (nprogress.settings.trickle)
      work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.status)
      return nprogress;
    return nprogress.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress.status;
    if (!n2) {
      return nprogress.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress.set(n2);
  },
  trickle: () => nprogress.inc(Math.random() * nprogress.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress.settings.template;
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress.status || 0);
    const parent = document.querySelector(nprogress.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = /* @__PURE__ */ function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const clientConfig6 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$QavJQaHOMLgZRCsrFf/jIO7cbEl6KIxsl0iVyaFpwGsYlvDkKab4O"]}},"author":{"name":"B4night"},"logo":"/assets/icon/avatar.png","docsDir":"src","footer":"Default footer","displayFooter":true,"blog":{"description":"A gamer & a dreamer","intro":"/intro.html","roundAvatar":true,"medias":{"GitHub":"https://github.com/b4night/","Gmail":"mailto:superchaovacation@gmail.com"}},"locales":{"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page on GitHub","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/"]}}}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const clientConfig7 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
var define_COPY_CODE_LOCALES_default = { "/": { copy: "Copy code", copied: "Copied" } };
var define_COPY_CODE_SELECTOR_default = ['.theme-hope-content div[class*="language-"] pre'];
const timeoutIdMap = /* @__PURE__ */ new Map();
const MOBILE_USERAGENT_REGEXP = /\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i;
const isMobile = () => typeof window !== "undefined" && window.navigator && "userAgent" in window.navigator && MOBILE_USERAGENT_REGEXP.test(navigator.userAgent);
const setupCopyCode = () => {
  const { copy } = useClipboard({ legacy: true });
  const locale = useLocaleConfig$1(define_COPY_CODE_LOCALES_default);
  const page = usePageData();
  const insertCopyButton = (codeBlockElement) => {
    if (!codeBlockElement.hasAttribute("copy-code-registered")) {
      const copyElement = document.createElement("button");
      copyElement.type = "button";
      copyElement.classList.add("vp-copy-code-button");
      copyElement.innerHTML = '<div class="vp-copy-icon" />';
      copyElement.setAttribute("aria-label", locale.value.copy);
      copyElement.setAttribute("data-copied", locale.value.copied);
      if (codeBlockElement.parentElement)
        codeBlockElement.parentElement.insertBefore(copyElement, codeBlockElement);
      codeBlockElement.setAttribute("copy-code-registered", "");
    }
  };
  const appendCopyButton = () => {
    nextTick().then(() => setTimeout(() => {
      define_COPY_CODE_SELECTOR_default.forEach((item) => {
        document.querySelectorAll(item).forEach(insertCopyButton);
      });
    }, 800));
  };
  const copyContent = (codeContainer, codeContent, button) => {
    let { innerText: text = "" } = codeContent;
    if (
      // is shell
      /language-(shellscript|shell|bash|sh|zsh)/.test(codeContainer.classList.toString())
    )
      text = text.replace(/^ *(\$|>) /gm, "");
    copy(text).then(() => {
      button.classList.add("copied");
      clearTimeout(timeoutIdMap.get(button));
      const timeoutId = setTimeout(() => {
        button.classList.remove("copied");
        button.blur();
        timeoutIdMap.delete(button);
      }, 2e3);
      timeoutIdMap.set(button, timeoutId);
    });
  };
  onMounted(() => {
    const enabled = !isMobile() || false;
    if (enabled)
      appendCopyButton();
    useEventListener("click", (event) => {
      const el = event.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const codeContainer = el.parentElement;
        const preBlock = el.nextElementSibling;
        if (preBlock)
          copyContent(codeContainer, preBlock, el);
      } else if (el.matches('div[class*="language-"] div.vp-copy-icon')) {
        const buttonElement = el.parentElement;
        const codeContainer = buttonElement.parentElement;
        const preBlock = buttonElement.nextElementSibling;
        if (preBlock)
          copyContent(codeContainer, preBlock, buttonElement);
      }
    });
    watch(() => page.value.path, () => {
      if (enabled)
        appendCopyButton();
    });
  });
};
const clientConfig8 = defineClientConfig({
  setup: () => {
    setupCopyCode();
  }
});
const i$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var A$4 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: r2 }) {
  const l2 = ref(a2.active), u2 = shallowRef([]), n2 = () => {
    a2.tabId && (i$2.value[a2.tabId] = a2.data[l2.value].id);
  }, s2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), s2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), a2.tabId && (i$2.value[a2.tabId] = a2.data[l2.value].id);
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => i$2.value[a2.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => i$2.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const d2 = a2.data.findIndex(({ id: v2 }) => v2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => a2.data.length ? h$2("div", { class: "vp-code-tabs" }, [h$2("div", { class: "vp-code-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h$2("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-code-tab-nav", { active: d2 }], role: "tab", "aria-controls": `codetab-${a2.id}-${t2}`, "aria-selected": d2, onClick: () => {
      l2.value = t2, n2();
    }, onKeydown: (v2) => b(v2, t2) }, r2[`title${t2}`]({ value: e2, isActive: d2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h$2("div", { class: ["vp-code-tab", { active: d2 }], id: `codetab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": d2 }, [h$2("div", { class: "vp-code-tab-title" }, r2[`title${t2}`]({ value: e2, isActive: d2 })), r2[`tab${t2}`]({ value: e2, isActive: d2 })]);
  })]) : null;
} });
const i$1 = ({ active: n2 = false }, { slots: c2 }) => {
  var _a2;
  return h$2("div", { class: ["code-group-item", { active: n2 }], "aria-selected": n2 }, (_a2 = c2.default) == null ? void 0 : _a2.call(c2));
};
i$1.displayName = "CodeGroupItem";
const w = defineComponent({ name: "CodeGroup", slots: Object, setup(n2, { slots: c2 }) {
  const a2 = ref(-1), l2 = shallowRef([]);
  const p2 = (e2 = a2.value) => {
    a2.value = e2 < l2.value.length - 1 ? e2 + 1 : 0, l2.value[a2.value].focus();
  }, r2 = (e2 = a2.value) => {
    a2.value = e2 > 0 ? e2 - 1 : l2.value.length - 1, l2.value[a2.value].focus();
  }, u2 = (e2, o2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), a2.value = o2) : e2.key === "ArrowRight" ? (e2.preventDefault(), p2(o2)) : e2.key === "ArrowLeft" && (e2.preventDefault(), r2(o2));
  };
  return () => {
    var _a2;
    const e2 = (((_a2 = c2.default) == null ? void 0 : _a2.call(c2)) || []).filter((o2) => o2.type.name === "CodeGroupItem").map((o2) => (o2.props === null && (o2.props = {}), o2));
    return e2.length === 0 ? null : (a2.value < 0 || a2.value > e2.length - 1 ? (a2.value = e2.findIndex((o2) => "active" in o2.props), a2.value === -1 && (a2.value = 0)) : e2.forEach((o2, s2) => {
      o2.props.active = s2 === a2.value;
    }), h$2("div", { class: "code-group" }, [h$2("div", { class: "code-group-nav" }, e2.map((o2, s2) => {
      const d2 = s2 === a2.value;
      return h$2("button", { type: "button", ref: (v2) => {
        v2 && (l2.value[s2] = v2);
      }, class: ["code-group-nav-tab", { active: d2 }], "aria-pressed": d2, "aria-expanded": d2, onClick: () => {
        a2.value = s2;
      }, onKeydown: (v2) => u2(v2, s2) }, o2.props.title);
    })), e2]));
  };
} });
const o$3 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$1 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';
var define_CODE_DEMO_OPTIONS_default = { useBabel: false, jsLib: [], cssLib: [], codepenLayout: "left", codepenEditors: "101", babel: "https://unpkg.com/@babel/standalone/babel.min.js", vue: "https://unpkg.com/vue/dist/vue.global.prod.js", react: "https://unpkg.com/react/umd/react.production.min.js", reactDOM: "https://unpkg.com/react-dom/umd/react-dom.production.min.js" };
const L = define_CODE_DEMO_OPTIONS_default, $ = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, H$3 = (e2, s2, t2) => {
  const l2 = document.createElement(e2);
  return isPlainObject(s2) && keys(s2).forEach((n2) => {
    if (n2.indexOf("data"))
      l2[n2] = s2[n2];
    else {
      const r2 = n2.replace("data", "");
      l2.dataset[r2] = s2[n2];
    }
  }), t2 && t2.forEach((n2) => {
    l2.appendChild(n2);
  }), l2;
}, S$1 = (e2) => ({ ...L, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L.cssLib || [], ...e2.cssLib || []])) }), u = (e2, s2) => {
  if (isDef(e2[s2]))
    return e2[s2];
  const t2 = new Promise((l2) => {
    var _a2;
    const n2 = document.createElement("script");
    n2.src = s2, (_a2 = document.querySelector("body")) == null ? void 0 : _a2.appendChild(n2), n2.onload = () => {
      l2();
    };
  });
  return e2[s2] = t2, t2;
}, I$1 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = H$3("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, J$1 = (e2, s2, t2) => {
  const l2 = t2.getScript();
  if (l2 && Array.from(s2.childNodes).every((n2) => n2.nodeName !== "SCRIPT")) {
    const n2 = document.createElement("script");
    n2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .vp-code-demo-display').shadowRoot;
${l2}}`)), s2.appendChild(n2);
  }
}, q = (e2) => {
  const s2 = keys(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((l2) => {
    const n2 = s2.filter((r2) => $[l2].types.includes(r2));
    if (n2.length) {
      const r2 = n2[0];
      t2[l2] = [e2[r2].replace(/^\n|\n$/g, ""), $[l2].map[r2] || r2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, x$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), O$2 = (e2) => `<div id="app">
${x$1(e2)}
</div>`, F$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, G$2 = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), A$3 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, Y$1 = (e2, s2) => {
  const t2 = S$1(s2), l2 = e2.js[0] || "";
  return { ...t2, html: x$1(e2.html[0] || ""), js: l2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var _a2;
    return t2.useBabel ? ((_a2 = window.Babel.transform(l2, { presets: ["es2015"] })) == null ? void 0 : _a2.code) || "" : l2;
  } };
}, K$1 = /<template>([\s\S]+)<\/template>/u, U$1 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u, W$4 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u, z$3 = (e2, s2) => {
  const t2 = S$1(s2), l2 = e2.html[0] || "", n2 = K$1.exec(l2), r2 = U$1.exec(l2), p2 = W$4.exec(l2), i2 = n2 ? n2[1].replace(/^\n|\n$/g, "") : "", [d2 = "", c2 = ""] = r2 ? [r2[4].replace(/^\n|\n$/g, ""), r2[3]] : [], [a2 = "", v2 = ""] = p2 ? [p2[4].replace(/^\n|\n$/g, ""), p2[3]] : [], f = c2 === "" && (v2 === "" || v2 === "css");
  return { ...t2, html: O$2(i2), js: G$2(d2), css: a2, isLegal: f, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var _a2, _b2;
    const g2 = s2.useBabel ? ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(d2, { presets: ["es2015"] })) == null ? void 0 : _b2.code) || "" : d2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${A$3(g2)};appOptions.template=\`${i2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, Q = (e2, s2) => {
  const t2 = S$1(s2);
  return { ...t2, html: O$2(""), js: F$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var _a2, _b2;
    const l2 = ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : _b2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${A$3(l2)}))`;
  } };
}, m$2 = {}, X = (e2) => Promise.all([u(m$2, e2.babel), u(m$2, e2.react), u(m$2, e2.reactDOM)]), Z$1 = (e2) => {
  const s2 = [u(m$2, e2.vue)];
  return e2.useBabel && s2.push(u(m$2, e2.babel)), Promise.all(s2);
}, ee$1 = (e2) => e2.useBabel ? u(m$2, e2.babel) : Promise.resolve();
var te = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, slots: Object, setup(e2, { slots: s2 }) {
  const [t2, l2] = useToggle(false), n2 = shallowRef(), r2 = shallowRef(), p2 = ref("0"), i2 = ref(false), d2 = computed(() => JSON.parse(e2.config ? decodeData(e2.config) : "{}")), c2 = computed(() => {
    const y2 = JSON.parse(decodeData(e2.code));
    return q(y2);
  }), a2 = computed(() => e2.type === "react" ? Q(c2.value, d2.value) : e2.type === "vue" ? z$3(c2.value, d2.value) : Y$1(c2.value, d2.value)), v2 = computed(() => a2.value.isLegal), f = (y2 = false) => {
    const b = n2.value.attachShadow({ mode: "open" }), j2 = document.createElement("div");
    j2.classList.add("code-demo-app"), b.appendChild(j2), v2.value ? (y2 && (j2.innerHTML = a2.value.html), I$1(b, a2.value), J$1(e2.id, b, a2.value), p2.value = "0") : p2.value = "auto", i2.value = true;
  }, g2 = () => {
    switch (e2.type) {
      case "react":
        return X(a2.value).then(() => f());
      case "vue":
        return Z$1(a2.value).then(() => f());
      default:
        return ee$1(a2.value).then(() => f(true));
    }
  };
  return useEventListener("beforeprint", () => {
    l2(true);
  }), onMounted(() => {
    setTimeout(() => {
      g2();
    }, 800);
  }), () => {
    var _a2;
    return h$2("div", { class: "vp-code-demo", id: e2.id }, [h$2("div", { class: "vp-code-demo-header" }, [a2.value.isLegal ? h$2("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-code-demo-toggle-button", t2.value ? "down" : "end"], onClick: () => {
      p2.value = t2.value ? "0" : `${r2.value.clientHeight + 13.8}px`, l2();
    } }) : null, e2.title ? h$2("span", { class: "vp-code-demo-title" }, decodeURIComponent(e2.title)) : null, a2.value.isLegal && a2.value.jsfiddle !== false ? h$2("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$2("input", { type: "hidden", name: "html", value: a2.value.html }), h$2("input", { type: "hidden", name: "js", value: a2.value.js }), h$2("input", { type: "hidden", name: "css", value: a2.value.css }), h$2("input", { type: "hidden", name: "wrap", value: "1" }), h$2("input", { type: "hidden", name: "panel_js", value: "3" }), h$2("input", { type: "hidden", name: "resources", value: [...a2.value.cssLib, ...a2.value.jsLib].join(",") }), h$2("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$1, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !a2.value.isLegal || a2.value.codepen !== false ? h$2("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$2("input", { type: "hidden", name: "data", value: JSON.stringify({ html: a2.value.html, js: a2.value.js, css: a2.value.css, js_external: a2.value.jsLib.join(";"), css_external: a2.value.cssLib.join(";"), layout: a2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : a2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: a2.value.codepenEditors }) }), h$2("button", { type: "submit", innerHTML: o$3, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), i2.value ? null : h$2(x$2, { class: "vp-code-demo-loading" }), h$2("div", { ref: n2, class: "vp-code-demo-display", style: { display: v2.value && i2.value ? "block" : "none" } }), h$2("div", { class: "vp-code-demo-code-wrapper", style: { height: p2.value } }, h$2("div", { ref: r2, class: "vp-code-demo-codes" }, (_a2 = s2.default) == null ? void 0 : _a2.call(s2)))]);
  };
} });
var v = defineComponent({ name: "MdDemo", props: { id: { type: String, required: true }, title: { type: String, default: "" } }, slots: Object, setup(t2, { slots: d2 }) {
  const [o2, l2] = useToggle(false), i2 = shallowRef(), s2 = ref("0");
  return useEventListener("beforeprint", () => {
    l2(true);
  }), () => {
    var _a2, _b2;
    return h$2("div", { class: "vp-md-demo", id: t2.id }, [h$2("div", { class: "vp-md-demo-header" }, [h$2("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-md-demo-toggle-button", o2.value ? "down" : "end"], onClick: () => {
      s2.value = o2.value ? "0" : `${i2.value.clientHeight + 13.8}px`, l2();
    } }), t2.title ? decodeURIComponent(t2.title) : null]), h$2("div", { class: "vp-md-demo-display" }, (_a2 = d2.default) == null ? void 0 : _a2.call(d2)), h$2("div", { class: "vp-md-demo-code-wrapper", style: { height: s2.value } }, h$2("div", { ref: i2, class: "vp-md-demo-codes" }, (_b2 = d2.code) == null ? void 0 : _b2.call(d2)))]);
  };
} });
const o$2 = () => {
  useEventListener("beforeprint", () => {
    document.querySelectorAll("details").forEach((e2) => {
      e2.open = true;
    });
  });
};
const n$2 = useStorage("VUEPRESS_TAB_STORE", {});
var A$2 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: d2 }) {
  const l2 = ref(a2.active), u2 = shallowRef([]), s2 = () => {
    a2.tabId && (n$2.value[a2.tabId] = a2.data[l2.value].id);
  }, o2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), o2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), s2();
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => n$2.value[a2.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => n$2.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const i2 = a2.data.findIndex(({ id: v2 }) => v2 === e2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a2.data.length ? h$2("div", { class: "vp-tabs" }, [h$2("div", { class: "vp-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$2("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-tab-nav", { active: i2 }], role: "tab", "aria-controls": `tab-${a2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (v2) => b(v2, t2) }, d2[`title${t2}`]({ value: e2, isActive: i2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$2("div", { class: ["vp-tab", { active: i2 }], id: `tab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": i2 }, [h$2("div", { class: "vp-tab-title" }, d2[`title${t2}`]({ value: e2, isActive: i2 })), d2[`tab${t2}`]({ value: e2, isActive: i2 })]);
  })]) : null;
} });
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", A$4);
    if (!ve$1("CodeGroup", app))
      app.component("CodeGroup", w);
    if (!ve$1("CodeGroupItem", app))
      app.component("CodeGroupItem", i$1);
    app.component("CodeDemo", te);
    app.component("MdDemo", v);
    app.component("Tabs", A$2);
  },
  setup: () => {
    o$2();
  }
});
let i = {};
const t = Symbol(""), n$1 = () => inject(t), s = (o2) => {
  o2.provide(t, i);
};
var define_PHOTO_SWIPE_LOCALES_default = { "/": { closeTitle: "Close", downloadTitle: "Download Image", fullscreenTitle: "Switch to full screen", zoomTitle: "Zoom in/out", arrowPrevTitle: "Prev (Arrow Left)", arrowNextTitle: "Next (Arrow Right)" } };
const H$2 = ".theme-hope-content :not(a) > img:not([no-view])", N$1 = define_PHOTO_SWIPE_LOCALES_default, M$1 = 800, z$2 = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>', D$2 = (e2) => isString(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((n2) => Array.from(document.querySelectorAll(n2))).flat(), h = (e2) => new Promise((n2, m2) => {
  e2.complete ? n2({ type: "image", element: e2, src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt, msrc: e2.src }) : (e2.onload = () => n2(h(e2)), e2.onerror = (d2) => m2(d2));
}), W$3 = () => {
  const e2 = useLocaleConfig$1(N$1), n2 = usePageFrontmatter(), m2 = usePageData(), { isSupported: d2, toggle: v2 } = useFullscreen(), g2 = n$1();
  let s2;
  const u2 = computed(() => n2.value.photoSwipe === false ? false : n2.value.photoSwipe || H$2), w2 = (a2) => {
    a2.on("uiRegister", () => {
      d2 && a2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
        v2();
      } }), a2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, o2) => {
        r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), o2.on("change", () => {
          r2.setAttribute("href", o2.currSlide.data.src);
        });
      } }), a2.ui.registerElement({ name: "bulletsIndicator", className: "photo-swipe-bullets-indicator", appendTo: "wrapper", onInit: (r2, o2) => {
        const t2 = [];
        let i2 = -1;
        for (let l2 = 0; l2 < o2.getNumItems(); l2++) {
          const c2 = document.createElement("div");
          c2.className = "photo-swipe-bullet", c2.onclick = (S2) => {
            o2.goTo(t2.indexOf(S2.target));
          }, t2.push(c2), r2.appendChild(c2);
        }
        o2.on("change", () => {
          i2 >= 0 && t2[i2].classList.remove("active"), t2[o2.currIndex].classList.add("active"), i2 = o2.currIndex;
        });
      } });
    });
  }, f = async () => {
    if (u2.value)
      return Promise.all([import("photoswipe"), nextTick().then(() => new Promise((a2) => setTimeout(a2, M$1)).then(() => D$2(u2.value)))]).then(([{ default: a2 }, r2]) => {
        const o2 = r2.map((t2) => ({ html: z$2, element: t2, msrc: t2.src }));
        r2.forEach((t2, i2) => {
          const l2 = () => {
            s2 = new a2({ preloaderDelay: 0, showHideAnimationType: "zoom", ...e2.value, ...g2, dataSource: o2, index: i2, ...{ closeOnVerticalDrag: true, wheelToZoom: false } }), w2(s2), s2.addFilter("thumbEl", () => t2), s2.addFilter("placeholderSrc", () => t2.src), s2.init();
          };
          t2.style.cursor = "zoom-in", t2.addEventListener("click", () => {
            l2();
          }), t2.addEventListener("keypress", ({ key: c2 }) => {
            c2 === "Enter" && l2();
          });
        }), r2.forEach((t2, i2) => {
          h(t2).then((l2) => {
            o2.splice(i2, 1, l2), s2 == null ? void 0 : s2.refreshSlideContent(i2);
          });
        });
      });
  };
  onMounted(() => {
    useEventListener("wheel", () => {
      s2 == null ? void 0 : s2.close();
    }), watch(() => m2.value.path, f, { immediate: true });
  });
};
var B = defineClientConfig({ enhance: ({ app: e2 }) => {
  s(e2);
}, setup: () => {
  W$3();
} });
const useReadingTimeData = () => {
  const page = usePageData();
  return computed(() => page.value.readingTime ?? null);
};
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const getReadingTimeLocale = (readingTime, locale) => {
  const { minutes, words } = readingTime;
  const { less1Minute, word, time } = locale;
  return {
    time: minutes < 1 ? less1Minute : time.replace("$time", Math.round(minutes).toString()),
    words: word.replace("$word", words.toString())
  };
};
var define_READING_TIME_LOCALES_default = { "/": { word: "About $word words", less1Minute: "Less than 1 minute", time: "About $time min" } };
const DEFAULT_LOCALE = { words: "", time: "" };
const readingTimeLocales = typeof define_READING_TIME_LOCALES_default === "undefined" ? null : define_READING_TIME_LOCALES_default;
const useReadingTimeLocaleConfig = () => readingTimeLocales ? useLocaleConfig(readingTimeLocales) : computed(() => null);
const useReadingTimeLocale = () => {
  if (typeof readingTimeLocales === "undefined")
    return computed(() => DEFAULT_LOCALE);
  const readingTime = useReadingTimeData();
  const readingTimeLocale = useReadingTimeLocaleConfig();
  return computed(() => readingTime.value && readingTimeLocale.value ? getReadingTimeLocale(readingTime.value, readingTimeLocale.value) : DEFAULT_LOCALE);
};
const e$1 = () => useThemeData(), m$1 = () => useThemeLocaleData(), o$1 = () => {
  const a2 = e$1();
  return computed(() => !!a2.value.pure);
};
const noopComponent = () => null;
const mobileBreakPoint = "719px";
const pcBreakPoint = "1440px";
const enableThemeColor = "false";
const de$1 = {
  mobileBreakPoint,
  pcBreakPoint,
  enableThemeColor
};
const sidebarData = { "/": ["", "intro", { "text": "Posts", "prefix": "posts/", "collapsible": true, "children": ["/posts/%20Download%20_.torrent_%20file%20under%20Fedora.html", " Fedora set display scale 150%(gnome)", "/posts/%20git%20push%20fatal_%20The%20remote%20end%20hung%20up%20unexpectedly.html", " git rebase and git amend", " Git switch branches with modified files", " Joplin exits full screen in Linux", "/posts/%20Linux%20Trick_%20Create%20desktop%20entries%20for%20apps.html", " Open folder at terminal. Linux", "/posts/%20Program%20executed%20by%20Linux%20Terminal%20has%20the%20same%20proxy%20with%20the%20terminal_.html", " Redirect terminal output to clipboard.", " Set Bluetooth off as default at rebooting in Fedora", " Set default editor in Linux", "/posts/%20Typora_upgit_tcyun_%20upload%20img%20to%20imgbed.html", "/posts/%20Useful%20script%20sharing_%20easy%20git%20push.html", " Using ssh through SOCKS5 proxy.", " Vue Download failure about Ipv4", " Watch a process with pid under Linux."] }] };
const ze$1 = (e2) => {
  const { icon: t2 = "", color: n2, size: l2 } = e2, s2 = n2 || l2 ? {} : null;
  return n2 && (s2.color = n2), l2 && (s2.height = Number.isNaN(Number(l2)) ? l2 : `${l2}px`), isLinkHttp(t2) ? h$2("img", { class: "icon", src: t2, alt: "", "no-view": "", style: s2 }) : isLinkAbsolute(t2) ? h$2("img", { class: "icon", src: withBase(t2), alt: "", "aria-hidden": "", "no-view": "", style: s2 }) : h$2(resolveComponent("FontIcon"), e2);
};
ze$1.displayName = "HopeIcon";
var z$1 = ze$1;
const Fa = () => {
  const e2 = useRouter(), t2 = useRoute();
  return (n2) => {
    if (n2)
      if (isLinkAbsolute(n2))
        t2.path !== n2 && e2.push(n2);
      else if (isLinkWithProtocol(n2))
        window && window.open(n2);
      else {
        const l2 = t2.path.slice(0, t2.path.lastIndexOf("/"));
        e2.push(`${l2}/${encodeURI(n2)}`);
      }
  };
}, Ne = () => {
  const e2 = m$1(), t2 = usePageFrontmatter();
  return computed(() => {
    const { author: n2 } = t2.value;
    return n2 ? pe$1(n2) : n2 === false ? [] : pe$1(e2.value.author, false);
  });
}, qa = () => {
  const e2 = usePageFrontmatter(), t2 = inject(Symbol.for("categoryMap"));
  return computed(() => ge$2(e2.value.category).map((n2) => {
    var _a2;
    return { name: n2, path: ((_a2 = t2 == null ? void 0 : t2.value.map[n2]) == null ? void 0 : _a2.path) || "" };
  }));
}, Ga = () => {
  const e2 = usePageFrontmatter(), t2 = inject(Symbol.for("tagMap"));
  return computed(() => fe$3(e2.value.tag).map((n2) => {
    var _a2;
    return { name: n2, path: ((_a2 = t2 == null ? void 0 : t2.value.map[n2]) == null ? void 0 : _a2.path) || "" };
  }));
}, Wa = () => {
  const e2 = usePageFrontmatter(), t2 = usePageData();
  return computed(() => {
    const n2 = getDate(e2.value.date);
    if (n2)
      return n2;
    const { createdTime: l2 } = t2.value.git || {};
    return l2 ? new Date(l2) : null;
  });
}, Ua = () => {
  const e2 = m$1(), t2 = usePageData(), n2 = usePageFrontmatter(), l2 = Ne(), s2 = qa(), r2 = Ga(), o2 = Wa(), i2 = useReadingTimeData(), v2 = useReadingTimeLocale(), c2 = computed(() => ({ author: l2.value, category: s2.value, date: o2.value, localizedDate: t2.value.localizedDate, tag: r2.value, isOriginal: n2.value.isOriginal || false, readingTime: i2.value, readingTimeLocale: v2.value, pageview: "pageview" in n2.value ? n2.value.pageview : true })), p2 = computed(() => "pageInfo" in n2.value ? n2.value.pageInfo : "pageInfo" in e2.value ? e2.value.pageInfo : null);
  return { info: c2, items: p2 };
}, { mobileBreakPoint: Ya, pcBreakPoint: Xa } = de$1, Ve = (e2) => e2.endsWith("px") ? Number(e2.slice(0, -2)) : null, ee = () => {
  const e2 = ref(false), t2 = ref(false), n2 = () => {
    e2.value = window.innerWidth <= (Ve(Ya) ?? 719), t2.value = window.innerWidth >= (Ve(Xa) ?? 1440);
  };
  return onMounted(() => {
    n2(), useEventListener("resize", n2, false), useEventListener("orientationchange", n2, false);
  }), { isMobile: e2, isPC: t2 };
}, Oe = Symbol(""), W$2 = () => {
  const e2 = inject(Oe);
  if (!e2)
    throw new Error("useDarkmode() is called without provider.");
  return e2;
}, Ka = (e2) => {
  const t2 = e$1(), n2 = usePreferredDark(), l2 = computed(() => t2.value.darkmode || "switch"), s2 = useStorage("vuepress-theme-hope-scheme", "auto"), r2 = computed(() => {
    const i2 = l2.value;
    return i2 === "disable" ? false : i2 === "enable" ? true : i2 === "auto" ? n2.value : i2 === "toggle" ? s2.value === "dark" : s2.value === "dark" || s2.value === "auto" && n2.value;
  }), o2 = computed(() => {
    const i2 = l2.value;
    return i2 === "switch" || i2 === "toggle";
  });
  e2.provide(Oe, { canToggle: o2, config: l2, isDarkmode: r2, status: s2 }), Object.defineProperties(e2.config.globalProperties, { $isDarkmode: { get: () => r2.value } });
}, Ja = () => {
  const { config: e2, isDarkmode: t2, status: n2 } = W$2();
  watchEffect(() => {
    e2.value === "disable" ? n2.value = "light" : e2.value === "enable" && (n2.value = "dark");
  }), onMounted(() => {
    watch(t2, (l2) => document.documentElement.setAttribute("data-theme", l2 ? "dark" : "light"), { immediate: true });
  });
};
var S = defineComponent({ name: "AutoLink", inheritAttrs: false, props: { config: { type: Object, required: true }, exact: Boolean, noExternalLinkIcon: Boolean }, emits: ["focusout"], slots: Object, setup(e2, { attrs: t2, emit: n2, slots: l2 }) {
  const s2 = useRoute(), r2 = useSiteData(), o2 = toRef(e2, "config"), i2 = computed(() => isLinkHttp(o2.value.link)), v2 = computed(() => !i2.value && isLinkWithProtocol(o2.value.link)), c2 = computed(() => o2.value.target || (i2.value ? "_blank" : void 0)), p2 = computed(() => c2.value === "_blank"), m2 = computed(() => !i2.value && !v2.value && !p2.value), y2 = computed(() => o2.value.rel || (p2.value ? "noopener noreferrer" : null)), b = computed(() => o2.value.ariaLabel || o2.value.text), C2 = computed(() => {
    if (e2.exact)
      return false;
    const k2 = keys(r2.value.locales);
    return k2.length ? k2.every((w2) => w2 !== o2.value.link) : o2.value.link !== "/";
  }), F2 = computed(() => m2.value ? o2.value.activeMatch ? new RegExp(o2.value.activeMatch, "u").test(s2.path) : C2.value ? startsWith(s2.path, o2.value.link) : s2.path === o2.value.link : false);
  return () => {
    const { before: k2, after: w2, default: M2 } = l2, { text: U2, icon: Y2, link: O2 } = o2.value;
    return m2.value ? h$2(N$2, { to: O2, "aria-label": b.value, ...t2, class: ["nav-link", { active: F2.value }, t2.class], onFocusout: () => n2("focusout") }, () => M2 ? M2() : [k2 ? k2() : h$2(z$1, { icon: Y2 }), U2, w2 == null ? void 0 : w2()]) : h$2("a", { href: O2, rel: y2.value, target: c2.value, "aria-label": b.value, ...t2, class: ["nav-link", t2.class], onFocusout: () => n2("focusout") }, M2 ? M2() : [k2 ? k2() : h$2(z$1, { icon: Y2 }), U2, e2.noExternalLinkIcon ? null : h$2(ExternalLinkIcon), w2 == null ? void 0 : w2()]);
  };
} });
const H$1 = (e2, t2, n2 = false) => "activeMatch" in t2 ? new RegExp(t2.activeMatch, "u").test(e2.path) : ce$1(e2, t2.link) ? true : t2.children && !n2 ? t2.children.some((l2) => H$1(e2, l2)) : false, Pe$1 = (e2, t2) => t2.type === "group" ? t2.children.some((n2) => n2.type === "group" ? Pe$1(e2, n2) : n2.type === "page" && H$1(e2, n2, true)) || "prefix" in t2 && ce$1(e2, t2.prefix) : false, Re = (e2, t2) => isString(e2.link) ? h$2(S, { ...t2, config: e2 }) : h$2("p", t2, [h$2(z$1, { icon: e2.icon }), e2.text]), He$1 = (e2) => {
  const t2 = useRoute();
  return e2 ? h$2("ul", { class: "vp-sidebar-sub-headers" }, e2.map((n2) => h$2("li", { class: "vp-sidebar-sub-header" }, [Re(n2, { class: ["vp-sidebar-link", "vp-heading", { active: H$1(t2, n2, true) }] }), He$1(n2.children)]))) : null;
};
var N = ((e2) => (e2.type = "y", e2.title = "t", e2.shortTitle = "s", e2.icon = "i", e2.author = "a", e2.date = "d", e2.localizedDate = "l", e2.category = "c", e2.tag = "g", e2.isEncrypted = "n", e2.isOriginal = "o", e2.readingTime = "r", e2.excerpt = "e", e2.sticky = "u", e2.cover = "v", e2.index = "I", e2.order = "O", e2))(N || {}), _e = ((e2) => (e2.article = "a", e2.home = "h", e2.slide = "s", e2.page = "p", e2))(_e || {});
const V$1 = (e2 = "", t2 = "") => isLinkAbsolute(t2) ? t2 : `${ensureEndingSlash(e2)}${t2}`, _$3 = (e2, t2, n2 = false) => {
  let l2 = h$1(e2, A$5(encodeURI(t2)));
  l2.name === "404" && (l2 = h$1(e2, t2));
  const { fullPath: s2, meta: r2, name: o2 } = l2;
  return { text: !n2 && r2[N.shortTitle] ? r2[N.shortTitle] : r2[N.title] || t2, link: o2 === "404" ? t2 : s2, ...r2[N.icon] ? { icon: r2[N.icon] } : {} };
}, ae = (e2, t2, n2) => n2 > 0 ? t2.map((l2) => ({ type: "heading", text: l2.title, link: `${e2.path}#${l2.slug}`, children: ae(e2, l2.children, n2 - 1) })) : [], he$1 = ({ config: e2, router: t2, page: n2, headerDepth: l2, prefix: s2 = "" }) => {
  const r2 = (o2, i2 = s2) => {
    var _a2;
    const v2 = isString(o2) ? _$3(t2, V$1(i2, o2)) : o2.link ? { ...o2, ...isLinkExternal(o2.link) ? {} : { link: _$3(t2, V$1(i2, o2.link)).link } } : o2;
    if ("children" in v2) {
      const c2 = V$1(i2, v2.prefix), p2 = v2.children === "structure" ? sidebarData[c2] : v2.children;
      return { type: "group", ...v2, prefix: c2, children: p2.map((m2) => r2(m2, c2)) };
    }
    return { type: "page", ...v2, children: v2.link === n2.path ? ae(n2, ((_a2 = n2.headers[0]) == null ? void 0 : _a2.level) === 1 ? n2.headers[0].children : n2.headers, l2) : [] };
  };
  return e2.map((o2) => r2(o2));
}, Qa = ({ config: e2, router: t2, page: n2, headerDepth: l2 }) => {
  const s2 = keys(e2).sort((r2, o2) => o2.length - r2.length);
  for (const r2 of s2)
    if (startsWith(decodeURI(n2.path), r2)) {
      const o2 = e2[r2];
      return o2 ? he$1({ config: o2 === "structure" ? sidebarData[r2] : o2 === "heading" ? ae(n2, n2.headers, l2) : o2, router: t2, page: n2, headerDepth: l2, prefix: r2 }) : [];
    }
  return console.warn(`${n2.path} is missing sidebar config.`), [];
}, Za = ({ config: e2, router: t2, routeLocale: n2, page: l2, headerDepth: s2 }) => e2 === "heading" ? ae(l2, l2.headers, s2) : e2 === "structure" ? he$1({ config: sidebarData[n2], router: t2, page: l2, headerDepth: s2, prefix: n2 }) : isArray(e2) ? he$1({ config: e2, router: t2, page: l2, headerDepth: s2 }) : isPlainObject(e2) ? Qa({ config: e2, router: t2, page: l2, headerDepth: s2 }) : [], je = Symbol(""), et = () => {
  const e2 = usePageFrontmatter(), t2 = m$1(), n2 = usePageData(), l2 = useRouteLocale(), s2 = useRouter(), r2 = computed(() => e2.value.home ? false : e2.value.sidebar ?? t2.value.sidebar ?? "structure"), o2 = computed(() => e2.value.headerDepth ?? t2.value.headerDepth ?? 2), i2 = computedWithControl(() => [r2.value, o2.value, n2.value.path, null], () => Za({ config: r2.value, router: s2, routeLocale: l2.value, page: n2.value, headerDepth: o2.value }));
  provide(je, i2);
}, ge$1 = () => {
  const e2 = inject(je);
  if (!e2)
    throw new Error("useSidebarItems() is called without provider.");
  return e2;
};
var at = defineComponent({ name: "PageFooter", setup() {
  const e2 = e$1(), t2 = m$1(), n2 = usePageFrontmatter(), l2 = Ne(), s2 = computed(() => {
    const { copyright: c2, footer: p2 } = n2.value;
    return p2 !== false && !!(c2 || p2 || t2.value.displayFooter);
  }), r2 = computed(() => {
    const { footer: c2 } = n2.value;
    return c2 === false ? false : isString(c2) ? c2 : t2.value.footer || "";
  }), o2 = computed(() => l2.value.map(({ name: c2 }) => c2).join(", ")), i2 = (c2) => `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${o2.value} ${c2 ? `${c2} Licensed` : ""}`, v2 = computed(() => {
    const { copyright: c2, license: p2 = "" } = n2.value, { license: m2 } = e2.value, { copyright: y2 } = t2.value;
    return c2 ?? (p2 ? i2(p2) : isString(y2) ? y2 : o2.value || m2 ? i2(m2) : false);
  });
  return () => s2.value ? h$2("footer", { class: "vp-footer-wrapper" }, [r2.value ? h$2("div", { class: "vp-footer", innerHTML: r2.value }) : null, v2.value ? h$2("div", { class: "vp-copyright", innerHTML: v2.value }) : null]) : null;
} }), Fe = defineComponent({ name: "NavbarDropdownLink", props: { config: { type: Object, required: true } }, slots: Object, setup(e2, { slots: t2 }) {
  const n2 = usePageData(), l2 = toRef(e2, "config"), s2 = computed(() => l2.value.ariaLabel || l2.value.text), r2 = ref(false);
  watch(() => n2.value.path, () => {
    r2.value = false;
  });
  const o2 = (i2) => {
    i2.detail === 0 && (r2.value = !r2.value);
  };
  return () => {
    var _a2;
    return h$2("div", { class: ["dropdown-wrapper", { open: r2.value }] }, [h$2("button", { type: "button", class: "dropdown-title", "aria-label": s2.value, onClick: o2 }, [((_a2 = t2.title) == null ? void 0 : _a2.call(t2)) || h$2("span", { class: "title" }, [h$2(z$1, { icon: l2.value.icon }), e2.config.text]), h$2("span", { class: "arrow" }), h$2("ul", { class: "nav-dropdown" }, l2.value.children.map((i2, v2) => {
      const c2 = v2 === l2.value.children.length - 1;
      return h$2("li", { class: "dropdown-item" }, "children" in i2 ? [h$2("h4", { class: "dropdown-subtitle" }, i2.link ? h$2(S, { config: i2, onFocusout: () => {
        i2.children.length === 0 && c2 && (r2.value = false);
      } }) : h$2("span", i2.text)), h$2("ul", { class: "dropdown-subitem-wrapper" }, i2.children.map((p2, m2) => h$2("li", { class: "dropdown-subitem" }, h$2(S, { config: p2, onFocusout: () => {
        m2 === i2.children.length - 1 && c2 && (r2.value = false);
      } }))))] : h$2(S, { config: i2, onFocusout: () => {
        c2 && (r2.value = false);
      } }));
    }))])]);
  };
} });
const qe = () => h$2(c$1, { name: "i18n" }, () => [h$2("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
qe.displayName = "I18nIcon";
const Ge = (e2, t2, n2 = "") => isString(t2) ? _$3(e2, V$1(n2, t2)) : "children" in t2 ? { ...t2, ...t2.link && !isLinkExternal(t2.link) ? _$3(e2, V$1(n2, t2.link)) : {}, children: t2.children.map((l2) => Ge(e2, l2, V$1(n2, t2.prefix))) } : { ...t2, link: isLinkExternal(t2.link) ? t2.link : _$3(e2, V$1(n2, t2.link)).link }, We = () => {
  const e2 = m$1(), t2 = useRouter(), n2 = () => (e2.value.navbar || []).map((l2) => Ge(t2, l2));
  return computedWithControl(() => e2.value.navbar, () => n2());
}, tt = () => {
  const e2 = useRouter(), t2 = useRoute(), n2 = useRouteLocale(), l2 = useSiteLocaleData(), s2 = e$1(), r2 = m$1();
  return computedWithControl(() => t2.path, () => {
    const o2 = keys(l2.value.locales), i2 = entries(s2.value.extraLocales ?? {});
    if (o2.length < 2 && !i2.length)
      return null;
    const { path: v2, fullPath: c2 } = t2, { navbarLocales: p2 } = r2.value;
    return { text: "", ariaLabel: p2 == null ? void 0 : p2.selectLangAriaLabel, children: [...o2.map((m2) => {
      var _a2, _b2, _c;
      const y2 = ((_a2 = l2.value.locales) == null ? void 0 : _a2[m2]) ?? {}, b = ((_b2 = s2.value.locales) == null ? void 0 : _b2[m2]) ?? {}, C2 = y2.lang || "", F2 = ((_c = b.navbarLocales) == null ? void 0 : _c.langName) ?? C2;
      let k2;
      if (C2 === l2.value.lang)
        k2 = v2;
      else {
        const w2 = v2.replace(n2.value, m2);
        k2 = e2.getRoutes().some((M2) => M2.path === w2) ? c2.replace(v2, w2) : b.home ?? m2;
      }
      return { text: F2, link: k2 };
    }), ...i2.map(([m2, y2]) => ({ text: m2, link: y2.replace(":route", t2.path.replace(n2.value, "")) }))] };
  });
}, nt = () => {
  const e2 = m$1(), t2 = computed(() => e2.value.repo || null), n2 = computed(() => t2.value ? me$1(t2.value) : null), l2 = computed(() => t2.value ? ue$1(t2.value) : null), s2 = computed(() => n2.value ? e2.value.repoLabel ?? (l2.value === null ? "Source" : l2.value) : null);
  return computed(() => !n2.value || !s2.value || e2.value.repoDisplay === false ? null : { type: l2.value || "Source", label: s2.value, link: n2.value });
};
defineComponent({ name: "LanguageDropdown", setup() {
  const e2 = tt();
  return () => e2.value ? h$2("div", { class: "nav-item" }, h$2(Fe, { class: "i18n-dropdown", config: e2.value }, { title: () => {
    var _a2;
    return h$2(qe, { "aria-label": (_a2 = e2.value) == null ? void 0 : _a2.ariaLabel, style: { width: "1rem", height: "1rem", verticalAlign: "middle" } });
  } })) : null;
} });
var ot = defineComponent({ name: "NavScreenDropdown", props: { config: { type: Object, required: true } }, setup(e2) {
  const t2 = usePageData(), n2 = toRef(e2, "config"), l2 = computed(() => n2.value.ariaLabel || n2.value.text), s2 = ref(false);
  watch(() => t2.value.path, () => {
    s2.value = false;
  });
  const r2 = (o2, i2) => i2[i2.length - 1] === o2;
  return () => [h$2("button", { type: "button", class: ["nav-screen-dropdown-title", { active: s2.value }], "aria-label": l2.value, onClick: () => {
    s2.value = !s2.value;
  } }, [h$2("span", { class: "title" }, [h$2(z$1, { icon: n2.value.icon }), e2.config.text]), h$2("span", { class: ["arrow", s2.value ? "down" : "end"] })]), h$2("ul", { class: ["nav-screen-dropdown", { hide: !s2.value }] }, n2.value.children.map((o2) => h$2("li", { class: "dropdown-item" }, "children" in o2 ? [h$2("h4", { class: "dropdown-subtitle" }, o2.link ? h$2(S, { config: o2, onFocusout: () => {
    r2(o2, n2.value.children) && o2.children.length === 0 && (s2.value = false);
  } }) : h$2("span", o2.text)), h$2("ul", { class: "dropdown-subitem-wrapper" }, o2.children.map((i2) => h$2("li", { class: "dropdown-subitem" }, h$2(S, { config: i2, onFocusout: () => {
    r2(i2, o2.children) && r2(o2, n2.value.children) && (s2.value = false);
  } }))))] : h$2(S, { config: o2, onFocusout: () => {
    r2(o2, n2.value.children) && (s2.value = false);
  } }))))];
} }), rt = defineComponent({ name: "NavScreenLinks", setup() {
  const e2 = We();
  return () => e2.value.length ? h$2("nav", { class: "nav-screen-links" }, e2.value.map((t2) => h$2("div", { class: "navbar-links-item" }, "children" in t2 ? h$2(ot, { config: t2 }) : h$2(S, { config: t2 })))) : null;
} });
const Ue = () => h$2(c$1, { name: "dark" }, () => h$2("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
Ue.displayName = "DarkIcon";
const Ye = () => h$2(c$1, { name: "light" }, () => h$2("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
Ye.displayName = "LightIcon";
const Xe$1 = () => h$2(c$1, { name: "auto" }, () => h$2("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
Xe$1.displayName = "AutoIcon";
const Ke = () => h$2(c$1, { name: "enter-fullscreen" }, () => h$2("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
Ke.displayName = "EnterFullScreenIcon";
const Je$1 = () => h$2(c$1, { name: "cancel-fullscreen" }, () => h$2("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
Je$1.displayName = "CancelFullScreenIcon";
const Qe$1 = () => h$2(c$1, { name: "outlook" }, () => [h$2("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
Qe$1.displayName = "OutlookIcon";
var Ze = defineComponent({ name: "AppearanceSwitch", setup() {
  const { config: e2, isDarkmode: t2, status: n2 } = W$2(), l2 = o$1(), s2 = () => {
    e2.value === "switch" ? n2.value = { light: "dark", dark: "auto", auto: "light" }[n2.value] : n2.value = n2.value === "light" ? "dark" : "light";
  }, r2 = async (o2) => {
    if (!(document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !l2.value) || !o2) {
      s2();
      return;
    }
    const i2 = o2.clientX, v2 = o2.clientY, c2 = Math.hypot(Math.max(i2, innerWidth - i2), Math.max(v2, innerHeight - v2)), p2 = t2.value;
    await document.startViewTransition(async () => {
      s2(), await nextTick();
    }).ready, t2.value !== p2 && document.documentElement.animate({ clipPath: t2.value ? [`circle(${c2}px at ${i2}px ${v2}px)`, `circle(0px at ${i2}px ${v2}px)`] : [`circle(0px at ${i2}px ${v2}px)`, `circle(${c2}px at ${i2}px ${v2}px)`] }, { duration: 400, pseudoElement: t2.value ? "::view-transition-old(root)" : "::view-transition-new(root)" });
  };
  return () => h$2("button", { type: "button", id: "appearance-switch", onClick: r2 }, [h$2(Xe$1, { style: { display: n2.value === "auto" ? "block" : "none" } }), h$2(Ue, { style: { display: n2.value === "dark" ? "block" : "none" } }), h$2(Ye, { style: { display: n2.value === "light" ? "block" : "none" } })]);
} }), st = defineComponent({ name: "AppearanceMode", setup() {
  const e2 = m$1(), { canToggle: t2 } = W$2(), n2 = computed(() => e2.value.outlookLocales.darkmode);
  return () => t2.value ? h$2("div", { class: "appearance-wrapper" }, [h$2("label", { class: "appearance-title", for: "appearance-switch" }, n2.value), h$2(Ze)]) : null;
} });
const fe$2 = "VUEPRESS_THEME_COLOR";
var it = defineComponent({ name: "ThemeColorPicker", props: { themeColor: { type: Object, required: true } }, setup(e2) {
  const t2 = (n2 = "") => {
    const l2 = document.documentElement.classList, s2 = keys(e2.themeColor);
    if (!n2) {
      localStorage.removeItem(fe$2), l2.remove(...s2);
      return;
    }
    l2.remove(...s2.filter((r2) => r2 !== n2)), l2.add(n2), localStorage.setItem(fe$2, n2);
  };
  return onMounted(() => {
    const n2 = localStorage.getItem(fe$2);
    n2 && t2(n2);
  }), () => h$2("ul", { id: "theme-color-picker" }, [h$2("li", h$2("span", { class: "theme-color", onClick: () => t2() })), entries(e2.themeColor).map(([n2, l2]) => h$2("li", h$2("span", { style: { background: l2 }, onClick: () => t2(n2) })))]);
} });
const j$2 = de$1.enableThemeColor === "true", ct = j$2 ? fromEntries(entries(de$1).filter(([e2]) => e2.startsWith("theme-"))) : {};
var ut = defineComponent({ name: "ThemeColor", setup() {
  const e2 = m$1(), t2 = computed(() => e2.value.outlookLocales.themeColor);
  return () => j$2 ? h$2("div", { class: "theme-color-wrapper" }, [h$2("label", { class: "theme-color-title", for: "theme-color-picker" }, t2.value), h$2(it, { themeColor: ct })]) : null;
} }), ea = defineComponent({ name: "ToggleFullScreenButton", setup() {
  const e2 = m$1(), { isSupported: t2, isFullscreen: n2, toggle: l2 } = useFullscreen(), s2 = computed(() => e2.value.outlookLocales.fullscreen);
  return () => t2 ? h$2("div", { class: "full-screen-wrapper" }, [h$2("label", { class: "full-screen-title", for: "full-screen-switch" }, s2.value), h$2("button", { type: "button", id: "full-screen-switch", class: "full-screen", ariaPressed: n2.value, onClick: () => l2() }, n2.value ? h$2(Je$1) : h$2(Ke))]) : null;
} }), aa = defineComponent({ name: "OutlookSettings", setup() {
  const e2 = e$1(), t2 = o$1(), n2 = computed(() => !t2.value && e2.value.fullscreen);
  return () => h$2(ClientOnly, () => [j$2 ? h$2(ut) : null, h$2(st), n2.value ? h$2(ea) : null]);
} }), pt = defineComponent({ name: "NavScreen", props: { show: Boolean }, emits: ["close"], slots: Object, setup(e2, { emit: t2, slots: n2 }) {
  const l2 = usePageData(), { isMobile: s2 } = ee(), r2 = shallowRef(), o2 = useScrollLock(r2);
  return onMounted(() => {
    r2.value = document.body, watch(s2, (i2) => {
      !i2 && e2.show && (o2.value = false, t2("close"));
    }), watch(() => l2.value.path, () => {
      o2.value = false, t2("close");
    });
  }), onUnmounted(() => {
    o2.value = false;
  }), () => h$2(Transition, { name: "fade", onEnter: () => {
    o2.value = true;
  }, onAfterLeave: () => {
    o2.value = false;
  } }, () => {
    var _a2, _b2;
    return e2.show ? h$2("div", { id: "nav-screen" }, h$2("div", { class: "vp-nav-screen-container" }, [(_a2 = n2.before) == null ? void 0 : _a2.call(n2), h$2(rt), h$2("div", { class: "vp-outlook-wrapper" }, h$2(aa)), (_b2 = n2.after) == null ? void 0 : _b2.call(n2)])) : null;
  });
} }), vt = defineComponent({ name: "NavbarBrand", setup() {
  const e2 = useRouteLocale(), t2 = useSiteLocaleData(), n2 = m$1(), l2 = computed(() => n2.value.home || e2.value), s2 = computed(() => t2.value.title), r2 = computed(() => n2.value.navTitle ?? s2.value), o2 = computed(() => n2.value.logo ? withBase(n2.value.logo) : null), i2 = computed(() => n2.value.logoDark ? withBase(n2.value.logoDark) : null);
  return () => h$2(N$2, { to: l2.value, class: "vp-brand" }, () => [o2.value ? h$2("img", { class: ["vp-nav-logo", { light: !!i2.value }], src: o2.value, alt: "" }) : null, i2.value ? h$2("img", { class: ["vp-nav-logo dark"], src: i2.value, alt: "" }) : null, r2.value ? h$2("span", { class: ["vp-site-name", { "hide-in-pad": o2.value && n2.value.hideSiteNameOnMobile !== false }] }, r2.value) : null]);
} }), dt = defineComponent({ name: "NavbarLinks", setup() {
  const e2 = We();
  return () => e2.value.length ? h$2("nav", { class: "vp-nav-links" }, e2.value.map((t2) => h$2("div", { class: "nav-item hide-in-mobile" }, "children" in t2 ? h$2(Fe, { config: t2 }) : h$2(S, { config: t2 })))) : null;
} }), mt = defineComponent({ name: "RepoLink", components: { BitbucketIcon: T, GiteeIcon: H$4, GitHubIcon: P$2, GitLabIcon: R$2, SourceIcon: B$1 }, setup() {
  const e2 = nt();
  return () => e2.value ? h$2("div", { class: "nav-item vp-repo" }, h$2("a", { class: "vp-repo-link", href: e2.value.link, target: "_blank", rel: "noopener noreferrer", "aria-label": e2.value.label }, h$2(resolveComponent(`${e2.value.type}Icon`), { style: { width: "1.25rem", height: "1.25rem", verticalAlign: "middle" } }))) : null;
} });
const ta = ({ active: e2 = false }, { emit: t2 }) => h$2("button", { type: "button", class: ["vp-toggle-navbar-button", { "is-active": e2 }], "aria-label": "Toggle Navbar", "aria-expanded": e2, "aria-controls": "nav-screen", onClick: () => t2("toggle") }, h$2("span", [h$2("span", { class: "vp-top" }), h$2("span", { class: "vp-middle" }), h$2("span", { class: "vp-bottom" })]));
ta.displayName = "ToggleNavbarButton";
var ht = ta;
const be$2 = (e2, { emit: t2 }) => h$2("button", { type: "button", class: "vp-toggle-sidebar-button", title: "Toggle Sidebar", onClick: () => t2("toggle") }, h$2("span", { class: "icon" }));
be$2.displayName = "ToggleSidebarButton", be$2.emits = ["toggle"];
var gt = be$2, ft = defineComponent({ name: "OutlookButton", setup() {
  const { isSupported: e2 } = useFullscreen(), t2 = e$1(), n2 = o$1(), l2 = usePageData(), { canToggle: s2 } = W$2(), r2 = ref(false), o2 = computed(() => !n2.value && t2.value.fullscreen && e2);
  return watch(() => l2.value.path, () => {
    r2.value = false;
  }), () => s2.value || o2.value || j$2 ? h$2("div", { class: "nav-item hide-in-mobile" }, s2.value && !o2.value && !j$2 ? h$2(Ze) : o2.value && !s2.value && !j$2 ? h$2(ea) : h$2("button", { type: "button", class: ["outlook-button", { open: r2.value }], tabindex: "-1", "aria-hidden": true }, [h$2(Qe$1), h$2("div", { class: "outlook-dropdown" }, h$2(aa))])) : null;
} }), bt = defineComponent({ name: "NavBar", emits: ["toggleSidebar"], slots: Object, setup(e2, { emit: t2, slots: n2 }) {
  const l2 = m$1(), { isMobile: s2 } = ee(), r2 = ref(false), o2 = computed(() => {
    const { navbarAutoHide: p2 = "mobile" } = l2.value;
    return p2 !== "none" && (p2 === "always" || s2.value);
  }), i2 = computed(() => l2.value.navbarLayout || { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }), v2 = { Brand: vt, Language: noopComponent, Links: dt, Repo: mt, Outlook: ft, Search: ve$1("Docsearch") ? resolveComponent("Docsearch") : ve$1("SearchBox") ? resolveComponent("SearchBox") : noopComponent }, c2 = (p2) => v2[p2] ?? (ve$1(p2) ? resolveComponent(p2) : noopComponent);
  return () => {
    var _a2, _b2, _c, _d, _e2, _f;
    return [h$2("header", { id: "navbar", class: ["vp-navbar", { "auto-hide": o2.value, "hide-icon": l2.value.navbarIcon === false }] }, [h$2("div", { class: "vp-navbar-start" }, [h$2(gt, { onToggle: () => {
      r2.value && (r2.value = false), t2("toggleSidebar");
    } }), (_a2 = n2.startBefore) == null ? void 0 : _a2.call(n2), (i2.value.start || []).map((p2) => h$2(c2(p2))), (_b2 = n2.startAfter) == null ? void 0 : _b2.call(n2)]), h$2("div", { class: "vp-navbar-center" }, [(_c = n2.centerBefore) == null ? void 0 : _c.call(n2), (i2.value.center || []).map((p2) => h$2(c2(p2))), (_d = n2.centerAfter) == null ? void 0 : _d.call(n2)]), h$2("div", { class: "vp-navbar-end" }, [(_e2 = n2.endBefore) == null ? void 0 : _e2.call(n2), (i2.value.end || []).map((p2) => h$2(c2(p2))), (_f = n2.endAfter) == null ? void 0 : _f.call(n2), h$2(ht, { active: r2.value, onToggle: () => {
      r2.value = !r2.value;
    } })])]), h$2(pt, { show: r2.value, onClose: () => {
      r2.value = false;
    } }, { before: () => {
      var _a3;
      return (_a3 = n2.screenTop) == null ? void 0 : _a3.call(n2);
    }, after: () => {
      var _a3;
      return (_a3 = n2.screenBottom) == null ? void 0 : _a3.call(n2);
    } })];
  };
} }), yt = defineComponent({ name: "SidebarChild", props: { config: { type: Object, required: true } }, setup(e2) {
  const t2 = useRoute();
  return () => [Re(e2.config, { class: ["vp-sidebar-link", `vp-sidebar-${e2.config.type}`, { active: H$1(t2, e2.config, true) }], exact: true }), He$1(e2.config.children)];
} }), kt = defineComponent({ name: "SidebarGroup", props: { config: { type: Object, required: true }, open: { type: Boolean, required: true } }, emits: ["toggle"], setup(e2, { emit: t2 }) {
  const n2 = useRoute(), l2 = computed(() => H$1(n2, e2.config)), s2 = computed(() => H$1(n2, e2.config, true));
  return () => {
    const { collapsible: r2, children: o2 = [], icon: i2, prefix: v2, link: c2, text: p2 } = e2.config;
    return h$2("section", { class: "vp-sidebar-group" }, [h$2(r2 ? "button" : "p", { class: ["vp-sidebar-heading", { clickable: r2 || c2, exact: s2.value, active: l2.value }], ...r2 ? { type: "button", onClick: () => t2("toggle"), onKeydown: (m2) => {
      m2.key === "Enter" && t2("toggle");
    } } : {} }, [h$2(z$1, { icon: i2 }), c2 ? h$2(S, { class: "vp-sidebar-title", config: { text: p2, link: c2 }, noExternalLinkIcon: true }) : h$2("span", { class: "vp-sidebar-title" }, p2), r2 ? h$2("span", { class: ["vp-arrow", e2.open ? "down" : "end"] }) : null]), e2.open || !r2 ? h$2(na, { key: v2, config: o2 }) : null]);
  };
} }), na = defineComponent({ name: "SidebarLinks", props: { config: { type: Array, required: true } }, setup(e2) {
  const t2 = useRoute(), n2 = ref(-1), l2 = (s2) => {
    n2.value = s2 === n2.value ? -1 : s2;
  };
  return watch(() => t2.path, () => {
    const s2 = e2.config.findIndex((r2) => Pe$1(t2, r2));
    n2.value = s2;
  }, { immediate: true, flush: "post" }), () => h$2("ul", { class: "vp-sidebar-links" }, e2.config.map((s2, r2) => h$2("li", s2.type === "group" ? h$2(kt, { config: s2, open: r2 === n2.value, onToggle: () => l2(r2) }) : h$2(yt, { config: s2 }))));
} }), wt = defineComponent({ name: "SideBar", slots: Object, setup(e2, { slots: t2 }) {
  const n2 = useRoute(), l2 = m$1(), s2 = ge$1(), r2 = shallowRef();
  return onMounted(() => {
    watch(() => n2.hash, (o2) => {
      const i2 = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n2.path}${o2}"]`);
      if (!i2)
        return;
      const { top: v2, height: c2 } = r2.value.getBoundingClientRect(), { top: p2, height: m2 } = i2.getBoundingClientRect();
      p2 < v2 ? i2.scrollIntoView(true) : p2 + m2 > v2 + c2 && i2.scrollIntoView(false);
    }, { immediate: true });
  }), () => {
    var _a2, _b2, _c;
    return h$2("aside", { ref: r2, id: "sidebar", class: ["vp-sidebar", { "hide-icon": l2.value.sidebarIcon === false }] }, [(_a2 = t2.top) == null ? void 0 : _a2.call(t2), ((_b2 = t2.default) == null ? void 0 : _b2.call(t2)) || h$2(na, { config: s2.value }), (_c = t2.bottom) == null ? void 0 : _c.call(t2)]);
  };
} }), It = defineComponent({ name: "CommonWrapper", props: { containerClass: { type: String, default: "" }, noNavbar: Boolean, noSidebar: Boolean, noToc: Boolean }, slots: Object, setup(e2, { slots: t2 }) {
  const n2 = useRouter(), l2 = usePageData(), s2 = usePageFrontmatter(), r2 = m$1(), { isMobile: o2, isPC: i2 } = ee(), [v2, c2] = useToggle(false), [p2, m2] = useToggle(false), y2 = ge$1(), b = ref(false), C2 = computed(() => e2.noNavbar || s2.value.navbar === false || r2.value.navbar === false ? false : !!(l2.value.title || r2.value.logo || r2.value.repo || r2.value.navbar)), F2 = computed(() => e2.noSidebar ? false : s2.value.sidebar !== false && y2.value.length !== 0 && !s2.value.home), k2 = computed(() => e2.noToc || s2.value.home ? false : s2.value.toc || r2.value.toc !== false && s2.value.toc !== false), w2 = { x: 0, y: 0 }, M2 = (f) => {
    w2.x = f.changedTouches[0].clientX, w2.y = f.changedTouches[0].clientY;
  }, U2 = (f) => {
    const q2 = f.changedTouches[0].clientX - w2.x, te2 = f.changedTouches[0].clientY - w2.y;
    Math.abs(q2) > Math.abs(te2) * 1.5 && Math.abs(q2) > 40 && (q2 > 0 && w2.x <= 80 ? c2(true) : c2(false));
  }, Y2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let O2 = 0;
  return useEventListener("scroll", useThrottleFn(() => {
    const f = Y2();
    f <= 58 || f < O2 ? b.value = false : O2 + 200 < f && !v2.value && (b.value = true), O2 = f;
  }, 300, true)), watch(o2, (f) => {
    f || c2(false);
  }), onMounted(() => {
    const f = useScrollLock(document.body);
    watch(v2, (te2) => {
      f.value = te2;
    });
    const q2 = n2.afterEach(() => {
      c2(false);
    });
    onUnmounted(() => {
      f.value = false, q2();
    });
  }), () => h$2(ve$1("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : J$2, () => h$2("div", { class: ["theme-container", { "no-navbar": !C2.value, "no-sidebar": !F2.value && !(t2.sidebar || t2.sidebarTop || t2.sidebarBottom), "has-toc": k2.value, "hide-navbar": b.value, "sidebar-collapsed": !o2.value && !i2.value && p2.value, "sidebar-open": o2.value && v2.value }, e2.containerClass, s2.value.containerClass || ""], onTouchStart: M2, onTouchEnd: U2 }, [C2.value ? h$2(bt, { onToggleSidebar: () => c2() }, { startBefore: () => {
    var _a2;
    return (_a2 = t2.navbarStartBefore) == null ? void 0 : _a2.call(t2);
  }, startAfter: () => {
    var _a2;
    return (_a2 = t2.navbarStartAfter) == null ? void 0 : _a2.call(t2);
  }, centerBefore: () => {
    var _a2;
    return (_a2 = t2.navbarCenterBefore) == null ? void 0 : _a2.call(t2);
  }, centerAfter: () => {
    var _a2;
    return (_a2 = t2.navbarCenterAfter) == null ? void 0 : _a2.call(t2);
  }, endBefore: () => {
    var _a2;
    return (_a2 = t2.navbarEndBefore) == null ? void 0 : _a2.call(t2);
  }, endAfter: () => {
    var _a2;
    return (_a2 = t2.navbarEndAfter) == null ? void 0 : _a2.call(t2);
  }, screenTop: () => {
    var _a2;
    return (_a2 = t2.navScreenTop) == null ? void 0 : _a2.call(t2);
  }, screenBottom: () => {
    var _a2;
    return (_a2 = t2.navScreenBottom) == null ? void 0 : _a2.call(t2);
  } }) : null, h$2(Transition, { name: "fade" }, () => v2.value ? h$2("div", { class: "vp-sidebar-mask", onClick: () => c2(false) }) : null), h$2(Transition, { name: "fade" }, () => o2.value ? null : h$2("div", { class: "toggle-sidebar-wrapper", onClick: () => m2() }, h$2("span", { class: ["arrow", p2.value ? "end" : "start"] }))), h$2(wt, {}, { ...t2.sidebar ? { default: () => t2.sidebar() } : {}, top: () => {
    var _a2;
    return (_a2 = t2.sidebarTop) == null ? void 0 : _a2.call(t2);
  }, bottom: () => {
    var _a2;
    return (_a2 = t2.sidebarBottom) == null ? void 0 : _a2.call(t2);
  } }), t2.default(), h$2(at)]));
} }), Lt = defineComponent({ name: "DropTransition", props: { type: { type: String, default: "single" }, delay: { type: Number, default: 0 }, duration: { type: Number, default: 0.25 }, appear: Boolean }, slots: Object, setup(e2, { slots: t2 }) {
  const n2 = (s2) => {
    s2.style.transition = `transform ${e2.duration}s ease-in-out ${e2.delay}s, opacity ${e2.duration}s ease-in-out ${e2.delay}s`, s2.style.transform = "translateY(-20px)", s2.style.opacity = "0";
  }, l2 = (s2) => {
    s2.style.transform = "translateY(0)", s2.style.opacity = "1";
  };
  return () => h$2(e2.type === "single" ? Transition : TransitionGroup, { name: "drop", appear: e2.appear, onAppear: n2, onAfterAppear: l2, onEnter: n2, onAfterEnter: l2, onBeforeLeave: n2 }, () => t2.default());
} });
const ye$2 = ({ custom: e2 }) => h$2(Content, { class: ["theme-hope-content", { custom: e2 }] });
ye$2.displayName = "MarkdownContent", ye$2.props = { custom: Boolean };
var Tt = ye$2;
const la = () => h$2(c$1, { name: "author" }, () => h$2("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
la.displayName = "AuthorIcon";
const oa = () => h$2(c$1, { name: "calendar" }, () => h$2("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
oa.displayName = "CalendarIcon";
const ra = () => h$2(c$1, { name: "category" }, () => h$2("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
ra.displayName = "CategoryIcon";
const sa = () => h$2(c$1, { name: "eye" }, () => h$2("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
sa.displayName = "EyeIcon";
const ia = () => h$2(c$1, { name: "fire" }, () => h$2("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
ia.displayName = "FireIcon";
const ca = () => h$2(c$1, { name: "print" }, () => h$2("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
ca.displayName = "PrintIcon";
const ua = () => h$2(c$1, { name: "tag" }, () => h$2("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
ua.displayName = "TagIcon";
const pa = () => h$2(c$1, { name: "timer" }, () => h$2("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
pa.displayName = "TimerIcon";
const va = () => h$2(c$1, { name: "word" }, () => [h$2("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h$2("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
va.displayName = "WordIcon";
const x = () => {
  const e2 = m$1();
  return computed(() => e2.value.metaLocales);
};
var St = defineComponent({ name: "AuthorInfo", inheritAttrs: false, props: { author: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const t2 = x();
  return () => e2.author.length ? h$2("span", { class: "page-author-info", "aria-label": `${t2.value.author}${e2.pure ? "" : "🖊"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(la), h$2("span", e2.author.map((n2) => n2.url ? h$2("a", { class: "page-author-item", href: n2.url, target: "_blank", rel: "noopener noreferrer" }, n2.name) : h$2("span", { class: "page-author-item" }, n2.name))), h$2("span", { property: "author", content: e2.author.map((n2) => n2.name).join(", ") })]) : null;
} }), Ct = defineComponent({ name: "CategoryInfo", inheritAttrs: false, props: { category: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const t2 = useRouter(), n2 = usePageData(), l2 = x(), s2 = (r2, o2 = "") => {
    o2 && n2.value.path !== o2 && (r2.preventDefault(), t2.push(o2));
  };
  return () => e2.category.length ? h$2("span", { class: "page-category-info", "aria-label": `${l2.value.category}${e2.pure ? "" : "🌈"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(ra), e2.category.map(({ name: r2, path: o2 }) => h$2("span", { class: ["page-category-item", { [`category${ae$1(r2, 9)}`]: !e2.pure, clickable: o2 }], role: o2 ? "navigation" : "", onClick: (i2) => s2(i2, o2) }, r2)), h$2("meta", { property: "articleSection", content: e2.category.map(({ name: r2 }) => r2).join(",") })]) : null;
} }), $t = defineComponent({ name: "DateInfo", inheritAttrs: false, props: { date: { type: Object, default: null }, localizedDate: { type: String, default: "" }, pure: Boolean }, setup(e2) {
  const t2 = usePageLang(), n2 = x();
  return () => e2.date ? h$2("span", { class: "page-date-info", "aria-label": `${n2.value.date}${e2.pure ? "" : "📅"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(oa), h$2("span", h$2(ClientOnly, () => e2.localizedDate || e2.date.toLocaleDateString(t2.value))), h$2("meta", { property: "datePublished", content: e2.date.toISOString() || "" })]) : null;
} }), xt = defineComponent({ name: "OriginalInfo", inheritAttrs: false, props: { isOriginal: Boolean }, setup(e2) {
  const t2 = x();
  return () => e2.isOriginal ? h$2("span", { class: "page-original-info" }, t2.value.origin) : null;
} });
defineComponent({ name: "PageViewInfo", inheritAttrs: false, props: { pageview: { type: [Boolean, String], default: false }, pure: Boolean }, setup(e2) {
  const t2 = useRoute(), n2 = x(), l2 = shallowRef(), s2 = ref(0);
  return useMutationObserver(l2, () => {
    const r2 = l2.value.textContent;
    r2 && !isNaN(Number(r2)) && (s2.value = Number(r2));
  }, { childList: true }), () => e2.pageview ? h$2("span", { class: "page-pageview-info", "aria-label": `${n2.value.views}${e2.pure ? "" : "🔢"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(s2.value < 1e3 ? sa : ia), h$2("span", { ref: l2, id: "ArtalkPV", class: "waline-pageview-count", "data-path": isString(e2.pageview) ? e2.pageview : t2.path }, "...")]) : null;
} });
var At = defineComponent({ name: "ReadingTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const t2 = x(), n2 = computed(() => {
    if (!e2.readingTime)
      return null;
    const { minutes: l2 } = e2.readingTime;
    return l2 < 1 ? "PT1M" : `PT${Math.round(l2)}M`;
  });
  return () => {
    var _a2, _b2;
    return ((_a2 = e2.readingTimeLocale) == null ? void 0 : _a2.time) ? h$2("span", { class: "page-reading-time-info", "aria-label": `${t2.value.readingTime}${e2.pure ? "" : "⌛"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(pa), h$2("span", (_b2 = e2.readingTimeLocale) == null ? void 0 : _b2.time), h$2("meta", { property: "timeRequired", content: n2.value })]) : null;
  };
} }), Bt = defineComponent({ name: "TagInfo", inheritAttrs: false, props: { tag: { type: Array, default: () => [] }, pure: Boolean }, setup(e2) {
  const t2 = useRouter(), n2 = usePageData(), l2 = x(), s2 = (r2, o2 = "") => {
    o2 && n2.value.path !== o2 && (r2.preventDefault(), t2.push(o2));
  };
  return () => e2.tag.length ? h$2("span", { class: "page-tag-info", "aria-label": `${l2.value.tag}${e2.pure ? "" : "🏷"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(ua), e2.tag.map(({ name: r2, path: o2 }) => h$2("span", { class: ["page-tag-item", { [`tag${ae$1(r2, 9)}`]: !e2.pure, clickable: o2 }], role: o2 ? "navigation" : "", onClick: (i2) => s2(i2, o2) }, r2)), h$2("meta", { property: "keywords", content: e2.tag.map(({ name: r2 }) => r2).join(",") })]) : null;
} }), Et = defineComponent({ name: "ReadTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const t2 = x();
  return () => {
    var _a2, _b2, _c;
    return ((_a2 = e2.readingTimeLocale) == null ? void 0 : _a2.words) ? h$2("span", { class: "page-word-info", "aria-label": `${t2.value.words}${e2.pure ? "" : "🔠"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$2(va), h$2("span", (_b2 = e2.readingTimeLocale) == null ? void 0 : _b2.words), h$2("meta", { property: "wordCount", content: (_c = e2.readingTime) == null ? void 0 : _c.words })]) : null;
  };
} }), Dt = defineComponent({ name: "PageInfo", components: { AuthorInfo: St, CategoryInfo: Ct, DateInfo: $t, OriginalInfo: xt, PageViewInfo: () => null, ReadingTimeInfo: At, TagInfo: Bt, WordInfo: Et }, props: { items: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"] }, info: { type: Object, required: true } }, setup(e2) {
  const t2 = o$1();
  return () => e2.items ? h$2("div", { class: "page-info" }, e2.items.map((n2) => h$2(resolveComponent(`${n2}Info`), { ...e2.info, pure: t2.value }))) : null;
} }), zt = defineComponent({ name: "PrintButton", setup() {
  const e2 = e$1(), t2 = m$1();
  return () => e2.value.print === false ? null : h$2("button", { type: "button", class: "print-button", title: t2.value.metaLocales.print, onClick: () => {
    window.print();
  } }, h$2(ca));
} });
const Nt = ({ title: e2, level: t2, slug: n2 }) => h$2(N$2, { to: `#${n2}`, class: ["toc-link", `level${t2}`] }, () => e2), ke$2 = (e2, t2) => {
  const n2 = useRoute();
  return e2.length && t2 > 0 ? h$2("ul", { class: "toc-list" }, e2.map((l2) => {
    const s2 = ke$2(l2.children, t2 - 1);
    return [h$2("li", { class: ["toc-item", { active: n2.hash === `#${l2.slug}` }] }, Nt(l2)), s2 ? h$2("li", s2) : null];
  })) : null;
};
var Vt = defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, slots: Object, setup(e2, { slots: t2 }) {
  const n2 = useRoute(), l2 = usePageData(), s2 = x(), r2 = shallowRef(), o2 = ref("-1.7rem"), i2 = (c2) => {
    var _a2;
    (_a2 = r2.value) == null ? void 0 : _a2.scrollTo({ top: c2, behavior: "smooth" });
  }, v2 = () => {
    if (r2.value) {
      const c2 = document.querySelector(".toc-item.active");
      c2 ? o2.value = `${c2.getBoundingClientRect().top - r2.value.getBoundingClientRect().top + r2.value.scrollTop}px` : o2.value = "-1.7rem";
    } else
      o2.value = "-1.7rem";
  };
  return onMounted(() => {
    watch(() => n2.hash, (c2) => {
      if (r2.value) {
        const p2 = document.querySelector(`#toc a.toc-link[href$="${c2}"]`);
        if (!p2)
          return;
        const { top: m2, height: y2 } = r2.value.getBoundingClientRect(), { top: b, height: C2 } = p2.getBoundingClientRect();
        b < m2 ? i2(r2.value.scrollTop + b - m2) : b + C2 > m2 + y2 && i2(r2.value.scrollTop + b + C2 - m2 - y2);
      }
    }), watch(() => n2.fullPath, v2, { flush: "post", immediate: true });
  }), () => {
    var _a2, _b2;
    const c2 = e2.items.length ? ke$2(e2.items, e2.headerDepth) : l2.value.headers ? ke$2(l2.value.headers, e2.headerDepth) : null;
    return c2 ? h$2("div", { class: "toc-place-holder" }, [h$2("aside", { id: "toc" }, [(_a2 = t2.before) == null ? void 0 : _a2.call(t2), h$2("div", { class: "toc-header" }, [s2.value.toc, h$2(zt)]), h$2("div", { class: "toc-wrapper", ref: r2 }, [c2, h$2("div", { class: "toc-marker", style: { top: o2.value } })]), (_b2 = t2.after) == null ? void 0 : _b2.call(t2)])]) : null;
  };
} }), Ot = defineComponent({ name: "SkipLink", props: { content: { type: String, default: "main-content" } }, setup(e2) {
  const t2 = usePageData(), n2 = m$1(), l2 = shallowRef(), s2 = ({ target: r2 }) => {
    const o2 = document.querySelector(r2.hash);
    if (o2) {
      const i2 = () => {
        o2.removeAttribute("tabindex"), o2.removeEventListener("blur", i2);
      };
      o2.setAttribute("tabindex", "-1"), o2.addEventListener("blur", i2), o2.focus(), window.scrollTo(0, 0);
    }
  };
  return onMounted(() => {
    watch(() => t2.value.path, () => l2.value.focus());
  }), () => [h$2("span", { ref: l2, tabindex: "-1" }), h$2("a", { href: `#${e2.content}`, class: "vp-skip-link sr-only", onClick: s2 }, n2.value.routeLocales.skipToContent)];
} });
let e = null, n = null;
const d$1 = { wait: () => e, pending: () => {
  e = new Promise((o2) => {
    n = o2;
  });
}, resolve: () => {
  n == null ? void 0 : n(), e = null, n = null;
} }, l = () => d$1;
var m = defineComponent({ name: "FadeSlideY", slots: Object, setup(o2, { slots: t2 }) {
  const { resolve: s2, pending: r2 } = l();
  return () => h$2(Transition, { name: "fade-slide-y", mode: "out-in", onBeforeEnter: s2, onBeforeLeave: r2 }, () => {
    var _a2;
    return (_a2 = t2.default) == null ? void 0 : _a2.call(t2);
  });
} });
const fe$1 = (i2, a2) => {
  const l2 = i2.replace(a2, "/").split("/"), t2 = [];
  let n2 = removeEndingSlash(a2);
  return l2.forEach((s2, r2) => {
    r2 !== l2.length - 1 ? (n2 += `${s2}/`, t2.push({ link: n2, name: s2 || "Home" })) : s2 !== "" && (n2 += s2, t2.push({ link: n2, name: s2 }));
  }), t2;
}, G$1 = (i2, { slots: a2 }) => {
  var _a2, _b2;
  const { bgImage: l2, bgImageDark: t2, bgImageStyle: n2, color: s2, description: r2, image: o2, imageDark: u2, header: c2, features: v2 = [] } = i2;
  return h$2("div", { class: "vp-feature-wrapper" }, [l2 ? h$2("div", { class: ["vp-feature-bg", { light: t2 }], style: [{ "background-image": `url(${l2})` }, n2] }) : null, t2 ? h$2("div", { class: "vp-feature-bg dark", style: [{ "background-image": `url(${t2})` }, n2] }) : null, h$2("div", { class: "vp-feature", style: s2 ? { color: s2 } : {} }, [((_a2 = a2.image) == null ? void 0 : _a2.call(a2, i2)) || [o2 ? h$2("img", { class: ["vp-feature-image", { light: u2 }], src: withBase(o2), alt: "" }) : null, u2 ? h$2("img", { class: "vp-feature-image dark", src: withBase(u2), alt: "" }) : null], ((_b2 = a2.info) == null ? void 0 : _b2.call(a2, i2)) || [c2 ? h$2("h2", { class: "vp-feature-header" }, c2) : null, r2 ? h$2("p", { class: "vp-feature-description", innerHTML: r2 }) : null], v2.length ? h$2("div", { class: "vp-features" }, v2.map(({ icon: p2, title: f, details: b, link: h2 }) => {
    const d2 = [h$2("h3", { class: "vp-feature-title" }, [h$2(z$1, { icon: p2 }), h$2("span", { innerHTML: f })]), h$2("p", { class: "vp-feature-details", innerHTML: b })];
    return h2 ? isLinkExternal(h2) ? h$2("a", { class: "vp-feature-item link", href: h2, "aria-label": f, target: "_blank" }, d2) : h$2(N$2, { class: "vp-feature-item link", to: h2, "aria-label": f }, () => d2) : h$2("div", { class: "vp-feature-item" }, d2);
  })) : null])]);
};
G$1.displayName = "FeaturePanel";
var U = G$1, be$1 = defineComponent({ name: "HeroInfo", slots: Object, setup(i2, { slots: a2 }) {
  const l2 = usePageFrontmatter(), t2 = useSiteLocaleData(), n2 = computed(() => l2.value.heroFullScreen ?? false), s2 = computed(() => {
    const { heroText: c2, tagline: v2 } = l2.value;
    return { text: c2 ?? t2.value.title ?? "Hello", tagline: v2 ?? t2.value.description ?? "", isFullScreen: n2.value };
  }), r2 = computed(() => {
    const { heroText: c2, heroImage: v2, heroImageDark: p2, heroAlt: f, heroImageStyle: b } = l2.value;
    return { image: v2 ? withBase(v2) : null, imageDark: p2 ? withBase(p2) : null, heroStyle: b, alt: f || c2 || "", isFullScreen: n2.value };
  }), o2 = computed(() => {
    const { bgImage: c2, bgImageDark: v2, bgImageStyle: p2 } = l2.value;
    return { image: isString(c2) ? withBase(c2) : null, imageDark: isString(v2) ? withBase(v2) : null, bgStyle: p2, isFullScreen: n2.value };
  }), u2 = computed(() => l2.value.actions ?? []);
  return () => {
    var _a2, _b2, _c;
    return h$2("header", { class: ["vp-hero-info-wrapper", { fullscreen: n2.value }] }, [((_a2 = a2.heroBg) == null ? void 0 : _a2.call(a2, o2.value)) || [o2.value.image ? h$2("div", { class: ["vp-hero-mask", { light: o2.value.imageDark }], style: [{ "background-image": `url(${o2.value.image})` }, o2.value.bgStyle] }) : null, o2.value.imageDark ? h$2("div", { class: "vp-hero-mask dark", style: [{ "background-image": `url(${o2.value.imageDark})` }, o2.value.bgStyle] }) : null], h$2("div", { class: "vp-hero-info" }, [((_b2 = a2.heroImage) == null ? void 0 : _b2.call(a2, r2.value)) || h$2(Lt, { appear: true, type: "group" }, () => [r2.value.image ? h$2("img", { key: "light", class: ["vp-hero-image", { light: r2.value.imageDark }], style: r2.value.heroStyle, src: r2.value.image, alt: r2.value.alt }) : null, r2.value.imageDark ? h$2("img", { key: "dark", class: "vp-hero-image dark", style: r2.value.heroStyle, src: r2.value.imageDark, alt: r2.value.alt }) : null]), ((_c = a2.heroInfo) == null ? void 0 : _c.call(a2, s2.value)) ?? h$2("div", { class: "vp-hero-infos" }, [s2.value.text ? h$2(Lt, { appear: true, delay: 0.04 }, () => h$2("h1", { id: "main-title" }, s2.value.text)) : null, s2.value.tagline ? h$2(Lt, { appear: true, delay: 0.08 }, () => h$2("p", { id: "main-description", innerHTML: s2.value.tagline })) : null, u2.value.length ? h$2(Lt, { appear: true, delay: 0.12 }, () => h$2("p", { class: "vp-hero-actions" }, u2.value.map((c2) => h$2(S, { class: ["vp-hero-action", c2.type || "default"], config: c2, noExternalLinkIcon: true }, c2.icon ? { before: () => h$2(z$1, { icon: c2.icon }) } : {})))) : null])])]);
  };
} });
const z = (i2, { slots: a2 }) => {
  var _a2, _b2, _c;
  const { bgImage: l2, bgImageDark: t2, bgImageStyle: n2, color: s2, description: r2, image: o2, imageDark: u2, header: c2, highlights: v2 = [], type: p2 = "un-order" } = i2;
  return h$2("div", { class: "vp-highlight-wrapper", style: s2 ? { color: s2 } : {} }, [l2 ? h$2("div", { class: ["vp-highlight-bg", { light: t2 }], style: [{ "background-image": `url(${l2})` }, n2] }) : null, t2 ? h$2("div", { class: "vp-highlight-bg dark", style: [{ "background-image": `url(${t2})` }, n2] }) : null, h$2("div", { class: "vp-highlight" }, [((_a2 = a2.image) == null ? void 0 : _a2.call(a2, i2)) || [o2 ? h$2("img", { class: ["vp-highlight-image", { light: u2 }], src: withBase(o2), alt: "" }) : null, u2 ? h$2("img", { class: "vp-highlight-image dark", src: withBase(u2), alt: "" }) : null], ((_b2 = a2.info) == null ? void 0 : _b2.call(a2, i2)) || [h$2("div", { class: "vp-highlight-info-wrapper" }, h$2("div", { class: "vp-highlight-info" }, [c2 ? h$2("h2", { class: "vp-highlight-header", innerHTML: c2 }) : null, r2 ? h$2("p", { class: "vp-highlight-description", innerHTML: r2 }) : null, ((_c = a2.highlights) == null ? void 0 : _c.call(a2, v2)) || h$2(p2 === "order" ? "ol" : p2 === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, v2.map(({ icon: f, title: b, details: h2, link: d2 }) => {
    const w2 = [h$2(p2 === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [f ? h$2(z$1, { class: "vp-highlight-icon", icon: f }) : null, h$2("span", { innerHTML: b })]), h2 ? h$2(p2 === "no-order" ? "dd" : "p", { class: "vp-highlight-details", innerHTML: h2 }) : null];
    return h$2(p2 === "no-order" ? "div" : "li", { class: ["vp-highlight-item-wrapper", { link: d2 }] }, d2 ? isLinkExternal(d2) ? h$2("a", { class: "vp-highlight-item link", href: d2, "aria-label": b, target: "_blank" }, w2) : h$2(N$2, { class: "vp-highlight-item link", to: d2, "aria-label": b }, () => w2) : h$2("div", { class: "vp-highlight-item" }, w2));
  }))]))]])]);
};
z.displayName = "HighlightPanel";
var ke$1 = z, ye$1 = defineComponent({ name: "HomePage", slots: Object, setup(i2, { slots: a2 }) {
  const l2 = o$1(), t2 = usePageFrontmatter(), n2 = computed(() => {
    const { features: r2 } = t2.value;
    return isArray(r2) ? r2 : null;
  }), s2 = computed(() => {
    const { highlights: r2 } = t2.value;
    return isArray(r2) ? r2 : null;
  });
  return () => {
    var _a2, _b2, _c, _d;
    return h$2("main", { id: "main-content", class: ["vp-project-home ", { pure: l2.value }], "aria-labelledby": t2.value.heroText === null ? "" : "main-title" }, [(_a2 = a2.top) == null ? void 0 : _a2.call(a2), h$2(be$1), ((_b2 = s2.value) == null ? void 0 : _b2.map((r2) => "features" in r2 ? h$2(U, r2) : h$2(ke$1, r2))) || (n2.value ? h$2(Lt, { appear: true, delay: 0.24 }, () => h$2(U, { features: n2.value })) : null), (_c = a2.center) == null ? void 0 : _c.call(a2), h$2(Lt, { appear: true, delay: 0.32 }, () => h$2(Tt)), (_d = a2.bottom) == null ? void 0 : _d.call(a2)]);
  };
} }), Le = defineComponent({ name: "BreadCrumb", setup() {
  const i2 = useRouter(), a2 = usePageData(), l2 = useRouteLocale(), t2 = usePageFrontmatter(), n2 = m$1(), s2 = shallowRef([]), r2 = computed(() => (t2.value.breadcrumb || t2.value.breadcrumb !== false && n2.value.breadcrumb !== false) && s2.value.length > 1), o2 = computed(() => t2.value.breadcrumbIcon || t2.value.breadcrumbIcon !== false && n2.value.breadcrumbIcon !== false), u2 = () => {
    const c2 = i2.getRoutes(), v2 = fe$1(a2.value.path, l2.value).map(({ link: p2, name: f }) => {
      const b = c2.find((h2) => h2.path === p2);
      if (b) {
        const { meta: h2, path: d2 } = h$1(i2, b.path);
        return { title: h2[N.shortTitle] || h2[N.title] || f, icon: h2[N.icon], path: d2 };
      }
      return null;
    }).filter((p2) => p2 !== null);
    v2.length > 1 && (s2.value = v2);
  };
  return onMounted(() => {
    watch(() => a2.value.path, u2, { immediate: true });
  }), () => h$2("nav", { class: ["vp-breadcrumb", { disable: !r2.value }] }, r2.value ? h$2("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, s2.value.map((c2, v2) => h$2("li", { class: { "is-active": s2.value.length - 1 === v2 }, property: "itemListElement", typeof: "ListItem" }, [h$2(N$2, { to: c2.path, property: "item", typeof: "WebPage" }, () => [o2.value ? h$2(z$1, { icon: c2.icon }) : null, h$2("span", { property: "name" }, c2.title || "Unknown")]), h$2("meta", { property: "position", content: v2 + 1 })]))) : []);
} });
const W$1 = (i2, a2) => a2 === false ? false : isString(a2) ? _$3(i2, a2, true) : isPlainObject(a2) ? a2 : null, A$1 = (i2, a2, l2) => {
  const t2 = i2.findIndex((n2) => n2.link === a2);
  if (t2 !== -1) {
    const n2 = i2[t2 + l2];
    return (n2 == null ? void 0 : n2.link) ? n2 : null;
  }
  for (const n2 of i2)
    if (n2.children) {
      const s2 = A$1(n2.children, a2, l2);
      if (s2)
        return s2;
    }
  return null;
};
var De = defineComponent({ name: "PageNav", setup() {
  const i2 = m$1(), a2 = usePageFrontmatter(), l2 = ge$1(), t2 = usePageData(), n2 = useRouter(), s2 = Fa(), r2 = computed(() => {
    const u2 = W$1(n2, a2.value.prev);
    return u2 === false ? null : u2 || (i2.value.prevLink === false ? null : A$1(l2.value, t2.value.path, -1));
  }), o2 = computed(() => {
    const u2 = W$1(n2, a2.value.next);
    return u2 === false ? null : u2 || (i2.value.nextLink === false ? null : A$1(l2.value, t2.value.path, 1));
  });
  return useEventListener("keydown", (u2) => {
    u2.altKey && (u2.key === "ArrowRight" ? o2.value && (s2(o2.value.link), u2.preventDefault()) : u2.key === "ArrowLeft" && r2.value && (s2(r2.value.link), u2.preventDefault()));
  }), () => r2.value || o2.value ? h$2("nav", { class: "vp-page-nav" }, [r2.value ? h$2(S, { class: "prev", config: r2.value }, () => {
    var _a2, _b2;
    return [h$2("div", { class: "hint" }, [h$2("span", { class: "arrow start" }), i2.value.metaLocales.prev]), h$2("div", { class: "link" }, [h$2(z$1, { icon: (_a2 = r2.value) == null ? void 0 : _a2.icon }), (_b2 = r2.value) == null ? void 0 : _b2.text])];
  }) : null, o2.value ? h$2(S, { class: "next", config: o2.value }, () => {
    var _a2, _b2;
    return [h$2("div", { class: "hint" }, [i2.value.metaLocales.next, h$2("span", { class: "arrow end" })]), h$2("div", { class: "link" }, [(_a2 = o2.value) == null ? void 0 : _a2.text, h$2(z$1, { icon: (_b2 = o2.value) == null ? void 0 : _b2.icon })])];
  }) : null]) : null;
} });
const Ie = { GitHub: ":repo/edit/:branch/:path", GitLab: ":repo/-/edit/:branch/:path", Gitee: ":repo/edit/:branch/:path", Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default" }, Se = ({ docsRepo: i2, docsBranch: a2, docsDir: l2, filePathRelative: t2, editLinkPattern: n2 }) => {
  if (!t2)
    return null;
  const s2 = ue$1(i2);
  let r2;
  return n2 ? r2 = n2 : s2 !== null && (r2 = Ie[s2]), r2 ? r2.replace(/:repo/u, isLinkHttp(i2) ? i2 : `https://github.com/${i2}`).replace(/:branch/u, a2).replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(l2)}/${t2}`)) : null;
}, $e = () => {
  const i2 = m$1(), a2 = usePageData(), l2 = usePageFrontmatter();
  return computed(() => {
    const { repo: t2, docsRepo: n2 = t2, docsBranch: s2 = "main", docsDir: r2 = "", editLink: o2, editLinkPattern: u2 = "" } = i2.value;
    if (!(l2.value.editLink ?? o2 ?? true) || !n2)
      return null;
    const c2 = Se({ docsRepo: n2, docsBranch: s2, docsDir: r2, editLinkPattern: u2, filePathRelative: a2.value.filePathRelative });
    return c2 ? { text: i2.value.metaLocales.editLink, link: c2 } : null;
  });
}, Pe = () => {
  const i2 = useSiteLocaleData(), a2 = m$1(), l2 = usePageData(), t2 = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    return !(t2.value.lastUpdated ?? a2.value.lastUpdated ?? true) || !((_a2 = l2.value.git) == null ? void 0 : _a2.updatedTime) ? null : new Date((_b2 = l2.value.git) == null ? void 0 : _b2.updatedTime).toLocaleString(i2.value.lang);
  });
}, we$1 = () => {
  const i2 = m$1(), a2 = usePageData(), l2 = usePageFrontmatter();
  return computed(() => {
    var _a2;
    return l2.value.contributors ?? i2.value.contributors ?? true ? ((_a2 = a2.value.git) == null ? void 0 : _a2.contributors) ?? null : null;
  });
};
var Te = defineComponent({ name: "PageTitle", setup() {
  const i2 = usePageData(), a2 = usePageFrontmatter(), l2 = m$1(), { info: t2, items: n2 } = Ua();
  return () => h$2("div", { class: "vp-page-title" }, [h$2("h1", [l2.value.titleIcon === false ? null : h$2(z$1, { icon: a2.value.icon }), i2.value.title]), h$2(Dt, { info: t2.value, ...n2.value === null ? {} : { items: n2.value } }), h$2("hr")]);
} });
const _$2 = () => h$2(c$1, { name: "edit" }, () => [h$2("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h$2("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
_$2.displayName = "EditIcon";
var Be = defineComponent({ name: "PageMeta", setup() {
  const i2 = m$1(), a2 = $e(), l2 = Pe(), t2 = we$1();
  return () => {
    const { metaLocales: n2 } = i2.value;
    return h$2("footer", { class: "page-meta" }, [a2.value ? h$2("div", { class: "meta-item edit-link" }, h$2(S, { class: "label", config: a2.value }, { before: () => h$2(_$2) })) : null, h$2("div", { class: "meta-item git-info" }, [l2.value ? h$2("div", { class: "update-time" }, [h$2("span", { class: "label" }, `${n2.lastUpdated}: `), h$2(ClientOnly, () => h$2("span", { class: "info" }, l2.value))]) : null, t2.value && t2.value.length ? h$2("div", { class: "contributors" }, [h$2("span", { class: "label" }, `${n2.contributors}: `), t2.value.map(({ email: s2, name: r2 }, o2) => [h$2("span", { class: "contributor", title: `email: ${s2}` }, r2), o2 !== t2.value.length - 1 ? "," : ""])]) : null])]);
  };
} }), xe$1 = defineComponent({ name: "NormalPage", slots: Object, setup(i2, { slots: a2 }) {
  const l2 = usePageFrontmatter(), { isDarkmode: t2 } = W$2(), n2 = m$1(), s2 = computed(() => l2.value.toc || l2.value.toc !== false && n2.value.toc !== false);
  return () => h$2("main", { id: "main-content", class: "vp-page" }, h$2(ve$1("LocalEncrypt") ? resolveComponent("LocalEncrypt") : J$2, () => {
    var _a2, _b2, _c, _d;
    return [(_a2 = a2.top) == null ? void 0 : _a2.call(a2), l2.value.cover ? h$2("div", { class: "page-cover" }, h$2("img", { src: withBase(l2.value.cover), alt: "", "no-view": "" })) : null, h$2(Le), h$2(Te), s2.value ? h$2(Vt, { headerDepth: l2.value.headerDepth ?? n2.value.headerDepth ?? 2 }, { before: () => {
      var _a3;
      return (_a3 = a2.tocBefore) == null ? void 0 : _a3.call(a2);
    }, after: () => {
      var _a3;
      return (_a3 = a2.tocAfter) == null ? void 0 : _a3.call(a2);
    } }) : null, (_b2 = a2.contentBefore) == null ? void 0 : _b2.call(a2), h$2(Tt), (_c = a2.contentAfter) == null ? void 0 : _c.call(a2), h$2(Be), h$2(De), ve$1("CommentService") ? h$2(resolveComponent("CommentService"), { darkmode: t2.value }) : null, (_d = a2.bottom) == null ? void 0 : _d.call(a2)];
  }));
} }), Ae = defineComponent({ name: "Layout", slots: Object, setup(i2, { slots: a2 }) {
  const l2 = e$1(), t2 = m$1(), n2 = usePageData(), s2 = usePageFrontmatter(), { isMobile: r2 } = ee(), o2 = computed(() => {
    var _a2, _b2;
    return ((_a2 = t2.value.blog) == null ? void 0 : _a2.sidebarDisplay) || ((_b2 = l2.value.blog) == null ? void 0 : _b2.sidebarDisplay) || "mobile";
  });
  return () => [h$2(Ot), h$2(It, {}, { default: () => {
    var _a2;
    return ((_a2 = a2.default) == null ? void 0 : _a2.call(a2)) || (s2.value.home ? h$2(ye$1) : h$2(m, () => h$2(xe$1, { key: n2.value.path }, { top: () => {
      var _a3;
      return (_a3 = a2.top) == null ? void 0 : _a3.call(a2);
    }, bottom: () => {
      var _a3;
      return (_a3 = a2.bottom) == null ? void 0 : _a3.call(a2);
    }, contentBefore: () => {
      var _a3;
      return (_a3 = a2.contentBefore) == null ? void 0 : _a3.call(a2);
    }, contentAfter: () => {
      var _a3;
      return (_a3 = a2.contentAfter) == null ? void 0 : _a3.call(a2);
    }, tocBefore: () => {
      var _a3;
      return (_a3 = a2.tocBefore) == null ? void 0 : _a3.call(a2);
    }, tocAfter: () => {
      var _a3;
      return (_a3 = a2.tocAfter) == null ? void 0 : _a3.call(a2);
    } })));
  }, ...o2.value === "none" ? {} : { navScreenBottom: () => h$2(resolveComponent("BloggerInfo")) }, ...!r2.value && o2.value === "always" ? { sidebar: () => h$2(resolveComponent("BloggerInfo")) } : {} })];
} }), He = defineComponent({ name: "NotFoundHint", setup() {
  const i2 = m$1(), a2 = () => {
    const l2 = i2.value.routeLocales.notFoundMsg;
    return l2[Math.floor(Math.random() * l2.length)];
  };
  return () => h$2("div", { class: "not-found-hint" }, [h$2("p", { class: "error-code" }, "404"), h$2("h1", { class: "error-title" }, i2.value.routeLocales.notFoundTitle), h$2("p", { class: "error-hint" }, a2())]);
} }), Me = defineComponent({ name: "NotFound", slots: Object, setup(i2, { slots: a2 }) {
  const l2 = useRouteLocale(), t2 = m$1(), { navigate: n2 } = useLink({ to: t2.value.home ?? l2.value });
  return () => [h$2(Ot), h$2(It, { noSidebar: true }, () => {
    var _a2;
    return h$2("main", { id: "main-content", class: "vp-page not-found" }, ((_a2 = a2.default) == null ? void 0 : _a2.call(a2)) || [h$2(He), h$2("div", { class: "actions" }, [h$2("button", { type: "button", class: "action-button", onClick: () => {
      window.history.go(-1);
    } }, t2.value.routeLocales.back), h$2("button", { type: "button", class: "action-button", onClick: () => n2() }, t2.value.routeLocales.home)])]);
  })];
} });
const icons = { "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "Useful Skills": { "path": "/category/useful-skills/", "keys": ["v-6f3cd246", "v-19144f4a", "v-327653c2", "v-7bc29e63", "v-8c8262f4", "v-5d6ace1c", "v-5a6c26be", "v-4fd75f66", "v-598ffdfd", "v-1b503f84", "v-1a499874", "v-153a8874", "v-519070c2", "v-6bb8daf5", "v-4dd815f7", "v-ea1b8e4a", "v-62801227"] }, "Download `.torrent` file under Fedora.md": { "path": "/category/download-_.torrent_-file-under-fedora.md/", "keys": ["v-6f3cd246"] }, "Fedora set display scale 150%(gnome).md": { "path": "/category/fedora-set-display-scale-150%25(gnome).md/", "keys": ["v-19144f4a"] }, "Git switch branches with modified files.md": { "path": "/category/git-switch-branches-with-modified-files.md/", "keys": ["v-327653c2"] }, "Joplin exits full screen in Linux.md": { "path": "/category/joplin-exits-full-screen-in-linux.md/", "keys": ["v-7bc29e63"] }, "Linux Trick! Create desktop entries for apps.md": { "path": "/category/linux-trick!-create-desktop-entries-for-apps.md/", "keys": ["v-8c8262f4"] }, "Open folder at terminal. Linux.md": { "path": "/category/open-folder-at-terminal.-linux.md/", "keys": ["v-5d6ace1c"] }, "Program executed by Linux Terminal has the same proxy with the terminal.md": { "path": "/category/program-executed-by-linux-terminal-has-the-same-proxy-with-the-terminal.md/", "keys": ["v-5a6c26be"] }, "Redirect terminal output to clipboard.md": { "path": "/category/redirect-terminal-output-to-clipboard.md/", "keys": ["v-4fd75f66"] }, "Set Bluetooth off as default at rebooting in Fedora.md": { "path": "/category/set-bluetooth-off-as-default-at-rebooting-in-fedora.md/", "keys": ["v-598ffdfd"] }, "Set default editor in Linux.md": { "path": "/category/set-default-editor-in-linux.md/", "keys": ["v-1b503f84"] }, "Typora+upgit+tcyun! upload img to imgbed.md": { "path": "/category/typora_upgit_tcyun!-upload-img-to-imgbed.md/", "keys": ["v-1a499874"] }, "Useful script sharing! easy git push.md": { "path": "/category/useful-script-sharing!-easy-git-push.md/", "keys": ["v-153a8874"] }, "Using ssh through SOCKS5 proxy.md": { "path": "/category/using-ssh-through-socks5-proxy.md/", "keys": ["v-519070c2"] }, "Vue Download failure about Ipv4 .md": { "path": "/category/vue-download-failure-about-ipv4-.md/", "keys": ["v-6bb8daf5"] }, "Watch a process with pid under Linux.md": { "path": "/category/watch-a-process-with-pid-under-linux.md/", "keys": ["v-4dd815f7"] }, "git push fatal! The remote end hung up unexpectedly.md": { "path": "/category/git-push-fatal!-the-remote-end-hung-up-unexpectedly.md/", "keys": ["v-ea1b8e4a"] }, "git rebase and git amend.md": { "path": "/category/git-rebase-and-git-amend.md/", "keys": ["v-62801227"] } } } }, "tag": { "/": { "path": "/tag/", "map": {} } } };
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-6f3cd246", "v-19144f4a", "v-327653c2", "v-7bc29e63", "v-8c8262f4", "v-5d6ace1c", "v-5a6c26be", "v-4fd75f66", "v-598ffdfd", "v-1b503f84", "v-1a499874", "v-153a8874", "v-519070c2", "v-6bb8daf5", "v-4dd815f7", "v-ea1b8e4a", "v-62801227", "v-184f4da6"] } }, "star": { "/": { "path": "/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-6f3cd246", "v-19144f4a", "v-327653c2", "v-7bc29e63", "v-8c8262f4", "v-5d6ace1c", "v-5a6c26be", "v-4fd75f66", "v-598ffdfd", "v-1b503f84", "v-1a499874", "v-153a8874", "v-519070c2", "v-6bb8daf5", "v-4dd815f7", "v-ea1b8e4a", "v-62801227", "v-184f4da6"] } } };
const M = shallowRef(categoryMap), _$1 = readonly(M), O$1 = (e2) => {
  const l2 = usePageData(), m2 = usePageFrontmatter(), u2 = useRouter(), s2 = useRouteLocale();
  return computed(() => {
    var _a2;
    const r2 = e2 ?? ((_a2 = m2.value.blog) == null ? void 0 : _a2.key) ?? "";
    if (!r2)
      return console.warn("useBlogCategory: key not found"), { path: "/", map: {} };
    const i2 = u2.getRoutes();
    if (!_$1.value[r2])
      throw new Error(`useBlogCategory: key ${r2} is invalid`);
    const p2 = _$1.value[r2][s2.value], o2 = { path: p2.path, map: {} };
    for (const a2 in p2.map) {
      const t2 = p2.map[a2];
      o2.map[a2] = { path: t2.path, items: [] };
      for (const T2 of t2.keys) {
        const f = i2.find(({ name: n2 }) => n2 === T2);
        if (f) {
          const n2 = h$1(u2, f.path);
          o2.map[a2].items.push({ path: n2.path, info: n2.meta });
        }
      }
      l2.value.path === t2.path && (o2.currentItems = o2.map[a2].items);
    }
    return o2;
  });
};
const d = shallowRef(typeMap), c = readonly(d), P$1 = (e2) => {
  const l2 = usePageFrontmatter(), m2 = useRouter(), u2 = useRouteLocale();
  return computed(() => {
    var _a2;
    const s2 = e2 ?? ((_a2 = l2.value.blog) == null ? void 0 : _a2.key) ?? "";
    if (!s2)
      return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!c.value[s2])
      throw new Error(`useBlogType: key ${e2} is invalid`);
    const r2 = m2.getRoutes(), i2 = c.value[s2][u2.value], p2 = { path: i2.path, items: [] };
    for (const o2 of i2.keys) {
      const a2 = r2.find(({ name: t2 }) => t2 === o2);
      if (a2) {
        const t2 = h$1(m2, a2.path);
        p2.items.push({ path: t2.path, info: t2.meta });
      }
    }
    return p2;
  });
};
const o = () => h$2(c$1, { name: "lock" }, () => h$2("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
o.displayName = "LockIcon";
var define_BLOG_TYPE_INFO_default = [];
const oe = Symbol.for("categoryMap"), A = () => {
  const a2 = inject(oe);
  if (!a2)
    throw new Error("useCategoryMap() is called without provider.");
  return a2;
}, Je = () => {
  const a2 = O$1("category");
  provide(oe, a2);
}, G = () => {
  const a2 = e$1(), t2 = m$1();
  return computed(() => ({ ...a2.value.blog, ...t2.value.blog }));
}, re2 = Symbol.for("tagMap"), V = () => {
  const a2 = inject(re2);
  if (!a2)
    throw new Error("useTagMap() is called without provider.");
  return a2;
}, Qe = () => {
  const a2 = O$1("tag");
  provide(re2, a2);
}, Xe = (a2) => {
  const t2 = m$1();
  return computed(() => {
    const { [N.author]: i2 } = a2.value;
    return i2 ? pe$1(i2) : i2 === false ? [] : pe$1(t2.value.author, false);
  });
}, e1 = (a2) => {
  const t2 = A();
  return computed(() => ge$2(a2.value[N.category]).map((i2) => ({ name: i2, path: t2.value.map[i2].path })));
}, a1 = (a2) => {
  const t2 = V();
  return computed(() => fe$3(a2.value[N.tag]).map((i2) => ({ name: i2, path: t2.value.map[i2].path })));
}, l1 = (a2) => computed(() => {
  const { [N.date]: t2 } = a2.value;
  return getDate(t2);
}), t1 = (a2) => {
  const t2 = toRef(a2, "info"), i2 = G(), r2 = Xe(t2), s2 = e1(t2), o2 = a1(t2), l2 = l1(t2), p2 = useReadingTimeLocaleConfig(), n2 = computed(() => ({ author: r2.value, category: s2.value, date: l2.value, localizedDate: t2.value[N.localizedDate] || "", tag: o2.value, isOriginal: t2.value[N.isOriginal] || false, readingTime: t2.value[N.readingTime] || null, readingTimeLocale: t2.value[N.readingTime] && p2.value ? getReadingTimeLocale(t2.value[N.readingTime], p2.value) : null, pageview: a2.path })), c2 = computed(() => i2.value.articleInfo);
  return { info: n2, items: c2 };
}, ne = Symbol(""), H = () => {
  const a2 = inject(ne);
  if (!a2)
    throw new Error("useArticles() is called without provider.");
  return a2;
}, i1 = () => {
  const a2 = P$1("article");
  provide(ne, a2);
}, ce = Symbol(""), _ = () => {
  const a2 = inject(ce);
  if (!a2)
    throw new Error("useStars() is called without provider.");
  return a2;
}, s1 = () => {
  const a2 = P$1("star");
  provide(ce, a2);
}, pe = Symbol(""), F = () => {
  const a2 = inject(pe);
  if (!a2)
    throw new Error("useTimelines() is called without provider.");
  return a2;
}, o1 = () => {
  const a2 = P$1("timeline"), t2 = computed(() => {
    const i2 = [];
    return a2.value.items.forEach(({ info: r2, path: s2 }) => {
      const o2 = getDate(r2[N.date]);
      if (o2) {
        const l2 = o2.getFullYear(), p2 = o2.getMonth() + 1, n2 = o2.getDate();
        (!i2[0] || i2[0].year !== l2) && i2.unshift({ year: l2, items: [] }), i2[0].items.push({ date: `${p2}/${n2}`, info: r2, path: s2 });
      }
    }), { ...a2.value, config: i2.reverse() };
  });
  provide(pe, t2);
}, r1 = () => {
  i1(), Je(), s1(), Qe(), o1();
};
var n1 = defineComponent({ name: "SocialMedia", setup() {
  const a2 = G(), t2 = o$1(), i2 = computed(() => {
    const r2 = a2.value.medias;
    return r2 ? entries(r2).map(([s2, o2]) => ({ name: s2, icon: icons[s2], url: o2 })) : [];
  });
  return () => i2.value.length ? h$2("div", { class: "vp-social-medias" }, i2.value.map(({ name: r2, icon: s2, url: o2 }) => h$2("a", { class: "vp-social-media", href: o2, rel: "noopener noreferrer", target: "_blank", "aria-label": r2, ...t2.value ? {} : { "data-balloon-pos": "up" }, innerHTML: s2 }))) : null;
} }), R$1 = defineComponent({ name: "BloggerInfo", setup() {
  const a2 = G(), t2 = useSiteLocaleData(), i2 = m$1(), r2 = H(), s2 = A(), o2 = V(), l2 = F(), p2 = Fa(), n2 = computed(() => {
    var _a2;
    return a2.value.name || ((_a2 = pe$1(i2.value.author)[0]) == null ? void 0 : _a2.name) || t2.value.title;
  }), c2 = computed(() => a2.value.avatar || i2.value.logo), m2 = computed(() => i2.value.blogLocales), f = computed(() => a2.value.intro);
  return () => {
    const { article: x2, category: d2, tag: b, timeline: M2 } = m2.value, C2 = [[r2.value.path, r2.value.items.length, x2], [s2.value.path, keys(s2.value.map).length, d2], [o2.value.path, keys(o2.value.map).length, b], [l2.value.path, l2.value.items.length, M2]];
    return h$2("div", { class: "vp-blogger-info", vocab: "https://schema.org/", typeof: "Person" }, [h$2("div", { class: "vp-blogger", ...f.value ? { style: { cursor: "pointer" }, "aria-label": m2.value.intro, "data-balloon-pos": "down", role: "link", onClick: () => p2(f.value) } : {} }, [c2.value ? h$2("img", { class: ["vp-blogger-avatar", { round: a2.value.roundAvatar }], src: withBase(c2.value), property: "image", alt: "Blogger Avatar", loading: "lazy" }) : null, n2.value ? h$2("div", { class: "vp-blogger-name", property: "name" }, n2.value) : null, a2.value.description ? h$2("div", { class: "vp-blogger-description", innerHTML: a2.value.description }) : null, f.value ? h$2("meta", { property: "url", content: withBase(f.value) }) : null]), h$2("div", { class: "vp-blog-counts" }, C2.map(([S2, Me2, Se2]) => h$2(N$2, { class: "vp-blog-count", to: S2 }, () => [h$2("div", { class: "count" }, Me2), h$2("div", Se2)]))), h$2(n1)]);
  };
} });
const W = () => h$2(c$1, { name: "category" }, () => h$2("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
W.displayName = "CategoryIcon";
const Y = () => h$2(c$1, { name: "tag" }, () => h$2("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
Y.displayName = "TagIcon";
const Z = () => h$2(c$1, { name: "timeline" }, () => h$2("path", { d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0" }));
Z.displayName = "TimelineIcon";
const ue = () => h$2(c$1, { name: "slides" }, () => h$2("path", { d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z" }));
ue.displayName = "SlideIcon";
const ve = () => h$2(c$1, { name: "sticky" }, () => [h$2("path", { d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z" })]);
ve.displayName = "StickyIcon";
const D$1 = () => h$2(c$1, { name: "article" }, () => h$2("path", { d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z" }));
D$1.displayName = "ArticleIcon";
const de = () => h$2(c$1, { name: "book" }, () => h$2("path", { d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z" }));
de.displayName = "BookIcon";
const me = () => h$2(c$1, { name: "link" }, () => h$2("path", { d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z" }));
me.displayName = "LinkIcon";
const fe = () => h$2(c$1, { name: "project" }, () => h$2("path", { d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z" }));
fe.displayName = "ProjectIcon";
const ge = () => h$2(c$1, { name: "friend" }, () => h$2("path", { d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z" }));
ge.displayName = "FriendIcon";
const K = () => h$2(c$1, { name: "slide-down" }, () => h$2("path", { d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z" }));
K.displayName = "SlideDownIcon";
const ye = () => h$2("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", class: "empty-icon", viewBox: "0 0 1024 1024", innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>' });
ye.displayName = "EmptyIcon";
var c1 = defineComponent({ name: "ArticleItem", props: { info: { type: Object, required: true }, path: { type: String, required: true } }, slots: Object, setup(a2, { slots: t2 }) {
  const i2 = toRef(a2, "info"), { info: r2, items: s2 } = t1(a2);
  return () => {
    var _a2, _b2, _c;
    const { [N.title]: o$12, [N.type]: l2, [N.isEncrypted]: p2 = false, [N.cover]: n2, [N.excerpt]: c2, [N.sticky]: m2 } = i2.value, f = r2.value;
    return h$2("div", { class: "vp-article-wrapper" }, h$2("article", { class: "vp-article-item", vocab: "https://schema.org/", typeof: "Article" }, [((_a2 = t2.cover) == null ? void 0 : _a2.call(t2, { cover: n2 })) || (n2 ? [h$2("img", { class: "vp-article-cover", src: withBase(n2), loading: "lazy" }), h$2("meta", { property: "image", content: withBase(n2) })] : []), m2 ? h$2(ve) : null, h$2(N$2, { to: a2.path }, () => {
      var _a3;
      return ((_a3 = t2.title) == null ? void 0 : _a3.call(t2, { title: o$12, isEncrypted: p2, type: l2 })) || h$2("header", { class: "vp-article-title" }, [p2 ? h$2(o) : null, l2 === _e.slide ? h$2(ue) : null, h$2("span", { property: "headline" }, o$12)]);
    }), ((_b2 = t2.excerpt) == null ? void 0 : _b2.call(t2, { excerpt: c2 })) || (c2 ? h$2("div", { class: "vp-article-excerpt", innerHTML: c2 }) : null), h$2("hr", { class: "vp-article-hr" }), ((_c = t2.info) == null ? void 0 : _c.call(t2, { info: f })) || h$2(Dt, { info: f, ...s2.value ? { items: s2.value } : {} })]));
  };
} }), p1 = defineComponent({ name: "Pagination", props: { total: { type: Number, default: 10 }, perPage: { type: Number, default: 10 }, current: { type: Number, default: 1 } }, emits: ["updateCurrentPage"], setup(a2, { emit: t2 }) {
  let i2;
  const r2 = m$1(), s2 = ref(""), o2 = computed(() => r2.value.paginationLocales), l2 = computed(() => Math.ceil(a2.total / a2.perPage)), p2 = computed(() => !!l2.value && l2.value !== 1), n2 = computed(() => l2.value < 7 ? false : a2.current > 4), c2 = computed(() => l2.value < 7 ? false : a2.current < l2.value - 3), m2 = computed(() => {
    const { current: d2 } = a2;
    let b = 1, M2 = l2.value;
    const C2 = [];
    l2.value >= 7 && (d2 <= 4 && d2 < l2.value - 3 ? (b = 1, M2 = 5) : d2 > 4 && d2 >= l2.value - 3 ? (M2 = l2.value, b = l2.value - 4) : l2.value > 7 && (b = d2 - 2, M2 = d2 + 2));
    for (let S2 = b; S2 <= M2; S2++)
      C2.push(S2);
    return C2;
  }), f = (d2) => t2("updateCurrentPage", d2), x2 = (d2) => {
    const b = parseInt(d2, 10);
    b <= l2.value && b > 0 ? f(b) : i2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o2.value.errorText.replace(/\$page/gu, l2.value.toString())}`);
  };
  return onMounted(() => {
    i2 = new re$1();
  }), () => h$2("div", { class: "vp-pagination" }, p2.value ? h$2("nav", { class: "vp-pagination-list" }, [h$2("div", { class: "vp-pagination-number " }, [a2.current > 1 ? h$2("div", { class: "prev", role: "navigation", unselectable: "on", onClick: () => f(a2.current - 1) }, o2.value.prev) : null, n2.value ? [h$2("div", { role: "navigation", onClick: () => f(1) }, 1), h$2("div", { class: "ellipsis" }, "...")] : null, m2.value.map((d2) => h$2("div", { key: d2, class: { active: a2.current === d2 }, role: "navigation", onClick: () => f(d2) }, d2)), c2.value ? [h$2("div", { class: "ellipsis" }, "..."), h$2("div", { role: "navigation", onClick: () => f(l2.value) }, l2.value)] : null, a2.current < l2.value ? h$2("div", { class: "next", role: "navigation", unselectable: "on", onClick: () => f(a2.current + 1) }, o2.value.next) : null]), h$2("div", { class: "vp-pagination-nav" }, [h$2("label", { for: "navigation-text" }, `${o2.value.navigate}: `), h$2("input", { id: "navigation-text", value: s2.value, onInput: ({ target: d2 }) => {
    s2.value = d2.value;
  }, onKeydown: (d2) => {
    d2.key === "Enter" && (d2.preventDefault(), x2(s2.value));
  } }), h$2("button", { class: "vp-pagination-button", role: "navigation", title: o2.value.action, onClick: () => x2(s2.value) }, o2.value.action)])]) : []);
} }), J = defineComponent({ name: "ArticleList", props: { items: { type: Array, default: () => [] } }, setup(a2) {
  const t2 = useRoute(), i2 = useRouter(), r2 = G(), s2 = ref(1), o2 = computed(() => r2.value.articlePerPage || 10), l2 = computed(() => a2.items.slice((s2.value - 1) * o2.value, s2.value * o2.value)), p2 = async (n2) => {
    s2.value = n2;
    const c2 = { ...t2.query };
    if (!(c2.page === n2.toString() || n2 === 1 && !c2.page) && (n2 === 1 ? delete c2.page : c2.page = n2.toString(), await i2.push({ path: t2.path, query: c2 })), false)
      ;
  };
  return onMounted(() => {
    const { page: n2 } = t2.query;
    p2(n2 ? Number(n2) : 1), watch(s2, () => {
      const c2 = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, c2);
      }, 100);
    });
  }), () => h$2("div", { id: "article-list", class: "vp-article-list", role: "feed" }, l2.value.length ? [...l2.value.map(({ info: n2, path: c2 }, m2) => h$2(Lt, { appear: true, delay: m2 * 0.04 }, () => h$2(c1, { key: c2, info: n2, path: c2 }))), h$2(p1, { current: s2.value, perPage: o2.value, total: a2.items.length, onUpdateCurrentPage: p2 })] : h$2(ye));
} }), he = defineComponent({ name: "CategoryList", setup() {
  const a2 = usePageData(), t2 = A();
  return () => h$2("ul", { class: "vp-category-list" }, entries(t2.value.map).sort(([, i2], [, r2]) => r2.items.length - i2.items.length).map(([i2, { path: r2, items: s2 }]) => h$2("li", { class: ["vp-category", `vp-category${ae$1(i2, 9)}`, { active: r2 === a2.value.path }] }, h$2(N$2, { to: r2 }, () => [i2, h$2("span", { class: "count" }, s2.length)]))));
} }), be = defineComponent({ name: "TagList", setup() {
  const a2 = usePageFrontmatter(), t2 = V(), i2 = (r2) => {
    var _a2;
    return r2 === ((_a2 = a2.value.blog) == null ? void 0 : _a2.name);
  };
  return () => h$2("ul", { class: "tag-list-wrapper" }, entries(t2.value.map).sort(([, r2], [, s2]) => s2.items.length - r2.items.length).map(([r2, { path: s2, items: o2 }]) => h$2("li", { class: ["tag", `tag${ae$1(r2, 9)}`, { active: i2(r2) }] }, h$2(N$2, { to: s2 }, () => [r2, h$2("span", { class: "tag-num" }, o2.length)]))));
} }), u1 = defineComponent({ name: "TimelineList", setup() {
  const a2 = m$1(), t2 = F(), i2 = Fa(), r2 = computed(() => a2.value.blogLocales.timeline);
  return () => h$2("div", { class: "timeline-list-wrapper" }, [h$2("div", { class: "timeline-list-title", onClick: () => i2(t2.value.path) }, [h$2(Z), h$2("span", { class: "num" }, t2.value.items.length), r2.value]), h$2("hr"), h$2("div", { class: "timeline-content" }, h$2("ul", { class: "timeline-list" }, t2.value.config.map(({ year: s2, items: o2 }, l2) => h$2(Lt, { appear: true, delay: 0.08 * (l2 + 1) }, () => h$2("li", [h$2("h3", { class: "timeline-year" }, s2), h$2("ul", { class: "timeline-year-wrapper" }, o2.map(({ date: p2, info: n2, path: c2 }) => h$2("li", { class: "timeline-item" }, [h$2("span", { class: "timeline-date" }, p2), h$2(N$2, { class: "timeline-title", to: c2 }, () => n2[N.title])])))])))))]);
} });
const v1 = { article: D$1, category: W, tag: Y, timeline: Z };
var ke = defineComponent({ name: "InfoList", setup() {
  const a2 = m$1(), t2 = H(), i2 = A(), r2 = computed(() => keys(i2.value.map).length), s2 = _(), o2 = V(), l2 = computed(() => keys(o2.value.map).length), p2 = Fa(), n2 = ref("article"), c2 = computed(() => a2.value.blogLocales);
  return () => h$2("div", { class: "vp-blog-infos" }, [h$2("div", { class: "vp-blog-type-switcher" }, entries(v1).map(([m2, f]) => h$2("button", { type: "button", class: "vp-blog-type-button", onClick: () => {
    n2.value = m2;
  } }, h$2("div", { class: ["icon-wrapper", { active: n2.value === m2 }], "aria-label": c2.value[m2], "data-balloon-pos": "up" }, h$2(f))))), h$2(Lt, () => n2.value === "article" ? h$2("div", { class: "vp-star-article-wrapper" }, [h$2("div", { class: "title", onClick: () => p2(t2.value.path) }, [h$2(D$1), h$2("span", { class: "num" }, t2.value.items.length), c2.value.article]), h$2("hr"), s2.value.items.length ? h$2("ul", { class: "vp-star-articles" }, s2.value.items.map(({ info: m2, path: f }, x2) => h$2(Lt, { appear: true, delay: 0.08 * (x2 + 1) }, () => h$2("li", { class: "vp-star-article" }, h$2(N$2, { to: f }, () => m2[N.title]))))) : h$2("div", { class: "vp-star-article-empty" }, c2.value.empty.replace("$text", c2.value.star))]) : n2.value === "category" ? h$2("div", { class: "vp-category-wrapper" }, [r2.value ? [h$2("div", { class: "title", onClick: () => p2(i2.value.path) }, [h$2(W), h$2("span", { class: "num" }, r2.value), c2.value.category]), h$2("hr"), h$2(Lt, { delay: 0.04 }, () => h$2(he))] : h$2("div", { class: "vp-category-empty" }, c2.value.empty.replace("$text", c2.value.category))]) : n2.value === "tag" ? h$2("div", { class: "vp-tag-wrapper" }, [l2.value ? [h$2("div", { class: "title", onClick: () => p2(o2.value.path) }, [h$2(Y), h$2("span", { class: "num" }, l2.value), c2.value.tag]), h$2("hr"), h$2(Lt, { delay: 0.04 }, () => h$2(be))] : h$2("div", { class: "vp-tag-empty" }, c2.value.empty.replace("$text", c2.value.tag))]) : h$2(Lt, () => h$2(u1)))]);
} }), O = defineComponent({ name: "BlogWrapper", slots: Object, setup(a2, { slots: t2 }) {
  const { isMobile: i2 } = ee();
  return () => [h$2(Ot), h$2(It, { noSidebar: true, noToc: true }, { default: () => t2.default(), navScreenBottom: () => h$2(R$1), ...i2.value ? { sidebar: () => h$2(ke) } : {} })];
} });
const xe = () => h$2("aside", { class: "vp-blog-info-wrapper" }, [h$2(Lt, () => h$2(R$1)), h$2(Lt, { delay: 0.04 }, () => h$2(ke))]);
xe.displayName = "InfoPanel";
var j$1 = xe, d1 = defineComponent({ name: "BlogPage", setup() {
  const a2 = usePageData(), t2 = usePageFrontmatter(), i2 = A(), r2 = V();
  return () => {
    const { key: s2 = "", name: o2 = "" } = t2.value.blog || {}, l2 = o2 ? s2 === "category" ? i2.value.map[o2].items : s2 === "tag" ? r2.value.map[o2].items : [] : [];
    return h$2(O, () => h$2("div", { class: "vp-page vp-blog" }, h$2("div", { class: "blog-page-wrapper" }, [h$2("main", { id: "main-content", class: "vp-blog-main" }, [h$2(Lt, () => s2 === "category" ? h$2(he) : s2 === "tag" ? h$2(be) : null), o2 ? h$2(Lt, { appear: true, delay: 0.24 }, () => h$2(J, { key: a2.value.path, items: l2 })) : null]), h$2(Lt, { delay: 0.16 }, () => h$2(j$1, { key: "blog" }))])));
  };
} });
const m1 = "//theme-hope-assets.vuejs.press/hero/default.jpg";
var f1 = defineComponent({ name: "BlogHero", slots: Object, setup(a2, { slots: t2 }) {
  const i2 = usePageFrontmatter(), r2 = useSiteLocaleData(), s2 = shallowRef(), o2 = computed(() => i2.value.heroFullScreen ?? false), l2 = computed(() => {
    const { heroText: n2, heroImage: c2, heroImageDark: m2, heroAlt: f, heroImageStyle: x2, tagline: d2 } = i2.value;
    return { text: n2 ?? r2.value.title ?? "Hello", image: c2 ? withBase(c2) : null, imageDark: m2 ? withBase(m2) : null, heroStyle: x2, alt: f || n2 || "", tagline: d2 ?? "", isFullScreen: o2.value };
  }), p2 = computed(() => {
    const { bgImage: n2, bgImageDark: c2, bgImageStyle: m2 } = i2.value;
    return { image: isString(n2) ? withBase(n2) : n2 === false ? null : m1, imageDark: isString(c2) ? withBase(c2) : null, bgStyle: m2, isFullScreen: o2.value };
  });
  return () => {
    var _a2, _b2;
    return i2.value.hero === false ? null : h$2("div", { ref: s2, class: ["vp-blog-hero", { fullscreen: o2.value, "no-bg": !p2.value.image }] }, [((_a2 = t2.heroBg) == null ? void 0 : _a2.call(t2, p2.value)) || [p2.value.image ? h$2("div", { class: ["vp-blog-mask", { light: p2.value.imageDark }], style: [{ background: `url(${p2.value.image}) center/cover no-repeat` }, p2.value.bgStyle] }) : null, p2.value.imageDark ? h$2("div", { class: "vp-blog-mask dark", style: [{ background: `url(${p2.value.imageDark}) center/cover no-repeat` }, p2.value.bgStyle] }) : null], ((_b2 = t2.heroInfo) == null ? void 0 : _b2.call(t2, l2.value)) || [h$2(Lt, { appear: true, type: "group", delay: 0.04 }, () => [l2.value.image ? h$2("img", { key: "light", class: ["vp-blog-hero-image", { light: l2.value.imageDark }], style: l2.value.heroStyle, src: l2.value.image, alt: l2.value.alt }) : null, l2.value.imageDark ? h$2("img", { key: "dark", class: "vp-blog-hero-image dark", style: l2.value.heroStyle, src: l2.value.imageDark, alt: l2.value.alt }) : null]), h$2(Lt, { appear: true, delay: 0.08 }, () => l2.value.text ? h$2("h1", { class: "vp-blog-hero-title" }, l2.value.text) : null), h$2(Lt, { appear: true, delay: 0.12 }, () => l2.value.tagline ? h$2("p", { class: "vp-blog-hero-description", innerHTML: l2.value.tagline }) : null)], l2.value.isFullScreen ? h$2("button", { type: "button", class: "slide-down-button", onClick: () => {
      window.scrollTo({ top: s2.value.clientHeight, behavior: "smooth" });
    } }, [h$2(K), h$2(K)]) : null]);
  };
} });
const g1 = ["link", "article", "book", "project", "friend"];
var y1 = defineComponent({ name: "ProjectPanel", components: { ArticleIcon: D$1, BookIcon: de, FriendIcon: ge, LinkIcon: me, ProjectIcon: fe }, props: { items: { type: Array, required: true } }, setup(a2) {
  const t2 = o$1(), i2 = Fa(), r2 = (s2 = "", o2 = "icon") => g1.includes(s2) ? h$2(resolveComponent(`${s2}-icon`)) : isLinkHttp(s2) ? h$2("img", { class: "vp-project-image", src: s2, alt: o2 }) : isLinkAbsolute(s2) ? h$2("img", { class: "vp-project-image", src: withBase(s2), alt: o2 }) : h$2(z$1, { icon: s2 });
  return () => h$2("div", { class: "vp-project-panel" }, a2.items.map(({ icon: s2, link: o2, name: l2, desc: p2 }, n2) => h$2("div", { class: ["vp-project-card", { [`project${n2 % 9}`]: !t2.value }], onClick: () => i2(o2) }, [r2(s2, l2), h$2("div", { class: "vp-project-name" }, l2), h$2("div", { class: "vp-project-desc" }, p2)])));
} }), h1 = defineComponent({ name: "BlogHome", setup() {
  const a2 = H(), t2 = usePageFrontmatter(), i2 = computed(() => t2.value.projects ?? []);
  return () => h$2("div", { class: "vp-page vp-blog" }, [h$2(f1), h$2("div", { class: "blog-page-wrapper" }, [h$2("main", { id: "main-content", class: "vp-blog-main" }, [i2.value.length ? h$2(Lt, { appear: true, delay: 0.16 }, () => h$2(y1, { items: i2.value })) : null, h$2(Lt, { appear: true, delay: 0.24 }, () => h$2(J, { items: a2.value.items }))]), h$2(Lt, { appear: true, delay: 0.16 }, () => h$2(j$1, { key: "blog" }))]), h$2(Lt, { appear: true, delay: 0.28 }, () => h$2(Tt))]);
} });
const ze = () => h$2(O, () => h$2(h1));
ze.displayName = "BlogHomeLayout";
var b1 = ze, k1 = defineComponent({ name: "ArticleType", setup() {
  const a2 = usePageData(), t2 = useRouteLocale(), i2 = m$1(), r2 = H(), s2 = _(), o2 = computed(() => {
    const l2 = i2.value.blogLocales;
    return [{ text: l2.all, path: r2.value.path }, { text: l2.star, path: s2.value.path }, ...define_BLOG_TYPE_INFO_default.map(({ key: p2, path: n2 }) => ({ text: l2[p2], path: n2.replace(/^\//, t2.value) }))];
  });
  return () => h$2("ul", { class: "vp-article-type-wrapper" }, o2.value.map((l2) => h$2("li", { class: ["vp-article-type", { active: l2.path === a2.value.path }] }, h$2(N$2, { to: l2.path }, () => l2.text))));
} }), x1 = defineComponent({ name: "BlogPage", setup() {
  const a2 = P$1(), t2 = usePageFrontmatter(), i2 = usePageData(), r2 = H(), s2 = _(), o2 = computed(() => {
    const { key: l2 = "", type: p2 } = t2.value.blog || {};
    return l2 === "star" ? s2.value.items : p2 === "type" && l2 ? a2.value.items : r2.value.items;
  });
  return () => h$2(O, () => h$2("div", { class: "vp-page vp-blog" }, h$2("div", { class: "blog-page-wrapper" }, [h$2("main", { id: "main-content", class: "vp-blog-main" }, [h$2(Lt, () => h$2(k1)), h$2(Lt, { appear: true, delay: 0.24 }, () => h$2(J, { key: i2.value.path, items: o2.value }))]), h$2(Lt, { delay: 0.16 }, () => h$2(j$1, { key: "blog" }))])));
} }), z1 = defineComponent({ name: "TimelineItems", setup() {
  const a2 = G(), t2 = m$1(), i2 = F(), r2 = computed(() => a2.value.timeline || t2.value.blogLocales.timelineTitle), s2 = computed(() => i2.value.config.map(({ year: o2 }) => ({ title: o2.toString(), level: 2, slug: o2.toString(), children: [] })));
  return () => h$2("div", { class: "timeline-wrapper" }, h$2("ul", { class: "timeline-content" }, [h$2(Lt, () => h$2("li", { class: "motto" }, r2.value)), h$2(Vt, { items: s2.value }), i2.value.config.map(({ year: o2, items: l2 }, p2) => h$2(Lt, { appear: true, delay: 0.08 * (p2 + 1), type: "group" }, () => [h$2("h3", { key: "title", id: o2, class: "timeline-year-title" }, h$2("span", o2)), h$2("li", { key: "content", class: "timeline-year-list" }, [h$2("ul", { class: "timeline-year-wrapper" }, l2.map(({ date: n2, info: c2, path: m2 }) => h$2("li", { class: "timeline-item" }, [h$2("span", { class: "timeline-date" }, n2), h$2(N$2, { class: "timeline-title", to: m2 }, () => c2[N.title])])))])]))]));
} });
const we = () => h$2(O, () => h$2("div", { class: "vp-page vp-blog" }, h$2("div", { class: "blog-page-wrapper" }, [h$2("main", { id: "main-content", class: "vp-blog-main" }, [h$2(Lt, { appear: true, delay: 0.24 }, () => h$2(z1))]), h$2(Lt, { delay: 0.16 }, () => h$2(j$1, { key: "blog" }))])));
we.displayName = "Timeline";
var w1 = we;
var g = defineComponent({ name: "PasswordModal", props: { full: Boolean }, emits: ["verify"], setup(l2, { emit: t2 }) {
  const r2 = usePageFrontmatter(), n2 = m$1(), o$12 = ref(""), e2 = ref(false), a2 = ref(false), u2 = computed(() => n2.value.encryptLocales);
  let i2 = null;
  const c2 = () => {
    i2 && clearTimeout(i2), e2.value = false, t2("verify", o$12.value, a2.value), nextTick().then(() => {
      e2.value = true, i2 = setTimeout(() => {
        e2.value = false;
      }, 1e3);
    });
  };
  return () => h$2("div", { class: ["vp-decrypt-layer", { expand: l2.full || r2.value.home }] }, h$2("div", { class: "vp-decrypt-modal" }, [h$2("div", { class: ["vp-decrypt-hint", { tried: e2.value }] }, e2.value ? u2.value.errorHint : h$2(o, { "aria-label": u2.value.iconLabel })), h$2("div", { class: "vp-decrypt-input" }, [h$2("input", { type: "password", value: o$12.value, placeholder: u2.value.placeholder, onInput: ({ target: v2 }) => {
    o$12.value = v2.value;
  }, onKeydown: ({ key: v2 }) => {
    v2 === "Enter" && c2();
  } })]), h$2("div", { class: "vp-remember-password" }, [h$2("input", { type: "checkbox", value: a2.value, onChange: () => a2.value = !a2.value }), u2.value.remember]), h$2("button", { type: "button", class: "vp-decrypt-submit", onClick: () => c2() }, "OK")]));
} });
const P = () => {
  const l2 = e$1();
  return computed(() => l2.value.encrypt || {});
}, k = "VUEPRESS_HOPE_GLOBAL_TOKEN", j = () => {
  const l2 = P(), t2 = useStorage(k, ""), r2 = useSessionStorage(k, ""), n2 = computed(() => {
    const { global: e2 = false, admin: a2 = [] } = l2.value;
    return e2 && a2.length > 0;
  }), o2 = computed(() => {
    if (n2.value) {
      if (t2.value)
        return l2.value.admin.some((e2) => compareSync(t2.value, e2));
      if (r2.value)
        return l2.value.admin.some((e2) => compareSync(r2.value, e2));
    }
    return false;
  });
  return { isEncrypted: n2, isDecrypted: o2, validate: (e2, a2 = false) => {
    (a2 ? t2 : r2).value = e2;
  } };
}, y = (l2 = "", t2) => !!l2 && compareSync(l2, t2), D = "VUEPRESS_HOPE_PATH_TOKEN", C = () => {
  const l2 = usePageData(), t2 = P(), r2 = useStorage(D, {}), n2 = useSessionStorage(D, {}), o2 = (a2) => isPlainObject(t2.value.config) ? keys(t2.value.config).filter((u2) => startsWith(decodeURI(a2), u2)).sort((u2, i2) => i2.length - u2.length) : [], e2 = (a2) => {
    const u2 = o2(a2);
    if (u2.length > 0) {
      const { config: i2 = {} } = t2.value;
      return { isEncrypted: true, isDecrypted: u2.some((c2) => r2.value[c2] && i2[c2].some((v2) => y(r2.value[c2], v2)) || n2.value[c2] && i2[c2].some((v2) => y(n2.value[c2], v2))) };
    }
    return { isDecrypted: false, isEncrypted: false };
  };
  return { status: computed(() => e2(l2.value.path)), getStatus: e2, validate: (a2, u2 = false) => {
    const { config: i2 = {} } = t2.value, c2 = o2(l2.value.path);
    for (const v2 of c2)
      if (i2[v2].filter((L2) => y(a2, L2))) {
        (u2 ? r2 : n2).value[v2] = a2;
        break;
      }
  } };
};
var I = defineComponent({ name: "GlobalEncrypt", slots: Object, setup(l2, { slots: t2 }) {
  const { isDecrypted: r2, isEncrypted: n2, validate: o2 } = j(), e2 = ref(false);
  return onMounted(() => {
    e2.value = true;
  }), () => h$2(m, () => n2.value ? e2.value ? r2.value ? t2.default() : h$2(g, { full: true, onVerify: o2 }) : null : t2.default());
} }), R = defineComponent({ name: "LocalEncrypt", slots: Object, setup(l2, { slots: t2 }) {
  const { status: r2, validate: n2 } = C(), o2 = ref(false);
  return onMounted(() => {
    o2.value = true;
  }), () => {
    const { isEncrypted: e2, isDecrypted: a2 } = r2.value;
    return e2 ? o2.value ? a2 ? t2.default() : h$2(g, { full: true, onVerify: n2 }) : null : t2.default();
  };
} });
r((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;
  return shouldIndex ? {
    title,
    content: icon ? () => [h$2(z$1, { icon }), title] : null,
    order: meta.O,
    index: meta.I
  } : null;
});
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await l().wait();
      return scrollBehavior(...args);
    };
    Ka(app);
    app.component("HopeIcon", z$1);
    app.component("VPLink", N$2);
    app.component("BloggerInfo", R$1);
    app.component("GlobalEncrypt", I);
    app.component("LocalEncrypt", R);
  },
  setup: () => {
    Ja();
    et();
    r1();
  },
  layouts: {
    Layout: Ae,
    NotFound: Me,
    BlogCategory: d1,
    BlogHome: b1,
    BlogType: x1,
    Timeline: w1
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  q$1,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  B,
  clientConfig11
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "Blog Home", "i": "home" }, ["/README.md"]],
  ["v-184f4da6", "/intro.html", { "d": 1707046631e3, "e": "\n<p>This is B4night and that nick name comes from <code>dead poets society</code>. It means before(b4) night which reminds me to cherish time.</p>\n<h1>Work Experience</h1>\n<p>I am a senior student and I am gonna graduate at June 2024. I have several internships and that covers 3 hardcore fields. I worked as hardware intern, Linux Cpp intern and Linux Kernel Quality Engineer Intern. As a result, I am familiar with Linux and switched my main machine from Win to Fedora38.</p>", "r": { "minutes": 0.38, "words": 114 }, "y": "a", "t": "Intro Page", "i": "circle-info" }, [":md"]],
  ["v-6f3cd246", "/posts/%20Download%20_.torrent_%20file%20under%20Fedora.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Download `.torrent` file under Fedora.md"], "g": [], "e": "\n<p>We need to download <code>trasmission</code> first to download from a <code>.torrent</code> file.</p>\n<p>We use <code>transmission-gtk</code> to invoke the app and then choose <code>.torrent</code> fine. Then the doanload begins.</p>\n", "r": { "minutes": 0.18, "words": 55 }, "y": "a", "t": "Download `.torrent` file under Fedora" }, ["/posts/ Download _.torrent_ file under Fedora.html", "/posts/ Download `.torrent` file under Fedora.html", "/posts/%20Download%20%60.torrent%60%20file%20under%20Fedora.html", "/posts/ Download `.torrent` file under Fedora.md", "/posts/%20Download%20%60.torrent%60%20file%20under%20Fedora.md"]],
  ["v-19144f4a", "/posts/%20Fedora%20set%20display%20scale%20150%25(gnome).html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Fedora set display scale 150%(gnome).md"], "g": [], "e": "\n<p>The default display options are <code>100%, 200%, 300%</code>. It’s awkward because some people might want to customize the display scale.</p>\n<p>There’s an easy way to customize the display scale: with the help of <code>gnome-tweaks</code> .</p>\n<ol>\n<li><code>dnf search gnome-tweaks</code></li>\n<li>find the right version and <code>sudo dnf install</code></li>\n<li>open <code>tweaks</code></li>\n<li>At the <code>font</code> section, there is a <code>Scaling Factor</code> button. Set <code>1.5</code> to set the display scale to <code>150%</code>.</li>\n<li>(Caution), set the display scale <code>100%</code> before changing the <code>Scaling Factor</code> in step 4.</li>\n</ol>", "r": { "minutes": 0.43, "words": 129 }, "y": "a", "t": "Fedora set display scale 150%(gnome)" }, ["/posts/ Fedora set display scale 150%(gnome).html", "/posts/ Fedora set display scale 150%(gnome).md", ":md"]],
  ["v-327653c2", "/posts/%20Git%20switch%20branches%20with%20modified%20files.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Git switch branches with modified files.md"], "g": [], "e": "\n<p>I have to switch between different branches to develop, so that there is a problem that some times I don’t want to use <code>git add</code> to track modified too early and I have to switch another branch.</p>\n<p>So the error comes out: another branch would have the same modified files.</p>\n<p>E.g.: Currently I am at branch A, with modified files that are not added yet. I have to switch to branch B.</p>", "r": { "minutes": 0.47, "words": 141 }, "y": "a", "t": "Git switch branches with modified files" }, ["/posts/ Git switch branches with modified files.html", "/posts/ Git switch branches with modified files.md", ":md"]],
  ["v-7bc29e63", "/posts/%20Joplin%20exits%20full%20screen%20in%20Linux.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Joplin exits full screen in Linux.md"], "g": [], "e": '\n<p>Today I maximized joplin when I was using it. But when I wanted to change the options, I used <code>f11</code> to exit full screen. However, <code>f11</code> is bonded to another feature, so that I can’t use it to exit.</p>\n<p>Here is the solution.</p>\n<ol>\n<li>Find the file <code>window-state-prod.json </code>Use the command <code>find / -name "window-state-prod.json</code></li>\n<li>Edit the json file and set <code>isFullScreen</code> to <code>false</code></li>\n</ol>', "r": { "minutes": 0.33, "words": 99 }, "y": "a", "t": "Joplin exits full screen in Linux" }, ["/posts/ Joplin exits full screen in Linux.html", "/posts/ Joplin exits full screen in Linux.md", ":md"]],
  ["v-8c8262f4", "/posts/%20Linux%20Trick_%20Create%20desktop%20entries%20for%20apps.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Linux Trick! Create desktop entries for apps.md"], "g": [], "e": "\n<p>System: Fedora 39 workstation</p>\n<p>It’s always a problem for me that some apps I downloaded can not be recognized by <code>control</code> and extension <code>search light</code> . So it’s necessary to create separate entries for those unrecognized apps.</p>\n<p>The procedures are as follows:</p>", "r": { "minutes": 0.4, "words": 119 }, "y": "a", "t": "Linux Trick: Create desktop entries for apps" }, ["/posts/ Linux Trick_ Create desktop entries for apps.html", "/posts/ Linux Trick: Create desktop entries for apps.html", "/posts/%20Linux%20Trick:%20Create%20desktop%20entries%20for%20apps.html", "/posts/ Linux Trick: Create desktop entries for apps.md", "/posts/%20Linux%20Trick:%20Create%20desktop%20entries%20for%20apps.md"]],
  ["v-5d6ace1c", "/posts/%20Open%20folder%20at%20terminal.%20Linux.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Open folder at terminal. Linux.md"], "g": [], "e": "\n<p>The commend we need to use today is <code>xdg-open</code> .</p>\n<p>Below is a brief description:</p>\n<blockquote>\n<p><strong>DESCRIPTION</strong><br>\nxdg-open opens a file or URL in the user’s preferred application. If a URL is provided the URL will be opened in the user’s preferred web browser. If a file is provided the file will be opened in the preferred<br>\napplication for files of that type. xdg-open supports file, ftp, http and https URLs.\\ <br>xdg-open is for use inside a desktop session only. It is not recommended to use xdg-open as root.</p>\n</blockquote>", "r": { "minutes": 0.61, "words": 184 }, "y": "a", "t": "Open folder at terminal. Linux" }, ["/posts/ Open folder at terminal. Linux.html", "/posts/ Open folder at terminal. Linux.md", ":md"]],
  ["v-5a6c26be", "/posts/%20Program%20executed%20by%20Linux%20Terminal%20has%20the%20same%20proxy%20with%20the%20terminal_.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Program executed by Linux Terminal has the same proxy with the terminal.md"], "g": [], "e": "\n<p>Today I ran into an awkward situation. I am in China right now and I need proxy to access internet. So I set the global proxy of terminal.</p>\n<p>I executed a program and it needs to upload image to image bed, which is an server in China. The procedure is: the program executes uploading commands via terminal, while the terminal has proxy settings. So it’s really awkward that the uploading failed.</p>", "r": { "minutes": 0.46, "words": 138 }, "y": "a", "t": "Program executed by Linux Terminal has the same proxy with the terminal?" }, ["/posts/ Program executed by Linux Terminal has the same proxy with the terminal_.html", "/posts/ Program executed by Linux Terminal has the same proxy with the terminal?.html", "/posts/%20Program%20executed%20by%20Linux%20Terminal%20has%20the%20same%20proxy%20with%20the%20terminal?.html", "/posts/ Program executed by Linux Terminal has the same proxy with the terminal?.md", "/posts/%20Program%20executed%20by%20Linux%20Terminal%20has%20the%20same%20proxy%20with%20the%20terminal?.md"]],
  ["v-4fd75f66", "/posts/%20Redirect%20terminal%20output%20to%20clipboard..html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Redirect terminal output to clipboard.md"], "g": [], "e": "\n<p>This post is about using <code>xclip</code> command to redirect the output of a command to clipboard.</p>\n<ol>\n<li>install <code>xclip</code></li>\n<li>use command <code>cat output | xclip -selection clipboard</code> to redirect the flow</li>\n<li>(Optional) Set an alias.<br>\ne.g. <code>alias clip=”xclip -selection clipboard”</code></li>\n<li>Remember that the alias needs to be added to <code>~/.bashrc</code> to take effect permanently.</li>\n</ol>", "r": { "minutes": 0.28, "words": 83 }, "y": "a", "t": "Redirect terminal output to clipboard." }, ["/posts/ Redirect terminal output to clipboard..html", "/posts/ Redirect terminal output to clipboard..md", ":md"]],
  ["v-598ffdfd", "/posts/%20Set%20Bluetooth%20off%20as%20default%20at%20rebooting%20in%20Fedora.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Set Bluetooth off as default at rebooting in Fedora.md"], "g": [], "e": "\n<p>We need to edit the file <code>/etc/bluetooth/main.conf</code></p>\n<p>Find the line <code>AutoEnable=true</code> , change it to <code>AutoEnable=false</code> and voila, Bluetooth is off as default when rebooting.</p>\n", "r": { "minutes": 0.21, "words": 64 }, "y": "a", "t": "Set Bluetooth off as default at rebooting in Fedora" }, ["/posts/ Set Bluetooth off as default at rebooting in Fedora.html", "/posts/ Set Bluetooth off as default at rebooting in Fedora.md", ":md"]],
  ["v-1b503f84", "/posts/%20Set%20default%20editor%20in%20Linux.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Set default editor in Linux.md"], "g": [], "e": '\n<p>This need to edit the config file of the shell you are using.</p>\n<p>For example, I am using zsh right now so that I have to change <code>~/.zshrc</code> .</p>\n<p>All I have to do is add a command at the end of the config file and then source it.</p>\n<pre><code>export EDITOR="/usr/bin/vim"\nsource ~/.zshrc\n</code></pre>', "r": { "minutes": 0.27, "words": 80 }, "y": "a", "t": "Set default editor in Linux" }, ["/posts/ Set default editor in Linux.html", "/posts/ Set default editor in Linux.md", ":md"]],
  ["v-1a499874", "/posts/%20Typora_upgit_tcyun_%20upload%20img%20to%20imgbed.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Typora+upgit+tcyun! upload img to imgbed.md"], "g": [], "e": '\n<p>The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.</p>\n<ol>\n<li>Set typora options</li>\n</ol>\n<figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png" alt="image-20240205132414965" tabindex="0" loading="lazy"><figcaption>image-20240205132414965</figcaption></figure>', "r": { "minutes": 0.45, "words": 136 }, "y": "a", "t": "Typora+upgit+tcyun: upload img to imgbed" }, ["/posts/ Typora_upgit_tcyun_ upload img to imgbed.html", "/posts/ Typora+upgit+tcyun: upload img to imgbed.html", "/posts/%20Typora+upgit+tcyun:%20upload%20img%20to%20imgbed.html", "/posts/ Typora+upgit+tcyun: upload img to imgbed.md", "/posts/%20Typora+upgit+tcyun:%20upload%20img%20to%20imgbed.md"]],
  ["v-153a8874", "/posts/%20Useful%20script%20sharing_%20easy%20git%20push.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Useful script sharing! easy git push.md"], "g": [], "e": '\n<p>When dealing with github repositories, it’s often the case that we should use <code>git add .; git commit -s -m ""; git push</code> to push our changes.</p>\n<p>So that I am gonna share a simple shell script that could do some simple git operations.</p>\n<pre><code>acp() {\n    if [ ! $# -eq 1 ]; then\n        echo "Invalid number of arguments. Usage: acp \\"commit message\\""\n        return 1\n    fi\n    git add .\n    git commit -s -m "$1"\n    git push\n}\n</code></pre>', "r": { "minutes": 0.36, "words": 108 }, "y": "a", "t": "Useful script sharing: easy git push" }, ["/posts/ Useful script sharing_ easy git push.html", "/posts/ Useful script sharing: easy git push.html", "/posts/%20Useful%20script%20sharing:%20easy%20git%20push.html", "/posts/ Useful script sharing: easy git push.md", "/posts/%20Useful%20script%20sharing:%20easy%20git%20push.md"]],
  ["v-519070c2", "/posts/%20Using%20ssh%20through%20SOCKS5%20proxy..html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Using ssh through SOCKS5 proxy.md"], "g": [], "e": "\n<p>Below are operations on Fedora39.</p>\n<ol>\n<li>Download <code>netcat</code> . In Ubuntu-like system, <code>nc</code> is needed.</li>\n<li>Edit <code>~/.ssh/config</code></li>\n<li>Add lines like:</li>\n</ol>\n<!---->\n<pre><code>Host github.com\n   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p\n</code></pre>", "r": { "minutes": 0.58, "words": 174 }, "y": "a", "t": "Using ssh through SOCKS5 proxy." }, ["/posts/ Using ssh through SOCKS5 proxy..html", "/posts/ Using ssh through SOCKS5 proxy..md", ":md"]],
  ["v-6bb8daf5", "/posts/%20Vue%20Download%20failure%20about%20Ipv4.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Vue Download failure about Ipv4 .md"], "g": [], "e": "\n<p>Today I ran into fail when downloading vue using command <code>npm install -g @vue/cli</code> , after changing several mirror registry, the fail was still there.</p>\n<p>So I found out that some mirror websites can only be accessed by ipv4, so that we need to choose ipv4 first when accessing these registries.</p>", "r": { "minutes": 0.31, "words": 92 }, "y": "a", "t": "Vue Download failure about Ipv4" }, ["/posts/ Vue Download failure about Ipv4.html", "/posts/ Vue Download failure about Ipv4.md", ":md"]],
  ["v-4dd815f7", "/posts/%20Watch%20a%20process%20with%20pid%20under%20Linux..html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "Watch a process with pid under Linux.md"], "g": [], "e": "\n<p>We need <code>pidstat</code> command to monitor processes.</p>\n<p>e.g.: <code>pidstat -p [pid] 1</code> , this can print the status each second.</p>\n", "r": { "minutes": 0.17, "words": 51 }, "y": "a", "t": "Watch a process with pid under Linux." }, ["/posts/ Watch a process with pid under Linux..html", "/posts/ Watch a process with pid under Linux..md", ":md"]],
  ["v-ea1b8e4a", "/posts/%20git%20push%20fatal_%20The%20remote%20end%20hung%20up%20unexpectedly.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "git push fatal! The remote end hung up unexpectedly.md"], "g": [], "e": '\n<p>stackoverflow link: <a href="https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly</a></p>\n<p>This usually happens when the files we push exceeds buffer size. So we can manually change postBuffer size.</p>', "r": { "minutes": 0.25, "words": 75 }, "y": "a", "t": "git push fatal: The remote end hung up unexpectedly" }, ["/posts/ git push fatal_ The remote end hung up unexpectedly.html", "/posts/ git push fatal: The remote end hung up unexpectedly.html", "/posts/%20git%20push%20fatal:%20The%20remote%20end%20hung%20up%20unexpectedly.html", "/posts/ git push fatal: The remote end hung up unexpectedly.md", "/posts/%20git%20push%20fatal:%20The%20remote%20end%20hung%20up%20unexpectedly.md"]],
  ["v-62801227", "/posts/%20git%20rebase%20and%20git%20amend.html", { "a": "B4night", "d": 17070912e5, "l": "February 5, 2024", "c": ["Useful Skills", "git rebase and git amend.md"], "g": [], "e": '\n<p>The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.</p>\n<ol>\n<li>Set typora options</li>\n</ol>\n<img alt="" class="bg km ms c" width="700" height="257" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*UuIaQuAngJHnLWTNmOWZFw.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">', "r": { "minutes": 3.42, "words": 1027 }, "y": "a", "t": "git rebase and git amend" }, ["/posts/ git rebase and git amend.html", "/posts/ git rebase and git amend.md", ":md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, []],
  ["v-e1e3da16", "/posts/", { "y": "p", "t": "Posts" }, []],
  ["v-5bc93818", "/category/", { "y": "p", "t": "Category", "I": false }, []],
  ["v-744d024e", "/tag/", { "y": "p", "t": "Tag", "I": false }, []],
  ["v-e52c881c", "/article/", { "y": "p", "t": "Articles", "I": false }, []],
  ["v-154dc4c4", "/star/", { "y": "p", "t": "Star", "I": false }, []],
  ["v-01560935", "/timeline/", { "y": "p", "t": "Timeline", "I": false }, []],
  ["v-b76cabe4", "/category/useful-skills/", { "y": "p", "t": "Useful Skills Category", "I": false }, []],
  ["v-ba8712f2", "/category/download-_.torrent_-file-under-fedora.md/", { "y": "p", "t": "Download `.torrent` file under Fedora.md Category", "I": false }, []],
  ["v-5b4fb80a", "/category/fedora-set-display-scale-150%25(gnome).md/", { "y": "p", "t": "Fedora set display scale 150%(gnome).md Category", "I": false }, ["/category/fedora-set-display-scale-150%(gnome).md/"]],
  ["v-0525bf66", "/category/git-switch-branches-with-modified-files.md/", { "y": "p", "t": "Git switch branches with modified files.md Category", "I": false }, []],
  ["v-3ceb3e80", "/category/joplin-exits-full-screen-in-linux.md/", { "y": "p", "t": "Joplin exits full screen in Linux.md Category", "I": false }, []],
  ["v-4d6da251", "/category/linux-trick!-create-desktop-entries-for-apps.md/", { "y": "p", "t": "Linux Trick! Create desktop entries for apps.md Category", "I": false }, []],
  ["v-588c5fc6", "/category/open-folder-at-terminal.-linux.md/", { "y": "p", "t": "Open folder at terminal. Linux.md Category", "I": false }, []],
  ["v-2e4d6271", "/category/program-executed-by-linux-terminal-has-the-same-proxy-with-the-terminal.md/", { "y": "p", "t": "Program executed by Linux Terminal has the same proxy with the terminal.md Category", "I": false }, []],
  ["v-155deb02", "/category/redirect-terminal-output-to-clipboard.md/", { "y": "p", "t": "Redirect terminal output to clipboard.md Category", "I": false }, []],
  ["v-2ea034e8", "/category/set-bluetooth-off-as-default-at-rebooting-in-fedora.md/", { "y": "p", "t": "Set Bluetooth off as default at rebooting in Fedora.md Category", "I": false }, []],
  ["v-44c267a7", "/category/set-default-editor-in-linux.md/", { "y": "p", "t": "Set default editor in Linux.md Category", "I": false }, []],
  ["v-c3235d12", "/category/typora_upgit_tcyun!-upload-img-to-imgbed.md/", { "y": "p", "t": "Typora+upgit+tcyun! upload img to imgbed.md Category", "I": false }, []],
  ["v-d80667f6", "/category/useful-script-sharing!-easy-git-push.md/", { "y": "p", "t": "Useful script sharing! easy git push.md Category", "I": false }, []],
  ["v-7a50a282", "/category/using-ssh-through-socks5-proxy.md/", { "y": "p", "t": "Using ssh through SOCKS5 proxy.md Category", "I": false }, []],
  ["v-06aeb3ae", "/category/vue-download-failure-about-ipv4-.md/", { "y": "p", "t": "Vue Download failure about Ipv4 .md Category", "I": false }, []],
  ["v-ae57df40", "/category/watch-a-process-with-pid-under-linux.md/", { "y": "p", "t": "Watch a process with pid under Linux.md Category", "I": false }, []],
  ["v-b1cfa3c0", "/category/git-push-fatal!-the-remote-end-hung-up-unexpectedly.md/", { "y": "p", "t": "git push fatal! The remote end hung up unexpectedly.md Category", "I": false }, []],
  ["v-74d8ee32", "/category/git-rebase-and-git-amend.md/", { "y": "p", "t": "git rebase and git amend.md Category", "I": false }, []]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h$2(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      {
        path: path.endsWith("/") ? (
          // redirect from `/index.html` to `/`
          path + "index.html"
        ) : (
          // redirect from `/foo` to `/foo.html`
          path.substring(0, path.length - 5)
        ),
        redirect: path
      },
      ...redirects.map((item) => ({
        path: item === ":md" ? (
          // redirect from `/foo.md` to `/foo.html`
          path.substring(0, path.length - 5) + ".md"
        ) : item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [to.meta._data] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageData = computedWithControl(
    routePath,
    () => router.currentRoute.value.meta._data
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageDataSymbol, pageData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$2(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$2(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp
};
