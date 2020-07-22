// import axios from "axios";
// import VueAxios from "vue-axios";
import { ref } from "vue";
import config from "../config";

export default function useUrls() {
  const error = ref(null);
  const urls = ref(null);
  const loading = ref(null);

  const loadUrls = async () => {
    // if (!state.loaded) {
    loading.value = true;
    try {
      const exampleUrls = await fetch(config.getRecentUrls);
      urls.value = await exampleUrls.json();
      loading.value = true;
      //   const exampleUrls = axios
      // .get(config.getRecentUrls)
      // .then((res) => console.log("I am getting a success res", res.data));
    } catch (err) {
      console.log("I am an error", err);
      error.value = err;
      loading.value = true;
    }
    // }
  };
  loadUrls();
  return { error, urls, loading };
}
