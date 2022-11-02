import Avatar from "../image/Avatar.png";
import close from "../image/close.svg";
import img1 from "../image/img1.svg";
import DropDown from "../commponents/DropDown";
import SelectPerson from "../commponents/SelectPerson";

const Frame4 = ({ onSet, setdata, data }) => {
  const dataHandler = () => {
    setdata({ ...data, name: "" });
  };

  return (
    <div className="frame4">
      <div className="frame4-top">
        <div>
          <span>{data.name}</span>
          <button onClick={dataHandler}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div>
          <DropDown />
          <button className="invite-btn" onClick={() => onSet(5)}>
            Invite
          </button>
        </div>
      </div>
      <div className="avatar-box">
        <p>Select a person</p>
        {data.name && <SelectPerson Avatar={Avatar} name={data.name} />}
      </div>
      <div className="frame4-bottom">
        <img src={img1} alt="img1" />
        <span>learn about sharing</span>
      </div>
    </div>
  );
};
export default Frame4;
