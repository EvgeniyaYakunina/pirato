// eslint-disable-next-line import/no-unresolved
import { BellRingingFill } from '@/assets/icons/components/BellRingingFill'
import { CaretDownFill } from '@/assets/icons/components/CaretDownFill'
import { MagnifyingGlassFill } from '@/assets/icons/components/Magnifying-glass-fill'
import { Button } from '@/components'

import s from './header.module.scss'

import { SquareHalfFill } from '../../../assets/icons/components/Square-half-fill'
import { Typography } from '../typography/typography'

export const Header = () => {
  const classNames = {
    header: s.header,
    headerActions: s.headerActions,
    iconAction: s.iconAction,
    menu: s.menuUsers,
    notificationIcon: s.notificationIcon,
    rightItems: s.rightItems,
  }

  return (
    <header className={classNames.header}>
      <Typography as={'a'} variant={'link1'}>
        Home
      </Typography>
      <div className={classNames.rightItems}>
        <Button variant={'black'}>Create new task</Button>
        <div className={classNames.headerActions}>
          <div className={classNames.iconAction}>
            <SquareHalfFill />
          </div>
          <div className={classNames.iconAction}>
            <MagnifyingGlassFill />
          </div>
          <div className={classNames.iconAction}>
            <BellRingingFill />
          </div>
          <div className={classNames.menu}>
            <div>Anton Ivanov</div>
            <div className={classNames.iconAction}>
              <CaretDownFill />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
