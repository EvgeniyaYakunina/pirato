import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsInLineHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-in-line-horizontal-fill_svg__a)"><path fill="#000" d="M8.5 2.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 1 1 1 0M4.354 5.646A.5.5 0 0 0 3.5 6v1.5H1a.5.5 0 0 0 0 1h2.5V10a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708zM15 7.5h-2.5V6a.5.5 0 0 0-.854-.354l-2 2a.5.5 0 0 0 0 .708l2 2A.501.501 0 0 0 12.5 10V8.5H15a.5.5 0 0 0 0-1" /></g><defs><clipPath id="arrows-in-line-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsInLineHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;