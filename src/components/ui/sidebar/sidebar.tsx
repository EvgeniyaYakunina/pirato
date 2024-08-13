import { CerlesThreeFill } from '@/assets/icons/components/CerlesThreeFill'
import { GearFineFill } from '@/assets/icons/components/GearFineFill'
import { LegoFill } from '@/assets/icons/components/LegoFill'
import { ListBulletsFill } from '@/assets/icons/components/ListBulletsFill'
import SkullFill from '@/assets/icons/components/SkullFill'
import { SquareHalfFill } from '@/assets/icons/components/Square-half-fill'
import { SquaresFourFill } from '@/assets/icons/components/SquaresFourFill'

import s from './sidebar.module.scss'

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.showSidebar}>
        <div className={s.logo}>
          <span>
            <SkullFill />
          </span>
          <span>Pirato</span>
        </div>
        <ul className={s.menuItems}>
          <li className={s.item}>
            <div>
              <SquaresFourFill />
            </div>
            <div>Dashboard</div>
          </li>
          <li className={s.item}>
            <div>
              <GearFineFill />
            </div>
            <div>Settings</div>
          </li>
          <li className={s.item}>
            <div>
              <LegoFill />
            </div>
            <div>CI/CD</div>
          </li>
          <li className={s.item}>
            <div>
              <CerlesThreeFill />
            </div>
            <div>Modules</div>
          </li>
          <li className={s.item}>
            <div>
              <ListBulletsFill />
            </div>
            <div>Documentation</div>
          </li>
          <li className={s.item}>
            <div>
              <SquareHalfFill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
