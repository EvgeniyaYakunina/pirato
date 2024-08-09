import { Header } from '@/components/ui/header/Header'
import { Activity } from '@/pages/activity/Activity'
import { Content } from '@/pages/content'

import s from './dashboard.module.scss'

import { Sidebar } from '../../components/ui/sidebar/sidebar'

export const Dashboard = () => {
  return (
    <div className={s.container}>
      <Sidebar />
      <Header />
      <div className={s.content}>
        <Content />
      </div>
      <Activity />
    </div>
  )
}
