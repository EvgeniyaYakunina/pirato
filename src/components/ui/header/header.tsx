import { Button } from '@/components'

import s from './header.module.scss'

import { Typography } from '../typography/typography'

export const Header = () => {
  const classNames = {
    header: s.header,
  }

  return (
    <header className={classNames.header}>
      <Typography as={'a'} variant={'link1'}>
        Home
      </Typography>
      <div className={s.rightItems}>
        <Button>Create new task</Button>
      </div>
    </header>
  )
}
