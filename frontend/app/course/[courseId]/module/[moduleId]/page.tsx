export default function TopicPage({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  return (
    <div>
      <h1>Topic: {params.moduleId}</h1>
      <p>Course: {params.courseId}</p>
      <p>Select a lesson or activity to continue.</p>
      {/* Example navigation */}
      <ul>
        <li>
          <a
            href={`/course/${params.courseId}/topic/${params.moduleId}/lessons/1`}
          >
            Lesson 1
          </a>
        </li>
        <li>
          <a
            href={`/course/${params.courseId}/topic/${params.moduleId}/activity1`}
          >
            Activity 1
          </a>
        </li>
      </ul>
    </div>
  );
}
