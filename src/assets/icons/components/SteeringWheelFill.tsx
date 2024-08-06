import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSteeringWheelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#steering-wheel-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m-4.898 9h2.551l1.063 2.849A5.52 5.52 0 0 1 3.102 10.5M8 9.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.279 3.6 1.068-2.85h2.551a5.52 5.52 0 0 1-3.62 2.85M8 6a8.52 8.52 0 0 0-5.5 2.02V8a5.5 5.5 0 0 1 11 0v.02A8.52 8.52 0 0 0 8 6" /></g><defs><clipPath id="steering-wheel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSteeringWheelFill);
const Memo = memo(ForwardRef);
export default Memo;