export default function Card1() {
  return (
    <div
      id="Card1"
      className="
        bg-[#101010] 
        border 
        rounded-lg 
        border-neutral-800 
        p-4 
        md:p-6 
        flex 
        flex-col 
        gap-3 
        w-full 
        h-auto
      "
    >
      <h1 className="text-white text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">
        Title
      </h1>
      <div className="w-full h-[1px] bg-neutral-700 mb-1"></div>
      <p className="text-neutral-300 text-sm md:text-base lg:text-lg whitespace-pre-line break-words">
        This is <strong>description</strong> in the Card1, a short text that
        describes the content of the card.
      </p>
      <div className="w-full h-[1px] bg-neutral-700 mb-4 mt-2"></div>
      <button className="text-neutral-900 bg-neutral-50 hover:bg-neutral-100 duration-200 ease-in-out py-2 px-4 md:px-6 rounded-md text-sm md:text-base font-medium w-fit whitespace-nowrap">
        Button1
      </button>
    </div>
  );
}
