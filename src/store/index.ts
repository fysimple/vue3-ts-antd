import { createStore } from "vuex";
import LoginModule from "./login";

const Store = createStore({
  modules: {
    login: LoginModule,
  },
});
export default Store;
