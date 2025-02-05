interface Course {
  title: string;
  description: string;
  rating: number;
  instructor: string;
  languages: string[];
  tags: string[];
}

interface Module {
  title: string;
  lessons: Content[];
}

interface Content {
  title: string;
  type: "lesson" | "activity" | "quiz";
  url: string;
} 