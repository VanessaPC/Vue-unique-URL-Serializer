<template>
  <UrlContainer>
    <h2>
      Recently shortened URL's
    </h2>
    <div data-testid="url-container" v-for="url in urls" :key="url._id">
      <span>{{ url.url }}: </span>
      <a href="/"> http://pbid.io/{{ url.serializer }}</a>
    </div>
    <p data-testid="url-empty-container" v-show="urls.length <= 0">
      There are no recently shortned URL's
    </p>
  </UrlContainer>
</template>

<script>
import config from "../../config";
import { UrlContainer } from "./style";
import { Bus } from "../../main";

export default {
  name: "RecentUrl",
  components: {
    UrlContainer,
  },
  data: function() {
    return { urls: [], url: "", componentKey: 0 };
  },

  methods: {
    init() {
      fetch(config.getRecentUrls, { method: "get" })
        .then((res) => res.json())
        .then((jsonData) => (this.urls = jsonData))
        .catch((error) => error);
    },
  },

  mounted: function() {
    this.init();
    Bus.$on("updateList", () => this.init());
  },
};
</script>
