import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinkSimpleHorizontalBreakFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#link-simple-horizontal-break-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7 7.5H5a2.5 2.5 0 0 1 0-5h2a.5.5 0 1 1 0 1H5a1.5 1.5 0 0 0 0 3h2a.5.5 0 1 1 0 1m4 0H9a.5.5 0 0 1 0-1h2a1.5 1.5 0 0 0 0-3H9a.5.5 0 1 1 0-1h2a2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="link-simple-horizontal-break-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLinkSimpleHorizontalBreakFill);
const Memo = memo(ForwardRef);
export default Memo;