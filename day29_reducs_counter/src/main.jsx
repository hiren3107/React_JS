import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { hiren } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
<Provider store={hiren}>
    <App />
</Provider>
)
