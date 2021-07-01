/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, setUserTask } from "./redux/actions/newActions";

import "./style.css";

function User() {
  const userD = useSelector((state) => state.allData.UserData);
  const userD1 = useSelector((state) => state.addTask.UserAddTask);
  console.log(userD1.length);
  const [accessToken, setAccessToken] = useState("");
  const [d, setD] = useState("");
  const [t, setT] = useState("");
  const [i, setI] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  //   console.log(t.replace(/:/g, ""));

  const newArray = [];
  const maps = userD.map((user) => {
    if (user.user_status === "accepted") {
      newArray.push(user);
    }
    return user;
  });

  const fetch1 = async () => {
    fetch("https://stage.api.sloovi.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "smithcheryl@yahoo.com",
        password: "12345678",
      }),
    })
      .then(function (response) {
        response.json().then(function (data) {
          setAccessToken(data.results.token);
          return data;
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  };
  const fetch2 = async () => {
    fetch("https://stage.api.sloovi.com/user", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjUxMjIyNTEsIm5iZiI6MTYyNTEyMjI1MSwianRpIjoiOWE5ZjQwNzgtNDVmMy00NWMwLWJlMWEtZWJiOGJmZjM3MGRhIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.4QiAK2edYxGpKJm-EEIVqKL-Nh5mhq3WfNBqdwM0gQA",

        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        response.json().then(function (data) {
          return data;
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  };
  const fetch3 = async () => {
    fetch("https://stage.api.sloovi.com/team", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjUxMjIyNTEsIm5iZiI6MTYyNTEyMjI1MSwianRpIjoiOWE5ZjQwNzgtNDVmMy00NWMwLWJlMWEtZWJiOGJmZjM3MGRhIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.4QiAK2edYxGpKJm-EEIVqKL-Nh5mhq3WfNBqdwM0gQA",

        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        response.json().then(function (data) {
          dispatch(setUserDetails(data.results.data));
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  };
  //Adding
  const Add = () => {
    fetch(
      "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + `${accessToken}`,

          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assigned_user: "user_6beec459915f4507a8d2520e60e03c3e",
          task_date: `${d}`,
          task_time: 1456,
          is_completed: 0,
          time_zone: 19800,
          task_msg: `${message}`,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log("1", res))
      .catch((err) => console.error("error", err));
  };

  //getAll

  const getAll = () => {
    fetch(
      "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjUxMjIyNTEsIm5iZiI6MTYyNTEyMjI1MSwianRpIjoiOWE5ZjQwNzgtNDVmMy00NWMwLWJlMWEtZWJiOGJmZjM3MGRhIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.4QiAK2edYxGpKJm-EEIVqKL-Nh5mhq3WfNBqdwM0gQA",

          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => dispatch(setUserTask(res.results)))
      .catch((err) => console.error("error", err));
  };
  //update user
  const update = (data) => {
    fetch(
      `https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${data}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + `${accessToken}`,

          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assigned_user: "user_6beec459915f4507a8d2520e60e03c3e",
          task_date: `${d}`,
          task_time: 780,
          is_completed: 0,
          time_zone: 19800,
          task_msg: `${message}`,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error("error", err));
  };

  //delete
  const deleteop = (data) => {
    fetch(
      `https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${data}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + `${accessToken}`,

          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res.results))
      .catch((err) => console.error("error", err));
  };

  //clearAll

  useEffect(() => {
    fetch1();
    fetch2();
    fetch3();
    getAll();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h3>Tasks {userD1.length}</h3>+
      </div>
      <div className="taskContainer">
        <div className="taskDes">
          <label htmlFor="">Task Description</label>
          <input
            type="text"
            name="task"
            id=""
            placeholder="Task Description"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="dateAndTime">
          <div className="date1">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name=""
              id=""
              onChange={(e) => {
                setD(e.target.value);
              }}
            />
          </div>
          <div className="date1">
            <label htmlFor="">Time</label>
            <input
              type="time"
              name=""
              id=""
              onChange={(e) => {
                setT(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="AssignUsers">
          <label>Assign User</label>
          <select>
            {newArray.map((e) => (
              <option key={e.id}>
                {e.first} ({e.user_status})
              </option>
            ))}
          </select>
        </div>
        <div className="buttons">
          <button>Cancel</button>
          <button id="save" onClick={Add}>
            Save
          </button>
        </div>
      </div>
      <div className="tables">
        <table>
          <tr>
            <th>User_id</th>

            <th>Time</th>
            <th>Date</th>
            <th>Iscomplete</th>
            <th>Task Message</th>
            <th>Delete & Update</th>
          </tr>
          {userD1.map((dat) => {
            return (
              <tr>
                <td>{dat.user_id}</td>

                <td>{dat.task_time}</td>
                <td>{dat.task_date}</td>
                <td>{dat.is_completed}</td>
                <td>{dat.task_msg}</td>
                <td>
                  <button
                    style={{
                      margin: "2px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      padding: ".5rem",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      deleteop(dat.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      margin: "2px",
                      backgroundColor: "orange",
                      color: "black",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      padding: ".5rem",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      update(dat.id);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default User;
