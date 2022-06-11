import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Post from './pages/Post'
import Layout from './components/Layout/Layout'
import './styles/globals.scss'

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
        </Route>
    </Routes>

)

export default App
