export default function BlankLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen" style={{ flexWrap: "wrap"}}>
      <main>{children}</main>
    </div>
  );
}
