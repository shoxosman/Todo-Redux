import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ todo: " first todo", iscompleted: false }],
};

const TodoAddSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTodo } = TodoAddSlice.actions;
export default TodoAddSlice.reducer;
