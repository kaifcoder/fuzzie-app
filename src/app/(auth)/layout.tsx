import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden h-screen">
      {props.children}
    </div>
  );
};

export default Layout;
