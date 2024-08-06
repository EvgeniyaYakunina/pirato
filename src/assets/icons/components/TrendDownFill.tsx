import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrendDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trend-down-fill_svg__a)"><path fill="#000" d="M15 8v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.354-.854L11.793 10 8.5 6.707 6.354 8.854a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 1 1 .708-.708L6 7.793l2.146-2.147a.5.5 0 0 1 .708 0L12.5 9.293l1.646-1.647A.5.5 0 0 1 15 8" /></g><defs><clipPath id="trend-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrendDownFill);
const Memo = memo(ForwardRef);
export default Memo;