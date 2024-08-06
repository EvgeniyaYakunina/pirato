import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignCenterVerticalSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-center-vertical-simple-fill_svg__a)"><path fill="#000" d="M13.5 8a.5.5 0 0 1-.5.5h-2V13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8.5H3a.5.5 0 1 1 0-1h2V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4.5h2a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="align-center-vertical-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignCenterVerticalSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;