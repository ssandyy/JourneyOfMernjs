import CourseList from "./components/CourseList"

const layout = ({children}) => {
  return (
    <div className="container mx-auto p-4 text-center">
        <h3>Hello Student this is Course layout..!</h3>
        <CourseList />
        {children}
    </div>
  )
}

export default layout