import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createRoot} from 'react-dom/client';
// import {Provider} from 'react-redux';
// import {createStore,applyMiddleware,compose} from 'redux';
// import reduxThunk from 'redux-thunk';

// import App from './App';
// import reducers from "./zredux/reducers"
// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //for react dev tool 

// const store=createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(reduxThunk))
// );

// // ReactDOM.render(
// //     <React.StrictMode>
// //     <Provider store={store}>
// //         <App />
// //     </Provider>
// //     </React.StrictMode>,
// //     document.querySelector('#root')
// // );

// const container =document.getElementById('root');
// const root=createRoot(container);

//  root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// );
