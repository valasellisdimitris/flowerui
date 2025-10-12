export default function Separator() {
  return (
    // The separator is a horizontal line (h-[1px]) whose width increases at each breakpoint.
    <div
      className="
        w-[80px] 
        sm:w-[120px] 
        md:w-[160px] 
        lg:w-[200px] 
        h-[1px] 
        bg-neutral-700
      "
    ></div>
  );
}
