import { useState } from "react";
import Image from "next/image";
import { useMutation } from "react-query";
import { postFile } from "@/lib/Helper";

export default function Modal({ ShowModal }) {
  const [images, setImages] = useState([]); //state to store selected files
  const [imagesName, setImagesName] = useState([]); //state to store selected files name

  const onChange = (e) => {
    const files = Array.from(e.target.files); //convert files to array
    setImages([...images, ...files]); //add files to state
    files.forEach((file) => {
      const reader = new FileReader(); //create new FileReader
      reader.readAsDataURL(file); //read file as data url
      reader.onload = () => {
        setImagesName((imagesName) => [...imagesName, file.name]); //add file name to state
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    });
  };

  const { mutate } = useMutation(postFile); //useMutation hook to post file to backend api and show in card component

  const handleUpload = () => {
    mutate(images); //call postFile api
    ShowModal(false); //hide modal component
  };

  return (
    <div className="flex justify-center items-center bg-opacity-75 bg-gray-300 fixed inset-0 z-50">
      <div className="bg-white w-[30rem] h-[30rem] rounded-md space-y-4 p-5">
        <div className="flex flex-col items-end justify-end ">
          <button onClick={() => ShowModal(false)}>
            <Image src="cancel.svg" alt={"image"} width={20} height={0} />
          </button>
        </div>
        <div className="rounded-md flex flex-col items-center justify-center space-y-4">
          <input type="file" onChange={onChange} multiple />
          <span className="text-gray-500 text-sm">Selected File:</span>
          {imagesName.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
          <button
            onClick={handleUpload}
            className="bg-blue-400 text-white rounded-md px-4 py-2"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
