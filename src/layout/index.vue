<template>
  <el-container>
    <el-header><NavBar></NavBar></el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "index",
  components: {NavBar}

}
</script>

<style scoped>
.el-header{
  background-color: #24292f;
  color: #333;
  text-align: center;
  line-height: 60px;
  min-width: 500px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  min-width: 640px;
}
</style>