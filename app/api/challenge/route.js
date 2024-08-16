import axios from 'axios';                  // Import the axios library for making HTTP requests

export async function POST(req) {           // An async POST function to handle incoming POST requests
  const { cursor } = await req.json();      // Extract the 'cursor' from the request body

  try {
    // POST request to the external API, including the cursor if provided
    const response = await axios.post('https://flag-gilt.vercel.app/api/challenge', cursor ? { cursor } : {}, {
      headers: {
        Authorization: 'Bearer uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA='
      }
    });

    return new Response(JSON.stringify(response.data), {     // Return the response data from the API with a 200 OK status
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);

    return new Response(JSON.stringify({                     // Return an error response with the appropriate status code and message
      error: 'Error fetching data from the API',
      details: error.response ? error.response.data : error.message
    }), {
      status: error.response ? error.response.status : 500,  // Use the status code from the API if available, otherwise default to 500
    });
  }
}
