import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {describe, it, expect} from 'vitest'
import React from 'react'

describe('Home Page', () => {
  it('renders a basic heading', () => {
    render(<h1>Hello, Test!</h1>)
    expect(screen.getByText('Hello, Test!')).toBeInTheDocument()
  })
})
