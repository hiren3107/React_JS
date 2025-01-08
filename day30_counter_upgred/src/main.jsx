import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { hiren } from './redux/stor'

createRoot(document.getElementById('root')).render(
  <Provider store={hiren}>
    <App />
    </Provider>

)
