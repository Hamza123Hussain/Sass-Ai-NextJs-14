import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

// Define the function to get hashtags from the AI
export const GetHashTagsFromAI = async (
  postContent: string,
  userEmail: string,
  userID: string
) => {
  try {
    // Send a POST request to the backend endpoint
    const response = await axios.post(`${APIURL}/api/HashTag`, {
      PostContent: postContent,
      UserEmail: userEmail,
      UserID: userID,
    })

    // Check if the response status is 200 (OK)
    if (response.status === 200) {
      // Extract the data from the response
      const { AI, Human } = response.data

      // Log the AI and Human responses for debugging
      console.log('AI Response:', AI)
      console.log('Human Response:', Human)

      // Return the responses as needed
      return { AI, Human }
    } else {
      // Handle unexpected response statuses
      console.error('Unexpected response status:', response.status)
      throw new Error('Failed to fetch hashtags from AI')
    }
  } catch (error) {
    // Handle errors such as network issues or server errors
    console.error('Error fetching hashtags from AI:', error)
    throw new Error('Error fetching hashtags from AI')
  }
}
