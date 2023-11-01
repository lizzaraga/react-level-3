import { useRef, useState } from "react";
import data from "../assets/users.json";
import { DropdownList } from "../components/dropdown-list";
export function DropdownListExercise() {
  const users = useRef(data.users);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
    >
      <div>
        <p>
          Actual List Item :{" "}
          <b>{selectedItem && JSON.stringify(selectedItem)}</b>
        </p>
        <DropdownList
          valueChange={setSelectedItem}
          keyResolver={(item) => item.id}
          items={users.current}
          filterOn="name"
          placeholder={"Enter the name"}
        />
      </div>
      <div>
        <p>
          Actual List Item :{" "}
          <b>{selectedItem && JSON.stringify(selectedItem2)}</b>
        </p>
        <DropdownList
          valueChange={setSelectedItem2}
          keyResolver={(item) => item.id}
          items={users.current}
          filterOn="email"
          placeholder={"Enter the email"}
        />
      </div>
    </div>
  );
}
