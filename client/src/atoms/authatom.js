import { atom, selector } from 'recoil';

export const authAtom = atom({
  key: 'authAtom',
  default: {
    user: null,
    token: localStorage.getItem('token') || null,
  },
});

export const isAuthenticatedselector = selector({
  key: 'isAuthenticated',
  get: ({ get }) => {
    const auth = get(authAtom);
    return !!auth.token; // Correctly reference auth.token
  },
});