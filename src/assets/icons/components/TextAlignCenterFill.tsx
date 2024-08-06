import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextAlignCenterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-align-center-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 9.5H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m1-2H4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 0 1M4.5 7a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M12 5.5H4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 0 1" /></g><defs><clipPath id="text-align-center-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextAlignCenterFill);
const Memo = memo(ForwardRef);
export default Memo;