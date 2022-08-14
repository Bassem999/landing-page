export default () => {
  return (
    <div className="hidden lg:grid w-[200px] h-[150px] grid-cols-[repeat(20,minmax(0,1fr))] gap-2">
      {[...Array(220)].map((dot, i) => (
        <span
          className="w-1 h-1 bg-[#EBEBEB] rounded-full block"
          key={i}
        ></span>
      ))}
    </div>
  );
};
