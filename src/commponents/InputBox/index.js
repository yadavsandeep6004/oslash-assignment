import "./style.css";

const InputBox = (props) => {
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="People, emails, groups"
        onChange={props.onChange}
      />
      {props.children ? props.children : <button>Invite</button>}
    </div>
  );
};

export default InputBox;
