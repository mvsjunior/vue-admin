export type LoginSuccess = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string,
  refreshToken: string
}

export type LoginFailed = {
    message: string
}