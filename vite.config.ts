import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import resetAntdStyleVarsInfo from "./src/config/resetAntdVars";

export default defineConfig({
  // 配置IP地址
  server: {
    host: "0.0.0.0",
    port: 8012,
  },
  // 插件
  plugins: [
    vue(),
    // antd vue 按需加载
    components({
      resolvers: [AntDesignVueResolver({ importStyle: "less" })],
      dts: true,
    }),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  // 样式，自定义ant design样式
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: resetAntdStyleVarsInfo,
        javascriptEnabled: true,
      },
    },
  },
});
