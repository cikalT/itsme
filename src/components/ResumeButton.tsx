
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { resumeFilePath } from "@/data";

export const ResumeButton = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = "my-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // <Button onClick={handleDownload} className="animate-on-scroll">
    //   <FileDown className="mr-2 h-4 w-4" />
    //   Download Resume
    // </Button>
    <></>
  );
};
