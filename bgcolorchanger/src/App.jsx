import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "blue", "green", "yellow", "pink", "skyblue", "orange"];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap top-1 gap-5 bg-black justify-center py-2 px-2 border rounded-lg ">
        {
          colors.map((col) => {
            return (
              <button
                key={col}
                className="text-white px-4 py-2 rounded-lg"
                style={{ backgroundColor: col }}
                onClick={() => setColor(col)} // Change background color on click
              >
                {col}
              </button>
            );
          })
        }
      </div>
        {/* <div className="fixed flex flex-wrap top-1 gap-5 bg-black justify-center py-2 px-2 border rounded-lg ">
//         <button
//           className="border-white text-white px-3 py-1 border bg-red-600 rounded-lg"
//           onClick={() => setColor("red")}
//         >
//           Red
//         </button>
//         <button
//           className="text-white px-3 py-1 border bg-blue-600 rounded-lg"
//           onClick={() => setColor("blue")}
//         >
//           Blue
//         </button>
//         <button
//           className="text-white px-3 py-1 border bg-green-600 rounded-lg"
//           onClick={() => setColor("green")}
//         >
//           Green
//         </button>
//         <button
//           className="text-white px-3 py-1 border bg-yellow-500 rounded-lg"
//           onClick={() => setColor("yellow")}
//         >
//           Yellow
//         </button>
//         <button
//           className="text-white px-3 py-1 border bg-pink-500 rounded-lg"
//           onClick={() => setColor("pink")}
//         >
//           Pink
//         </button>
//         <button
//           className="text-white px-3 py-1 border bg-sky-500 rounded-lg"
//           onClick={() => setColor("skyblue")}
//         >
//           Skyblue
//         </button>
//         <button
//           className="text-white px-3 py-1 border bg-orange-600 rounded-lg"
//           onClick={() => setColor("orange")}
//         >
//           Orange
//         </button>
//       </div> */}
//     </div>
  );
}

export default App
