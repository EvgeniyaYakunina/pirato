import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowArcLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-arc-left-fill_svg__a)"><path fill="#000" d="M14.5 11.5a.5.5 0 0 1-1 0 5.5 5.5 0 0 0-9.283-3.99l1.637 1.636A.5.5 0 0 1 5.5 10h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .854-.354l1.655 1.655A6.5 6.5 0 0 1 14.5 11.5" /></g><defs><clipPath id="arrow-arc-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowArcLeftFill);
const Memo = memo(ForwardRef);
export default Memo;