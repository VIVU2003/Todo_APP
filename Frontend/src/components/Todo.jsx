import "./Todo.css";
import { HiPencil } from "react-icons/hi";
import { FiTrash, FiTrash2 } from "react-icons/fi";
function Todo(props) {
  return (
    <>
      <div id="t1">
        {props.tod.map((x, index) => (
          <div id="t1a" key={x.id}>
            <div id="t2">
              <h3>{index + 1}.</h3>
              <p>{x.Title}</p>
            </div>
            <div id="t3">
              <div className="icon">
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
              </div>
              <p key={x.id}>{x.Deadline}</p>
            </div>
            <div id="del_Edit">
              <div>
                <button
                  id="btn"
                  onClick={async () => {
                    const resp = await fetch("http://localhost:8080/delete", {
                      method: "DELETE",
                      headers: {
                        "Content-type": "application/json",
                      },
                      body: JSON.stringify({
                        user_id: x.id,
                      }),
                    });
                    const final = await resp.json();
                    props.render((r) => !r);
                    //  alert(final.msg)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash preview-icon"
                  >
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
              <div id="editIcon">
                <button
                  aria-label="Edit"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors inline-flex items-center justify-center"
                  onClick={() => props.open(x)}
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
