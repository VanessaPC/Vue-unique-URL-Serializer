<template>
  <div @submit.prevent.stop="submit">
    <input placeholder="Enter your url" v-model="url" />
    <div>{{ url }}</div>
    <button type="submit" v-on:click="submit">Submit URL</button>
    <div v-show="result">https://pbid.io/{{ result }}</div>
  </div>
</template>

<script>
import config from "../../config";

export default {
  name: "InputURL",
  data: function() {
    return {
      url: "",
      submitted: false,
      result: "",
    };
  },

  methods: {
    submit: function() {
      fetch(config.saveUrl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: this.url,
        }),
      })
        .then((res) => res.json())
        .then((data) => (this.result = data.serializer));
    },
  },
};
</script>
