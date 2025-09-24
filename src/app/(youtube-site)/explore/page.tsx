type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const page = ({ searchParams }: Props) => {
  return <div>Explore {searchParams?.list}</div>;
};

export default page;
