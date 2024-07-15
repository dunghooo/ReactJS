import React from "react";
import "./App.scss";
import Image from "../assets/images/sp1.png";
import App from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image2 from "../assets/images/sp2.png";
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
          <div className="link">
            <div className="border-line"></div>
            <p className="pt-3 ms-4">Trang chủ/ Sản phẩm / sản phẩm chi tiết</p>
            <br></br>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-6 ProductImg">
              <img className="img-fluid" src={Image}></img>
            </div>
            <div className="col-md-6 ProductDetail">
              <p className="ProductName">Tượng hy lạp phong cách cổ đại</p>
              <hr></hr>
              <div className="row saleBlock">
                <div className="sale">
                  <p>-15%</p>
                </div>
                <div className="MoneyRed">2.100.000đ</div>
                <div className="Moneygach">2.500.000đ</div>
              </div>
              <hr></hr>
              <div className="row Size">
                <div className="stocking me-5">40x40</div>
                <div className="nostocking">80x80</div>
              </div>
              <hr></hr>
              <div className="row quantityblock">
                <div className="add">-</div>
                <div className="quantity">1</div>
                <div className="minus">+</div>
              </div>
              <br></br>
              <div className="button-them">
                <button className="align-item-center">Thêm vào giỏ hàng</button>
              </div>
              <br></br>
              <p className="MoTa">Mô tả</p>
              <p className="TenMoTa">
                GIỚI THIỆU CẶP ĐÔI MÈO NHẬT BẢN CÁT TƯỜNG
              </p>
            </div>
          </div>
          <br></br>
          <h1 className="dung text-center pb-3">Sản phẩm liên quan</h1>
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
        </div>
      </>
    );
  }
}
export default SanPhamChiTiet;
