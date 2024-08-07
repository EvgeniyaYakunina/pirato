import { Activity } from '@/pages'

import { Header } from '../../components/ui/header/header'
import { Sidebar } from '../../components/ui/sidebar/sidebar'

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Activity />
    </div>
  )
}
