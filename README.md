Resume Insight AI

AI-powered resume analysis tool that evaluates a candidate’s skills, extracts key data, and generates personalized improvement recommendations using OpenAI.
Built with Next.js, Node/FastAPI, and Supabase/MySQL.

 Overview

Resume Insight AI allows users to upload a PDF resume and instantly receive:

Skill extraction

Job-role match scoring

Strengths & gaps analysis

A personalized learning roadmap

History of past analyses (stored in DB)

Designed for founders, HR, and job seekers who need fast, data-driven insights.

 Features

PDF upload + text extraction

AI-powered skill and role analysis

Fit score (0–100)

Auto-generated improvement roadmap

User authentication (Supabase/Auth.js)

Saved analysis history

Deployed backend (FastAPI/Node)

Fully responsive UI

 Tech Stack

Frontend: Next.js, Tailwind
Backend: FastAPI or Node.js
Database: PostgreSQL / Supabase
AI: OpenAI API
Deployment: Replit / Vercel
Auth: Supabase Auth

 Project Structure
/app
  /api
  /components
  /styles
/backend
  /routes
  /services
  /models

 Setup Instructions
1. Clone the repo
git clone https://github.com/your-username/resume-insight-ai
cd resume-insight-ai

2. Install dependencies
npm install

3. Add environment variables

Create .env.local:

OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
BACKEND_URL=

4. Run the app
npm run dev

 Backend Setup

Open backend folder

Install dependencies

Run local server

Deploy via Replit
