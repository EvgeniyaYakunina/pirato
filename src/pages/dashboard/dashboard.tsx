import { Header } from '@/components/ui/header/Header'
import { Content } from 'src/pages/content/content'

import s from './dashboard.module.scss'

import { Sidebar } from '../../components/ui/sidebar/sidebar'
import { Activity } from '../activity/activity'

export const Dashboard = () => {
  return (
    <div className={s.container}>
      <Sidebar />
      <Header />
      <div className={s.content}>
        <Content />
      </div>
      <div className={s.activity}>
        <Activity />
      </div>
    </div>
  )
}
