import logo from "./logo.svg";

import MyComponent from "./MyComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SanPhamChiTiet from "./SanPhamChiTiet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * 2 components: class component / function component component {function, arrow}
 * JSX
 */

function App() {
  // cosnt App =() =>{
  return <SanPhamChiTiet />; /*<MyComponent />;*/
}

export default App;
