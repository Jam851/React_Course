React -> JScript -> HTML 


## Definitions
JSX ? 

Component - In react we wrap html inside a JScript function. These files are Components & they 'return' HTML Code.
            These functions are imported in the main.jsx file to be actually used inside the html DOM for our webpage.

SPA - Single Page Element
      Only one <div> is injected in to the actual HTML page.
      HTML DOM is not created for every page, pages are just part of the one single DOM.
      When user clicks on 'Home', 'Contact Us' the changes in URL observed by user on their browser are for cosmetic purposes only. 
      The page was always accessible.

ReactDOM - Virtual DOM created & handled by React. 
           Virtual DOM isn't used in recent times as it is a fragment of old times of re-rendering the whole page.
           The actual DOM is copied into a 'Virtual' DOM maintained by React. All changes in actual DOM are kept track of in Virtual DOM like a tree structure with a history of all the changes.

Reconciliation - [part of React Fiber]
                 Reconciliation is an Algo in React Fiber which is popularly now referred to as the 'Virtual DOM'.
                 Reconciliation is used to diff between the new & previous tree to compute which changes are to rendered in the React App.
                 Instead of re-rendering the whole DOM, the optimization of using Reconciliation is to only re-render the parts that have to be updated.

React Fiber - React's core Algorithm to create & track changes has now been replaced by the 'React Fiber' Algorithm.
              React Fiber's headline feature is Incremental Rendering. Its the ability to spread rendering over multiple chunks & spread it out over multiple frames.
              Other features are the ability to pause, abort, reuse work as new updates come in. It assigns priorities to diff types of updates.
              for more info:- https://github.com/acdlite/react-fiber-architecture

Hydration - Suppose a web layout is made, the injection of JS into it is called Hydration.
            Sometimes, buttons are clicked but the function after onClick doesn't work, in this eg Hydration didn't happen.

Hooks - React changes the UI using Hooks. There are many different types of Hooks.

Props - Assume that you have to use multiple CSS cards in your website. You will give slightly different data in each of them. To do this Props are used.
        Props are used in components like this:
        <App userName = "Kunal Nagrale">

        function App({userName = "Default Value"} = props) {
            return (
               <>
               <h1 className= 'bg-amber-500 text-black p-4'>{userName}</h1>
               </>
            )
         }


## Standard Rules ->
1) The filenames of components should be .jsx instead of .js
   Depending on the library/bundler for react (like Vite) it will not work properly.
2) The Component filenames should start with an uppercase letter.
3) Fragment '<> </>'
   Html code in Jsx files have to be wrapped under one tag in Components.
   It is an empty tag solely used for the purpose of wrapping multiple html code lines under one tag.
   <>
    <h1>Hello Me !!<h1>
    <div>Hello World !!</div>
   </>
4) Evaluated Expression '{ }'
   When returning HTML Code in Components, JScript variables can be written into the HTML Code which are called Evaluated Expressions.
   You can't write full scale JS Code in these brackets. Just Variables. for eg:-

   function App(){
      const username = "Kunal"
      return(
         <>
            <h1>Hello {username} !!<h1>
         </>
      )
   }

      

react.createElement - alternative for creating elements in HTML.
                      react.createElement(
                          'h1',
                          { className: 'greeting' },
                          'Hello'
                      )

useState() - returns the [1]Current Value & [2]A function to change stored value in an array. 1st index element is the function & 0th is Current Value.
             Value of variable placed inside the brackets of useState '()' are kept track of.
             [2] to change value of [1] everywhere. [2] is used to change UI in realtime.
             can be accessed by destructing, for eg:-
             
             import { useState } from 'react'                  [Needs to be imported]
             const [counter, setCounter] = useState(*variable*)



             Due to React Fibre Algo the updates using 'useState' Hook are made in batches.
             Of one EventHandler, one Batch of updates is made on the UI due to Optimisation & Performance Reasons.
             It is imp to understand how to manipulate these batch changes to get the result you want. For eg:
             To update the variable count from 0 to 4.
            
         [1] (The following code updates the count only once on UI due to Stale Closure & Batch Updates.
              Stale Closure: When you use setCount(count + 1), React receives the current value of count from the closure at the moment the addValue function is executed. Since the count value is not updated after each line, it remains the same.
              Batched Updates: React batches these updates. So, if you call setCount(count + 1) multiple times, React schedules all of them to happen together at the end of the function.)

            function App() {
               const [count, setCount] = useState(0)

               function addValue(){
                  setCount(count + 1)
                  setCount(count + 1)
                  setCount(count + 1)
                  setCount(count + 1)
               }
            }

         [2] (The following code updates the count after each line. This syntax tells React to update the state of count after each line.)

            function App() {
               const [count, setCount] = useState(0)

               function addValue(){
                  setCount((prevCount) => prevCount + 1);
                  setCount((prevCount) => prevCount + 1);
                  setCount((prevCount) => prevCount + 1);
                  setCount((prevCount) => prevCount + 1);
               }
            }



Passing Objects through JSX - const myObj = { username: "Armaan" }
                              <App myUser = {myObj}/>