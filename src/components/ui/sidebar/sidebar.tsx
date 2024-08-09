import { CerlesThreeFill } from '@/assets/icons/components/CerlesThreeFill'
import { GearFineFill } from '@/assets/icons/components/GearFineFill'
import { LegoFill } from '@/assets/icons/components/LegoFill'
import { ListBulletsFill } from '@/assets/icons/components/ListBulletsFill'
import SkullFill from '@/assets/icons/components/SkullFill'
import { SquareHalfFill } from '@/assets/icons/components/Square-half-fill'
import { SquaresFourFill } from '@/assets/icons/components/SquaresFourFill'

import s from './sidebar.module.scss'

export const Sidebar = () => {
  const classNames = {
    item: s.item,
    logo: s.logo,
    menuItems: s.menuItems,
    rightItems: s.rightItems,
    showSidebar: s.showSidebar,
    sidebar: s.sidebar,
  }

  return (
    <div className={classNames.sidebar}>
      <div className={classNames.showSidebar}>
        <div className={classNames.logo}>
          <span>
            <SkullFill />
          </span>
          <span>Pirato</span>
        </div>
        <ul className={classNames.menuItems}>
          <li className={classNames.item}>
            <div>
              <SquaresFourFill />
            </div>
            <div>Dashboard</div>
          </li>
          <li className={classNames.item}>
            <div>
              <GearFineFill />
            </div>
            <div>Settings</div>
          </li>
          <li className={classNames.item}>
            <div>
              <LegoFill />
            </div>
            <div>CI/CD</div>
          </li>
          <li className={classNames.item}>
            <div>
              <CerlesThreeFill />
            </div>
            <div>Modules</div>
          </li>
          <li className={classNames.item}>
            <div>
              <ListBulletsFill />
            </div>
            <div>Documentation</div>
          </li>
          <li className={classNames.item}>
            <div>
              <SquareHalfFill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
