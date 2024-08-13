import { ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button, CommonModal } from '@/components'
import { FormInput } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './task-modal.module.scss'

type DeckModalProps = {
  children?: ReactNode
  deckToUpdate?: any
  handleDataCreate?: (data: FormValues) => void
  // handleDataUpdate?: (updatedData: any) => void
  onOpenChange: (open: boolean) => void
  open: boolean
  title?: string
}

const deckScheme = z.object({
  name: z.string().trim().min(3).max(500),
})

type FormValues = z.infer<typeof deckScheme>

export const TaskModal = ({
  deckToUpdate,
  handleDataCreate,
  // handleDataUpdate,
  onOpenChange,
  title,
  ...restProps
}: DeckModalProps) => {
  const { control, handleSubmit, reset, setValue } = useForm<FormValues>({
    defaultValues: {
      name: deckToUpdate?.name ? deckToUpdate?.name : '',
    },
    resolver: zodResolver(deckScheme),
  })

  useEffect(() => {
    if (deckToUpdate) {
      setValue('name', deckToUpdate.name)
    }
  }, [deckToUpdate, setValue])

  const onSubmit = (data: FormValues) => {
    handleDataCreate?.({ ...data })

    // if (deckToUpdate) {
    //   handleDataUpdate?.({
    //     id: deckToUpdate?.id,
    //     ...data,
    //   })
    // }

    onOpenChange(false)
    reset()
  }

  const handleCancel = () => {
    onOpenChange(false)
    reset()
  }

  const classNames = {
    inputLabel: s.inputLabel,
  }

  return (
    <CommonModal
      modalTitle={title}
      onCloseHandler={handleCancel}
      onOpenChange={onOpenChange}
      {...restProps}
    >
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          className={classNames.inputLabel}
          control={control}
          label={'Task name'}
          name={'name'}
        />
        <FormInput
          className={classNames.inputLabel}
          control={control}
          label={'Description'}
          name={'name'}
        />
        <div className={s.subitnBtnWrapper}>
          <Button type={'submit'}>Create new task</Button>
        </div>
      </form>
    </CommonModal>
  )
}
