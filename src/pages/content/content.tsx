import { useState } from 'react'

import { Button, ProjectTable } from '@/components'
import { ProjectModal } from '@/components/ui/modal-create-project'

import s from './content.module.scss'

export const Content = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCreateProject = () => {}

  return (
    <div className={s.container}>
      <div className={s.cells}>
        <div className={s.projectWrapper}>
          <span className={s.projectLogo}>Projects</span>
          <Button className={s.button} onClick={handleOpenModal} variant={'primary'}>
            Create
          </Button>
          <ProjectModal
            handleDataCreate={handleCreateProject}
            onOpenChange={setOpenModal}
            open={openModal}
            title={'New project creation'}
          />
        </div>
      </div>
      <div className={s.cells}>My tasks</div>
      <div className={s.cells}>Last tasks</div>
      <ProjectTable />
    </div>
  )
}
