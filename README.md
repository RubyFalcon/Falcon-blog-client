# Falcon Blog Client

A full stack blog frontend built with **Next.js**, **React**, **TypeScript**, **Chakra UI**, and **GraphQL**.

This project was created as part of my early full stack development work to deepen my understanding of modern frontend architecture and how client applications interact with backend APIs. It connects to a GraphQL backend to support user authentication, post creation, pagination, and voting functionality.

## Features

- User registration and login
- Authentication-aware navigation
- Create, view, and manage blog posts
- Upvote / downvote functionality
- Cursor-based pagination
- GraphQL API integration
- Client-side cache updates and query invalidation
- Responsive UI built with Chakra UI

## Tech Stack

**Frontend**
- Next.js
- React
- TypeScript
- Chakra UI

**Data / API**
- GraphQL
- URQL

**Tooling**
- Node.js
- Code generation for typed GraphQL queries and mutations

## What I Learned

This was one of the first projects where I moved beyond building simple UI and started thinking more deeply about:

- frontend architecture
- authentication state
- pagination
- cache consistency
- typed API integration
- coordinating frontend and backend behaviour

A key part of the project was handling client-side cache updates after actions such as login, logout, voting, and post creation so that the UI stayed in sync without unnecessary refetching.

## Project Structure

```text
src/
  components/     reusable UI components
  graphql/        GraphQL queries, mutations, and fragments
  pages/          Next.js route pages
  theme.tsx       Chakra UI theme configuration
  utils/          helper utilities such as URQL client setup
```
Running Locally
Prerequisites

Node.js

npm or yarn

A running Falcon Blog GraphQL backend

Installation

```bash
git clone <your-repo-url>
cd Falcon-blog-client-main
npm install
```

##Start Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000

```

## Backend

This project was designed to work with a separate GraphQL backend.

If you are reviewing this repository on its own, please note that some functionality depends on the backend being available and configured correctly.

## Current Status

This project was originally built in 2021 and is no longer actively maintained. Because of ecosystem and dependency changes since then, the project may require version updates and configuration fixes before it runs successfully in a modern environment.

I still include it as part of my portfolio because it reflects an important stage in my development as a full stack engineer and demonstrates experience with React, TypeScript, GraphQL, authentication flows, pagination, and client-side caching.

## Future Improvements

If I were rebuilding or extending this project today, I would focus on:

Updating dependencies and locking stable versions

Improving project documentation

Adding automated tests

Refining folder structure and naming consistency

Improving error handling and loading states

Refreshing the UI and accessibility details

Author

Tupay Felkin

GitHub: https://github.com/RubyFalcon

[LinkedIn](https://www.linkedin.com/in/tupay-felkin-750388260/)
