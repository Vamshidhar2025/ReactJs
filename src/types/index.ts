export interface Task {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  weather?: {
    temp: number;
    description: string;
    icon: string;
  };
  createdAt: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}