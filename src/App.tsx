//import { greet } from "./utils/greet";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import prop_arr from "./utils/PropertiesArray";
import Nav from "./components/Nav";

const places = prop_arr.map(Main);
// const navPlaces = Nav(prop_arr[0]);
const navPlaces = prop_arr.map(Nav)

function App(): JSX.Element {
  return (
    <>
      <Header />
      {navPlaces}
      {places}
      <Footer />
    </>
  );
}

export default App;
