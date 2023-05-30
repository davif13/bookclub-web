import { api } from 'services/api'

export const userUpdateCall = (data) =>
  api.get('/user', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const userAvatarCall = (data) =>
  api.get('/user/avatar', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
