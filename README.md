# Social Media Analytics

This project is a social media analytics platform built with a React frontend and an Express backend. It provides features such as viewing the top users, trending posts, and a live feed of the latest posts.

## Features

- **Top Users**: Displays the top 5 users based on the number of comments on their posts.
- **Trending Posts**: Shows the most popular posts based on the number of comments.
- **Live Feed**: Automatically refreshes to display the latest posts every 10 seconds.

## Project Structure

### Frontend (`social-media-frontend`)

- Built with React and Vite.
- Uses TailwindCSS for styling.
- Key files:
  - `src/api.js`: Contains API functions to interact with the backend.
  - `.env`: Stores environment variables (e.g., API token).

### Backend (`Backend`)

- Built with Express.
- Provides RESTful APIs for fetching users and posts.
- Key files:
  - `Services/apiClient.js`: Handles external API calls.
  - `Controllers/`: Contains logic for handling user and post-related requests.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the `social-media-frontend` directory:

   ```sh
   cd social-media-frontend
   ```

2. Install dependencies:
   npm install

3. Create a .env file in the social-media-frontend directory and add the following:
   VITE_API_TOKEN=<your_api_token>

4. Start the development server:
   npm run dev

### Backend Setup

1. Navigate to the Backend directory:
   cd Backend

2. Install dependencies:
   npm install

3. Start the backend server:
   node app.js

## API Integration

The frontend communicates with the backend using the src/api.js file. This file contains functions to fetch data from the backend:

fetchTopUsers: Fetches the top 5 users.
fetchTrendingPosts: Fetches the most popular posts.
fetchLatestPosts: Fetches the latest posts.
The API token is securely stored in the .env file and is not included in version control due to the .gitignore configuration.

## Running the Project

Start the backend server.
Start the frontend development server.
Open the application in your browser at http://localhost:5173 (default Vite port).

## Notes

Ensure the .env file is properly configured with the API token.
The .gitignore file excludes sensitive files like .env and src/api.js from version control.
