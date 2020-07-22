<template>
  <div>
    <h3>
      Recent shortened URL's
    </h3>
    <div id="url-container" v-for="url in urls" :key="url._id">
      {{ url.url }}
    </div>
  </div>
</template>

<script>
import config from "../../config";

export default {
  name: "RecentUrl",

  data: function() {
    return { urls: [] };
  },

  methods: {
    init() {
      fetch(config.getRecentUrls, { method: "get" })
        .then((res) => res.json())
        .then((jsonData) => (this.urls = jsonData))
        .catch((error) => error);
    },
  },

  mounted() {
    this.init();
  },
};
</script>
