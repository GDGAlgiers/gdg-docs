---
title: Frontend
description: Frontend work guide
---

## Frontend Workflow
The following guide is a general advice that helps with approaching frontend tasks. Note that this doesn't necessarily fit every context, and therefore different approaches might be followed depending on the context and on one's experience.

### Visual UI implementation
- Start by focusing on the implementation of the static visual elements (e.g cards, lists).
- The decision to take regarding state is where to data should be fetched. Using state itself can be differed.

### Extract mock data into files, and add types
- In the `data` folder, create a file for the mock data e.g `products.{js,ts}`.
- Create TypeScript types for the mock data, to facilitate recognition of objects fields names.

### Data fetching mechanism preparation
- A `services` folder is used to group API calls, and exposes them as functions.
- In the `services` folder, create functions for data manipulation e.g createItem
- Import the function in your component to use it

### Loading status implementation
- Implement the loading status using `Suspense` or equivalent mechanism.
- Simulate slow network loading (to view the loading state) using the [throttling](https://www.debugbear.com/blog/chrome-devtools-network-throttling) feature from the browser's Devtools

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
