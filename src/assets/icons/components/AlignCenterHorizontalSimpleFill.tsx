import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignCenterHorizontalSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-center-horizontal-simple-fill_svg__a)"><path fill="#000" d="M14 6v4a1 1 0 0 1-1 1H8.5v2a.5.5 0 0 1-1 0v-2H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.5V3a.5.5 0 1 1 1 0v2H13a1 1 0 0 1 1 1" /></g><defs><clipPath id="align-center-horizontal-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignCenterHorizontalSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;