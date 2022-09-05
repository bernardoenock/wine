interface IPage {
  page: number;
}

import { useEffect, useState } from "react";

export async function loadProductsPerPage({ page }: IPage) {
  const res = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`
  );
  const data = await res.json();

  return data;
}

export async function loadAllProducts() {
  const res = await fetch(`https://wine-back-test.herokuapp.com/products`);
  const data = await res.json();

  return data;
}
