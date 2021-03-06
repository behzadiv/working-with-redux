import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HookWineContainer from "./components/HookWineContainer";
import PayloadWine from "./components/PayloadWine";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HookCakeContainer/>
        <IceCreamContainer/>
        <HookWineContainer/>
        <PayloadWine/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
