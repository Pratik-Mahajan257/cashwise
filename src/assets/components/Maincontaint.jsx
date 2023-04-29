import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdEditNote, MdOutlineReceiptLong } from 'react-icons/md'

const Maincontaint = ({ data }) => {
  return (
    <div className=" relative mx-8 h-full ">
      <div className="absolute top-4 flex flex-row gap-x-12 justify-start items-center">
        <p className="text-base font-sans text-[#1161D6] ">Active Clients</p>
        <p className="text-base font-sans text-[#B5BBC5] ">Deleted Clients</p>
      </div>
      <div className="absolute top-[70px] ">
        <button className="py-3 px-[26px] border border-[#B5BBC5] rounded-lg ">Delete</button>
      </div>
      <div className="absolute top-[140px] flex flex-col w-full ">
        <div className="bg-[#f5f5f5] flex flex-row py-5 relative justify-start items-center gap-x-4 ">
          <input type="checkbox" className="h-4 w-4 text-blue-600 rounded ml-6" />
          <p className='text-base flex-shrink-0 w-[100px]'>Client</p>
          <p className='text-base flex-shrink-0 w-[150px]'>Phone</p>
          <p className='text-base flex-shrink-0 w-[200px]'>Email</p>
          <p className='text-base flex-shrink-0 w-[140px]'>GSTIN/Tax ID</p>
          <p className='text-base flex-shrink-0 w-[140px]'>Pan</p>
          <p className='text-base flex-shrink-0 w-[130px]'>Country</p>
        </div>
        {data.map((item) => (
          <tr key={item.email} className="border-b border-[#F5F5F5] transition-colors duration-100 flex flex-row items-center">
            <td className=" pl-6 ">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
            </td>
            <td className="py-2 pl-4    text-sm  flex-shrink-0 w-[118px]">{item.name}</td>
            <td className="pl-4  text-sm  flex-shrink-0 w-[167px]">{item.phone}</td>
            <td className="pl-4   text-sm  flex-shrink-0 w-[220px]">{item.email}</td>
            <td className="pl-4   text-sm  flex-shrink-0 w-[150px]">{item.gst}</td>
            <td className="pl-4   text-sm  flex-shrink-0 w-[160px] ">{item.pan}</td>
            <td className="pl-4   text-sm  flex-shrink-0 w-[150px] flex items-center ">
              {item.country}{" "}
              <span className="flex justify-center items-center gap-4 ml-8 ">
                <MdEditNote className="text-[ #767676] cursor-pointer h-6 w-6" />
                <MdOutlineReceiptLong className="text-[ #767676] cursor-pointer h-6 w-6" />
                <RiDeleteBin6Line className="text-[ #767676] cursor-pointe h-6 w-6" />
              </span>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Maincontaint;
