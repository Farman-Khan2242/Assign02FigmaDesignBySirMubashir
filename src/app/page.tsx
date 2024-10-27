import Link from "next/link"
import Image from "next/image"
export default function Home(){
  return(
    <div className="h-[1132px] w-[1440px] bg-[#252B42] text-white" >
      <header className="w-[1322px] h-[91px] relative left-[59px] flex">
        <div id="brand" className="w-[187px] h-[58px] absolute top-[17px] left-[136px] content-center">
          <h3 className="text-[24px] h-[32px] leading-[32px] w-[152px]  tracking-[0.1px] relative top-[13] font-bold">BrandName</h3>
        </div>
        <nav className="w-[815px] h-[58px] absolute top-[16px] left-[364px] flex  items-center">
          <div className=" w-[275px] text-[14px] h-[24px] grid grid-cols-4 grid-rows-1 gap-[17px]">
            <Link href='saff' className=" w-fit  leading-[24px] tracking-[0.2px] text-center fit-con">Home</Link>
            <Link href='das' className="">Product</Link>
            <Link href='sff'>Pricing</Link>
            <Link href='safs'>Contact</Link>
          </div>
          <div id="login" className=" flex justify-between absolute text-[14px] left-[626px] w-[189px] h-[52px] gap-[45px] top-[3px] items-center">
            <button className="h-fit w-[41px] leading-[22px] tracking-[0.2px] text-right">Login</button>
            <p id="joinus" className="w-[110px] h-[52px] rounded-[5px]  bg-[#23A6F0] text-center content-center font-bold">JOIN US</p>
          </div>
        </nav>
      </header>
      <section className="w-[1046px] h-[1028px] absolute top-[104px] left-[197px] pt-[80px] pb-[80px] gap-[80px] flex flex-col text-center items-center" >
        <main className="w-[701px] h-[496px] pt-[40px] pb-[40px] gap-[40px] flex flex-col justify-center items-center">
          <h5 className="w-[77px] text-[16px] leading-[24px] tracking-[0.1px] text-[#23A6F0]">Welcome</h5>
          <h1 className="w-[542px] h-[160px] text-[58px] leading-[80px] tracking-[0.2px]
          text-center">Selling on the internet like a pro</h1>
          <p className="w-[536px] h-[60px] text-[20px] leading-[30px] tracking-[0.2px] text-center">We know how large objects will act, but things on a 
          small scale just do not act that way.</p>
          <div className="w-[365px] h-[52px] gap-[10px] flex  ">
            <button className="w-[193px] h-[52px] text-[14px] leading-[22px] tracking-[0.2] text-center bg-[#23A6F0] rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] font-bold">Get Quote Now</button>

            <button className=" text-[#23A6F0] w-[162px] h-[52px] rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] text-[14px] leading-[22px] tracking-[0.2px]  border-[1px] border-[#23A6F0] font-bold">Leanr More</button>
          </div>
        </main>
        <footer className="w-[1046px] h-[292px] gap-[30px] flex ">
        <div className="w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-[#FFFFFF] flex flex-col">
          <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#FFDCD1]">
          </div>
          <h5 className=" h-[24px] w-[135px] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">training Courses</h5>
          <Image src="/line.PNG" alt=""  width='50' height='2' />
          <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] h-[60px] w-[222px]">The gradual accumulation of information about atomic and 
            small-scale behaviour...</p>
        </div>

        <div className="w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-[#FFFFFF] flex flex-col">
          <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#B9EAA8]">
          </div>
          <h5 className=" h-[24px] w-[168px] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">2,769 online courses</h5>
          <Image src="/line.PNG" alt=""  width='50' height='2' />
          <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] h-[60px] w-[222px]">The gradual accumulation of information about atomic and 
          small-scale behaviour...</p>

        </div>
        <div className="w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-[#23A6F0] flex flex-col">
          <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#FFFFFF]">
          </div>
          <h5 className=" h-[24px] w-[135px] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">training Courses</h5>
          <Image src="/whiteLine.PNG" alt=""  width='50' height='2'  />
          <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] h-[60px] w-[222px]">The gradual accumulation of information about atomic and 
          small-scale behaviour...</p>
        </div>
      </footer>
      </section>


    </div>
  )
}