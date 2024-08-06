import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCircleHalfTiltFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circle-half-tilt-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M2.5 8a5.5 5.5 0 0 1 9.388-3.887l-7.775 7.774A5.49 5.49 0 0 1 2.5 8" /></g><defs><clipPath id="circle-half-tilt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCircleHalfTiltFill);
const Memo = memo(ForwardRef);
export default Memo;