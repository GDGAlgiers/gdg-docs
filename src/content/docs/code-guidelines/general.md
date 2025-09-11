---
title: "General Code Guidelines"
description: "Simple and practical coding standards for clean, maintainable code across all programming languages"
---

## Naming Conventions

### Variables and Functions

```javascript
// ✅ Good - Clear and descriptive
const userAge = 25;
const calculateTotalPrice = (items) => { ... };

// ❌ Bad - Unclear abbreviations
const usrAg = 25;
const calcTotPrc = (itms) => { ... };
```

### Constants

```javascript
// ✅ Good - ALL_CAPS for constants
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";

// ❌ Bad - Inconsistent naming
const maxRetryAttempts = 3;
const apibaseurl = "https://api.example.com";
```

## Functions

### Keep Functions Small

```javascript
// ✅ Good - Single responsibility
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function sendEmail(email, message) {
  if (!validateEmail(email)) return false;
  // Send email logic
  return true;
}

// ❌ Bad - Too many responsibilities
function validateAndSendEmail(email, message) {
  // Validation logic
  // Email sending logic
  // Error handling
  // Logging
}
```

_Why this matters: Small functions are easier to test, debug, and reuse. Each function should do one thing well._

### Use Descriptive Names

```javascript
// ✅ Good - Clear intent
function getUserById(id) { ... }
function isValidPassword(password) { ... }

// ❌ Bad - Unclear purpose
function get(id) { ... }
function check(pwd) { ... }
```

## Comments

### When to Comment

```javascript
// ✅ Good - Explain WHY, not WHAT
// Using setTimeout to avoid blocking the UI thread
setTimeout(() => processLargeDataset(), 0);

// Complex business logic explanation
// Calculate discount: 10% for new users, 5% for returning users
const discount = user.isNew ? 0.1 : 0.05;

// ❌ Bad - Obvious comments
// Set i to 0
let i = 0;

// Add 1 to counter
counter++;
```

_Why this matters: Good comments explain the reasoning behind code decisions, not what the code does (which should be obvious from reading it)._

## Error Handling

### Always Handle Errors

```javascript
// ✅ Good - Proper error handling
try {
  const data = await fetchUserData(userId);
  return data;
} catch (error) {
  console.error("Failed to fetch user data:", error);
  throw new Error("User data unavailable");
}

// ❌ Bad - Ignoring errors
const data = await fetchUserData(userId);
return data; // What if it fails?
```

_Why this matters: Unhandled errors can crash your application or leave it in an inconsistent state. Always anticipate what can go wrong._

## Code Organization

### Group Related Code

```javascript
// ✅ Good - Grouped by feature
// User validation functions
function isValidEmail(email) { ... }
function isValidPassword(password) { ... }
function validateUser(user) { ... }

// User API functions
function createUser(userData) { ... }
function updateUser(userId, data) { ... }
function deleteUser(userId) { ... }
```

### Use Consistent Indentation

```javascript
// ✅ Good - Consistent 2 spaces
if (condition) {
  doSomething();
  if (anotherCondition) {
    doSomethingElse();
  }
}

// ❌ Bad - Mixed indentation
if (condition) {
  doSomething();
  if (anotherCondition) {
    doSomethingElse();
  }
}
```

## Best Practices

### 1. **Be Consistent**

- Choose a style and stick to it throughout the project
- Use the same naming patterns everywhere
- Follow team conventions

### 2. **Write Self-Documenting Code**

```javascript
// ✅ Good - Code explains itself
const isUserEligibleForDiscount = user.age >= 65 || user.isStudent;

// ❌ Bad - Needs explanation
const eligible = user.age >= 65 || user.isStudent; // What is this for?
```

### 3. **Avoid Deep Nesting**

```javascript
// ✅ Good - Early returns
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;

  return processActiveUser(user);
}

// ❌ Bad - Deep nesting
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return processActiveUser(user);
      }
    }
  }
  return null;
}
```

### 4. **Don't Repeat Yourself (DRY)**

```javascript
// ✅ Good - Reusable function
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

const totalPrice = formatCurrency(99.99);
const discount = formatCurrency(10.0);

// ❌ Bad - Repeated code
const totalPrice = `$${(99.99).toFixed(2)}`;
const discount = `$${(10.0).toFixed(2)}`;
```

### 5. **Use Meaningful Variable Names**

```javascript
// ✅ Good - Intent is clear
const secondsInDay = 24 * 60 * 60;
const userRegistrationDate = new Date();

// ❌ Bad - Magic numbers and unclear names
const x = 24 * 60 * 60; // What is this?
const d = new Date(); // Date of what?
```

### 6. **Favor Composition Over Inheritance**

_Build functionality by combining simple objects rather than creating complex inheritance hierarchies._

```javascript
// ✅ Good - Composition
class EmailService {
  send(message) {
    /* implementation */
  }
}

class User {
  constructor() {
    this.emailService = new EmailService();
  }

  notify(message) {
    this.emailService.send(message);
  }
}
```

### 7. **Use Guard Clauses**

_Exit early from functions when conditions aren't met to reduce nesting._

```javascript
// ✅ Good - Guard clauses
function processOrder(order) {
  if (!order) return null;
  if (!order.isValid) return null;
  if (!order.paymentConfirmed) return null;

  return executeOrder(order);
}
```

## Quick Checklist

Before committing code, ask yourself:

- [ ] **Are my variable names descriptive?**
- [ ] **Are my functions doing only one thing?**
- [ ] **Did I handle potential errors?**
- [ ] **Is my code easy to read without comments?**
- [ ] **Am I following the project's style guide?**
- [ ] **Did I remove debugging statements?**
- [ ] **Are there any magic numbers that should be constants?**
- [ ] **Can someone else understand this code in 6 months?**
- [ ] **Did I test the edge cases?**

## Universal Principles

These principles apply regardless of programming language:

- **KISS (Keep It Simple, Stupid)** - Simple solutions are often the best
- **YAGNI (You Aren't Gonna Need It)** - Don't build features you don't need yet
- **Single Responsibility** - Each function/class should have one reason to change
- **Fail Fast** - Detect and report errors as early as possible

Remember: **Code is read more often than it's written!**
