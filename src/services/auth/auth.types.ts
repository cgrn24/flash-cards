export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type User = {
  avatar: string | null
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}
