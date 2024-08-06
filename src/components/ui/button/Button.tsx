import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: ButtonProps) => {
  const { children, className, fullWidth, variant = 'primary', ...rest } = props

  const classNames = {
    button: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
  }

  return (
    <button className={classNames.button} {...rest}>
      {children}
    </button>
  )
}
