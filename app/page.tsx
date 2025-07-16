import Pagination from "./components/Pagination";

interface Props {
  searchParams?: { page?: string };
}

export default function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  return <Pagination itemCount={100} pageSize={10} currentPage={currentPage} />;
}
