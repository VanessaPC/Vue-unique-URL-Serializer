<template>
  <div>
    <InputContainer @submit.prevent.stop="submit">
      <InputUserURL placeholder="Enter your url" v-model="url" />
      <Button v-show="url" type="submit" v-on:click="submit">Submit URL</Button>
    </InputContainer>
    <UrlResults>
      <span v-show="exists">This url already exists: </span>
      <span v-show="result">https://pbid.io/{{ result }}</span>
    </UrlResults>
  </div>
</template>

<script>
import { InputContainer, Button, InputUserURL, UrlResults } from "./styles";
import { sendUrl } from "../../modules/urls";
import { Bus } from "../../main";
export default {
  name: "userInputURL",
  components: {
    InputContainer,
    Button,
    InputUserURL,
    UrlResults,
  },
  data: function() {
    return {
      url: "",
      submitted: false,
      result: "",
      exists: false,
    };
  },
  methods: {
    submit: function() {
      return sendUrl(this.url).then((data) => {
        this.result = data.serializer;
        this.exists = data.exists;
        Bus.$emit("updateList");
      });
    },
  },
};
</script>
