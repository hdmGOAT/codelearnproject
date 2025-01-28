import CodeEditor from "@/components/codeEditor";

export default function ActivityPage({
  params,
}: {
  params: { courseId: string; topicId: string; activityId: string };
}) {
  return (
    <div>
      <CodeEditor value="Hello World" onChange={() => {}} />
    </div>
  );
}
