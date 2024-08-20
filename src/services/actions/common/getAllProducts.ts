"use server";

const getAllProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/all-products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  return data;
};

export default getAllProducts;
