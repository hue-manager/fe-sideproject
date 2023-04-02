export interface SidebarElement {
  id: number
  label: string
  path: string
  isAdmin?: boolean
}

interface IPostApply {
  category: string
  memo: string
  startDate: string
  endDate: string
}
