import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowRightDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-right-down-fill_svg__a)"><path fill="#000" d="m14.354 10.354-3 3a.503.503 0 0 1-.708 0l-3-3A.5.5 0 0 1 8 9.5h2.5v-5H2a.5.5 0 1 1 0-1h9a.5.5 0 0 1 .5.5v5.5H14a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="arrow-elbow-right-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowRightDownFill);
const Memo = memo(ForwardRef);
export default Memo;