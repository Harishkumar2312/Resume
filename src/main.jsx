import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Content1 from './Component/First/Content1'
import Sports from './Component/Sports'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Content1/> */}
    <Sports/>
  </StrictMode>,
)
