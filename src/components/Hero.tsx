import React from 'react'
import { Upload, Wand2 } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden rounded-3xl">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517245386804-bb43f63c02ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative py-12 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Wand2 className="mx-auto h-12 w-12 mb-6 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Instantly Remove Backgrounds from Your Images
          </h1>
          <p className="text-lg mb-8">
            Upload your photo, and let our smart tool do the work. Fast, clean,
            and effortless — perfect for e-commerce, design, and social media.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center mx-auto">
            <Upload className="mr-2 h-5 w-5" />
            Upload Image
          </button>
          <p className="mt-4 text-sm text-gray-200">
            100% free – No signup required.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
