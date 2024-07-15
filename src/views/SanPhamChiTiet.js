import React from "react";
import "./App.scss";
import Image from "../assets/images/sp1.png";
import App from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class SanPhamChiTiet extends React.Component {
  state = {
    name: "Dung Ho",
    channel: "DungHo",
  };
  /*
      JSX: 1 ham js tra ra 1 khoi html;
      => return block(khoi code)
      fragment <> </>: co the ghi 2 khoi div khac biet tren reacjs
      
      */
  render() {
    return (
      <>
        <div className="container">
          <br></br>
          <div className="link ">
            <div className="border-line"></div>
          </div>
        </div>
      </>
    );
  }
}
export default SanPhamChiTiet;
