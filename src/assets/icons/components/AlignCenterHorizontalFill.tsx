import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignCenterHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-center-horizontal-fill_svg__a)"><path fill="#000" d="M14 9.5V12a1 1 0 0 1-1 1H8.5v1a.5.5 0 0 1-1 0v-1H3a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1h4.5v-1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3V2a.5.5 0 1 1 1 0v1h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3v1H13a1 1 0 0 1 1 1" /></g><defs><clipPath id="align-center-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignCenterHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;