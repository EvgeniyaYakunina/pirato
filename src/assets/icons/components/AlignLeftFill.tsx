import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-left-fill_svg__a)"><path fill="#000" d="M14.5 9.5V12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5M5 7.5h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1" /></g><defs><clipPath id="align-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignLeftFill);
const Memo = memo(ForwardRef);
export default Memo;