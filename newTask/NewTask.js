/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./new.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, setUserTask } from "../redux/actions/newActions";
export default function NewTask() {
  const userData1 = useSelector((state) => state.allData.UserData);
  const userData = useSelector((state) => state.addTask.UserAddTask);

  const [accessToken, setAccessToken] = useState("");
  const [allUserData, setAllUserData] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState("");
  const [message, setTaskMessage] = useState("");
  const [taskID, setTaskId] = useState("");
  const dispatch = useDispatch();
  console.log("all", allUserData);
  //array
  const newArray = [];
  const maps = userData1.map((user) => {
    if (user.user_status === "accepted") {
      newArray.push(user);
    }
    return user;
  });
  var a = time.split(":");
  var seconds = +a[0] * 60 * 60 + +a[1] * 60;
  //ends

  //functions
  function updateDrop(data) {
    setTaskId(data.id);
    setTaskMessage(data.task_msg);
    setDate(data.task_date);
    var show = document.getElementById("addDetails");
    show.style.display = "block";
  }
  function show() {
    var show = document.getElementById("addDetails");
    show.style.display = "block";
  }
  function closeShow() {
    setTaskMessage("");
    setDate("");
    var show = document.getElementById("addDetails");
    show.style.display = "none";
  }
  //ends

  //fetching data
  const fetch1 = async () => {
    const fetchft1 = await fetch("https://stage.api.sloovi.com/login", {
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
    const fetchft2 = await fetch("https://stage.api.sloovi.com/user", {
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
    const fetchft3 = await fetch("https://stage.api.sloovi.com/team", {
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

  const getAll = async () => {
    const fetchGetAll = await fetch(
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
      .then((res) => {
        dispatch(setUserTask(res.results));
        setAllUserData(res.results);
      })
      .catch((err) => console.error("error", err));
  };
  //ends
  //request sending
  async function addTask(data) {
    alert("Are You Sure, Do You Want To Add?");
    const fetchAdd = await fetch(
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
          task_date: `${date}`,
          task_time: seconds,
          is_completed: 0,
          time_zone: 19800,
          task_msg: `${message}`,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error("error", err));
  }

  async function deleteTask(data) {
    alert("Are You Sure ?");
    const fetchDelete = await fetch(
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
      .catch((err) => console.error("error", err));
  }

  async function updateTask(data) {
    setTime("");
    const fetchUpdate = await fetch(
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
          task_date: `${date}`,
          task_time: seconds,
          is_completed: 0,
          time_zone: 19800,
          task_msg: `${message}`,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error("error", err));
  }

  //ends
  //useEffect
  useEffect(() => {
    fetch1();
    fetch2();
    fetch3();
    getAll();
  }, []);
  //ends
  return (
    <div className="newContainer">
      <div className="sideNave">
        <h3 id="h3">Sidenav</h3>
      </div>
      <div className="addingTask">
        <div className="addingWrapper">
          <div className="tasksCount">
            <p>TASKS {userData.length}</p>
          </div>
          <div className="Add">
            <p onClick={show}>+</p>
          </div>
        </div>
        <div className="addingDetails" id="addDetails">
          <div className="taskDes">
            <label htmlFor="">Task Description</label>
            <input
              onChange={(e) => {
                setTaskMessage(e.target.value);
              }}
              type="text"
              name="task"
              value={message}
            />
          </div>
          <div className="dateAndTime">
            <div className="date1">
              <label htmlFor="">Date</label>
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                value={date}
              />
            </div>
            <div className="date1">
              <label htmlFor="">Time</label>
              <input
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                type="time"
              />
            </div>
          </div>
          <div className="AssignUsers">
            <label>Assign User</label>
            <input
              onChange={(e) => {
                setUser(e.target.value);
              }}
              list="userName"
              type="text"
            />
            <datalist id="userName">
              {newArray.map((e) => (
                <option value={e.first} />
              ))}
            </datalist>
          </div>
          <div className="buttons">
            <button onClick={closeShow} id="cancel">
              Cancel
            </button>
            <button id="save" onClick={() => addTask(userData)}>
              Save
            </button>
            <button className="update" onClick={() => updateTask(taskID)}>
              Update
            </button>
          </div>
        </div>
        <div className="allShowData">
          {userData.map((e) => (
            <>
              <div className="showData">
                <div className="addingWrapper1">
                  <div className="userImage">
                    <img
                      src="https://img.icons8.com/material-rounded/50/000000/user.png"
                      alt="user"
                    />
                  </div>
                  <div className="tasksCount1">
                    <p>{e.task_msg}</p>
                    <p>{e.task_date}</p>
                  </div>
                  <div className="Add1">
                    <img
                      onClick={() => {
                        updateDrop(e);
                      }}
                      width="20%"
                      src="https://image.flaticon.com/icons/png/512/999/999750.png"
                      alt="update"
                    />
                    <img
                      onClick={(r) => {
                        deleteTask(e.id);
                      }}
                      width="20%"
                      src="https://image.flaticon.com/icons/png/512/1214/1214594.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="modal"></div>
    </div>
  );
}
