import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberCircleEightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-circle-eight-fill_svg__a)"><path fill="#000" d="M9.25 9.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M8 7.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6.5.75A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-4.25 1.5a2.25 2.25 0 0 0-.887-1.788 2 2 0 1 0-2.726 0A2.25 2.25 0 1 0 10.25 9.5" /></g><defs><clipPath id="number-circle-eight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberCircleEightFill);
const Memo = memo(ForwardRef);
export default Memo;