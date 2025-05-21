import React from 'react'
import Hero from './components/Hero'
import RemoveBackground from './components/RemoveBackground'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center space-y-12">
        <Hero />
        <RemoveBackground />
      </div>
    </div>
  )
}

export default App
