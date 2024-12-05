---
title: Backend
description: Backend work guide
---

## Backend Workflow
The following guide provides general advice to approach backend tasks effectively. Note that these steps might vary depending on the project's context and individual experience.

### API Design and Documentation
- Start by designing the API endpoints based on the project's requirements. **Make sure to respect the REST API endpoints naming principles**
- Use [Swagger](https://swagger.io/) to create API documentation.
- Respect the predefined request and response structures to ensure consistency and facilitate frontend-backend integration.

### Database Schema and Models
- Plan and design the database schema, ensuring normalization (minimal redundancy).
- Use an ORM (e.g., Mongoose for MongoDB, Prisma for SQL databases) to define models that match the schema.

### Implementing Services and Business Logic
- Create a `services` folder to group the core logic for manipulating and interacting with data.
- Keep the business logic separate from controllers to ensure modularity and maintainability.

### API Endpoint Implementation
- In the `routes` or `controllers` folder, define routes that correspond to API endpoints.
- Use middleware for tasks like authentication, validation, and error handling.
- Ensure proper HTTP status codes are used in responses for better API usability.

### Testing
- Write unit tests, when required, for services and integration tests for API endpoints (can be using tools like [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/)).

## Further reading

- Some [Nodejs best practices](https://github.com/i0natan/nodebestpractices).
