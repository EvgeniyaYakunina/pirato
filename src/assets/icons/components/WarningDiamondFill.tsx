import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarningDiamondFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#warning-diamond-fill_svg__a)"><path fill="#000" d="M14.708 7.295 8.705 1.291a1 1 0 0 0-1.41 0l-6 6.004a1 1 0 0 0 0 1.41l6.003 6.004a1 1 0 0 0 1.41 0l6.003-6.004a1 1 0 0 0 0-1.41zM7.5 5a.5.5 0 0 1 1 0v3.5a.5.5 0 1 1-1 0zm.5 6.5A.75.75 0 1 1 8 10a.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="warning-diamond-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWarningDiamondFill);
const Memo = memo(ForwardRef);
export default Memo;