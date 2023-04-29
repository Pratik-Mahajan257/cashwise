import Maincontaint from "./Maincontaint"


const data = [
  {
    name: "Astu Technologies Private Limited",
    phone: "+918934834069",
    email: "akshay.kota16@gmail.com",
    gst: "-",
    pan: "-",
    country: "India",
  },
  {
    name: "XYZ Technologies Private Limited",
    phone: "+918934834069",
    email: "aksahy93jaiswal@gmail.com",
    gst: "ABCDEFGHIJKLMNO",
    pan: "ABCDEFGHU",
    country: "USA",
  },
  {
    name: "ABC Technologies Private Limited",
    phone: "+918934834069",
    email: "aksahy93jaiswal@gmail.com",
    gst: "ABCDEFGHIJKLMNO",
    pan: "ABCDEFGHU",
    country: "India",
  },
  {
    name: "ABC Technologies Private Limited",
    phone: "+918934834069",
    email: "aksahy93jaiswal@gmail.com",
    gst: "ABCDEFGHIJKLMNO",
    pan: "ABCDEFGHU",
    country: "India",
  },
];
const Mainbar = () => {
  return (
    <div className="basis-4/5 bg-[#d2d2d2] flex flex-col  ">
      <div className="flex flex-row ml-[8px] mr-8 mt-7 justify-between items-center pl-5 mb-8  ">
        <p className="text-[#323232] text-xl">
         Invoice Summary
        </p>
        <div className="bg-[#1161D6] text-white h-11 w-11 rounded-full flex items-center justify-center font-bold ">
         A
        </div>
      </div>
      <div className="bg-white mx-8 h-screen  rounded-lg mb-3">
      <Maincontaint data={data} />
  

      </div>
      <div className="flex flex-grow justify-end items-center gap-x-3 mb-2 mr-8">
        <button className="text-[#1161D6] border border-[#1161D6] bg-white rounded-lg px-9 py-3   ">Upload Clients</button>
        <button className="text-[white] bg-[#1161D6] rounded-lg px-9 py-3  ">Add Clients</button>
      </div>
    </div>
  )
}

export default Mainbar
