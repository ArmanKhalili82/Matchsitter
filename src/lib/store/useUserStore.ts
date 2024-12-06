import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Tables } from '@/lib/typescript/types/database.types'
import type { User } from '@supabase/supabase-js'

interface UserStore {
  profilePicture?: string | null
  setProfilePicture: (profilePicture: string) => void
  removeProfilePicture: () => void
  profile?: Tables<'profiles'>
  setProfile: (user: Tables<'profiles'>) => void
  user: User | null
  setUser: (user: User | null) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profilePicture: null,
      setProfilePicture: (profilePicture) =>
        set(({ profile }) => {
          return { profile: profile ? { ...profile, profile_image_url: profilePicture } : profile }
        }),
      removeProfilePicture: () =>
        set(({ profile }) => {
          return { profile: profile ? { ...profile, profile_image_url: null } : profile }
        }),
      setProfile: (profile) => set(() => ({ profile })),
      profile: undefined,
      user: null,
      setUser: (user: User | null) => set(() => ({ user })),
    }),
    { name: 'user_store' }
  )
)