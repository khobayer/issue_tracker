import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/DynamicIssueForm";
import delay from "delay"

interface Props {
  params: Promise<{ id: string }>;
}
const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  await delay(2000)

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
