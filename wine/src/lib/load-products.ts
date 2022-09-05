export async function loadProducts() {
  const res = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=1&limit=9`
  );
  const data = await res.json();

  return data;
}
