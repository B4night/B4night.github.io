export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6f3cd246","v-19144f4a","v-327653c2","v-7bc29e63","v-8c8262f4","v-5d6ace1c","v-5a6c26be","v-4fd75f66","v-598ffdfd","v-1b503f84","v-1a499874","v-153a8874","v-519070c2","v-6bb8daf5","v-4dd815f7","v-ea1b8e4a","v-62801227","v-cfae17ce","v-184f4da6"]}},"star":{"/":{"path":"/star/","keys":["v-5d6ace1c","v-184f4da6"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6f3cd246","v-19144f4a","v-327653c2","v-7bc29e63","v-8c8262f4","v-5d6ace1c","v-5a6c26be","v-4fd75f66","v-598ffdfd","v-1b503f84","v-1a499874","v-153a8874","v-519070c2","v-6bb8daf5","v-4dd815f7","v-ea1b8e4a","v-62801227","v-cfae17ce"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });
