export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await (3000);
  return <div>{children}</div>;
}
