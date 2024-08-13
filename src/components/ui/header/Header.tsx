import { useState } from 'react'

import { BellRingingFill } from '@/assets/icons/components/BellRingingFill'
import { CaretDownFill } from '@/assets/icons/components/CaretDownFill'
import { MagnifyingGlassFill } from '@/assets/icons/components/Magnifying-glass-fill'
import { SquareHalfFill } from '@/assets/icons/components/Square-half-fill'
import { Button, Typography } from '@/components'
import {
  Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TaskModal } from '@/components/ui/modal-create-task'

import s from './header.module.scss'

type HeaderProps = {
  // name: string
}
export const Header = ({}: HeaderProps) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCreateTask = () => {}

  return (
    <header className={s.header}>
      <Typography as={'a'} variant={'link1'}>
        Home
      </Typography>
      <div className={s.rightItems}>
        <Button onClick={handleOpenModal} variant={'black'}>
          Create new task
        </Button>
        <TaskModal
          handleDataCreate={handleCreateTask}
          onOpenChange={setOpenModal}
          open={openModal}
          title={'New task creation'}
        />
        <div className={s.headerActions}>
          <div className={s.iconAction}>
            <SquareHalfFill />
          </div>
          <div className={s.iconAction}>
            <MagnifyingGlassFill />
          </div>
          <div className={s.iconAction}>
            <BellRingingFill />
          </div>
          <Dropdown modal={false}>
            <DropdownMenuTrigger asChild>
              <div className={s.trigger}>
                {/*{name}*/}
                <Typography>Anton Ivanov</Typography>
                <CaretDownFill />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={s.menu}>
              <DropdownMenuItem className={s.item}>
                <div>Option 1</div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className={s.item}>
                <div>Option 2</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
