<template>
  <theme-provider
    :theme="{
      primary: '#eee',
      warning: '#C95E6E',
      secondary: '#81A7D5',
      navyBlue: '#2c3e50',
    }"
  >
    <div id="app">
      <h1>Shorten your URL</h1>
      <InputUrl />
      <RecentUrl />
    </div>
  </theme-provider>
</template>

<script>
import RecentUrl from "./components/recent-urls";
import InputUrl from "./components/input";
import { ThemeProvider, injectGlobal } from "vue-styled-components";

injectGlobal`
  body, #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0px;
    padding: 0px;
    color: #eee;
    background-color: #2c3e50;
    border-radius: 10px;
    margin-top: 30px;
  }

  p {
    font-size: 18px;
    line-height: 1.7px;
  }
  span {
    font-size: 16px;
    line-height: 1.7px;
  }
`;

export default {
  name: "App",
  components: {
    RecentUrl,
    InputUrl,
    "theme-provider": ThemeProvider,
  },
};
</script>
