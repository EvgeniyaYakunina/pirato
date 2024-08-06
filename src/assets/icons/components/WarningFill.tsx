import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarningFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#warning-fill_svg__a)"><path fill="#000" d="M14.8 11.756 9.334 2.264a1.548 1.548 0 0 0-2.668 0L1.2 11.756a1.47 1.47 0 0 0 0 1.482A1.52 1.52 0 0 0 2.534 14h10.932a1.52 1.52 0 0 0 1.333-.762 1.47 1.47 0 0 0 0-1.482M7.5 6.5a.5.5 0 0 1 1 0V9a.5.5 0 1 1-1 0zM8 12a.75.75 0 1 1 0-1.499A.75.75 0 0 1 8 12" /></g><defs><clipPath id="warning-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWarningFill);
const Memo = memo(ForwardRef);
export default Memo;