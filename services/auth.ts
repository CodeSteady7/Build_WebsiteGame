import axios from 'axios'
import callAPI from '../config/api'
import { LoginStype } from './data-types'

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'


export async function setSingUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/${URL}/auth/signup`

  return callAPI({
    url, method: 'POST', data, headers: { 'Content-Type': 'application/json' },
  })
}

export async function setLogin(data: LoginStype) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`

  return callAPI({
    url, method: 'POST', data
  })
}
