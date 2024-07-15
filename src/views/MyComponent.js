import React from "react";
import { Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import "./App.scss";
import Image from "../assets/images/sp1.png";
import Image2 from "../assets/images/sp2.png";

class MyComponent extends React.Component {
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
    let name = "Dung Ho";
    return (
      <>
        <div className="container">
          <h1 className="dung text-center pb-3">Sản phẩm mới</h1>
          <div className="row">
            <div className="col-md-2 product">
              <img src={Image}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
          </div>
          <div className="botton-xem">
            <button align-item-center>Xem thêm</button>
          </div>
          <br></br>
          <h1 className="dung text-center pb-3">Sản phẩm nổi bật</h1>
          <div className="row">
            <div className="col-md-2 product">
              <img src={Image}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
            <div className="col-md-2 product">
              <img src={Image2}></img>
              <p>
                Tượng hy lạp phong cách cổ đại bla bla bla
                <br></br>
                2.900.000đ
              </p>
            </div>
          </div>
          <div className="botton-xem">
            <button align-item-center>Xem thêm</button>
          </div>
        </div>
      </>
    );
  }
}
//export {} MyComponent tra ra nhieu cai cung 1 luc
export default MyComponent;
