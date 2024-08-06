import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSplitVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#split-vertical-fill_svg__a)"><path fill="#000" d="M13.5 9.5a.5.5 0 0 1-.5.5H8.5v2H10a.5.5 0 0 1 .354.854l-2 2a.5.5 0 0 1-.708 0l-2-2A.5.5 0 0 1 6 12h1.5v-2H3a.5.5 0 1 1 0-1h10a.5.5 0 0 1 .5.5M3 7h10a.5.5 0 0 0 0-1H8.5V4H10a.5.5 0 0 0 .354-.854l-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 6 4h1.5v2H3a.5.5 0 1 0 0 1" /></g><defs><clipPath id="split-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSplitVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;