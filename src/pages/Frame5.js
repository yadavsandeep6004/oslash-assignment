import Card from "../commponents/Card";
import SelectPerson from "../commponents/SelectPerson";
import Avatar from "../image/Avatar.png";
import DropDown from "../commponents/DropDown";

const Frame5 = ({ data, onSet }) => {
  return (
    <div className="frame5">
      <Card onSet={onSet}>
        {data.name && (
          <SelectPerson Avatar={Avatar} name={data.name}>
            <DropDown />
          </SelectPerson>
        )}
      </Card>
    </div>
  );
};
export default Frame5;
