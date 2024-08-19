'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InputValues } from './SignupInterface'
import { Message } from './MessageInterface'
import { CallAi } from '@/functions/AI/Convo/UseConvoAI'
import { GetSummaryFromAI } from '@/functions/AI/Summary/SummaryAI'

export const UserContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    Image: null,
  })
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false) // Start with loading true
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const storedData = localStorage.getItem('AIMessages')
      return storedData ? JSON.parse(storedData) : [] // Initialize with empty array
    } catch (error) {
      console.error('Failed to parse messages from localStorage:', error)
      return [] // Fallback to empty array
    }
  })
  const [Summarymessages, setSummaryMessages] = useState<Message[]>(() => {
    try {
      const storedData = localStorage.getItem('AISummaryMessages')
      return storedData ? JSON.parse(storedData) : [] // Initialize with empty array
    } catch (error) {
      console.error('Failed to parse messages from localStorage:', error)
      return [] // Fallback to empty array
    }
  })
  const [userData, setUserData] = useState<any>(() => {
    try {
      const storedData = localStorage.getItem('SassUser')
      return storedData ? JSON.parse(storedData) : null // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return {} // Fallback to empty object
    }
  })

  useEffect(() => {
    // Save userData to local storage whenever it changes
    try {
      localStorage.setItem('SassUser', JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to save userData to localStorage:', error)
    }
  }, [userData])
  useEffect(() => {
    // Save messages to local storage whenever messages change
    try {
      localStorage.setItem('AIMessages', JSON.stringify(messages))
    } catch (error) {
      console.error('Failed to save messages to localStorage:', error)
    }
  }, [messages])
  useEffect(() => {
    // Save messages to local storage whenever messages change
    try {
      localStorage.setItem('AISummaryMessages', JSON.stringify(Summarymessages))
    } catch (error) {
      console.error('Failed to save messages to localStorage:', error)
    }
  }, [Summarymessages])
  const handleSend = async (inputValue: string, setInputValue: any) => {
    if (inputValue.trim()) {
      try {
        setLoading(true)
        const Data = await CallAi(inputValue, userData.email, userData.Name)
        if (Data) {
          setMessages((prev: Message[]) => [...prev, Data.Human, Data.AI])
          setInputValue('')
          setLoading(false)
        }
      } catch (error) {
        console.error('Error sending message:', error)
      } finally {
        setLoading(false)
      }
    }
  }
  const handleSummary = async () => {
    if (inputValue.trim()) {
      try {
        setLoading(true)
        const Data = await GetSummaryFromAI(
          inputValue,
          userData.email,
          userData.Name
        )
        if (Data) {
          setSummaryMessages((prev: Message[]) => [
            ...prev,
            Data.Human,
            Data.AI,
          ])
          setInputValue('')
          setLoading(false)
        }
      } catch (error) {
        console.error('Error Summarying message:', error)
      } finally {
        setLoading(false)
      }
    }
  }
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loading,
        setLoading,
        setMessages,
        messages,
        inputVal,
        setInputVal,
        inputValue,
        setInputValue,
        Summarymessages,
        handleSummary,
        handleSend,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
