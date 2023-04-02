import { Admin } from '@src/types/admin'
import instance from '../api/apiController'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@src/react-query/constants'

async function getAdminRequest(): Promise<Admin[]> {
  const { data } = await instance.get('/admins/schedules')
  return data
}

export function useAdmin(): Admin[] {
  const fallback: Admin[] = []
  const { data = fallback } = useQuery([queryKeys.admins], getAdminRequest)

  return data
}
