import ClientSideRedirect from "@/components/CheckAuthentication/ClientSideRedirect";
import ShowDashboardSidebar from "@/components/shared/Dashboard/ShowDashboardSidebar";
import React, { ReactNode } from "react";

const MyAccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClientSideRedirect>
      <div className="grid grid-cols-5 container gap-10 pt-10">
        <div className="col-span-1">
          <ShowDashboardSidebar />
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </ClientSideRedirect>
  );
};

export default MyAccountLayout;
