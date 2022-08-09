import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import Frontpage from './pages/Frontpage'
import { Routes, Route, Link } from "react-router-dom";
import MicPage from './mdx/mic_paper.mdx'

const App: React.FC = () => {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/mic-paper" element={<MicPage />} />
        </Routes>
      </MainLayout>

    </div>
  )
}

export default App
