import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLineSegmentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#line-segment-fill_svg__a)"><path fill="#000" d="M13.238 5.237a1.75 1.75 0 0 1-2.07.302l-5.63 5.63a1.75 1.75 0 1 1-.706-.708l5.63-5.63a1.75 1.75 0 1 1 2.776.406" /></g><defs><clipPath id="line-segment-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLineSegmentFill);
const Memo = memo(ForwardRef);
export default Memo;