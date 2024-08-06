import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpiralFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#spiral-fill_svg__a)"><path fill="#000" d="M15.5 9a.5.5 0 0 1-1 0 6.006 6.006 0 0 0-6-6q-.132-.002-.261.006A5.004 5.004 0 0 0 3.5 8a4.004 4.004 0 0 0 4 4 2.753 2.753 0 0 0 2.75-2.75 2 2 0 0 0-2-2 .5.5 0 1 0 0 1 1 1 0 0 1 1 1A1.75 1.75 0 0 1 7.5 11a3.003 3.003 0 0 1-3-3 4.004 4.004 0 0 1 4-4 5.006 5.006 0 0 1 5 5A5.506 5.506 0 0 1 8 14.5a6.006 6.006 0 0 1-6-6A6.507 6.507 0 0 1 8.5 2a7.01 7.01 0 0 1 7 7" /></g><defs><clipPath id="spiral-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpiralFill);
const Memo = memo(ForwardRef);
export default Memo;