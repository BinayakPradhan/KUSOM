import { useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
export default function History() {
  useEffect(() => {
    async function handleApprove() {
      try {
        const response = await fetch(`http://127.0.0.1:9000/users/post`, {
          method: "GET",
        });
        const data = response.json();
        console.log(data);
      } catch {
        throw new Error("Error");
      }
    }
    handleApprove();
  }, []);
  return (
    <div>
      <div id="last-users" className="mx-[10%] overflow-x-hidden">
        <h1 className="font-bold py-4 uppercase">HandyMan for you</h1>
        <div className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-black/60">
              <tr>
                <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
                <th className="text-left py-3 px-2">Email</th>
                <th className="text-left py-3 px-2">Field of Expertise</th>
                <th className="text-left py-3 px-2">Fee</th>
                <th className="text-left py-3 px-2 rounded-r-lg">Approval</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span>
                      <img
                        className="rounded-full w-8 h-8"
                        src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg"
                        alt=""
                      />
                    </span>
                    <span>Handy Man</span>
                  </div>
                </td>
                <td className="py-3 px-2">h_email@email.com</td>
                <td className="py-3 px-2">Expertise</td>
                <td className="py-3 px-2">Fee</td>
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
      </div>
    </div>
  );
}
