import { Table } from "@/components/Table";
import { getExchangesData } from "@/lib/api";

type Props = {
  params: { pageIndex: string };
};

const Exchanges = async ({ params }: Props) => {
  const pageIndex = Number(params.pageIndex) || 1;
  const exchanges = await getExchangesData(pageIndex);

  return (
    <main>
      <Table exchanges={exchanges} pageIndex={pageIndex} />
    </main>
  );
};

export default Exchanges;
