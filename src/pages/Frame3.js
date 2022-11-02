import InputBox from "../commponents/InputBox";
import DropDown from "../commponents/DropDown";
import { useState } from "react";
import Footer from "../commponents/Footer";

const Frame3 = ({ onSet, setdata, data }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setdata({ ...data, name: text });
    onSet(4);
  };

  return (
    <div className="frame3">
      <form onSubmit={submitHandler}>
        <div>
          <InputBox onChange={(e) => setText(e.target.value)}>
            <div className="down">
              <DropDown />
            </div>
            <div className="select-person">
              <span> Select a Person</span>
              <p>{text}</p>
            </div>
          </InputBox>
          <div className="textarea-box">
            <textarea placeholder="Sandeep Shared Page"></textarea>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default Frame3;
