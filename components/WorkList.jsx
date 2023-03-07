import Card from "./Card";

export default function WorkList({ works }) {
  let data = require("../data.json"); //data from json file

  return (
    <div className="flex overflow-x-auto overflow-y-hidden h-screen select-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
      <div className="flex space-x-4">
        {data?.list.map((item, index) => (
          <div className="w-[28rem] bg-gray-100" key={index}>
            <div className="flex items-center justify-between px-2 h-16">
              <div className="flex items-center space-x-2">
              <div
                  className={`w-5 h-6 ${item.name == "Incomplete" ? "bg-red-600" : null} ${item.name == "To Do" ? "bg-blue-400" : null} ${item.name == "Doing" ? "bg-yellow-400" : null} rounded-l-full`}
                ></div>
              <span className="text-gray-800 font-semibold leading-7">
                {item.name}
              </span>
              </div>
              <div className="text-gray-800 leading-7 px-2 py-1 rounded-lg flex items-center justify-center bg-gray-200 font-medium">0</div>
            </div>
            <div className="space-y-4 h-screen overflow-y-auto pb-28 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
              {item?.list.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
