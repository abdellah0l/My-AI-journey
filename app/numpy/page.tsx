'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Database, BookOpen } from 'lucide-react'
import Link from 'next/link'
import NotebookViewer from '@/components/NotebookViewer'

export default function NumPyPage() {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">NumPy Tutorial</h1>
              <p className="text-primary-100">Fundamental package for scientific computing with Python</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Tutorial Content</h2>
            <div className="flex gap-3">
              <button
                onClick={() => setIsNotebookOpen(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                View Content
              </button>
              <a
                href="/assets/NumPy/NumPy-brief.ipynb"
                download
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Notebook
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">NumPy Brief Overview</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  NumPy (Numerical Python) is the fundamental package for scientific computing in Python. 
                  It provides support for large, multi-dimensional arrays and matrices, along with a large 
                  collection of high-level mathematical functions to operate on these arrays.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Multi-dimensional arrays:</strong> Efficient array operations with broadcasting</li>
                  <li><strong>Mathematical functions:</strong> Comprehensive library of mathematical operations</li>
                  <li><strong>Linear algebra:</strong> Built-in support for matrix operations</li>
                  <li><strong>Random number generation:</strong> Various probability distributions</li>
                  <li><strong>Fourier transforms:</strong> Fast Fourier Transform (FFT) capabilities</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Common Use Cases:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Data analysis and manipulation</li>
                  <li>Scientific computing and research</li>
                  <li>Machine learning and AI (as foundation for other libraries)</li>
                  <li>Image processing</li>
                  <li>Signal processing</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary-500 p-4 mt-6">
                  <p className="text-primary-800">
                    <strong>Note:</strong> This notebook contains detailed examples and exercises covering 
                    NumPy fundamentals, array operations, broadcasting, and advanced features. Download 
                    the notebook to explore the complete tutorial with interactive code examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://numpy.org/doc/stable/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Official Documentation</h4>
              <p className="text-gray-600 text-sm">Complete NumPy documentation and API reference</p>
            </a>
            <a
              href="https://numpy.org/doc/stable/user/quickstart.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Quickstart Guide</h4>
              <p className="text-gray-600 text-sm">Get started with NumPy basics and examples</p>
            </a>
          </div>
        </motion.div>
      </main>

      {/* Notebook Viewer */}
      <NotebookViewer
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        notebookPath="/assets/NumPy/NumPy-brief.ipynb"
        title="NumPy Tutorial Notebook"
      />
    </div>
  )
}
