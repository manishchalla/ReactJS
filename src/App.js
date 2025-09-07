const App = () =>{
    return React.createElement(
        "div",
        {},
        React.createElement('h1',{},"Pixel Perfect Pizzas")
    );
};

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(React.createElement(App));