import React from "react";
import "../component/todos.css";
import deleteTodo from "../pages/Home.js";

import { Card, Checkbox, Grid, ListItemButton, ListItemText } from "@mui/material";
// import Home from "../pages/Home.js";

const Todos = ({ todos, deleteTodo }) => { 
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card>
            <ListItemButton component="a" href="#simple-list">

              <Checkbox 
              onClick={() => deleteTodo(todo.id)}
              color="primary"
              ></Checkbox>
              
              <ListItemText 
              primary={todo.content}
              secondary={todo.date}
              style={{marginTop:10}}
              />

            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
