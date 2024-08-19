import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const GetSummaryFromAI = async (
  SummaryTask: string,
  UserEmail: string,
  UserID: string
) => {
  try {
    // Make the API call to the backend
    const response = await axios.post(`${APIURL}/api/Summary`, {
      SummaryTask,
      UserEmail,
      UserID,
    })

    // Check if the response is successful
    if (response.status === 200) {
      // Extract the data from the response
      console.log('API RESPONSED', response.data)
      return response.data
    } else {
      // Handle non-200 responses
      console.error('Unexpected response status:', response.status)
      throw new Error('Failed to fetch summary from AI')
    }
  } catch (error) {
    // Handle errors, such as network issues or server errors
    console.error('Error fetching summary from AI:', error)
    throw new Error('Error fetching summary from AI')
  }
}
