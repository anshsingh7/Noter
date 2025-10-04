import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind styles
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./components/context/userAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
   <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </UserProvider>
);
