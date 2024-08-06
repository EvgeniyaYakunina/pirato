import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-horizontal-fill_svg__a)"><path fill="#000" d="m14.854 8.354-2 2A.501.501 0 0 1 12 10V8.5H4V10a.5.5 0 0 1-.854.354l-2-2a.5.5 0 0 1 0-.708l2-2A.5.5 0 0 1 4 6v1.5h8V6a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrows-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;