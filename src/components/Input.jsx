import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useAppStore } from "../lib/zustand/store";
import { useState } from "react";
import "./Input.css";

export default function Input() {
  const { add, clear } = useAppStore();
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    if (!title || title.length < 5) {
      setError(true);
      return;
    }
    const newTodo = {
      completed: false,
      title,
      id: window.crypto.randomUUID(),
    };
    add(newTodo);
    e.target.reset();
    setError(false);
  }

  return (
    <form action="" className="formtodo" onSubmit={handleSubmit}>
    <div className="form-data">
        <FormControl variant="outlined">
        <div>
          <InputLabel htmlFor="todo">Todo</InputLabel>
          <OutlinedInput
            className="input-wrapper"
            name="title"
            placeholder="Enter todo title"
            id="todo"
            label="Todo"
            error={error}
          />
        </div>
      </FormControl>
      <Button type="submit" variant="contained" className="btn">
        Add ✅
      </Button>
    </div>

      <Button onClick={clear} color="error" variant="contained" className="btn">
        Clear ❌
      </Button>
    </form>
  );
}
