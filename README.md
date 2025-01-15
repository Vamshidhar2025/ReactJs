# Advanced React Todo Application

A beautiful and feature-rich todo application built with React, Redux, and TypeScript. The application includes user authentication, task prioritization, and weather integration.

![Todo App Screenshot](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## Features

- 🔐 User Authentication (Login/Logout)
- ✅ Task Management
  - Add and remove tasks
  - Set task priorities (High, Medium, Low)
  - Sort tasks by priority and creation date
- 🌤️ Weather Integration
- 💾 Persistent Storage
- 📱 Responsive Design
- 🎨 Beautiful UI with Tailwind CSS
- 🔄 Redux State Management

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- Redux Persist
- Tailwind CSS
- Lucide React Icons
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Usage

1. Login using any email and password (mock authentication)
2. Add tasks using the input field at the top
3. Set priority levels for tasks (Low, Medium, High)
4. Delete tasks using the trash icon
5. Tasks are automatically sorted by priority and creation date
6. Weather information is displayed for relevant tasks

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   ├── Layout/
│   └── Tasks/
├── store/
│   └── slices/
├── services/
├── types/
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Live Demo

Visit the live application at: [https://cerulean-babka-9eb5d8.netlify.app](https://cerulean-babka-9eb5d8.netlify.app)

## Acknowledgments

- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [OpenWeatherMap API](https://openweathermap.org/) for weather data
