import Link from "next/link";
import UserLogOut from "./UserLogOut";

const DashBoardSidebar = () => {
  const menuItems = [
    { name: "My Account", path: "/my-account" },
    { name: "My Orders", path: "/my-orders" },
    { name: "My Downloadable Products", path: "/my-downloadable-products" },
    { name: "My Wish List", path: "/my-wish-list" },
    { name: "Address Book", path: "/address-book" },
    { name: "Account Information", path: "/account-information" },
  ];

  return (
    <div className="h-screen">
      <ul className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <p className="block p-2 rounded border-b border-gray-400 hover:border-gray-600 transition">
                {item.name}
              </p>
            </Link>
          </li>
        ))}
        <UserLogOut />
      </ul>
    </div>
  );
};

export default DashBoardSidebar;
