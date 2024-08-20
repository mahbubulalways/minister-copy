"use server";
const getHumanCare = async () => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/human-care/get-human-care`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data;
};

export default getHumanCare;
