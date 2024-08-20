const MyAccount = () => {
  return (
    <div>
      <h1 className="text-xl text-tertiary">My Account</h1>
      <h1 className="text-lg font-medium pt-5"> Account Information</h1>
      <div className="pt-2 grid grid-cols-2 gap-10">
        <div>
          <div className="border border-gray-300">
            <div className="bg-fourth/70 px-3 py-2">
              <h1 className="uppercase text-sm">Contact Information</h1>
            </div>
          </div>
          <div className="h-32 border-x border-gray-300 p-5 text-gray-500">
            <h1>Mahbubul Hasan</h1>
            <p> mahbubulhasan604@gmail.com</p>
          </div>
          <div className="border border-gray-300 ">
            <div className="bg-fourth/70 px-3 py-2">
              <div className="flex items-center gap-4">
                <h1 className="text-tertiary">Edit</h1>
                <h1 className="">Change Password</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-300">
            <div className="bg-fourth/70 px-3 py-2">
              <h1 className="uppercase text-sm">Newsletters</h1>
            </div>
          </div>
          <div className="h-32 border-x border-gray-300 p-5 text-gray-500">
            <p>You are subscribed to General Subscription.</p>
          </div>
          <div className="border border-gray-300 ">
            <div className="bg-fourth/70 px-3 py-2">
              <h1 className="">Edit</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
