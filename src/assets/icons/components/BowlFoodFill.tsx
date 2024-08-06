import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBowlFoodFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bowl-food-fill_svg__a)"><path fill="#000" d="M14 6.5h-.523a5.5 5.5 0 0 0-10.954 0H2a.5.5 0 0 0-.5.5A6.52 6.52 0 0 0 5 12.768V13a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.232A6.52 6.52 0 0 0 14.5 7a.5.5 0 0 0-.5-.5m-3.158-2.986q.173.141.33.297A5.5 5.5 0 0 0 8.1 6.5H6.256a4.516 4.516 0 0 1 4.586-2.985M9.258 6.5a4.5 4.5 0 0 1 2.58-1.848c.345.562.562 1.193.634 1.848zM8 2.5c.401 0 .8.054 1.188.16a5.52 5.52 0 0 0-3.98 3.84h-1.68A4.505 4.505 0 0 1 8 2.5" /></g><defs><clipPath id="bowl-food-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBowlFoodFill);
const Memo = memo(ForwardRef);
export default Memo;