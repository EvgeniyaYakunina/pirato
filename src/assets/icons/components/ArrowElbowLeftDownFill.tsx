import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowLeftDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-left-down-fill_svg__a)"><path fill="#000" d="M15 4.5a.5.5 0 0 1-.5.5H6v5h2.5a.5.5 0 0 1 .354.854l-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 2.5 10H5V4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-elbow-left-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowLeftDownFill);
const Memo = memo(ForwardRef);
export default Memo;