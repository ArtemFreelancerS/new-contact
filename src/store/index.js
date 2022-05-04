import { createStore } from "vuex";
import contactList from './modules/contactList';
export default createStore({
  modules: {
    contactList
  }
});
