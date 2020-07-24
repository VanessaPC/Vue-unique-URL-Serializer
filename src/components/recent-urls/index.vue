<template>
  <UrlContainer>
    <h2>
      Recently shortened URL's
    </h2>
    <div data-testid="url-container" v-for="url in urls" :key="url._id">
      <span>{{ url.url }}: </span>
      <a href="/"> http://pbid.io/{{ url.serializer }}</a>
    </div>
    <p data-testid="url-empty-container" v-show="url <= 0">
      There are no recently shortned URL's
    </p>
  </UrlContainer>
</template>

<script>
import config from "../../config";
import { UrlContainer } from "./style";

export default {
  name: "RecentUrl",
  components: {
    UrlContainer,
  },
  data: function() {
    return { urls: [], url: "" };
  },

  methods: {
    init() {
      fetch(config.getRecentUrls, { method: "get" })
        .then((res) => res.json())
        .then((jsonData) => (this.urls = jsonData))
        .catch((error) => error);
    },
  },
};
</script>
