---
title: React
description: GDG Docs inroduction
sidebar:
    label: React
---
## Mock data
1. When using mock (fake) data, create a file for it in the "data" folder, instead of declaring it in the component or page file. This will make refactoring and sharing the data with other related pages easier:
```jsx
// bad
const items = [{}, {}, {}]; // mock data defined in the component

// good
import items from "@/data/items" // mock data defined in an external file
```
Note that it's preferable to use `.js` or `.ts` extensions instead of `.json` for data files.

2. Make sure to

3. To keep your code ready for Backend integration, use the mock data in a state
```js
import initialProduct from ''
const [product, setProduct] = useState({}) // you can also specifiy default values like '' or 0 for some fiels to avoid crashes.
useEffect(() => {
  // API fetch call will be done here. You leave it empty
  setProduct(initialProduct) //use some initial product data for demo
}, [])
```

## Styling
1. Use Tailwind-defined styles only!
2. For dynamic styles, Tailwind [can only detect complete classes](https://tailwindcss.com/docs/content-configuration#class-detection-in-depth). Use one of the following options:
```jsx
// complete class names with conditions
<div className={`${isEnabled ? "bg-green-400" : "bg-red-400"}`}></div>

// class names declared in an object
const status = "active"
const backgrounds = {
    active: "bg-green-400",
    inactive: "bg-gray-200",
}
<div className={backgrounds[status]}></div>

// inline styles
const color = "#1F1F1F"
<div style={{backgroundColor: color}}></div>
```

3. If using a `.css` file is inevitable, use it as a [CSS module](https://medium.com/@gopi07it/css-modules-in-react-7f86b2e822ef) in order to keep the styling local.

## Code Performance and Best Practices
1. Do not use the default React import (>= version 17):
```js
import React from "react"
```
This has to do with the [tree-shaking](https://web.dev/articles/reduce-javascript-payloads-with-tree-shaking) technique (optimizes the final build by excluding unused imports) for a deeper understanding.
Look for this [forum question](https://teamtreehouse.com/community/why-not-use-import-react-from-react) for information.

2. Don't use [index as the component's key](https://www.reddit.com/r/react/comments/1daj9nz/whats_so_bad_about_index_as_key/) in array.map()!
3. Always extract event handlers (e.g button clicks) to a function, and prepare the data necessary for the backend calls (e.g form data):
```jsx
// bad
<button>Delete</button>

// good
const handleDeleteItem = (id) => {};

<button onClick={() => handleDeleteItem(item.id)}>Delete</button>

// bad
<form></form>

// bad
const handleSubmit = () => {};
<form onSubmit={handleSubmit}></form>

// good
const handleSubmit = () => {
    // form data to submit
    const title = ...
    const description = ...
};
<form onSubmit={handleSubmit}></form>
```
4. Make sure to include the clean-up function of `useEffect` hooks when an event listener is created inside:
```jsx
// bad
useEffect(() => {
    buttonRef.current.addEventListener('click', (e) => {});
}, []);

// good
useEffect(() => {
    const handleButtonClick = (e) => {};
    buttonRef.current.addEventListener('click', handleButtonClick);

    return () => {
        buttonRef.current.removeEventListener('click', handleButtonClick);
    }
}, []);
```
5. When the component's code is long (>100) and most of it seems not reusable, add comments in between to help in code navigation, otherwise group repeated code in a component when possible. Example for comments:
```jsx
return (
  <section>
    {/* Decoration Controls */}
    <div>
      {/* <=== some code here */}
    </div>

    {/* Sliders Controls */}
    <div>
      {/* <=== some code here */}
    </div>

    {/* Navigation Controls */}
    <div>
      {/* <=== some code here */}
    </div>
  </section>
)
```
## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework


