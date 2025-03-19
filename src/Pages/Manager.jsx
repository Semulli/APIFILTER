import { useState, useEffect } from "react";
import { Table, Nav } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { getUsers } from "../api/getRequest";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTER } from "../constant/router";

const rolesArray = ["admin", "moderator", "user"];

function Manager() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabs = searchParams.get("role") || "all";
  const [filterUsers, setFilterUsers] = useState([]);
  const getDatas = async () => {
    const response = await getUsers();

    setUsers(response.users);
    setFilterUsers(response.users);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const filterUser = (usersArray, item) => {
    if (item !== "all") {
      setFilterUsers(usersArray.filter((user) => user.role === item));
    } else {
      setFilterUsers(usersArray);
    }
  };

  useEffect(() => {
    filterUser(users, activeTabs);
  }, [activeTabs, users]);

  console.log(users);

  const getRoleStyle = (role) => {
    switch (role) {
      case "admin":
        return { color: "blue" };
      case "moderator":
        return { color: "red" };
      case "user":
        return { color: "green" };
      default:
        return null;
    }
  };

  return (
    <div className="text-center px-5 py-3">
      <h2 className="text-white mb-3">Users Table</h2>

      {/* Tabs */}

      <Nav variant="tabs" activeKey={""}>
        <Nav.Item key="all">
          <Nav.Link
            eventKey="all"
            className={activeTabs === "all" ? "default" : "white"}
            onClick={() => setSearchParams({})}
          >
            All Users
          </Nav.Link>
        </Nav.Item>
        {rolesArray?.map((role) => (
          <Nav.Item key={role}>
            <Nav.Link
              eventKey={role}
              className={activeTabs === role ? "default" : "white"}
              onClick={() => setSearchParams({ role })}
            >
              {role}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div className="mt-3">
        <Table
          striped
          bordered
          hover
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Role</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.age}</td>
                  <td className="fw-bold" style={getRoleStyle(item.role)}>
                    {item.role}
                  </td>
                  <td>
                    <FaEye
                      size={30}
                      color="blue"
                      className="eye-icon"
                      onClick={() => navigate(`${ROUTER.Details}/${item.id}`)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Manager;
