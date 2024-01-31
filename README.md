##Meme Gallery
This project is a gallery of memes created using Next.js and Reddit's API. It fetches posts from the subreddit r/memes and displays them in a visually appealing gallery format. Users can click on thumbnails to view the full resolution images using the Photoswipe library.

##Features
-Fetches memes from Reddit's API
-Displays memes in a gallery format
-Allows users to view full resolution images by clicking on thumbnails
-Infinite scrolling implemented for seamless browsing experience

##Installation

```bash
Clone the repository:


Copy code
git clone https://github.com/yourusername/memes-gallery.git
Navigate to the project directory:

bash
Copy code
cd memes-gallery
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and go to http://localhost:3000 to view the gallery.
```

##How it Works
The application fetches posts from Reddit's API using the subreddit r/memes.
It extracts thumbnails and URLs from the fetched posts.
Photoswipe library is used to display thumbnails in a gallery format.
Users can click on thumbnails to view the full resolution images.
Infinite scrolling is implemented to fetch more entries as the user scrolls down the gallery.


##Technologies Used
-Next.js
-React
-Reddit API
-Photoswipe



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
