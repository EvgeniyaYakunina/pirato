import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCircleNotchFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circle-notch-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 11a4.5 4.5 0 0 1-2.25-8.397.5.5 0 0 1 .5.865 3.5 3.5 0 1 0 3.5 0 .5.5 0 0 1 .5-.865A4.5 4.5 0 0 1 8 12.5" /></g><defs><clipPath id="circle-notch-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCircleNotchFill);
const Memo = memo(ForwardRef);
export default Memo;