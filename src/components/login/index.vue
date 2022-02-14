<template>
  <a-button type="primary">登录界面</a-button>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();
console.log(store.state.login.a);
</script>

<style lang="less" scoped></style>
