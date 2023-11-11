# React (from Zero to Hero)
React uses Virtual DOM (Document-Object-Model) technology. And it can change pages dynamically (without reload). React converts it from Virtual DOM to Real DOM.

Every React application has components. It is component-based.
Components are two-types:

| Functional  | Class-based |
| ----------- | ----------- |

Old versions of React had class-based components (class Test extends Component). But now, it works with functions(normal, arrow, named)

Here is component example:
```jsx
const example = () => {
	return <div>Hello World!</div>
}
```

You have 2 options when creating a project in React:
1. Manually install all required stuff (react, react-dom etc.)
2. Use `npx create-react-app`.

When your React app created, you'll see `src/` and `public/` directories. In `public/` directory you'll se an index file. It has
```html
<div id="root"></div>
```
React works like this; you have your `#root` and everything under this.

**<font size="4" color="red">IMPORTANT: React uses JSX for rendering not HTML!</font>**
```jsx
<div className="test">
	<p>{2 + 2}</p>
</div>
```
It will return 4. Not {2+2}.

### What is React Fragments?
React uses fragments for if expressions has multiple elements to show.
Here is an example:
```jsx
const App = () => {
  const name = "John";
  return (
    <div className="App">
      <h2>Hello {name ? (
      <>
	     Use fragments
	     for multilines.
      </>
      ) : (
	      Here is an
	      error!
      )}!</h2>
    </div>
  );
}
```

### How to call other components?
```jsx
const Person = () => {
  return (
    <>
      <h1>Name: Dincer</h1>
      <h2>Age: 19</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person />
    </div>
  );
}
```

### What is props?
It is actually properties, and its attributes of our components.
Here is an example:
```jsx
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'Dinçer'} lastName={'Tekin'} age={19} />
    </div>
  );
}
```

### What about hooks? (useState)
When any word starts with "use" we call it hook.
Example:
```jsx
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
```

**<font size="4" color="red">IMPORTANT: You can't modify states yourself!</font>**

### What is useEffect?
useEffect allows us to hook an event. Like when page loads you can give an alert.
You can't use counter = 1000; code in here. Just use setCounter state function.

```jsx
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
	  // Codes...
  }, [counter]);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
```

And develop a project with this knowledge!
