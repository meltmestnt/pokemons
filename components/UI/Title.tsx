import React from 'react'

type TitleProps = {
  children: React.ReactNode,
  className?: string
}

function Title({ className = "", ...restProps }: TitleProps) {
  return (
    <h1 className={`text-white text-2xl text-center ${className}`} {...restProps} />
  )
}

export default Title