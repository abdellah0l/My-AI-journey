'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, BookOpen } from 'lucide-react'
import Link from 'next/link'
import NotebookViewer from './NotebookViewer'

interface ToolCardProps {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  hasContent: boolean
  filename: string | null
}

export default function ToolCard({ 
  id, 
  name, 
  description, 
  icon: Icon, 
  href, 
  hasContent, 
  filename 
}: ToolCardProps) {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false)

  return (
         <motion.div
       whileHover={{ y: -5 }}
       className="bg-white rounded-2xl shadow-lg p-10 card-hover border border-gray-100 min-h-[500px] flex flex-col"
     >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className={`w-2 h-2 rounded-full ${hasContent ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="text-sm text-gray-500">
              {hasContent ? 'Completed' : 'Currently Learning'}
            </span>
          </div>
        </div>
      </div>

             <p className="text-gray-600 mb-6 leading-relaxed flex-1">
         {description}
       </p>

       <div className="flex gap-3 mt-auto">
        {hasContent ? (
          <>
            <Link
              href={href}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              View Tutorial
              <ArrowRight className="w-4 h-4" />
            </Link>
                         {filename && (
               <>
                 <button
                   onClick={() => setIsNotebookOpen(true)}
                   className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                 >
                   <BookOpen className="w-4 h-4" />
                 </button>
                 <a
                   href={`/assets/${id}/${filename}`}
                   download
                   className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                 >
                   <Download className="w-4 h-4" />
                 </a>
               </>
             )}
          </>
        ) : (
          <div className="flex-1 bg-gray-100 text-gray-500 px-4 py-3 rounded-lg font-semibold flex items-center justify-center">
            Currently Learning
          </div>
                 )}
       </div>

       {/* Notebook Viewer */}
       {filename && (
         <NotebookViewer
           isOpen={isNotebookOpen}
           onClose={() => setIsNotebookOpen(false)}
           notebookPath={`/assets/${id}/${filename}`}
           title={`${name} Tutorial Notebook`}
         />
       )}
     </motion.div>
   )
 }
