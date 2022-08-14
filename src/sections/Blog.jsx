import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";

export default () => {
  const posts = [
    {
      title: "2020 Interior Design Trends",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua`,
      href: "/blog",
      img: blog1,
    },
    {
      title: "28 Notable Product at ARC Interior Design",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua`,
      href: "/blog",
      img: blog2,
    },
  ];
  return (
    <section className="bg-[#F8F8F8] py-28">
      <div className="container">
        <div className="mb-24">
          <span className="text-[#646464] uppercase  font-medium text-lg lg:text-xl text-center block">
            latest news
          </span>
          <h3 className="capitalize text-4xl lg:text-5xl font-medium text-center">
            from out blog
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-32">
          {posts.map((post, i) => (
            <BlogCard post={post} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }) => {
  const { img, title, desc, href } = post;
  return (
    <div className="flex flex-col">
      <div className="relative border-2 border-[#B0855B] rounded-tl-[80px] rounded-br-[80px]">
        <img
          src={img}
          alt="blog_img"
          className="w-full h-full rounded-tl-[80px] rounded-br-[80px] lg:-translate-x-6 lg:-translate-y-6 hover:translate-x-0 hover:translate-y-0 duration-300"
        />
      </div>
      <div className="font-body flex flex-col mt-10 flex-1">
        <div className="text-[#212121] text-2xl font-bold font-body ">
          {title}
        </div>
        <p className="font-body text-[#646464]  mb-10 mt-2">{desc}</p>
      </div>
      <a
        href={href}
        className="uppercase justify-self-end text-center text-white font-semibold font-body bg-[#37806B] hover:bg-[#CAA892] duration-200 self-start px-7 py-3 rounded-tl-2xl rounded-br-2xl"
      >
        CONTINUE READING....
      </a>
    </div>
  );
};
