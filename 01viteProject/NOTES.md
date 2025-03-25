React -> JScript -> HTML 

JSX ? 

Component - In react we wrap html inside a JScript function. These files are Components & they 'return' HTML Code.
            These functions are imported in the main.jsx file to be actually used inside the html DOM for our webpage.

SPA - Single Page Element
      Only one <div> is injected in to the actual HTML page.
      HTML DOM is not created for every page, pages are just part of the one single DOM.
      When user clicks on 'Home', 'Contact Us' the changes in URL observed by user on their browser are for cosmetic purposes only. 
      The page was always accessible.

ReactDOM - Virtual DOM created & handled by React.

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



react.createElement - alternative for creating elements in HTML.
                      react.createElement(
                          'h1',
                          { className: 'greeting' },
                          'Hello'
                      )