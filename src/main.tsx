import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App';
import SignUpForm from './components/SignUpForm/SignUpForm';
import store from './store';
import { Provider } from 'react-redux';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <SignUpForm />
    </Provider>
  </React.StrictMode>,
)
