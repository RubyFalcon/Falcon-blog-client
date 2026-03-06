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
