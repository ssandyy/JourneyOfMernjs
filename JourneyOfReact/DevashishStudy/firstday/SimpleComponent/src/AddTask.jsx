import Btn from "./genericBtn";

const AddTask = () => {
  return (
    <>
      <h3>Task List</h3>
      <div>
        <input type="text" id="taskInput" placeholder="Enter Task to add.." />
        <Btn name={"AddTask"} css={"green"} />
      </div>
    </>
  );
};
export default AddTask;
