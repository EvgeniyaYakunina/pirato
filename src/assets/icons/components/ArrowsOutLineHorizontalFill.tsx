import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsOutLineHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-out-line-horizontal-fill_svg__a)"><path fill="#000" d="M8.5 2.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 1 1 1 0M6 7.5H3.5V6a.5.5 0 0 0-.854-.354l-2 2a.5.5 0 0 0 0 .708l2 2A.5.5 0 0 0 3.5 10V8.5H6a.5.5 0 0 0 0-1m9.354.146-2-2A.5.5 0 0 0 12.5 6v1.5H10a.5.5 0 0 0 0 1h2.5V10a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="arrows-out-line-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsOutLineHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;