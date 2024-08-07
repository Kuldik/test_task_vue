/* eslint-disable */
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
/* eslint-disable */
<style lang="scss" scoped>
#app {
  font-family: PTsans, inter, Arial, sans-serif;
  padding: 0 100px;
  color: $color-font-main;
  font-size: 14px;
  margin-bottom: 36px;
  @include _1200 {
    padding: 0 80px;
  }
  @include _1000 {
    padding: 0 50px;
  }
  @include _840 {
    padding: 0 16px;
  }
}
</style>
