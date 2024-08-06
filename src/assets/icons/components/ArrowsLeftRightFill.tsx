import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsLeftRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-left-right-fill_svg__a)"><path fill="#000" d="m13.354 11.354-2 2A.501.501 0 0 1 10.5 13v-1.5H3a.5.5 0 0 1 0-1h7.5V9a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708m-8.708-4A.5.5 0 0 0 5.5 7V5.5H13a.5.5 0 0 0 0-1H5.5V3a.5.5 0 0 0-.854-.354l-2 2a.5.5 0 0 0 0 .708z" /></g><defs><clipPath id="arrows-left-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsLeftRightFill);
const Memo = memo(ForwardRef);
export default Memo;