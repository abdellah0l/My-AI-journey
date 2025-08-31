'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function ScikitLearnPage() {
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
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Scikit-learn</h1>
              <p className="text-primary-100">Comprehensive machine learning library for Python</p>
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
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-12 h-12 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Currently Learning</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I&apos;m currently in the process of learning Scikit-learn. This comprehensive machine learning 
              library is next on my AI journey!
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">What I&apos;m Planning to Learn</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Scikit-learn is a comprehensive machine learning library for Python that provides 
                  simple and efficient tools for data mining and data analysis. It&apos;s built on NumPy, 
                  SciPy, and matplotlib, making it a powerful tool for machine learning tasks.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Key Areas I&apos;ll Cover:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Supervised Learning:</strong> Classification and regression algorithms</li>
                  <li><strong>Unsupervised Learning:</strong> Clustering, dimensionality reduction, and density estimation</li>
                  <li><strong>Model Selection:</strong> Cross-validation, hyperparameter tuning, and model evaluation</li>
                  <li><strong>Preprocessing:</strong> Feature scaling, encoding, and pipeline creation</li>
                  <li><strong>Ensemble Methods:</strong> Random forests, gradient boosting, and voting classifiers</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Learning Path:</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-primary-700">
                    <li><strong>Fundamentals:</strong> Understanding the scikit-learn API and data representation</li>
                    <li><strong>Classification:</strong> Logistic regression, SVM, decision trees, and random forests</li>
                    <li><strong>Regression:</strong> Linear regression, ridge regression, and polynomial regression</li>
                    <li><strong>Clustering:</strong> K-means, hierarchical clustering, and DBSCAN</li>
                    <li><strong>Dimensionality Reduction:</strong> PCA, t-SNE, and feature selection</li>
                    <li><strong>Model Evaluation:</strong> Cross-validation, metrics, and hyperparameter tuning</li>
                    <li><strong>Advanced Topics:</strong> Pipelines, feature engineering, and ensemble methods</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                  <p className="text-yellow-800">
                    <strong>Coming Soon:</strong> I&apos;ll be creating comprehensive tutorials and examples 
                    covering all these topics. The tutorial will include practical examples, real-world 
                    datasets, and hands-on exercises to master machine learning with scikit-learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://scikit-learn.org/stable/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Official Documentation</h4>
              <p className="text-gray-600 text-sm">Complete scikit-learn documentation and tutorials</p>
            </a>
            <a
              href="https://scikit-learn.org/stable/tutorial/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Tutorials</h4>
              <p className="text-gray-600 text-sm">Step-by-step tutorials and examples</p>
            </a>
            <a
              href="https://scikit-learn.org/stable/auto_examples/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Examples Gallery</h4>
              <p className="text-gray-600 text-sm">Comprehensive examples and use cases</p>
            </a>
            <a
              href="https://scikit-learn.org/stable/modules/classes.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 mb-2">API Reference</h4>
              <p className="text-gray-600 text-sm">Complete API documentation and parameters</p>
            </a>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mt-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learning Progress</h3>
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Scikit-learn Mastery</span>
              <span className="text-sm font-medium text-gray-700">0%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Starting my journey with scikit-learn! 🚀
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
