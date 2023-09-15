import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { ContextoProvider } from './context/Context.jsx'
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import { persistor, store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <GlobalStyle></GlobalStyle>
      </PersistGate>

    </Provider>

  </React.StrictMode>,
)
