import { useState, ChangeEvent } from 'react'

interface FieldProps {
  type: string,
  defaultValue?: string;
}

export const useField = ({ type, defaultValue }: FieldProps) => {
  const [value, setValue] = defaultValue ? useState(defaultValue) : useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}