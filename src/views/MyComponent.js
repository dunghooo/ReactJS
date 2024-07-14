import React from "react";

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
        <div className="xyz">My youtube channel is {this.state.channel}</div>
        <div className="abc">
          Hello my component, My name is {this.state.name}
        </div>
      </>
    );
  }
}
//export {} MyComponent tra ra nhieu cai cung 1 luc
export default MyComponent;
