import { useLocation } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";
import subed from "../assets/subed.png";
function generateRandomImage() {
  // Example random image URL generator
  const randomImage = `https://randomuser.me/api/portraits/men/${Math.floor(
    Math.random() * 100
  )}.jpg`;
  return randomImage;
}

function generateRandomPost() {
  // Example random post generator
  const posts = [
    "Looking for a carpenter to build custom furniture.",
    "Need a carpenter to install kitchen cabinets.",
    "Seeking a carpenter for wooden flooring installation.",
    "Hiring a carpenter to construct a deck for a backyard.",
    "Need a carpenter to repair or replace door frames.",
    "Looking for a carpenter to build shelves and storage units.",
  ];
  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  return randomPost;
}

function generateRandomContact() {
  // Example random contact generator (for demonstration purposes)
  const contacts = [
    "9860604545",
    "9860186485",
    "9876543210",
    "9876541230",
    "9860987654",
  ];
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  return randomContact;
}

function generateRandomName() {
  // Example random name generator (for demonstration purposes)
  const firstNames = [
    "John",
    "Jane",
    "David",
    "Emily",
    "Michael",
    "Yudhir",
    "Scrni",
    "Subed",
    "Sadikshya",
  ];
  const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Williams"];
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

function generateRandomEmail(name) {
  // Generate email based on the provided name
  const [firstName, lastName] = name.split(" ");
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  return email;
}

export default function HistoryDetail() {
  //   const location = useLocation();
  //   const { details } = location.state || {};

  //   if (!details) {
  //     return <div>Loading...</div>;
  //   }

  const rows = Array.from({ length: 5 }, (_, index) => ({
    image: generateRandomImage(),
    post: generateRandomPost(),
    contact: generateRandomContact(),
    name: generateRandomName(),
  }));

  return (
    <div className="history-detail p-8">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-black/60">
          <tr>
            <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
            <th className="text-left py-3 px-2">Post</th>
            <th className="text-left py-3 px-2">Contact Info.</th>
            <th className="text-left py-3 px-2">Email</th>
            <th className="text-left py-3 px-2 rounded-r-lg">Interested</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-2 font-bold">
              <div className="inline-flex space-x-3 items-center">
                <span>
                  <img
                    className="rounded-full w-8 h-8"
                    src={subed}
                    alt="Profile"
                  />
                </span>
                <span>Subed Shah</span>
              </div>
            </td>
            <td className="py-3 px-2">Carpenter</td>
            <td className="py-3 px-2">1234567890</td>
            <td className="py-3 px-2">subed@gmail.com</td>
            <td className="py-3 px-2">
              <div className="inline-flex items-center ml-4">
                <a href="#" title="Edit" className="hover:text-green-500">
                  <TiTickOutline className="w-8 h-8" />
                </a>
              </div>
            </td>
          </tr>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-3 px-2 font-bold">
                <div className="inline-flex space-x-3 items-center">
                  <span>
                    <img
                      className="rounded-full w-8 h-8"
                      src={row.image}
                      alt="Profile"
                    />
                  </span>
                  <span>{row.name}</span>
                </div>
              </td>
              <td className="py-3 px-2">{row.post}</td>
              <td className="py-3 px-2">{row.contact}</td>
              <td className="py-3 px-2">{generateRandomEmail(row.name)}</td>
              <td className="py-3 px-2">
                <div className="inline-flex items-center ml-4">
                  <a href="#" title="Edit" className="hover:text-green-500">
                    <TiTickOutline className="w-8 h-8" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//   const location = useLocation();
//   const { details } = location.state || {};

//   if (!details) {
//     return <div>Loading...</div>;
//   }
