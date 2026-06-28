# 🚀 Passos NASA Dashboard

> A modular backend-driven dashboard that integrates multiple NASA Open APIs into a single modern web application.

![Dashboard](Nasa.png)

---

# 🌌 About

Passos NASA Dashboard is a modular web application designed to consume and organize data from multiple NASA Open APIs through a clean and responsive interface.

Rather than being a single API integration project, the application was designed as an expandable platform where new NASA services can be added as independent modules over time.

The current version focuses on the Astronomy Picture of the Day (APOD) API while providing the architectural foundation for future integrations such as Mars Rover photos, EPIC Earth imagery, Near Earth Objects, and additional space data services.

The primary goal of this project is to demonstrate real-world backend development practices including API integration, asynchronous communication, modular architecture, environment management, and scalable application design.

---

# ✨ Current Features

## APOD Module

- Astronomy Picture of the Day integration
- Date search
- Random image generator
- Full screen image viewer
- Image metadata
- Copyright information
- HD image detection
- Responsive interface

---

# 🚀 Planned Modules

The dashboard was intentionally built to grow.

Upcoming modules include:

| Module | Status |
|---------|---------|
| 🌍 EPIC Earth Images | Coming Soon |
| 🚀 Mars Rover Photos | Next Release |
| ☄️ Near Earth Objects | Planned |
| 🌌 Additional NASA APIs | Future Ideas |

This modular approach allows the application to evolve without major architectural changes.

---

# 🏗 Project Architecture

```
                User

                  │

                  ▼

          Express Server

                  │

        Business Logic Layer

                  │

      NASA API Service Layer

                  │

        External NASA APIs

                  │

          JSON Processing

                  │

      Frontend Rendering

                  │

          Responsive UI
```

The application separates responsibilities between backend services and frontend rendering, making future integrations straightforward and maintainable.

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## APIs

- NASA APOD API
- NASA Open APIs

## Infrastructure

- Docker
- Docker Compose

## Development

- Git
- GitHub

---

# 🎯 Backend Concepts Demonstrated

This project showcases practical experience with:

- REST API Consumption
- External Service Integration
- JSON Parsing
- Asynchronous Programming
- Backend Routing
- Error Handling
- Environment Variables
- Modular Architecture
- Dockerized Applications
- Responsive Frontend Rendering

These are common backend concepts used in production environments integrating services such as:

- Stripe
- PayPal
- Twilio
- SendGrid
- AWS Services
- OpenAI APIs

---

# 📸 Application Preview

## Dashboard

![Dashboard](Nasa.png)

---

# ⚙ Running Locally

Clone the repository

```bash
git clone https://github.com/livansena/NASA-Panel.git
```

Enter the project

```bash
cd NASA-Panel
```

Install dependencies

```bash
npm install
```

Create your environment file

```env
NASA_API_KEY=your_api_key_here
```

Start the server

```bash
npm start
```

---

# 🔮 Roadmap

## Version 1 ✅

- APOD integration
- Date search
- Random image
- Metadata panel
- Responsive design

---

## Version 2

- Mars Rover API
- EPIC Earth API
- Better animations
- Improved caching

---

## Version 3

- Near Earth Objects
- Multiple NASA APIs
- Search history
- Favorites
- Dashboard improvements

---

# 🌍 Why This Project Matters

Modern backend applications rarely operate in isolation.

Instead, they communicate continuously with external services, process remote data, apply business logic, and deliver meaningful information to users.

This project demonstrates the same architectural concepts used in production systems that integrate APIs such as payment gateways, cloud services, AI platforms, messaging providers, and third-party business systems.

Rather than focusing solely on frontend presentation, the project emphasizes backend communication, modularity, maintainability, and scalable application design.

---

# 👨‍💻 About Me

**Livan Passos**

Backend Developer

Focused on building reliable backend systems using:

- Ruby on Rails
- PostgreSQL
- Node.js
- REST APIs
- Backend Architecture
- Software Engineering

### Portfolio

https://livanpassos.com

### LinkedIn

https://linkedin.com/in/livanpassos

---

# 💭 Professional Philosophy

After more than 15 years working in industrial maintenance, quality assurance, logistics, and critical production environments, I transitioned into software engineering.

The same principles that once ensured operational reliability now drive the way I build software:

- Structured thinking
- Problem solving
- Continuous improvement
- System reliability
- Attention to detail

**The tools changed. The mindset did not.**

---

# 📄 License

This project was created for educational purposes and as part of my professional portfolio.
