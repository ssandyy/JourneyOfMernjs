
const page = ({params: {slug}}) => {

  const courses = [
    {
      id: 1,
      name: "Java",
      description: "Java is a programming language and computing platform first released by Sun Microsystems in 1995.",
      duration: "3 months",
      price: 10000,
      projects: ["Banking System", "Library Management System", "Student Management System"],
      syllabus: ["Java Basics", "OOPs Concepts", "Exception Handling", "Collections", "Multithreading", "Java Swing", "Java Networking", "Java Reflection", "Java Serialization", "Java Security", "Java Reflection", "Java Serialization", "Java Security"]
    },
    {
      id: 2,
      name: "Python",
      description: "Python is a programming language and computing platform first released by Sun Microsystems in 1995.",
      duration: "3 months",
      price: 10000,
      projects: ["Banking System", "Library Management System", "Student Management System"],
      syllabus: ["Python Basics", "OOPs Concepts", "Exception Handling", "Collections", "Multithreading", "Python Swing", "Python Networking", "Python Reflection", "Python Serialization", "Python Security", "Python Reflection", "Python Serialization", "Python Security"]
    },
    {
      id: 3,
      name: "cpp",
      description: "C++ is a programming language and computing platform first released by Sun Microsystems in 1995.",
      duration: "3 months",
      price: 10000,
      projects: ["Banking System", "Library Management System", "Student Management System"],
      syllabus: ["C++ Basics", "OOPs Concepts", "Exception Handling", "Collections", "Multithreading", "C++ Swing", "C++ Networking", "C++ Reflection", "C++ Serialization", "C++ Security", "C++ Reflection", "C++ Serialization", "C++ Security"]
    },
    {
      id: 4,
      name: "PHP",
      description: "PHP is a programming language and computing platform first released by Sun Microsystems in 1995.",
      duration: "3 months",
      price: 10000,
      projects: ["Banking System", "Library Management System", "Student Management System"],
      syllabus: ["PHP Basics", "OOPs Concepts", "Exception Handling", "Collections", "Multithreading", "PHP Swing", "PHP Networking", "PHP Reflection", "PHP Serialization", "PHP Security", "PHP Reflection", "PHP Serialization", "PHP Security"]
    },
    {
      id: 5,
      name: "ROR",
      description: "ROR is a programming language and computing platform first released by Sun Microsystems in 1995.",
      duration: "3 months",
      price: 10000,
      projects: ["Banking System", "Library Management System", "Student Management System"],
      syllabus: ["ROR Basics", "OOPs Concepts", "Exception Handling", "Collections", "Multithreading", "ROR Swing", "ROR Networking", "ROR Reflection", "ROR Serialization", "ROR Security", "ROR Reflection", "ROR Serialization", "ROR Security"]
    }
  ]

  const course = courses.find((course) => course.name.toLowerCase() === slug.toLowerCase())
  console.log(course)
  console.log(slug)

  return (
    <div>
    {course ? (
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 mt-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">{course.name}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
            Duration: {course.duration}
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Price: ₹{course.price}
          </span>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
          <ul className="list-disc list-inside text-gray-700">
            {course.projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Syllabus</h3>
          <ul className="list-decimal list-inside text-gray-700 grid grid-cols-2 gap-x-6 gap-y-1">
            {course.syllabus.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="max-w-xl mx-auto bg-red-100 text-red-700 rounded-xl shadow-md p-8 mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
        <p className="mb-4">Sorry, we couldn't find the course you're looking for.</p>
      </div>
    )}
    </div>
  )
}

export default page