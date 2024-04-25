import { atom } from 'jotai'

export const authAtom = atom(
    {
        isAuth: false,
        user: {
            name: 'Shahzeb',
            username: 'mshahzebraza',
            email: 'mshahzebraza@gmail.com'
        }
    }
)
