![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.1-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![Monnify](https://img.shields.io/badge/Payments-Monnify-00B8A9)
![Render](https://img.shields.io/badge/Hosted_on-Render-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

# VeriFund Backend

A Spring Boot REST API powering **VeriFund** — a trusted fundraising platform that enables verified organizations to create transparent, time-boxed relief campaigns for individuals in need. Donors contribute securely through Monnify, and every campaign tracks how funds are raised and disbursed, from creation to payout.

Built for the **APIConf Lagos 2026 x Monnify Developer Challenge**.

## Live API

- **Base URL:** https://verifund-mmwl.onrender.com
- **Swagger UI:** https://verifund-mmwl.onrender.com/swagger-ui/index.html

## Tech Stack

- Java 21
- Spring Boot 4.1 (Spring Security 7, Spring Data MongoDB)
- JWT Authentication
- MongoDB Atlas
- Monnify Payment Gateway (auth, reserved accounts, disbursements)
- Cloudinary (image & document uploads)
- Maven
- Swagger / OpenAPI 3
- Docker
- Render (deployment)

## Features

- **Auth** — user registration & login with JWT-based stateless authentication
- **Campaign management** — full CRUD, plus admin approve/reject workflow so only verified campaigns go live
- **Document & image uploads** — supporting evidence and campaign images uploaded via Cloudinary, returned as URLs to attach to a campaign
- **Donations** — donors contribute to a specific campaign; payments are verified against Monnify before being recorded
- **Monnify integration** — authentication, payment initialization, and transaction verification against the Monnify sandbox
- **Disbursements** — funds raised can be paid out from a campaign to a verified recipient account
- **Admin dashboard** — aggregate view of campaigns and platform activity
- **Swagger documentation** — every endpoint explorable and testable from the browser

## Project Structure

```
src/main/java/com/spider/backend/
├── config/          # Security, JWT, Cloudinary, WebClient, OpenAPI config
├── controller/       # REST endpoints
├── dto/              # Request/response payloads
├── model/            # MongoDB documents (Campaign, Donation, Disbursement, User)
├── repository/        # Spring Data MongoDB repositories
├── security/          # JWT filter + custom UserDetailsService
├── service/           # Business logic (campaigns, donations, Monnify, uploads)
└── BackendApplication.java
```

## API Overview

| Area | Endpoint | Description |
|---|---|---|
| Auth | `POST /api/auth/register` | Create a new user account |
| Auth | `POST /api/auth/login` | Log in and receive a JWT |
| Campaigns | `POST /api/campaigns` | Create a campaign |
| Campaigns | `GET /api/campaigns` | List all campaigns |
| Campaigns | `GET /api/campaigns/{id}` | Get a single campaign |
| Campaigns | `PUT /api/campaigns/{id}` | Update a campaign |
| Campaigns | `DELETE /api/campaigns/{id}` | Delete a campaign |
| Campaigns | `PUT /api/campaigns/{id}/approve` | Admin: approve a campaign |
| Campaigns | `PUT /api/campaigns/{id}/reject` | Admin: reject a campaign |
| Campaigns | `GET /api/campaigns/me` | List the current user's campaigns |
| Donations | `POST /api/donations/{campaignId}` | Donate to a campaign |
| Donations | `GET /api/donations/campaign/{campaignId}` | List donations for a campaign |
| Donations | `GET /api/donations/verify/{paymentReference}` | Verify a donation's payment status |
| Disbursements | `POST /api/disbursements/{campaignId}` | Disburse raised funds for a campaign |
| Uploads | `POST /api/upload` | Upload campaign images / supporting documents |
| Monnify | `GET /api/monnify/token` | Fetch a Monnify auth token |
| Monnify | `POST /api/monnify/initialize` | Initialize a payment |
| Monnify | `GET /api/monnify/verify/{transactionReference}` | Verify a Monnify transaction |
| Admin | `GET /api/admin/dashboard` | Aggregate platform stats |

Full interactive documentation, request/response schemas, and a "try it out" console are in Swagger (link above).

## Authentication

1. Register: `POST /api/auth/register`
2. Log in: `POST /api/auth/login` → returns a JWT
3. Include the token on every subsequent request:

```
Authorization: Bearer <token>
```

Public endpoints (no token required): `/api/auth/**`, `/swagger-ui/**`, `/v3/api-docs/**`. Everything else requires authentication.

## Environment Variables

Create a `.env` file in `backend/` (never commit this):

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

`application.properties` reads these via [spring-dotenv](https://github.com/paulschwarz/spring-dotenv) — no manual export needed.

## Running Locally

```bash
git clone https://github.com/Spider1201/VeriFund.git
cd VeriFund/backend

# add your .env file (see above)

./mvnw clean install
./mvnw spring-boot:run
```

The API starts on `http://localhost:8081`. Swagger UI is available at `http://localhost:8081/swagger-ui/index.html`.

### Running with Docker

```bash
docker build -t verifund-backend .
docker run -p 8081:8081 --env-file .env verifund-backend
```

## Deployment

The backend is containerized (see `Dockerfile`) and deployed on **Render**, with environment variables configured directly in the Render dashboard rather than a committed `.env` file.

## Future Improvements

- Automated email notifications for campaign approval/rejection and successful donations
- Webhook-based payment confirmation (replacing manual verification polling)
- Admin-facing frontend dashboard
- Unit and integration test coverage
- CI/CD pipeline for automated build & deploy on push

## Security Note

Real credentials should never be committed to this repository. `application.properties` reads all sensitive values from environment variables — see **Environment Variables** above.

## License

MIT