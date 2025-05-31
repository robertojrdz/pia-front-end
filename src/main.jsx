import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import News from './components/News/News.jsx'
import Standings from './components/Standings/Standings.jsx'
import Grid from './components/Grid/Grid.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='news' element={<News />} />
                    <Route path='standings' element={<Standings />} />
                    <Route path='grid' element={<Grid />} />
                </Route>
            </Routes>
        </HashRouter>
    </StrictMode>,
)