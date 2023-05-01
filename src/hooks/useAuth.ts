import { useDispatch, useSelector } from 'react-redux'
import { login, logout, onUserStateChange } from '../api/firebase'
import { useEffect } from 'react'
import { setUser } from '../store/slice/authSlice'
import { RootState } from '../main'

export function useAuth() {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    onUserStateChange((user) => {
      dispatch(setUser(user))
    })
  }, [])

  return {
    user,
    login,
    logout,
  }
}
