import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../store/slices/tasksSlice';
import { Task } from '../../types';
import { Trash2, Cloud } from 'lucide-react';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
        </div>
        {task.weather && (
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Cloud className="h-4 w-4 mr-1" />
            <span>{task.weather.temp}°C - {task.weather.description}</span>
          </div>
        )}
      </div>
      <button
        onClick={() => dispatch(removeTask(task.id))}
        className="ml-4 p-2 text-gray-400 hover:text-red-500 focus:outline-none"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default TaskItem;