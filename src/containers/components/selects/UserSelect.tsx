import React, { useEffect } from "react";
import AutoFilterDropdown from "../../../components/select";
import { User } from "../../../interfaces";
import { API_URL } from "../../../constants";

const UserSelect: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  const handleUserChange = (selectedValue: User): void => {
    console.log("selectedUser", selectedValue);
    setSelectedUser(selectedValue);
  };

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ display: "block" }}>
      <h4>User select Example</h4>
      <div className="select-example" style={{ display: "flex" }}>
        <div className="country-item" style={{ paddingRight: "10px" }}>
          <AutoFilterDropdown<User>
            value={selectedUser}
            data={users}
            filterKey={"username"}
            valueChange={handleUserChange}
          />
        </div>
      </div>
      <p style={{ margin: 0 }}>
        Data from: https://jsonplaceholder.typicode.com/users
      </p>
    </div>
  );
};

export default UserSelect;
