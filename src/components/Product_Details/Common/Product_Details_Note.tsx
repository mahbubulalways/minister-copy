const Product_Details_Note = () => {
  return (
    <div className="pt-10 text-gray-700">
      <p>Note:</p>
      <ul className="list-disc list-inside text-[16px] md:text-xl flex pt-4 flex-col gap-2 font-bold">
        <li>
          Customer must pay 2.5% extra charge for using their credit or debit
          card.
        </li>
        <li>
          The above price, design, and specifications are subject to change
          without prior notice for product improvement.
        </li>
        <li>Offer price: Only for cash sales.</li>
        <li>Home Delivery Charge: Applicable.</li>
      </ul>
    </div>
  );
};

export default Product_Details_Note;
