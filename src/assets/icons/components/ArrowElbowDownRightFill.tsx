import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-down-right-fill_svg__a)"><path fill="#000" d="m13.854 11.354-3 3A.501.501 0 0 1 10 14v-2.5H4.5A.5.5 0 0 1 4 11V2a.5.5 0 1 1 1 0v8.5h5V8a.5.5 0 0 1 .854-.354l3 3a.503.503 0 0 1 0 .708" /></g><defs><clipPath id="arrow-elbow-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;