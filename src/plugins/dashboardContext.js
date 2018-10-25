import { DashboardContext } from '../DashboardContext.ts'

export default ({Vue}) => {
  Vue.prototype.$dashboardContext = DashboardContext.getInstance()
}
