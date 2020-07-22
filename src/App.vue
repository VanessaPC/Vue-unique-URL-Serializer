<template>
  <div id="app">
    <RecentUrl />
    <InputUrl />
  </div>
</template>

<script>
import RecentUrl from "./components/recent-urls";
import InputUrl from "./components/input";

export default {
  name: "App",
  components: {
    RecentUrl,
    InputUrl,
  },
};
</script>

<style>
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
