import {ReactComponent as Vector} from '../assets/Vector 3.svg'

export default () => {
  return (
    <section className=" py-28 bg-[#F8F8F8]">
      <div className="container">
        <h3 className="text-center text-4xl lg:text-5xl font-medium text-[#212121] lg:px-44 leading-tight">
          3000+ Completed Work Which WE have Successfully Done
        </h3>
        <div className="mt-16 flex lg:flex-row flex-col items-center justify-center pb-16 space-y-14 lg:space-y-0">
          <div className="font-bold text-center font-body lg:w-56 w-full h-40 flex justify-center items-center flex-col bg-white rounded-tl-[40px] rounded-br-[40px] shadow-2xl hover:shadow-xl shadow-black/20 duration-200">
            <div className="text-[#212121] text-5xl">980</div>
            <div className="text-[#646464] text-lg font-bold">Projects</div>
          </div>
          <Vector className="translate-y-1/2 hidden lg:block"/>
          <div className="font-bold text-center font-body lg:w-56 w-full h-40 flex justify-center items-center flex-col bg-white rounded-tl-[40px] rounded-br-[40px]  shadow-2xl hover:shadow-xl shadow-black/20 duration-200 lg:translate-y-1/2">
            <div className="text-[#212121] text-5xl">520</div>
            <div className="text-[#646464] text-lg font-bold">Happy Client</div>
          </div>
          <Vector className="-scale-x-100 translate-y-1/2 hidden lg:block"/>
          <div className="font-bold text-center font-body lg:w-56 w-full h-40 flex justify-center items-center flex-col bg-white rounded-tl-[40px] rounded-br-[40px]  shadow-2xl hover:shadow-xl shadow-black/20 duration-200">
            <div className="text-[#212121] text-5xl">330</div>
            <div className="text-[#646464] text-lg font-bold">Winners</div>
          </div>
          <Vector className="translate-y-1/2 hidden lg:block"/>
          <div className="font-bold text-center font-body lg:w-56 w-full h-40 flex justify-center items-center flex-col bg-white rounded-tl-[40px] rounded-br-[40px] shadow-2xl hover:shadow-xl shadow-black/20 duration-200 lg:translate-y-1/2">
            <div className="text-[#212121] text-5xl">120</div>
            <div className="text-[#646464] text-lg font-bold">Recomment</div>
          </div>
        </div>
      </div>
    </section>
  );
};
