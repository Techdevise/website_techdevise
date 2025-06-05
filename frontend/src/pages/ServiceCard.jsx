import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  topColor = "", 
  bottomColor = "", 
  imagePath,
  fullWidth = false,
}) {
  return (
    <div
      className={`${
        fullWidth ? "w-full" : "flex-1"
      } rounded-3xl overflow-hidden relative p-9`}
      style={{
        background: `linear-gradient(to bottom, ${topColor} 70%, ${bottomColor} 30%)`,
      }}
    >
     
      <h3 className="text-2xl font-bold text-[#00000] mb-4">{title}</h3>
      <p className="mb-6 max-w-md text-[#00000]">{description}</p>

      <button className="flex items-center font-medium text-[#00000]">
        More information
        <span className="ml-2 bg-white rounded-full p-1">
          <ArrowUpRight className="w-4 h-4 text-black" />
        </span>
      </button>

     
      <div className={`mt-6 ${fullWidth ? "flex justify-end" : "text-center"}`}>
        <div className={`${fullWidth ? "w-1/3 mr-8" : "w-full"} h-48 relative`}>
          <img
            src={imagePath || "/placeholder.svg"}
            alt={title}
            width={200}
            height={200}
            style={{ margin: "0 auto", display: "block" }}
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
