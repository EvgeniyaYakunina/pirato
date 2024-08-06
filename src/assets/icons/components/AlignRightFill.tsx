import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-right-fill_svg__a)"><path fill="#000" d="M14 2.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 1 0M11 3H5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 5.5H2.5a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1" /></g><defs><clipPath id="align-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignRightFill);
const Memo = memo(ForwardRef);
export default Memo;