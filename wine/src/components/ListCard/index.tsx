//

import { useEffect, useState } from "react";
import { IListProduct, IProduct } from "../../interfaces";

// import { getServerSideProps } from "../../api";
// import { GetServerSideProps } from "next";

interface IP {
  products: IProduct[];
}

export default function ListCard({ products }: IP) {
  //   const [list, setList] = useState<IProduct[]>([]);

  //   useEffect(() => {
  //     fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=10")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setList(data.items);
  //       });
  //   }, []);

  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

// export default ListCard;

// interface IAPIRes {
//   props: {
//     products: IProduct[];
//   };
// }

// export const getServerSideProps: GetServerSideProps =
//   async (): Promise<IAPIRes> => {
//     const res = await fetch(
//       "https://wine-back-test.herokuapp.com/products?page=1&limit=10"
//     );

//     const data = await res.json();

//     return {
//       props: {
//         products: data.items,
//       },
//     };
//   };
