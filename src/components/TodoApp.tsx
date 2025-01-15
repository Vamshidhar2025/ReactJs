import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import LoginForm from './Auth/LoginForm';
import TaskInput from './Tasks/TaskInput';
import TaskList from './Tasks/TaskList';
import Header from './Layout/Header';

const TodoApp: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <TaskInput />
          <TaskList />
        </div>
      </main>
    </div>
  );
};

export default TodoApp;