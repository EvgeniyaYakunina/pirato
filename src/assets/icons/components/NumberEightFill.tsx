import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberEightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-eight-fill_svg__a)"><path fill="#000" d="M6.75 5.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M8 8a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 8m5.5-5.5v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-2.75 7.25a2.75 2.75 0 0 0-1.264-2.312 2.25 2.25 0 1 0-2.972 0A2.75 2.75 0 1 0 10.75 9.75" /></g><defs><clipPath id="number-eight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberEightFill);
const Memo = memo(ForwardRef);
export default Memo;