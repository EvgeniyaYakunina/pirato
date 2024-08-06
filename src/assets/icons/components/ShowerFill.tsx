import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShowerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shower-fill_svg__a)"><path fill="#000" d="M4 14.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-4 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m2-2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M15.5 2h-2a.5.5 0 0 0-.354.146L11.26 4.034 3.336 5.387a1 1 0 0 0-.543 1.694l6.125 6.125a1 1 0 0 0 1.693-.542l1.355-7.923L13.706 3H15.5a.5.5 0 0 0 0-1" /></g><defs><clipPath id="shower-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShowerFill);
const Memo = memo(ForwardRef);
export default Memo;