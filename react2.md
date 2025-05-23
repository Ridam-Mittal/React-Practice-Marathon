## Understanding the Problem Without Hooks in Normal JavaScript

- In plain JavaScript, here are the main challenges that arise:

## **1. State Management**

- Vanilla JavaScript doesn’t have a built-in way to manage and update state across your application. Typically, developers end up:

- Using global variables to share state (which can lead to bugs due to unexpected overwrites or race conditions).

- Passing state manually between functions (which becomes cumbersome as your application grows).

- Directly manipulating the DOM to reflect changes in state (which is inefficient and prone to errors).

```javascript
let count = 0;

function increment() {
  count++;
  document.getElementById('counter').innerText = count;
}

function decrement() {
  count--;
  document.getElementById('counter').innerText = count;
}

// Manually updating the DOM
increment(); // Must remember to call this every time `count` changes.
decrement();
```

### Problems:

-  Code becomes harder to maintain as your app grows.

- Every state change requires you to manually update the DOM.

- No separation of concerns between state logic and UI rendering


## **2. Handling Side Effects**

- Side effects, such as fetching data, subscribing to events, or working with timers, can lead to messy code if not handled properly. In plain JavaScript:

- You might forget to clean up effects (e.g., clearing intervals or unsubscribing from event listeners).

- You lack a standardized way to handle effects tied to specific parts of your UI

```javascript
function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
}

// Calling the function manually
fetchData();
```

**Problems:**

- You have no clear mechanism to control when this effect should run.

- **If the UI changes or the user navigates away, you need to remember to cancel ongoing requests.**


## **3. Reusing Logic**

---

# **How Hooks Address These Problems**

## 1. State Management Made Easy

- Hooks like useState give you an easy way to manage state without relying on global variables or manual DOM updates. They abstract the complexity of updating the UI when state changes.

```javascript
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1); // Automatically updates the UI
}

```

## 2. Simplified Side Effects

- The useEffect hook provides a structured way to handle side effects, including cleanup. This eliminates the messiness of manually managing event listeners, timers, or network requests.

```javascript
useEffect(() => {
  const interval = setInterval(() => console.log('Hello!'), 1000);

  return () => clearInterval(interval); // Automatically cleans up
}, []); // Runs only once

```

## 3. Reusable Logic