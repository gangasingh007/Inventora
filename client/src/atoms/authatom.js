import { atom, selector } from 'recoil';

export const authAtom = atom({
  key: 'authAtom',
  default: {
    user: null,
    token: localStorage.getItem('token') || null,
  },
});

export const isAuthenticatedSelector = selector({
  key: 'isAuthenticated',
  get: ({ get }) => {
    const auth = get(authAtom);
    return !!auth.token;
  },
});


export const userInfo = atom({
  key : "userInfo",
  default : {
    username : null,
    email : null,
    role : null
  }
})