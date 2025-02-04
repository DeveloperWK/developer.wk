"use client";
import { FaFileDownload } from "react-icons/fa";
import MagicButton from "./MagicButton";

const DownloadCV = () => {
  // const [download, setDownload] = useState(false);
  const fileHandleClick = () => {
    // setDownload(true);
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=1S4htTXSTKlN_BLgLOfWuG494FhzE7LRq";
    const pdfUrl = downloadLink;
    const link = document.createElement("a");
    link.href = pdfUrl;
    // link.download = "my-file.pdf"; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // setDownload(false);
  };
  return (
    <>
      <MagicButton
        title="Download My CV"
        icon={<FaFileDownload />}
        className="mt-5 "
        handleClick={fileHandleClick}
        iconClassName="mr-2"
        // isDisabled={download}
      />
    </>
  );
};

export default DownloadCV;
