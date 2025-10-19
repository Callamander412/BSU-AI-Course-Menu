# BSU AI Projects - Deployment Guide

## Project Overview
A multi-page React application featuring AI course project tutorials for Bemidji State University students. The application includes an interactive carousel homepage and five comprehensive tutorial pages with progress tracking.

## Technology Stack
- **Frontend**: React 19.0.0, React Router 7.5.1, Shadcn UI components
- **Backend**: FastAPI 0.110.1, Python 3.x
- **Database**: MongoDB (Motor async driver)
- **Build Tool**: Craco (Create React App Configuration Override)
- **Styling**: Tailwind CSS, Custom CSS

---

## Pre-Deployment Checklist

### ✅ Verified Components
- [x] All 5 tutorial pages load correctly
- [x] Homepage carousel functions properly
- [x] All images, audio, and video elements load
- [x] Progress tracking with local storage works
- [x] Navigation between pages is smooth
- [x] No hardcoded URLs in source code
- [x] Build completes successfully
- [x] BSU theme consistent across all pages
- [x] Responsive design works on mobile

### 📋 Files to Review Before Deployment
1. **Frontend Environment Variables** (`/app/frontend/.env`):
   - `REACT_APP_BACKEND_URL` - Update to your backend API URL
   - `WDS_SOCKET_PORT` - Update for your hosting environment

2. **Backend Environment Variables** (`/app/backend/.env`):
   - `MONGO_URL` - Update to your MongoDB connection string
   - `DB_NAME` - Update to your database name
   - `CORS_ORIGINS` - Update to include your frontend domain

---

## Deployment Instructions

### Option 1: Static Deployment (Frontend Only - Recommended)
Since this is primarily a tutorial/informational site with minimal backend usage, you can deploy just the frontend as a static site.

#### Services Compatible:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Cloudflare Pages

#### Steps:
1. **Build the frontend**:
   ```bash
   cd /app/frontend
   yarn install
   yarn build
   ```

2. **Deploy the `build` folder**:
   - The `build` folder contains all static assets
   - Upload to your hosting service
   - Configure custom domain if needed

3. **Environment Variables** (if using backend):
   - Set `REACT_APP_BACKEND_URL` in your hosting platform's environment settings
   - Note: Most static hosting services support environment variables at build time

#### Example: Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from frontend directory
cd /app/frontend
vercel --prod
```

#### Example: Netlify Deployment
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy from frontend directory
cd /app/frontend
netlify deploy --prod --dir=build
```

---

### Option 2: Full Stack Deployment (Frontend + Backend)

#### Services Compatible:
- Heroku
- Railway
- Render
- DigitalOcean App Platform
- AWS Elastic Beanstalk
- Google Cloud Run

#### Backend Deployment Steps:

1. **Install Python dependencies**:
   ```bash
   cd /app/backend
   pip install -r requirements.txt
   ```

2. **Set Environment Variables**:
   ```bash
   MONGO_URL=your_mongodb_connection_string
   DB_NAME=your_database_name
   CORS_ORIGINS=https://your-frontend-domain.com
   ```

3. **Run Backend**:
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001
   ```

4. **Configure MongoDB**:
   - Use MongoDB Atlas for cloud hosting
   - Or deploy your own MongoDB instance
   - Update `MONGO_URL` accordingly

#### Frontend Deployment Steps:

1. **Update Backend URL**:
   ```bash
   # In /app/frontend/.env
   REACT_APP_BACKEND_URL=https://your-backend-api.com
   ```

2. **Build and Deploy**:
   ```bash
   cd /app/frontend
   yarn install
   yarn build
   # Deploy build folder to your hosting service
   ```

---

### Option 3: Docker Deployment

#### Create Docker Compose (if not exists):
```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  backend:
    build: ./backend
    ports:
      - "8001:8001"
    environment:
      - MONGO_URL=mongodb://mongodb:27017
      - DB_NAME=bsu_ai_projects
      - CORS_ORIGINS=*
    depends_on:
      - mongodb

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_BACKEND_URL=http://localhost:8001

volumes:
  mongo_data:
