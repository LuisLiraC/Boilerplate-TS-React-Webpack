import React from 'react'
import './Hello.css'
import LogoReact from '../public/img/react.png'

interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}

export const Hello: React.FC<IProps> = () => {
  return (
    <>
      <h1>Hello World Dev Server</h1>
      <img src={LogoReact} alt="" />
    </>
  )
}