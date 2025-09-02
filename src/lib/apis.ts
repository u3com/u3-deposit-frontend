import axios from 'axios'

const isEmail = (emailOrUID: string) => {
  const emailRegex = /\w[-.\w]*@[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|cn|edu|uk)/gi
  return emailRegex.test(emailOrUID)
}
export async function getUserInfoBy(emailOrUID: string, system: string) {
  const { code, data } = await axios
    .get<{ code: number; data: { email: string; uid: string } }>(
      'https://dsbscsol.u3.com/api/index/userQuery',
      {
        params: {
          system: system.toLowerCase(),
          ...(isEmail(emailOrUID)
            ? { email: emailOrUID }
            : { uid: emailOrUID }),
        },
      },
    )
    .then((res) => res.data)
  if (code !== 1) throw new Error(`Not found user by ${emailOrUID}`)
  return data
}

export async function upDepositHash(
  hash: string,
  system: string,
  chain: string,
) {
  const upApiRes = await axios
    .post<{ code: number }>('https://dsbscsol.u3.com/api/index/topUpNow', {
      system: system.toLowerCase(),
      chain: chain,
      hash: hash,
    })
    .then((res) => res.data)
  if (upApiRes.code == 0) throw new Error('Upload txHash Failed')
  return true
}
