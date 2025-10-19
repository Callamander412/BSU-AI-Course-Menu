# BSU AI Projects - Tutorial Website

A comprehensive, interactive web application featuring AI course project tutorials for Bemidji State University students.

## 🎯 Project Overview

This multi-page React application provides students with five distinct AI project tutorials, each featuring:
- Step-by-step instructions
- Interactive progress tracking
- Rich media content (images, audio, video)
- Professional BSU-themed design
- Responsive layout for all devices

## 🚀 Features

### Homepage
- **Interactive Carousel**: Browse through 5 AI project options
- **Hover Tooltips**: Quick descriptions for each project
- **Smooth Navigation**: Seamless transitions to tutorial pages

### Tutorial Pages
1. **3D Bobblehead Creation** - Learn AI-powered 3D modeling with Blender
2. **AI Music Generation** - Create music with Suno AI
3. **AI Video Creation** - Generate videos using AI tools
4. **Krita LORA Training** - Train custom AI art models
5. **Portfolio Website** - Build professional portfolios with Emergent

### Interactive Elements
- ✅ **Progress Tracking**: Checkboxes and progress bars
- 📦 **Local Storage**: Save progress across sessions
- 🎨 **Collapsible Sections**: Accordion-style content organization
- 🎵 **Media Players**: Embedded audio and video
- 🖼️ **Image Galleries**: Tutorial screenshots and examples

## 🛠️ Technology Stack

### Frontend
- **React 19.0.0** - UI framework
- **React Router 7.5.1** - Client-side routing
- **Shadcn UI** - Component library
- **Tailwind CSS** - Styling
- **Embla Carousel** - Carousel functionality

### Backend
- **FastAPI 0.110.1** - Python web framework
- **MongoDB** - Database (with Motor async driver)
- **Pydantic** - Data validation

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- Python 3.9+
- MongoDB
- Yarn package manager

### Frontend Setup
```bash
cd frontend
yarn install
yarn start
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

## 🔧 Configuration

### Frontend Environment Variables
Create `/app/frontend/.env`:
```bash
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=443
```

### Backend Environment Variables
Create `/app/backend/.env`:
```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=bsu_ai_projects
CORS_ORIGINS=*
```

## 🏗️ Build for Production

```bash
cd frontend
yarn build
```

The build folder will contain optimized static files ready for deployment.

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Interactive carousel with project selection |
| `/bobblehead` | Bobblehead Tutorial | 3D modeling with AI |
| `/music-generation` | Music Tutorial | AI music creation |
| `/video-generation` | Video Tutorial | AI video generation |
| `/krita-lora` | Krita Tutorial | AI art model training |
| `/portfolio` | Portfolio Tutorial | Website creation |

## 🎨 Design System

### Color Palette
- **Primary**: Dark Forest Green (`#0d3b2e`, `#0a2e23`)
- **Accent**: Teal/Cyan (`#22d3ee`, `#06b6d4`)
- **Background**: Dark Grey (`#1a1a1a`)
- **Text**: White/Light Grey

### Typography
- Headers: Clean, modern sans-serif
- Body: Readable, professional font stack

## 🧪 Testing

All pages and features have been comprehensively tested:
- ✅ Homepage carousel navigation
- ✅ All tutorial pages load correctly
- ✅ Interactive elements (accordions, checkboxes)
- ✅ Progress tracking and local storage
- ✅ Media loading (images, audio, video)
- ✅ Responsive design
- ✅ Cross-browser compatibility

## 📄 Project Structure

```
/app
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── BobbleheadPage.jsx
│   │   │   ├── MusicGenPage.jsx
│   │   │   ├── VideoGenPage.jsx
│   │   │   ├── KritaPage.jsx
│   │   │   └── PortfolioPage.jsx
│   │   └── components/
│   ├── package.json
│   └── .env
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## 🚀 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions including:
- Static hosting options (Vercel, Netlify, etc.)
- Full-stack deployment
- Docker deployment
- Environment configuration
- Post-deployment testing

## 📝 License

Built for Bemidji State University - AI Course Projects

## 🤝 Contributing

This is an educational project for BSU students. For updates or issues, please contact the course administrator.

## 📧 Support

For technical support or questions about the tutorials, please refer to the course materials or contact your instructor.

---

**Bemidji State University** | AI Course Projects | Version 1.0
