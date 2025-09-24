import { sleep } from "@/lib/sleep";

type Props = {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
};

const page = async (props: Props) => {
  console.log("channel id page");

  return <div>Channel Id</div>;
};
export default page;
