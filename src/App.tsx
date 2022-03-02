//import { greet } from "./utils/greet";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import prop_arr from "./utils/PropertiesArray";

const places = prop_arr.map(Main);

function App(): JSX.Element {
  return (
    <>
      <Header />
      {places}
      <Footer />
    </>
  );
}

export default App;
