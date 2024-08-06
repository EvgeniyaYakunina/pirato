import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPolygonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#polygon-fill_svg__a)"><path fill="#000" d="M14.238 3.262a1.75 1.75 0 0 0-2.725.312L9.25 2.958a1.75 1.75 0 1 0-3.331.792L3.41 6.006a1.75 1.75 0 1 0 .145 2.889l4.796 3.518a1.75 1.75 0 1 0 2.678-.827l1.884-5.336h.087a1.75 1.75 0 0 0 1.237-2.987zm-4.151 7.991a1.75 1.75 0 0 0-1.143.353L4.147 8.088a1.76 1.76 0 0 0-.066-1.338l2.507-2.257a1.75 1.75 0 0 0 2.398-.57l2.264.618a1.74 1.74 0 0 0 .718 1.374z" /></g><defs><clipPath id="polygon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPolygonFill);
const Memo = memo(ForwardRef);
export default Memo;