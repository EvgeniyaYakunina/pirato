import { DotsThreeOutlineVerticalFill } from '@/assets/icons/components/DotsThreeOutlineVerticalFill'

import s from './activity.module.scss'

export const Activity = () => {
  const classNames = {
    activity: s.activity,
    headerBlock: s.headerBlock,
  }

  return (
    <div className={classNames.activity}>
      <div className={classNames.headerBlock}>
        <div>Activity</div>
        <div>
          <DotsThreeOutlineVerticalFill />
        </div>
      </div>
    </div>
  )
}
