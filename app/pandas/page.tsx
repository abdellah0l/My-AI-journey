'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, TrendingUp, BookOpen } from 'lucide-react'
import Link from 'next/link'
import NotebookViewer from '@/components/NotebookViewer'

export default function PandasPage() {
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
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Pandas Tutorial</h1>
              <p className="text-primary-100">Powerful data manipulation and analysis library</p>
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
                href="/assets/Pandas/tutorial.ipynb"
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Pandas Overview</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and 
                  manipulation library built on top of the Python programming language. It provides 
                  data structures for efficiently storing large datasets and tools for data analysis.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>DataFrame:</strong> 2D labeled data structure with columns of potentially different types</li>
                  <li><strong>Series:</strong> 1D labeled array capable of holding any data type</li>
                  <li><strong>Data manipulation:</strong> Easy filtering, grouping, and reshaping of data</li>
                  <li><strong>Missing data handling:</strong> Built-in tools for handling missing values</li>
                  <li><strong>Time series functionality:</strong> Date range generation and frequency conversion</li>
                  <li><strong>Data visualization:</strong> Integration with matplotlib for plotting</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Common Use Cases:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Data cleaning and preprocessing</li>
                  <li>Exploratory data analysis (EDA)</li>
                  <li>Statistical analysis and modeling</li>
                  <li>Time series analysis</li>
                  <li>Data aggregation and grouping</li>
                  <li>Reading and writing various file formats (CSV, Excel, JSON, etc.)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Core Data Structures:</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-primary-800 mb-2"><strong>DataFrame:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-primary-700">
                    <li>2-dimensional labeled data structure</li>
                    <li>Columns can be of different types (numeric, string, boolean, etc.)</li>
                    <li>Both row and column labels</li>
                    <li>Size-mutable (can be changed after creation)</li>
                  </ul>
                  
                  <p className="text-primary-800 mb-2 mt-4"><strong>Series:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-primary-700">
                    <li>1-dimensional labeled array</li>
                    <li>Can hold any data type</li>
                    <li>Axis labels are collectively called index</li>
                    <li>Size-immutable (cannot be changed after creation)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
                  <p className="text-green-800">
                    <strong>Note:</strong> This comprehensive tutorial covers Pandas fundamentals, data 
                    manipulation techniques, advanced features, and real-world examples. Download the 
                    notebook to explore interactive code examples and exercises.
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
              href="https://pandas.pydata.org/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Official Documentation</h4>
              <p className="text-gray-600 text-sm">Complete Pandas documentation and API reference</p>
            </a>
            <a
              href="https://pandas.pydata.org/docs/getting_started/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Getting Started</h4>
              <p className="text-gray-600 text-sm">Pandas getting started guide and tutorials</p>
            </a>
          </div>
        </motion.div>
      </main>

      {/* Notebook Viewer */}
      <NotebookViewer
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        notebookPath="/assets/Pandas/tutorial.ipynb"
        title="Pandas Tutorial Notebook"
      />
    </div>
  )
}
