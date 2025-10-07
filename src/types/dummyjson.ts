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

export type User = {
      id: number,
      firstName: string,
      lastName: string,
      maidenName: string,
      age: number,
      gender: string,
      email: string,
      phone: string,
      role: string
}

export type FetchUsersResponse = {
  users: User[],
  total: number,
  skip: number,
  limit: number
}
