import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVectorThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#vector-three-fill_svg__a)"><path fill="#000" d="m14.854 8.854-2 2A.501.501 0 0 1 12 10.5V9H7.707l-2.5 2.5 1.147 1.146A.5.5 0 0 1 6 13.5H3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .854-.354L4.5 10.793l2.5-2.5V4H5.5a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .708 0l2 2A.5.5 0 0 1 9.5 4H8v4h4V6.5a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="vector-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVectorThreeFill);
const Memo = memo(ForwardRef);
export default Memo;