import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './'

test('the Main component renders correctly', () => {
  const { asFragment } = render(<Main />)

  const titleElement = screen.getByText('Next Project Boilerplate')
  expect(titleElement).toBeInTheDocument()

  const descriptionElement = screen.getByText(
    `The Next.js Project Boilerplate serves as a starting point for developing applications using Next.js. It leverages a modern tech stack, including TypeScript, Tailwind, Jest, React Testing Library, Storybook, Eslint, Prettier, and Husky.`
  )
  expect(descriptionElement).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})
