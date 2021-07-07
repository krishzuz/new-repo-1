/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./new.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, setUserTask } from "../redux/actions/newActions";
import ReactTooltip from "react-tooltip";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faCheck,
  faBell,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
export default function NewTask() {
  const userData1 = useSelector((state) => state.allData.UserData);
  const userData = useSelector((state) => state.addTask.UserAddTask);
  const [render, setRender] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setTaskMessage] = useState("");
  const [taskID, setTaskId] = useState("");
  const dispatch = useDispatch();
  const ACCESS_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjU1OTMwNTcsIm5iZiI6MTYyNTU5MzA1NywianRpIjoiZDRlYWFkZDgtM2Q2My00NDAwLWFlNTgtMDRmYjMyNmM2ZDhkIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.iQAQIgpBz7yW3_8s2ooM8XJkkpPG3iJUEEfFm9r-oT8";
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
  const updateDrop = (data) => {
    //time.
    var timestamp = data.task_time;
    var aps = ["AM", "PM"];

    var hours = Math.floor(timestamp / 60 / 60);
    var minutes = timestamp / 60 - hours * 60;
    var consa =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0");
    setTime(consa);
    //ends

    setTaskId(data.id);
    setTaskMessage(data.task_msg);
    setDate(data.task_date);
    var show = document.getElementById("addDetails");
    show.style.display = "block";
    document.getElementById("save").style.display = "none";
    document.getElementById("Sho").style.display = "none";
    document.getElementById("upd").style.display = "block";
    document.getElementById("deleteTask").style.display = "block";
  };
  const show = () => {
    document.getElementById("upd").style.display = "none";
    var show = document.getElementById("addDetails");
    show.style.display = "block";
    document.getElementById("save").style.display = "block";
    document.getElementById("Sho").style.display = "none";
    document.getElementById("deleteTask").style.display = "none";
  };
  const closeShow = () => {
    var show = document.getElementById("addDetails");
    show.style.display = "none";
    document.getElementById("Sho").style.display = "block";
  };

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
          "Bearer " + ACCESS_TOKEN

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
          "Bearer " + ACCESS_TOKEN

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

  //ends
  //request sending

  const addTask = async (data) => {
    var show = document.getElementById("addDetails");
    show.style.display = "none";
    document.getElementById("Sho").style.display = "block";
    setRender(true);
    const fetchAdd = await fetch(
      "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + ACCESS_TOKEN,

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
    setRender(false);
  };

  const deleteTask = async (data) => {
    var show = document.getElementById("addDetails");
    show.style.display = "none";
    document.getElementById("Sho").style.display = "block";

    setRender(true);
    const fetchDelete = await fetch(
      `https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${data}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + ACCESS_TOKEN,

          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error("error", err));
    setRender(false);
  };

  const updateTask = async (data) => {
    document.getElementById("Sho").style.display = "block";
    var show = document.getElementById("addDetails");
    show.style.display = "none";

    setRender(true);
    const fetchUpdate = await fetch(
      `https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${data}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + ACCESS_TOKEN,
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
    setRender(false);
  };

  //ends
  //useEffect
  useEffect(() => {
    fetch1();
    fetch2();
    fetch3();
    const getAll = async () => {
      setRender(true);
      const fetchGetAll = await fetch(
        "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + ACCESS_TOKEN

            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch(setUserTask(res.results));
        })
        .catch((err) => console.error("error", err));
    };
    getAll();
  }, [render]);
  //ends
  return (
    <div className="newContainer">
      <div className="sideNave"></div>
      <div className="addingTask">
        <div className="addingWrapper" id="adgWrapper">
          <div className="tasksCount">
            <p>
              TASKS
              <span>{userData.length}</span>
            </p>
          </div>
          <div className="Add">
            <p data-tip data-for="NewT" onClick={show}>
              +
            </p>
            <ReactTooltip id="NewT" place="right" effect="solid">
              New Task
            </ReactTooltip>
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
            <div className="date2">
              <label htmlFor="">Time</label>
              {/* <DatePicker
                selected={time}
                onChange={(date) => setTime(date)}
                value={time}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              /> */}
              <input
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                type="time"
                value={time}
              />
            </div>
          </div>
          <div className="AssignUsers">
            <label>Assign User</label>
            <select id="select">
              {newArray.map((e) => (
                <option>{e.first}</option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <button id="save" onClick={() => addTask(userData)}>
              Save
            </button>
            <button
              className="update"
              id="upd"
              onClick={() => updateTask(taskID)}
            >
              Save
            </button>
            <button onClick={closeShow} id="cancel">
              Cancel
            </button>
            <div className="delbtn">
              <button
                data-tip
                data-for="DelBtn"
                id="deleteTask"
                onClick={(r) => {
                  deleteTask(taskID);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <ReactTooltip id="DelBtn" place="top" effect="solid">
                Delete Task
              </ReactTooltip>
            </div>
          </div>
        </div>
        <div className="allShowData" id="Sho">
          <p id="noTask"></p>
          {userData.map((e) => (
            <>
              <div className="showData">
                <div className="addingWrapper1">
                  <div className="userImage">
                    <img
                      src="https://image.flaticon.com/icons/png/512/168/168723.png"
                      alt="user"
                    />
                  </div>
                  <div className="tasksCount1">
                    <p>{e.task_msg}</p>
                    <p>{moment(e.task_date).format("DD/MM/YYYY")}</p>
                  </div>
                  <div className="Add1">
                    <button
                      id="fEdit"
                      data-tip
                      data-for="Edit"
                      onClick={() => {
                        updateDrop(e);
                      }}
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <ReactTooltip id="Edit" place="top" effect="solid">
                      Edit Task
                    </ReactTooltip>
                    <div className="combinedBtns">
                      <button>
                        <FontAwesomeIcon icon={faBell} />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
