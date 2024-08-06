import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberCircleSevenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-circle-seven-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m1.97 4.17-2 5.5a.5.5 0 0 1-.94-.34L8.786 6H6.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .47.67" /></g><defs><clipPath id="number-circle-seven-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberCircleSevenFill);
const Memo = memo(ForwardRef);
export default Memo;