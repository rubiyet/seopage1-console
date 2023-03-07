import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { getCounter } from "@/lib/Helper";

export default function Card({ item }) {
  const [showModal, setShowModal] = useState(false); //modal state

  //handle attachment button click event to show modal component
  const handleAttachment = () => {
    setShowModal(true); //show modal component when attachment button clicked
  };

  //useQuery hook to get data from api and show in card component
  const { data } = useQuery("counter", () => getCounter(), {
    enabled: true, //enable query
  });

  return (
    <div className="bg-white rounded-md p-2 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/" + item.fromImage}
            alt={"image"}
            width={25}
            height={0}
            className="rounded-full"
          />
          <span className="text-gray-500 text-sm">{item.from}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Image
            src={"/" + item.toImage}
            alt={"image"}
            width={25}
            height={0}
            className="rounded-full"
          />
          <span className="text-gray-500 text-sm">{item.to}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image src="description.svg" alt={"image"} width={15} height={0} />
          <div className="text-gray-500 text-sm w-60 h-4 truncate">
            {item.description}
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-gray-100 p-[.1rem]">
          <Image src="note.svg" alt={"image"} width={15} height={0} />
          <span className="text-gray-500 text-sm">1/2</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/" + item.fromImage}
            alt={"image"}
            width={25}
            height={0}
            className="rounded-full"
          />
          <Image
            src={"/" + item.toImage}
            alt={"image"}
            width={25}
            height={0}
            className="rounded-full"
          />
        </div>
        {item.contributor > 10 ? (
          <div className="flex items-center space-x-1 bg-gray-100 text-xs p-[.1rem] rounded-full">
            10+
          </div>
        ) : (
          <div className="flex items-center space-x-1 bg-gray-100 text-xs p-[.1rem] rounded-full">
            {item.contributor}
          </div>
        )}
        {item.comment > 12 ? (
          <div className="flex items-center space-x-1 text-sm">
            <Image src="comment.svg" alt={"image"} width={15} height={0} />
            <span className="text-gray-900 text-xs">12+</span>
          </div>
        ) : (
          <div className="flex items-center space-x-1 text-sm">
            <Image src="comment.svg" alt={"image"} width={15} height={0} />
            <span className="text-gray-900 text-xs">{item.comment}</span>
          </div>
        )}
        <div
          className="flex items-center space-x-1 text-sm"
          onClick={handleAttachment}
        >
          <Image src="attachment.svg" alt={"image"} width={15} height={0} />
          <span className="text-gray-900 text-xs">
            {item.id === 1 ? data?.count : 0}
          </span>
        </div>
        {showModal && <Modal ShowModal={setShowModal} />}
        <div className="flex items-center space-x-1 text-sm">
          <Image src="calendar.svg" alt={"image"} width={15} height={0} />
          <span className="text-gray-700 text-xs">{item.date}</span>
        </div>
      </div>
    </div>
  );
}
