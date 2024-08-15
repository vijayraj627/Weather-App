import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import History from './components/History';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';

const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <App/>
    },
    {
      path : "history",
      element : <History/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider
      router={appRouter}
    />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
