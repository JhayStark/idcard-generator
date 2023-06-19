import IdCard from "@/components/IdCard";
import React, { useState, useRef } from "react";
import * as xlsx from "xlsx";
import * as htmlToImage from "html-to-image";

const MultipleCards = () => {
  const entireFile = useRef();
  const [file, setFile] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        setFile(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(entireFile.current);

  const handleDownload = (count) => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `file${count}.svg`;
      link.click();
    } else {
      alert("Please Generate the ID card first");
    }
  };

  const handleGenerate = () => {
    const arrayOfDivs = Array.from(entireFile.current.children);
    arrayOfDivs.forEach((item, index) => {
      htmlToImage
        .toSvg(item)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `file${index + 1}.svg`;
          link.click();
        })
        .catch(function (error) {
          console.error("Error generating ID card:", error);
        });
    });
  };

  console.log(imageUrl);

  return (
    <>
      <div>
        <div className="flex flex-row items-center justify-between">
          <input
            type="file"
            name="parsedData"
            id="parsedData"
            onChange={readUploadFile}
          />
          <div className="flex flex-row items-center justify-between ">
            <button onClick={handleGenerate} className="w-32">
              Generate
            </button>
            <button onClick={handleDownload} className="w-32">
              Download
            </button>
          </div>
        </div>
        <div ref={entireFile} className="flex flex-col gap-5 mt-5">
          {file.length > 0 &&
            file?.map((item, index) => (
              <div key={index}>
                <IdCard
                  key={index}
                  dateOfExpiry={item.dateOfExpiry}
                  dateOfIssuance={item.dateOfIssue}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  idNumber={`${item.id}`}
                  location={item.location}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MultipleCards;
