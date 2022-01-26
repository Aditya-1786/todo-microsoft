import React, { useState } from "react";
import "./Tasks.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { TextField } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

const Tasks = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [enteredTask, setEnteredTask] = useState("");
  const [list, setList] = useState(props.t);
  const [isFav, setIsFav] = useState(false);

  const inputHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setList((prevTasks) => {
      return [
        ...prevTasks,
        {
          description: event.target[0].value,
          id: Math.random().toString(),
          isHover: false,
          isFav: false,
        },
      ];
    });
    setEnteredTask("");
  };
  console.log(props.f);
  return (
    <div className="tasks-container">
      <div className="taskss">
        {list.map((task, index) => (
          <div className="task-body" key={index}>
            <div
              className="circle"
              onMouseEnter={() => {
                setIsHover(true);
                task.isHover = true;
              }}
              onMouseLeave={() => {
                setIsHover(false);
                task.isHover = false;
              }}
            >
              {!task.isHover && <CircleOutlinedIcon className="checking" />}
              {task.isHover && (
                <CheckCircleOutlineIcon className="checking"></CheckCircleOutlineIcon>
              )}
            </div>
            <div className="description">
              <div>{task.description}</div>
              <div>Tasks</div>
            </div>
            <div
              className="starr"
              onClick={() => {
                if (!isFav) setIsFav(true);
                else setIsFav(false);
                if (!task.isFav) task.isFav = true;
                else task.isFav = false;
              }}
            >
              {!task.isFav && <StarBorderOutlinedIcon className="favorite" />}
              {task.isFav && <StarIcon className="favorite" />}
              <DeleteIcon
                className="delete"
                onClick={() =>
                  setList(
                    list.filter((item) => {
                      if (item !== task) return item;
                    })
                  )
                }
              ></DeleteIcon>
            </div>
          </div>
        ))}
      </div>
      <form className="task-form" onSubmit={submitHandler}>
        <div className="input-field">
          <input
            className="input-box"
            type="text"
            value={enteredTask}
            placeholder=" + Add Task"
            onChange={inputHandler}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default Tasks;
