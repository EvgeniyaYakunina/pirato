import { DotsThreeOutlineVerticalFill } from '@/assets/icons/components/DotsThreeOutlineVerticalFill'

import s from './activity.module.scss'

export const Activity = () => {
  return (
    <div className={s.activity}>
      <div className={s.headerBlock}>
        <div>Activity</div>
        <div>
          <DotsThreeOutlineVerticalFill />
        </div>
      </div>
    </div>
  )
}
