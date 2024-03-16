import { atom, selector} from 'recoil';

// Atom representing the count
export const countAtom = atom({
  key: 'countAtom',
  default: 0,
});

// Selector to compute whether the count is even
export const isEvenSelector = selector({
  key: 'isEvenSelector',
  get: ({get}) => {
    const count = get(countAtom);
    return count % 2 === 0;
  },
});