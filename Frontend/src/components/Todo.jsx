import "./Todo.css";
import { HiPencil } from "react-icons/hi";
function Todo(props) {
  return (
    <>
      <div id="t1">
        {props.tod.map((x,index) => (
          <div id="t1a">
            <div id="t2">
              <h3>{index+1}.</h3>
              <p>{x.Title}</p>
            </div>
            <div id="t3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>{x.Deadline}</p>
            </div>
            <div id="del_Edit">
              <div>
                <button
                  id="btn"
                  onClick={() => {
                    props.update(props.tod.filter((f) => f.id != x.id));
                  }}
                >
                  Delete
                </button>
              </div>
              <div id="editIcon">
                <button
                  aria-label="Edit"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors inline-flex items-center justify-center"
                  onClick={()=>props.open(x)}
                >
                  <HiPencil className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Todo;
