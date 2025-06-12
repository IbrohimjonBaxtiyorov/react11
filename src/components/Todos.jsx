import React, { useEffect, useState } from "react";
import { useAppStore } from "../lib/zustand/store";
import { Button, Card } from "@mui/material";
export default function Todos() {
  const { todos, updateTodo, removeTodo } = useAppStore();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [JSON.stringify(todos)]);

  return (
    <div className="carttodo">
      {todos.length > 0 ? (
        todos.map(({ title, completed, id }) => {
          return (
            <Card variant="outlined">
              <h2>{title}</h2>
              <p>{completed ? "Bajarilgan" : "Bajarilmagan"}</p>
              <Button
                onClick={() => {
                  const yes = confirm("Rostanham o'chirishni hohlaysizmi");
                  yes && removeTodo(id);
                }}
                color="error"
                variant="contained"
              >
                Delete
              </Button>

              <Button onClick color="" variant="contained">
                edit
              </Button>
            </Card>
          );
        })
      ) : (
        <h1>Malumot mavjud emas</h1>
      )}
    </div>
  );
}
