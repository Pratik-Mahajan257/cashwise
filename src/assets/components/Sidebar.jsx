import logo from '../images/logo.png'
import frame from '../images/Frame.png'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { BsCloudCheck } from 'react-icons/bs';
import { MdOutlineReceiptLong } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';

const Sidebar = () => {
  return (
    <div className="basis-1/5 bg-[#00204E] flex flex-col">
      <div className=" ml-[17px] mt-[40px] max-h-screen relative   ">
      <img src={logo} alt="logo" className='mb-[44px]         ' />
      <div className='relative   '>
        <div className='bg-blue-100 bg-opacity-5 w-[302px] h-[92px] mr-[35px] mb-14  flex justify-start items-center rounded-lg flex-row gap-x-10 '>
            <img src={frame} alt="frame" className='ml-5  ' />
            <div className='flex flex-col gap-y-0.5 -ml-5'>
            <p className='text-white font-sans text-sm  '>Entity Name</p>
            <p className='text-white font-sans text-sm  underline'>Add website</p>
            </div>

            <div className=' rounded-full h-7 w-7 ml-10 flex items-center justify-center bg-gray-400 bg-opacity-10 '>
           <AiOutlineSetting className='h-5 w-5 text-white ' />
            </div>
            
        </div>
        <div className='flex flex-col gap-y-11   '>
          <div className='flex gap-x-3  justify-start items-center ml-10 '>
         
           <TiDocumentAdd className='h-6  w-6 text-white ' />
           <p className='text-white font-sans text-sm '>Document Generation</p>
          </div>
           <div className='flex gap-x-3 justify-start items-center ml-8   '>
       
           <BsCloudCheck className='h-6 w-6 text-white ' />
           <p className='text-white font-sans text-sm '>Document Storage</p>
           <BiChevronDown className='text-white h-6 w-6 font-bold ml-11  '/>
          </div>
           <div className='flex gap-x-2 justify-start items-center ml-10   '>
          
           <MdOutlineReceiptLong className='h-6 w-6 text-white ' />
           <p className='text-white font-sans text-sm '>Invoice Management</p>
           <BiChevronUp className='text-white h-6 w-6 font-bold ml-8  '/>
          </div>
           <div className='flex flex-col ml-[72px] gap-y-10        '>
           <p className='text-white font-sans text-sm'>New Invoice</p>
           <p className='text-white font-sans text-sm'>Invoice Summary</p>
           
           </div>
           <div className='flex justify-start items-center bg-blue-600 bg-opacity-20 w-[302px] h-[52px] rounded-lg -mt-7'>
            <p className='text-white font-sans text-sm ml-[70px] '>Client List</p>
           </div>
        </div>
      </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default Sidebar
