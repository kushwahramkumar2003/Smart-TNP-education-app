# 🎓 Smart TNP Education Platform

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/kushwahramkumar2003/Smart-TNP-education-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/kushwahramkumar2003/Smart-TNP-education-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/kushwahramkumar2003/Smart-TNP-education-app)
![GitHub license](https://img.shields.io/github/license/kushwahramkumar2003/Smart-TNP-education-app)

*Advanced Training and Placement Department Education Platform with Real-time Features*

[Report Bug](https://github.com/kushwahramkumar2003/Smart-TNP-education-app/issues) • [Request Feature](https://github.com/kushwahramkumar2003/Smart-TNP-education-app/issues)

</div>

## 🌟 Overview

Smart TNP Education Platform is a modern, feature-rich online learning system built specifically for college Training and Placement departments. Using a turborepo monorepo structure, it delivers a seamless experience across student and administrative portals with real-time communication capabilities.

## 💻 Technology Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socket.io&logoColor=white)

### Cloud & DevOps
![AWS](https://img.shields.io/badge/AWS_S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

## 🏗️ Project Structure

```
Smart-TNP-education-app/
├── apps/
│   ├── web/                 # Student portal (Vite + React)
│   │   ├── src/
│   │   │   ├── components/  # Reusable UI components
│   │   │   ├── pages/      # Route pages
│   │   │   ├── hooks/      # Custom React hooks
│   │   │   ├── services/   # API services
│   │   │   ├── store/      # Recoil state management
│   │   │   └── types/      # TypeScript types
│   │   
│   ├── admin/              # Admin portal
│   │   ├── src/
│   │   │   ├── components/ # Admin UI components
│   │   │   ├── pages/     # Admin routes
│   │   │   ├── hooks/     # Admin-specific hooks
│   │   │   └── services/  # Admin API services
│   │   
│   ├── api/                # Main backend service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middlewares/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   └── Dockerfile
│   │   
│   └── ws/                 # WebSocket service
│       └── src/
│           ├── index.js
│           └── prisma.js
│
├── packages/               # Shared packages
│   ├── ui/                # Shared UI components
│   ├── store/             # Shared state management
│   ├── config-typescript/ # TypeScript configs
│   ├── config-eslint/     # ESLint configs
│   ├── tailwind-config/   # Tailwind configs
│   └── db/                # Database package
│       └── prisma/        # Prisma schema & migrations
│
└── turbo.json             # Turborepo config
```

## ✨ Key Features

### 🎓 Student Portal (Web)
- Live virtual classrooms using WebRTC
- Real-time notifications via WebSocket
- Course enrollment and tracking
- Assignment submission with AWS S3
- Interactive UI with Framer Motion animations
- Secure authentication with JWT

### 👨‍💼 Admin Portal
- Comprehensive dashboard
- Student management
- Course administration
- Live session management
- Resource allocation
- Performance analytics

### 🔄 Real-time Features
- WebRTC-powered live classes
- Live Kit integration
- Instant messaging
- Real-time status updates
- Activity tracking

## 🛠️ Development Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/kushwahramkumar2003/Smart-TNP-education-app.git
   cd Smart-TNP-education-app
   npm install
   ```

2. **Database Setup**
   ```bash
   cd packages/db
   ./setupDB.sh
   npx prisma migrate dev
   ```

3. **Environment Configuration**
   ```bash
   # Set up environment files for each app
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env
   cp apps/admin/.env.example apps/admin/.env
   cp apps/ws/.env.example apps/ws/.env
   ```

4. **Start Development Services**
   ```bash
   # Start all services
   npm run dev

   # Start specific apps
   npm run dev --filter=web
   npm run dev --filter=admin
   npm run dev --filter=api
   npm run dev --filter=ws
   ```

## 🚀 Deployment

The project uses GitHub Actions for CI/CD and deploys to:
- Frontend: Vercel
- Backend: AWS (with Docker containers)
- Database: AWS RDS (PostgreSQL)
- WebSocket: AWS EC2

## 🔒 Environment Variables

Required environment variables for each app:

```bash
# apps/api/.env
DATABASE_URL=
JWT_SECRET=
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_BUCKET_NAME=

# apps/web/.env & apps/admin/.env
VITE_API_URL=
VITE_WS_URL=

# apps/ws/.env
DATABASE_URL=
WS_PORT=
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Training and Placement Department faculty
- College administration
- All contributors

## 👥 Contributors

Thanks goes to these wonderful people:

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/kushwahramkumar2003">
          <img src="https://avatars.githubusercontent.com/kushwahramkumar2003" width="100px" height="100px" style="border-radius: 50%; object-fit: cover;" alt="Ramkumar kushwah"/>
          <br />
          <sub><b>Ramkumar kushwah</b></sub>
          <br />
          <sub>Project Lead</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/pankaj143p">
          <img src="https://avatars.githubusercontent.com/pankaj143p" width="100px" height="100px" style="border-radius: 50%; object-fit: cover;" alt="Pankaj Prajapati"/>
          <br />
          <sub><b>Pankaj Prajapati</b></sub>
          <br />
          <sub>Backend Developer</sub>
        </a>
      </td>
    </tr>
  </table>
</div>

---

<div align="center">

Made with ❤️ by [TNP Education App Team](#-contributors)

[⬆ Back to Top](#-smart-tnp-education-platform)

</div>