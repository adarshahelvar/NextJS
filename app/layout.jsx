import "@styles/globals.css";
const RootLayout = ({ children }) => {
  const metadata = {
    title: "PromptTopia",
    description: "Sample desc...!",
  };
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
