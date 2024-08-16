# API Challenge Solution

This is a [Next.js](https://nextjs.org/) project that demonstrates how to interact with an API using Axios. The project was created as part of a technical challenge for a job application, showcasing the ability to fetch and handle data from an external API endpoint.


## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## How It Works

The application starts by displaying a button to initiate the API requests.
Upon clicking the button, the app makes a series of POST requests to the API, using a cursor provided in each response to navigate through the data.
The application automatically follows the sequence of API responses until it reaches the final message.
The final message is then displayed on the screen.


## Features

API Integration: Fetches data from a challenge API using Axios.
State Management: Utilizes React's useState and useEffect hooks to manage the state and control the flow of API requests.
Responsive Design: The app is styled for both desktop and mobile views.


## Technologies Used

Next.js: Framework used for server-side rendering and structuring the project.
React: Used for building the user interface and managing state.
Axios: For making HTTP requests to the API.
CSS: For styling the application.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
