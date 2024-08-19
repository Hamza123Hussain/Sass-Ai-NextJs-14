import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CallAi = async (
  Conversation: string,
  UserEmail: string,
  UserID: string
) => {
  try {
    const response = await axios.post(`${APIURL}/api/General`, {
      Conversation,
      UserEmail,
      UserID,
    })

    if (response.status === 200) {
      // Handle the successful response
      console.log('RESPONSE FROM AI:', response.data)
      return response.data // Return data to be used in the calling context
    } else {
      // Handle unexpected status codes
      console.error('Unexpected response status:', response.status)
      throw new Error('Unexpected response status')
    }
  } catch (error: any) {
    // Handle errors from the request
    console.error('Error calling AI:', error.message || error)
    throw new Error(error.message || 'Failed to call AI')
  }
}
