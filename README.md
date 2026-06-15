# SkillForge

A comprehensive full-stack web application designed to help users analyze their skills, track learning progress, and discover relevant courses based on their expertise and interests.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **GitHub Analyzer**: Analyze GitHub repositories and extract skills
- **Resume Parser**: Parse and analyze resume documents
- **Skill Tracking**: Track and manage user skills
- **Course Management**: Browse and enroll in courses
- **Skill Analytics**: Visual analytics for skill development
- **User Dashboard**: Personalized dashboard with learning insights
- **Roadmap Generator**: AI-powered learning roadmaps

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **PostCSS** - CSS processor

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication

## 📁 Project Structure

```
SkillForge/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Context API for state management
│   │   ├── services/        # API service calls
│   │   └── assets/          # Static assets
│   └── package.json         # Frontend dependencies
├── backend/                  # Node.js/Express backend
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── config/              # Configuration files
│   ├── utils/               # Utility functions
│   └── server.js            # Entry point
└── package.json             # Root dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB running locally or connection string

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BhanuPrasad-99/SkillForge.git
   cd SkillForge
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Setup

Create `.env` files in both `backend/` and `frontend/` directories:

**backend/.env**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skillforge
JWT_SECRET=your_secret_key
GITHUB_TOKEN=your_github_token
```

**frontend/.env**
```
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

**Backend**
```bash
cd backend
npm start
```

**Frontend** (in another terminal)
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill
- `DELETE /api/skills/:id` - Delete skill

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course
- `GET /api/courses/:id` - Get course details

### GitHub Analysis
- `POST /api/github/analyze` - Analyze GitHub profile

### Resume
- `POST /api/resume/parse` - Parse resume file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Bhanu Prasad** - [GitHub](https://github.com/BhanuPrasad-99)

## 📧 Contact

For questions or feedback, please reach out via email or create an issue in the repository.

---

**Happy Learning! 🎓**