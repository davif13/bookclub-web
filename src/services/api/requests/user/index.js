import { api } from 'services/api'

export const userUpdateCall = (data) =>
  api.put('/user', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const userAvatarCall = (data) =>
  api.put('/user/avatar', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
