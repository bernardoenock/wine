import { IProduct } from "../interfaces";

export const pagination = (list: IProduct[], cut: number) => {
  let page = [];

  for (let i = 0; i < list.length; i = i + cut) {
    page.push(list.slice(i, i + cut));
  }

  return page;
};
