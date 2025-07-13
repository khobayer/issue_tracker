import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import { late } from "zod";

const statusMap: Record<
  Status,
  { lable: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { lable: "Open", color: "red" },
  IN_PROGRESS: { lable: "In Progress", color: "violet" },
  CLOSED: { lable: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].lable}</Badge>
  );
};

export default IssueStatusBadge;
