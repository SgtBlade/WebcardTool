import { createContext } from "react";
import Store from "../stores/Store";
import UIStore from "../stores/UIStore";

const store = new Store();
const uiStore = new UIStore();

export const storeContext = createContext({ store: store, uiStore: uiStore });
