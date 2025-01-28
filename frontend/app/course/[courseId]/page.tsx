export default function CoursePage({
  params,
}: {
  params: { courseId: string };
}) {
  return (
    <div>
      <h1>Course: {params.courseId}</h1>
      <p>Select a topic to continue.</p>
      {/* Example navigation */}
      <ul>
        <li>
          <a href={`/course/${params.courseId}/topic/1`}>Topic 1</a>
        </li>
        <li>
          <a href={`/course/${params.courseId}/topic/2`}>Topic 2</a>
        </li>
      </ul>
    </div>
  );
}
