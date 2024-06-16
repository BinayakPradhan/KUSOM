/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";

import { useNavigate, useLocation } from "react-router-dom";
export default function HistoryIn({ row, key }) {
  const location = useLocation();
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");
  console.log(row.post_id);
  const postId = row.post_id;

  console.log(userId);
  // async function handleDetail() {
  //   try {
  //     const response = await fetch(
  //       `http://127.0.0.1:9000/users/getInterestedData/${postId}`,
  //       {
  //         method: "GET",
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     const details = data;

  //     // Navigate to history and pass data as state
  //     navigate(`${location.pathname}/details`, {
  //       state: { details: data },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  function handleDetail() {
    navigate(`${location.pathname}/detail`);
  }
  return (
    <>
      <tr className="border-b border-gray-700" key={key} onClick={handleDetail}>
        <td className="py-3 px-2 font-bold">
          <div className="inline-flex space-x-3 items-center">
            <span>{row.post_id}</span>
          </div>
        </td>
        <td className="py-3 px-2">{row.post}</td>
        {row.selected_status ? (
          <td className="py-3 px-2">
            <div className="inline-flex items-center ml-4">
              <a href="#" title="Edit" className="hover:text-green-500">
                <TiTickOutline className="w-8 h-8" />
              </a>
            </div>
          </td>
        ) : (
          <td className="py-3 px-2">
            <div className="inline-flex items-center ml-4">
              <a href="#" title="Edit" className="hover:text-green-500">
                <RxCross1 className="w-8 h-8" />
              </a>
            </div>
          </td>
        )}
      </tr>
    </>
  );
}
