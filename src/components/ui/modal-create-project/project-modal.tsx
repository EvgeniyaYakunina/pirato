import { ReactNode, useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import Trash from '@/assets/icons/components/Trash'
import { Button, CommonModal } from '@/components'
import { FormInput } from '@/components/ui/controlled'
import { Select, SelectItem } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './project-modal.module.scss'

type DeckModalProps = {
  children?: ReactNode
  deckToUpdate?: any
  handleDataCreate?: (data: FormValues) => void
  handleDataUpdate?: (updatedData: any) => void
  onOpenChange: (open: boolean) => void
  open: boolean
  title?: string
}
const inviteUserSchema = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
})
const deckScheme = z.object({
  inviteUsers: z.array(inviteUserSchema),
  name: z.string().trim(),
})

type FormValues = z.infer<typeof deckScheme>

export const ProjectModal = ({
  deckToUpdate,
  handleDataCreate,
  handleDataUpdate,
  onOpenChange,
  title,
  ...restProps
}: DeckModalProps) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const roleOptions = ['Owner', 'Administrator', 'Project Administrator', 'Participant']
  const { control, handleSubmit, reset, setValue } = useForm<FormValues>({
    defaultValues: {
      inviteUsers: [],
      name: deckToUpdate?.name ? deckToUpdate?.name : '',
    },
    resolver: zodResolver(deckScheme),
  })
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'inviteUsers', // Имя массива в форме
  })

  useEffect(() => {
    if (deckToUpdate) {
      setValue('name', deckToUpdate.name)
      if (deckToUpdate.inviteUsers) {
        setValue('inviteUsers', deckToUpdate.inviteUsers)
      }
    }
  }, [deckToUpdate, setValue])

  const onSubmit = (data: FormValues) => {
    handleDataCreate?.(data)

    if (deckToUpdate) {
      handleDataUpdate?.({
        id: deckToUpdate?.id,
        ...data,
      })
    }
    onOpenChange(false)
    reset()
  }

  const handleCancel = () => {
    onOpenChange(false)
    reset()
  }

  const classNames = { inputLabel: s.inputLabel }

  return (
    <CommonModal
      modalTitle={title}
      onCloseHandler={handleCancel}
      onOpenChange={onOpenChange}
      {...restProps}
    >
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={s.projectDetails}>
          Project details
          <FormInput
            className={classNames.inputLabel}
            control={control}
            label={''}
            name={'name'}
            placeholder={'Project name'}
            type={'text'}
          />
          <FormInput
            className={classNames.inputLabel}
            control={control}
            label={''}
            name={'name'}
            placeholder={'Description'}
            type={'text'}
          />
        </label>
        <div className={s.rolesContainer}>
          <a onClick={handleOpenModal}>About roles</a>
          <label className={s.label}>Invite users</label>
        </div>
        <div className={s.inviteUsers}>
          {fields.map((user, index) => (
            <div className={s.inviteUsersBlock} key={user.id}>
              <FormInput
                className={s.inputLabel}
                control={control}
                name={`inviteUsers.${index}.name`}
                placeholder={'User name'}
              />

              <Select
                className={s.select}
                defaultValue={'Owner'}
                name={`inviteUsers.${index}.name`}
              >
                {roleOptions.map(option => (
                  <SelectItem defaultValue={'Owner'} key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </Select>
              <Button
                className={s.removeButton}
                onClick={() => remove(index)}
                type={'button'}
                variant={'primary'}
              >
                <Trash />
              </Button>
            </div>
          ))}
          <Button
            fullWidth
            onClick={e => {
              e.preventDefault()
              append({ name: '', role: '' })
            }}
            variant={'primary'}
          >
            +
          </Button>
          <div className={s.subitnBtnWrapper}>
            <Button type={'submit'}>Create project</Button>
          </div>
        </div>
      </form>
    </CommonModal>
  )
}
