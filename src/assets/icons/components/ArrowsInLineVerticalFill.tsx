import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsInLineVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-in-line-vertical-fill_svg__a)"><path fill="#000" d="M14 8a.5.5 0 0 1-.5.5h-11a.5.5 0 1 1 0-1h11a.5.5 0 0 1 .5.5M7.646 6.354a.5.5 0 0 0 .708 0l2-2A.5.5 0 0 0 10 3.5H8.5V1a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0-.354.854zm.708 3.292a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 6 12.5h1.5V15a.5.5 0 0 0 1 0v-2.5H10a.5.5 0 0 0 .354-.854z" /></g><defs><clipPath id="arrows-in-line-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsInLineVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;