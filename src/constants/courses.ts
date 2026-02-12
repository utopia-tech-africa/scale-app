import { BookOpen, Calendar, Laptop, Users } from "lucide-react";

export const courses = [
  {
    icon: Users,
    category: "Coaching",
    title: "Youth Leadership Program",
    description:
      "A guided leadership and personal growth program for young professionals and founders.",
    cta: "Join Program",
    color: "from-purple-500/20 to-pink-500/20",
    image: "/images/coaching.jpg",
  },
  {
    icon: Calendar,
    category: "Events & Summits",
    title: "Online Learning Summit",
    description:
      "A virtual summit bringing together educators, creators, and industry leaders.",
    cta: "Register",
    color: "from-orange-500/20 to-red-500/20",
    image: "/images/education.jpg",
  },
  {
    icon: BookOpen,
    category: "Online Courses",
    title: "Learning Fundamentals Course",
    description:
      "A self‑paced course covering essential learning, productivity, and growth skills.",
    cta: "View Course",
    color: "from-green-500/20 to-teal-500/20",
    image: "/images/digital.jpg",
  },
  {
    icon: Laptop,
    category: "Training Center",
    title: "Digital Skills Bootcamp",
    description:
      "An intensive hands‑on bootcamp designed to equip learners with practical, job‑ready digital skills.",
    cta: "Learn More",
    color: "from-cyan-500/20 to-blue-500/20",
    image: "/images/events.jpg",
  },
];
