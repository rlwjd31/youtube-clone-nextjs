import Category from "@/app/(youtube-site)/components/Category";
import PagePadding from "@/components/PagePadding";

export default async function Home() {
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9">
          <Category />
          <div className="mt-12"></div>
        </div>
      </div>
    </PagePadding>
  );
}
