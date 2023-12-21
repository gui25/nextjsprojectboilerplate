import React from 'react'
import '@/styles/global.css'

const withGlobalStyles = (Story) => (
  <>
    <Story />
  </>
)

export const decorators = [withGlobalStyles]
