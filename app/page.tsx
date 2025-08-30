'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Brain, Database, TrendingUp } from 'lucide-react'
import ToolCard from '@/components/ToolCard'

export default function Home() {
  const tools = [
    {
      id: 'numpy',
      name: 'NumPy',
      description: 'Fundamental package for scientific computing with Python. Provides support for large, multi-dimensional arrays and matrices.',
      icon: Database,
      href: '/numpy',
      hasContent: true,
      filename: 'NumPy-brief.ipynb'
    },
    {
      id: 'pandas',
      name: 'Pandas',
      description: 'Powerful data manipulation and analysis library. Perfect for working with structured data and time series.',
      icon: TrendingUp,
      href: '/pandas',
      hasContent: true,
      filename: 'tutorial.ipynb'
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn',
      description: 'Comprehensive machine learning library for Python. Features various classification, regression, and clustering algorithms.',
      icon: Brain,
      href: '/scikit-learn',
      hasContent: false,
      filename: null
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            My AI Journey
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
          >
            I'm passionate about becoming an AI engineer because I believe artificial intelligence 
            has the power to transform our world. From automating complex tasks to solving 
            previously unsolvable problems, AI represents the future of technology. I want to 
            be part of this revolution, creating intelligent systems that can learn, adapt, 
            and make a positive impact on society.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <a 
              href="#tools" 
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Explore My Tools
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="min-h-screen flex items-center px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Tools I Have Learnt
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's a short brief about what I have learnt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ToolCard {...tool} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
