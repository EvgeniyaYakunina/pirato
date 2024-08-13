import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CaretDownFill } from '@/assets/icons/components/CaretDownFill'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectProps = {
  className?: string
  label?: string
  pagination?: boolean
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  (
    {
      children,
      className,
      defaultValue,
      disabled,
      label,
      onOpenChange,
      open,
      pagination,
      placeholder,
      value,
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Root
      onOpenChange={onOpenChange}
      open={open}
      {...props}
      defaultValue={defaultValue}
    >
      {label && <div className={s.title}>{label}</div>}
      <SelectPrimitive.Trigger
        className={clsx(s.trigger, pagination && s.pagination, className)}
        disabled={disabled}
        ref={ref}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        {value}
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className={s.icon}>
          <CaretDownFill />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={s.content}
          collisionPadding={0}
          position={'popper'}
          sticky={'always'}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
)
export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, defaultValue, ...props }, ref) => (
  <SelectPrimitive.Item className={s.item} {...props} ref={ref}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
