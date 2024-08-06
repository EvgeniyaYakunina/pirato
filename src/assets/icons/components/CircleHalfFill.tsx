import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCircleHalfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circle-half-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M2.5 8A5.506 5.506 0 0 1 8 2.5v11A5.506 5.506 0 0 1 2.5 8" /></g><defs><clipPath id="circle-half-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCircleHalfFill);
const Memo = memo(ForwardRef);
export default Memo;