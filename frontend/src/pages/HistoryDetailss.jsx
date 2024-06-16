import { useLocation } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";

export default function HistoryDetail() {
  const location = useLocation();
  const { details } = location.state || {};

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="history-detail">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-black/60">
          <tr>
            <th className="text-left py-3 px-2 rounded-l-lg">Post ID</th>
            <th className="text-left py-3 px-2">Post</th>
            <th className="text-left py-3 px-2">Contact Info.</th>
            <th className="text-left py-3 px-2">Status</th>
            <th className="text-left py-3 px-2 rounded-r-lg">Interested</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-2 font-bold">
              <div className="inline-flex space-x-3 items-center">
                <span>
                  <img
                    className="rounded-full w-8 h-8"
                    src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg"
                    alt="Profile"
                  />
                </span>
                <span>id</span>
              </div>
            </td>
            <td className="py-3 px-2">post</td>
            <td className="py-3 px-2">9860604545</td>
            <td className="py-3 px-2">yes</td>
            <td className="py-3 px-2">
              <div className="inline-flex items-center ml-4">
                <a href="#" title="Edit" className="hover:text-green-500">
                  <TiTickOutline className="w-8 h-8" />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
