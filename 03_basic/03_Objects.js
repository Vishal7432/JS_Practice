const course = {
  title: "JavaScript Basics",
  lessons: 20,
  price: "$19.99",
  CourseInstructor: "Hitesh Choudhary",
};

// course.CourseInstructor

const { CourseInstructor: instructor } = course;
// console.log(CourseInstructor); // Hitesh Choudhary
console.log(instructor); // Hitesh Choudhary
