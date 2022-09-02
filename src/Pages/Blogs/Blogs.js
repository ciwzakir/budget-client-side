import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 text-center my-24">
      <PageTitle title="Blogs-"></PageTitle>
      <div className="section">
 

      </div>
      <h1 className="text center text-5xl my-20">Frequently Asked Question</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-left bg-slate-500 text-white p-10">
          <h4 className="py-7 text-3xl">
            How will you improve the performance of a React Application?
          </h4>
          <ul>
            <li>Avoid inline functions as much as possible</li>
            <li>Keeping component state local where necessary.</li>
            <li>
              Remember that Immutability is the key to avoid unnecessary
              re-renders.
            </li>
            <li>
              Always render hidden components like Modals and Dropdowns
              conditionally.
            </li>
            <li>Always call multiple APIs parallelly</li>
          </ul>
        </div>

        <div className="text-left bg-slate-500 text-white p-10">
          <h4 className="py-7 text-3xl">
            What are the different ways to manage a state in a React
            application?
          </h4>
          <h2>
            There are four main types of state that can manage a React apps:
          </h2>
          <ul>
            <li>Local state.</li>
            <li>Global state</li>
            <li>Server state.</li>
            <li>URL state.</li>
            <li> Also Session State</li>
          </ul>
        </div>

        <div className="text-left bg-slate-500 text-white p-10">
          <h4 className="py-7 text-3xl">
            How does prototypical inheritance work
          </h4>

          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
        <div className="text-left bg-slate-500 text-white p-10">
          <h4 className="py-7 text-3xl">
            Why you do not set the state directly in React
          </h4>

          <ul>
            <li>
              When you directly update the state, it does not change this.state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value.
            </li>
            <li>You will lose control of the state across all components.</li>
            <li>
              While a React component can have initial state, the real power is
              in updating its state — after all, if we didn't need to update the
              state, the component shouldn't have any state. State is only
              reserved for data that changes in our component and is visible in
              the UI
            </li>
          </ul>
        </div>
        <div className="text-left bg-slate-500 text-white p-10">
          <h4 className="py-7 text-3xl">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h4>
          <p>It may be done by using the following steps</p>
          <ul>
            <li>Using find</li>
            <li>Using filter</li>
          </ul>
        </div>
        <div className="text-left bg-slate-500 text-white p-10">
          <h4 className="py-7 text-3xl">
            What is a unit test? Why should write unit tests?
          </h4>
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
