import React from 'react'

const Main = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white min-h-screen pb-20 md:pb-0 pt-20 md:pt-0 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Next Project Boilerplate
        </h1>
        <h2 className="text-xl md:text-2xl font-normal">
          The Next.js Project Boilerplate serves as a starting point for
          developing applications using Next.js. It leverages a modern tech
          stack, including TypeScript, Tailwind, Jest, React Testing Library,
          Storybook, Eslint, Prettier, and Husky.
        </h2>
      </div>
    </main>
  )
}

export default Main
