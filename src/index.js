import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Renting from './pages/Renting/index'
import Error from './pages/Error/index'
import { createGlobalStyle } from 'styled-components'
import colors from './utils/colors'

const GlobalStyle = createGlobalStyle`
* {
  font-family: montserrat, Helvetica, sans-serif;;
  color : ${colors.primary};
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  @media screen and (max-width: 520px) {
    font-size: 12px;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/renting/:id" element={<Renting />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
