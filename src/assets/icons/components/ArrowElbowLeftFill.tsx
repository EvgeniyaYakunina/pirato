import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-left-fill_svg__a)"><path fill="#000" d="m14.854 6.354-6 6a.5.5 0 0 1-.708 0L3.75 7.957 1.854 9.854A.5.5 0 0 1 1 9.5V5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 .354.854L4.457 7.25 8.5 11.293l5.646-5.647a.501.501 0 0 1 .708.708" /></g><defs><clipPath id="arrow-elbow-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowLeftFill);
const Memo = memo(ForwardRef);
export default Memo;