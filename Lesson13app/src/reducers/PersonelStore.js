import { createStore } from "redux";
import reducer from "./PersonelReducer";


const store = createStore(reducer);

export default store;