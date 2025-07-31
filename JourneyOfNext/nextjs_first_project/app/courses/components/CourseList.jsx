import Link from "next/link"

const CourseList = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto text-center">
        <h1>WE offer multiple courses </h1>
        <ul className="list-disc list-inside text-left">
            <li><Link href={`/courses/${"java"}`}> Java</Link></li>
            <li><Link href="/courses/python">Python </Link></li>
            <li><Link href="/courses/swift">Swift </Link></li>
            {/* <li><Link href="/courses/c++">C++ </Link></li> */}
            <li><Link href="/courses/php"> Php</Link></li>
            <li><Link href="/courses/ror">ROR </Link></li>
            
        </ul>
    </div>
  )
}

export default CourseList