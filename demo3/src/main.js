import { sum } from "./math";
import count from "./count";

console.log("hello main");
console.log(sum(1, 2, 3, 4));

document.getElementById("btn").onclick = function () {
  // import动态导入：会将动态导入的文件代码分割（拆分成单独模块），在需要使用的时候，自动加载
  import("./count")
    .then((res) => {
      console.log("模块加载成功", res.default(4, 3));
    })
    .catch((err) => {
      console.log("模块加载失败", err);
    });

  console.log(count(4, 2));
};
