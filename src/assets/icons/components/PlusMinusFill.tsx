import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlusMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#plus-minus-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M3.5 6a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 1 1 1 0v1h1a.5.5 0 1 1 0 1H6v1a.5.5 0 1 1-1 0v-1H4a.5.5 0 0 1-.5-.5M5 12a.5.5 0 0 1-.354-.854l6-6a.501.501 0 0 1 .708.708l-6 6A.5.5 0 0 1 5 12m7-.5H9a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="plus-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlusMinusFill);
const Memo = memo(ForwardRef);
export default Memo;