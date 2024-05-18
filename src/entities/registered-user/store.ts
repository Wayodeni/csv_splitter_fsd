import { create } from 'zustand'
import { UserDto } from './types'

type UsersStore = {
  users: UserDto[]
  setUsers: (users: UserDto[]) => void
}

export const useUsersStore = create<UsersStore>()((set) => ({
  users: [],
  setUsers: (users: UserDto[]) => set({ users }),
}))