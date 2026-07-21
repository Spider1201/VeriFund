# VeriFund

**Verified giving, trusted impact — a fundraising platform where every campaign is verified, every disbursement is staged, and every naira is accounted for.**

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-0.1.0-orange)

## Live Deployment

- **Frontend:** https://verifund-f.vercel.app/
- **Backend API:** https://verifund-mmwl.onrender.com
- **Swagger Docs:** https://verifund-mmwl.onrender.com/swagger-ui/index.html

## 🚀 Key Features

- ✅ **Campaign verification** — every campaign is reviewed by an admin before it goes live.
- 💸 **Staged disbursement** — funds release in stages, not all at once. Each stage needs supporting evidence.
- 🧾 **Transparent ledger** — donors see amount needed, raised, released, and remaining for every campaign.
- 🔐 **JWT authentication** — secure, stateless login for beneficiaries and admins.
- 💳 **Monnify payments** — secure donations processed through the Monnify payment gateway.
- 📎 **Document & image uploads** — supporting evidence uploaded via Cloudinary.
- 🙋 **No-account donations** — donors can contribute without creating an account.
- 📊 **Admin dashboard** — approve, reject, audit, and review disbursement requests.
- 📄 **Downloadable statements** — full financial history, exportable per campaign.
- 📚 **Swagger API docs** — every backend endpoint documented and testable in-browser.

## 🛠️ Tech Stack

**Frontend**
- Next.js
- Hosted on Vercel

**Backend**
- Java 21
- Spring Boot 4.1 (Spring Security 7, Spring Data MongoDB)
- JWT Authentication
- Maven
- Springdoc OpenAPI (Swagger UI)
- Hosted on Render (Docker)

**Database**
- MongoDB Atlas

**Payments & Third-Party Services**
- Monnify (payment collection & disbursement)
- Cloudinary (image/document storage)

**DevOps**
- Docker (backend containerized via `Dockerfile`)
- Deployment via Render (backend) and Vercel (frontend) — no CI/CD pipeline set up yet

## 🏁 Getting Started

### Prerequisites

- **Java 21**
- **Maven**
- **Node.js** (for the Next.js frontend)
- A **MongoDB Atlas** connection string
- **Monnify** sandbox API credentials
- **Cloudinary** API credentials

### Installation

**Backend**

```bash
git clone https://github.com/Spider1201/VeriFund.git
cd VeriFund/backend
./mvnw clean install
```

**Frontend**

```bash
cd VeriFund/frontend
npm install
```

### Environment Variables

Create a `.env` file inside `backend/`:

```
MONGODB_URI=
MONGODB_DATABASE=verifund

JWT_SECRET=
JWT_EXPIRATION=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

MONNIFY_BASE_URL=https://sandbox.monnify.com
MONNIFY_API_KEY=
MONNIFY_SECRET_KEY=
MONNIFY_CONTRACT_CODE=
```

Create a `.env` file inside `frontend/`:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8081
```

**Never commit real values.** Keep `.env` out of version control.

## 📖 Usage Guide

**Run the backend locally:**

```bash
cd backend
./mvnw spring-boot:run
```

The API starts on `http://localhost:8081`. Explore it at `http://localhost:8081/swagger-ui/index.html`.

**Run the backend with Docker instead:**

```bash
cd backend
docker build -t verifund-backend .
docker run -p 8081:8081 --env-file .env verifund-backend
```

**Run the frontend locally:**

```bash
cd frontend
npm run dev
```

**Example: authenticate and hit a protected endpoint**

```bash
# Register
curl -X POST http://localhost:8081/api/auth/register -d '{ ... }'

# Log in
curl -X POST http://localhost:8081/api/auth/login -d '{ ... }'

# Use the returned token
curl http://localhost:8081/api/campaigns/me \
  -H "Authorization: Bearer <token>"
```

## 🧪 Running Tests

No automated test suite exists yet for either the backend or frontend. This is tracked as a planned improvement — contributions adding test coverage are welcome.

## 🤝 Contributing

This project was built for the **APIConf Lagos 2026 x Monnify Developer Challenge**.

1. **Fork** the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes with a clear message.
4. Open a **pull request** describing what changed and why.

For bugs or feature requests, please open an **issue** first.

## 🔭 Future Improvements

- Automated test coverage (backend and frontend)
- CI/CD pipeline for automated build and deploy on push
- Webhook-based payment confirmation (replacing manual verification checks)
- Email notifications for campaign approval, rejection, and successful donations
- Admin-facing analytics dashboard

## 📄 License

Licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.
