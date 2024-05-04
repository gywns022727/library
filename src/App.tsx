import "./App.css";
import Router from "@/Router/router";
import GlobalStyle from "@/style/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "@/store/config";

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
