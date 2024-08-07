import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui'

export type FormInputProps<TFieldValues extends FieldValues> = Omit<
  InputProps,
  'onBlur' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  label,
  name,
  ...restInputProps
}: FormInputProps<TFieldValues>) => {
  const {
    field: { onBlur, onChange, value = defaultValue ?? '' },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Input
      {...restInputProps}
      defaultValue={defaultValue}
      errorMessage={error?.message}
      label={label}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
    />
  )
}
