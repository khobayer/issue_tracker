import Pagination from "@/app/components/Pagination";
import { prisma } from "@/prisma/client";
import { Status } from "@prisma/client";
import IssueAction from "./IssueAction";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: Promise<IssueQuery>;
}

const Issuespage = async ({ searchParams }: Props) => {
  const searchParam = await searchParams;

  const statuses = Object.values(Status);

  const status = statuses.includes(searchParam.status)
    ? searchParam.status
    : undefined;

  const where = { status };

  const orderBy = columnNames.includes(searchParam.orderBy)
    ? { [searchParam.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParam.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="3">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default Issuespage;
