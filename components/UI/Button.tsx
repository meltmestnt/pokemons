import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonType = {
  className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button({ className = "", disabled, ...rest }: ButtonType) {
  return (
    <button disabled={disabled} className={`bg-indigo-500 disabled:opacity-50 transition active:scale-90 font-semibold text-blue-100 rounded-md p-3 inline-flex items-center justify-center text- ${className}`} {...rest} />
  )
}

export default Button