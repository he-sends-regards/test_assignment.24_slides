export type ChildrenType = {
  value: number;
  children?: ChildrenType[];
};

export const childrens: ChildrenType = {
  value: 1,
  children: [
    {
      value: 0,
      children: [{ value: 1 }, { value: 2, children: [{ value: 3 }] }],
    },
    { value: 4 },
  ],
};
