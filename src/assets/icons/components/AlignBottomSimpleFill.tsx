import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignBottomSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-bottom-simple-fill_svg__a)"><path fill="#000" d="M13 14.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5M6 13h4a1 1 0 0 0 1-1V2.5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1" /></g><defs><clipPath id="align-bottom-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignBottomSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;