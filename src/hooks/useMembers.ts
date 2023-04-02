import { useQuery } from '@tanstack/react-query'
import instance from '../../src/api/apiController'

type D = {
  id: number
  email: string
  userName: string
  phoneNumber: string
  role: string
  vacationCount: number
  position: string
  department: string
}

type T = {
  content: Array<D>
}
