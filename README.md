# Job Portal Web Application

This project is a job portal web application built with React, Redux Toolkit, and React Router. It includes authentication functionality (user registration, login, and token refresh) and private routes for protected pages.

## Features

- **User Authentication**: 
  - Register a new user.
  - Login with email and password.
  - Store `accessToken` in session storage and `refreshToken` in cookies.
  - Automatically refresh the access token when it expires.

- **Private Routes**: 
  - Protect routes such as the job listing page.
  - Redirect unauthenticated users to the login page.

- **Job Listings**: 
  - Fetch and display a list of jobs.
  - Show job details such as title, description, creator, and creation date.

## Tech Stack

- **Frontend**: React (with functional components)
- **State Management**: Redux Toolkit (with RTK Query)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **API Integration**: RESTful API using `fetchBaseQuery` from RTK Query

---

## Project Structure

```plaintext
src/
├── Layout/
│   ├── Main.jsx         # Main layout component
├── Pages/
│   ├── Home/            # Home page
│   ├── SignIn/          # Sign-in page
│   ├── Register/        # Registration page
│   ├── AllJobs/         # Job listing page
│   ├── Private/         # Private route component
├── redux/
│   ├── api/
│   │   ├── baseApi.js   # API service using RTK Query
│   ├── features/
│   │   ├── authSlice.js # Authentication slice for Redux
├── App.jsx              # Main app entry point
├── index.jsx            # React DOM rendering
