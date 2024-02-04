export const categoryMap = {"category":{"/":{"path":"/category/","map":{"FrontEnd":{"path":"/category/frontend/","keys":["v-4daed234","v-e9da6f7c"]},"CSS":{"path":"/category/css/","keys":["v-4daed234"]},"JavaScript":{"path":"/category/javascript/","keys":["v-e9da6f7c"]},"Language":{"path":"/category/language/","keys":["v-e9da6f7c"]},"tutorial":{"path":"/category/tutorial/","keys":["v-cfae17ce"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


