import { Table } from "@/components/Table";
import { Exchange } from "@/lib/types";

const getExchangesData = async (pageIndex: number): Promise<Exchange[]> => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/exchanges?per_page=15&page=${pageIndex}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

type Props = {
  params: { pageIndex: string };
};

const Home = async ({ params }: Props) => {
  const pageIndex = Number(params.pageIndex) || 1;
  const exchanges = await getExchangesData(pageIndex);

  return (
    <main>
      <Table exchanges={exchanges} pageIndex={pageIndex} />
    </main>
  );
};

export default Home;
