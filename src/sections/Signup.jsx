export default () => {
  return (
    <section className="py-28 container flex items-center justify-center">
      <div>
        <h3 className="lg:text-5xl text-4xl font-medium text-center uppercase text-[#212121]">
          don't forget to sign up
        </h3>
        <span className="w-2/3 my-6 bg-[#C4C4C4] h-0.5 mx-auto block"></span>
        <p className="lg:w-4/5 lg:text-lg text-[#646464] font-body text-center mx-auto">
          Find out early about all upcoming promotions and new product releases
          with our newsletter.
        </p>
        <form action="" className="flex items-stretch justify-center mt-8">
          <input type="text" name="text" id="" className="w-full bg-[#EEEEEE] text-sm lg:text-base px-8 py-4 rounded-tl-3xl outline-none border-2 border-r-0 duration-200 focus:border-[#37806B]" placeholder="Enter your email address....."/>
          <button
            role="submit"
            className="uppercase text-white text-xs lg:text-base font-semibold bg-[#37806B] hover:bg-[#CAA892] duration-200  px-4 py-3 rounded-br-2xl"
          >
            subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
