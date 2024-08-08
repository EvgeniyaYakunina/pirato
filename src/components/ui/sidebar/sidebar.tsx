import SkullFill from '@/assets/icons/components/SkullFill'

import s from './sidebar.module.scss'

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div>
        <div className={s.logo}>
          <span>
            <SkullFill />
          </span>
          <span>Pirato</span>
        </div>
        <div className={s.menu}>
          <div>Dashboard</div>
          <div>Settings</div>
          <div>CI/CD</div>
          <div>Modules</div>
          <div>Documentation</div>
        </div>
      </div>
    </div>
  )
}