```

#### Deploy with Docker:
```bash
docker-compose up -d
```

---

## File Structure for Deployment

### Critical Files:
```
/app/
├── frontend/
│   ├── .env                    # UPDATE: Backend URL
│   ├── package.json            # Dependencies
│   ├── craco.config.js         # Build configuration
│   ├── tailwind.config.js      # Styling
│   ├── public/                 # Static assets
│   └── src/
│       ├── App.js              # Main routing
│       ├── pages/              # All tutorial pages
│       │   ├── HomePage.jsx
│       │   ├── BobbleheadPage.jsx
│       │   ├── MusicGenPage.jsx
│       │   ├── VideoGenPage.jsx
│       │   ├── KritaPage.jsx
│       │   └── PortfolioPage.jsx
│       └── components/         # Shadcn UI components
│
└── backend/
    ├── .env                    # UPDATE: MongoDB URL
    ├── requirements.txt        # Dependencies
    └── server.py               # FastAPI server
```

---

## Post-Deployment Testing

### Test Checklist:
1. **Homepage**:
   - [ ] Carousel navigation works (left/right arrows)
   - [ ] All 5 project cards display
   - [ ] Hover tooltips appear
   - [ ] "Explore" buttons navigate correctly

2. **Tutorial Pages**:
   - [ ] All pages load without errors
   - [ ] Images/media load correctly
   - [ ] Accordion sections expand/collapse
   - [ ] Checkboxes work
   - [ ] Progress bars update
   - [ ] Local storage persists

3. **Navigation**:
   - [ ] All routes work
   - [ ] Back button functions
   - [ ] Direct URL access works

4. **Performance**:
   - [ ] Page load times < 3 seconds
   - [ ] No console errors
   - [ ] Responsive on mobile devices

---

## Common Issues & Solutions

### Issue 1: Images Not Loading
**Solution**: 
- Check image URLs are accessible
- Verify CORS settings if images are from external sources
- Ensure all image files are included in the build

### Issue 2: Backend API Not Accessible
**Solution**:
- Verify `REACT_APP_BACKEND_URL` is correct
- Check CORS settings in backend
- Ensure backend API routes use `/api` prefix

### Issue 3: Progress Not Persisting
**Solution**:
- Check browser's local storage is enabled
- Verify no incognito/private browsing mode
- Ensure local storage keys are consistent

### Issue 4: Build Fails
**Solution**:
- Clear cache: `rm -rf node_modules && yarn install`
- Check Node.js version compatibility
- Verify all dependencies are installed

---

## Environment Variables Reference

### Frontend (.env)
```bash
REACT_APP_BACKEND_URL=https://your-api-domain.com
WDS_SOCKET_PORT=443
```

### Backend (.env)
```bash
MONGO_URL=mongodb://your-mongo-host:27017
DB_NAME=bsu_ai_projects
CORS_ORIGINS=https://your-frontend-domain.com
```

---

## Build Optimization

### Frontend Build Size:
- Current gzipped size: ~110 KB (JS) + ~14 KB (CSS)
- All assets are optimized for production
- Code splitting enabled via React Router

### Performance Tips:
1. Enable CDN for static assets
2. Configure caching headers
3. Use compression (gzip/brotli)
4. Enable HTTP/2
5. Add service worker for offline support (optional)

---

## Support & Maintenance

### Regular Maintenance Tasks:
- [ ] Update dependencies monthly
- [ ] Monitor console for errors
- [ ] Check image hosting services
- [ ] Backup local storage data if needed
- [ ] Update content/tutorials as needed

### Updating Content:
- Tutorial content is in individual page files
- Images are embedded or linked
- CSS styling in dedicated `.css` files
- Easy to update without rebuild (for static assets)

---

## Additional Notes

### Pages Overview:
1. **Homepage (/)** - Interactive carousel with 5 project options
2. **Bobblehead (/bobblehead)** - 3D modeling with AI tutorial
3. **Music Generation (/music-generation)** - AI music creation with Suno
4. **Video Generation (/video-generation)** - AI video creation tutorial
5. **Krita LORA (/krita-lora)** - AI art training tutorial
6. **Portfolio (/portfolio)** - Website creation with Emergent

### Key Features:
- Progress tracking with local storage
- Collapsible accordion sections
- Interactive checkboxes
- Embedded media (images, audio, video)
- BSU-themed design (dark green/teal)
- Fully responsive
- No authentication required

### Backend Usage:
- Backend is minimal (basic FastAPI structure)
- Used for potential future features
- Can be omitted for static deployment
- Sample endpoints at `/api/status`

---

## Contact & Credits

**Bemidji State University**
AI Course Projects Tutorial Site

Built with: React, FastAPI, MongoDB, Tailwind CSS, Shadcn UI

---

**Last Updated**: October 2024
**Version**: 1.0
**Status**: Production Ready ✅
