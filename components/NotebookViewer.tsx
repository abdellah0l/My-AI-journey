'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Play, FileText, Code } from 'lucide-react'

interface NotebookCell {
  cell_type: 'markdown' | 'code'
  source: string[]
  outputs?: any[]
  execution_count?: number
}

interface NotebookData {
  cells: NotebookCell[]
  metadata: any
  nbformat: number
  nbformat_minor: number
}

interface NotebookViewerProps {
  isOpen: boolean
  onClose: () => void
  notebookPath: string
  title: string
}

export default function NotebookViewer({ isOpen, onClose, notebookPath, title }: NotebookViewerProps) {
  const [notebookData, setNotebookData] = useState<NotebookData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen && notebookPath) {
      loadNotebook()
    }
  }, [isOpen, notebookPath])

  const loadNotebook = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(notebookPath)
      if (!response.ok) {
        throw new Error('Failed to load notebook')
      }
      const data = await response.json()
      setNotebookData(data)
    } catch (err) {
      setError('Failed to load notebook content')
      console.error('Error loading notebook:', err)
    } finally {
      setLoading(false)
    }
  }

  const renderMarkdown = (source: string[]) => {
    const content = source.join('')
    return (
      <div className="prose prose-sm max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />
      </div>
    )
  }

  const renderCode = (cell: NotebookCell) => {
    const code = cell.source.join('')
    return (
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">
              {cell.execution_count ? `In [${cell.execution_count}]:` : 'Code:'}
            </span>
          </div>
          <Play className="w-4 h-4 text-gray-400" />
        </div>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
        {cell.outputs && cell.outputs.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-400 text-sm">Output:</span>
            </div>
            <pre className="text-blue-400 text-sm overflow-x-auto">
              <code>{JSON.stringify(cell.outputs, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading && (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 mb-2">{error}</div>
              <button
                onClick={loadNotebook}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          )}

          {notebookData && (
            <div className="space-y-6">
              {notebookData.cells.map((cell, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {cell.cell_type === 'markdown' ? (
                    <div className="p-4 bg-gray-50">
                      {renderMarkdown(cell.source)}
                    </div>
                  ) : (
                    <div className="p-4">
                      {renderCode(cell)}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
