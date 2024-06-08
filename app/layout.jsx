import React, { Children } from "react";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
