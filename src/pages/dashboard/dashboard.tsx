import { Header } from '../../components/ui/header/header'
import { Sidebar } from '../../components/ui/sidebar/sidebar'
import { Activity } from '../activity'

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Activity />
    </div>
  )
}
