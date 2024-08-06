import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgProjectorScreenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#projector-screen-fill_svg__a)"><path fill="#000" d="M14.5 4V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1v6H2a.5.5 0 0 0 0 1h5.5v1.086a1.5 1.5 0 1 0 1 0V12H14a.5.5 0 0 0 0-1h-.5V5a1 1 0 0 0 1-1M8 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2.5 3h11v1h-11z" /></g><defs><clipPath id="projector-screen-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgProjectorScreenFill);
const Memo = memo(ForwardRef);
export default Memo;