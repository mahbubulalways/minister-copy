"use server";

const getSingleProduct = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/single-product/${id}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  return data;
};

export default getSingleProduct;
