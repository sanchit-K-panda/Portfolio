'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { FaEnvelope, FaUser, FaClock, FaTrash, FaEye } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  read: boolean
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
      const response = await fetch(`${API_URL}/api/contact`)
      const data = await response.json()
      setContacts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
      toast.error('Failed to load messages')
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
      await fetch(`${API_URL}/api/contact/${id}`, { method: 'DELETE' })
      setContacts(contacts.filter((c) => c.id !== id))
      toast.success('Message deleted successfully')
    } catch (error) {
      toast.error('Failed to delete message')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {contacts.length} total messages
          </p>
        </motion.div>

        {/* Messages List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {contacts.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center">
                <FaEnvelope className="text-6xl text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  No messages yet
                </p>
              </div>
            ) : (
              contacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedContact(contact)}
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all border-2 ${
                    selectedContact?.id === contact.id
                      ? 'border-primary'
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FaUser className="text-primary" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {contact.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <FaEnvelope className="text-xs" />
                        {contact.email}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteContact(contact.id)
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {contact.subject}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                    {contact.message}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <FaClock />
                    {formatDate(contact.createdAt)}
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Message Detail */}
          <div className="sticky top-6">
            {selectedContact ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedContact.subject}
                    </h2>
                    <div className="space-y-1">
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <FaUser />
                        <strong>From:</strong> {selectedContact.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <FaEnvelope />
                        <a
                          href={`mailto:${selectedContact.email}`}
                          className="text-primary hover:underline"
                        >
                          {selectedContact.email}
                        </a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <FaClock />
                        {formatDate(selectedContact.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Message:
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {selectedContact.message}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
                  >
                    Reply via Email
                  </a>
                  <button
                    onClick={() => deleteContact(selectedContact.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
                <FaEye className="text-6xl text-gray-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Select a message to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
