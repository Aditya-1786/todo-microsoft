import React, { useEffect, useState } from "react";
import "./Tasks.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { TextField, useRadioGroup } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import firebase from "firebase";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAfVcZjrEdVu3F0_Yf7dd9K939AbA_t5tk",
  authDomain: "aditya-todo-67226.firebaseapp.com",
  projectId: "aditya-todo-67226",
});

var db = firebase.firestore();

const Tasks = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [enteredTask, setEnteredTask] = useState("");
  const [list, setList] = useState(props.t);
  const [isFav, setIsFav] = useState(false);
  var task = [];
  useEffect(() => {
    const docRef = db.collection("data");
    docRef.get().then(function (querySnapshot) {
      const task = querySnapshot.docs.map((doc) => doc.data());
      // querySnapshot.docs.map((doc) => console.log(doc.id));
      if (!props.fav) {
        setList(
          task.filter((t) => {
            if (t.user === props.us.Mail) {
              return t;
            }
          })
        );
      } else {
        setList(
          task.filter((t) => {
            if (t.user === props.us.Mail && t.isFav) {
              return t;
            }
          })
        );
      }
    });
  }, [props.fav]);
  // console.log(db.collection("data").get());
  // console.log(props.t);
  // console.log(list);
  // useEffect(() => {
  //   if (props.fav) {
  //     setList(
  //       list.filter((t) => {
  //         if (t.isFav) return t;
  //       })
  //     );
  //   } else {
  //     // setList(
  //     //   task.filter((t) => {
  //     //     if (t.user === props.us.Mail) {
  //     //       return t;
  //     //     }
  //     //   })
  //     // );
  //     console.log(task);
  //   }
  // }, [props.fav]);
  const inputHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const doc = db.collection("data").doc();
    setList((prevTasks) => {
      return [
        ...prevTasks,
        {
          description: event.target[0].value,
          id: doc.id,
          isHover: false,
          isFav: false,
          user: props.us.Mail,
        },
      ];
    });
    doc.set({
      description: event.target[0].value,
      id: doc.id,
      isHover: false,
      isFav: false,
      user: props.us.Mail,
    });
    setEnteredTask("");
  };
  // console.log(props.f);

  // if (!props.f) {
  //   setList(
  //     list.filter((item) => {
  //       if (item.isFav) return item;
  //     })
  //   );
  // }

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
                db.collection("data").doc(task.id).update({
                  isFav: task.isFav,
                });
              }}
            >
              {!task.isFav && <StarBorderOutlinedIcon className="favorite" />}
              {task.isFav && <StarIcon className="favorite" />}
              <DeleteIcon
                className="delete"
                onClick={async () => {
                  console.log(task.id);
                  db.collection("data").doc(task.id).delete();
                  setList(
                    list.filter((item) => {
                      if (item !== task) return item;
                    })
                  );
                }}
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
