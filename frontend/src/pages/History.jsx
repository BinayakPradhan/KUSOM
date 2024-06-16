import { useLocation } from "react-router-dom";
import HistoryIn from "./HistoryIn";
export default function History() {
  const location = useLocation();
  const { rows, userId } = location.state || { rows: [] };
  return (
    <div>
      <div id="last-users" className="mx-[10%] overflow-x-hidden">
        <h1 className="font-bold py-4 uppercase">Your Post History</h1>
        <div className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-black/60">
              <tr>
                <th className="text-left py-3 px-2 rounded-l-lg">post_id</th>
                <th className="text-left py-3 px-2">post</th>

                <th className="text-left py-3 px-2 rounded-r-lg">Approval</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <HistoryIn key={row.id} row={row} userId={userId} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
