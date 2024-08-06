import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLampPendantFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lamp-pendant-fill_svg__a)"><path fill="#000" d="M11 4.674V4.5a1 1 0 0 0-1-1H8.5V1a.5.5 0 0 0-1 0v2.5H6a1 1 0 0 0-1 1v.174A6.98 6.98 0 0 0 1 11a.5.5 0 0 0 .5.5h4a2.5 2.5 0 0 0 5 0h4a.5.5 0 0 0 .5-.5 6.98 6.98 0 0 0-4-6.326M8 13a1.5 1.5 0 0 1-1.5-1.5h3A1.5 1.5 0 0 1 8 13" /></g><defs><clipPath id="lamp-pendant-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLampPendantFill);
const Memo = memo(ForwardRef);
export default Memo;