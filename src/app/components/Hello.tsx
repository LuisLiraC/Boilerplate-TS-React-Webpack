import React from 'react'
import './Hello.css'

interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}

export const Hello: React.FC<IProps> = () => {
  return (
    <h1>Hello World</h1>
  )
}