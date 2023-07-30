import ComponentProps from "./ComponentProps";

const data = {
  component: `Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.

  Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
  
  This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.`,
  prop: `React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

  Passing Props:
  When you use a component in JSX, you can provide attributes to that component. These attributes are known as props.
  
  Accessing Props in Components:
  Inside the component's function or class definition, you can access the props using the function argument`,
};

const Component = () => {
  return (
    <div>
      <ComponentProps data={data} />
    </div>
  );
};

export default Component;