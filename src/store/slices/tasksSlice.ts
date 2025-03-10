import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TasksState, Task } from '../../types';

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    updateTaskWeather: (state, action: PayloadAction<{ id: string; weather: Task['weather'] }>) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        task.weather = action.payload.weather;
      }
    },
  },
});

export const { addTask, removeTask, setTasks, updateTaskWeather } = tasksSlice.actions;
export default tasksSlice.reducer;