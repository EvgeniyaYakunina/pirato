import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotsSixVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dots-six-vertical-fill_svg__a)"><path fill="#000" d="M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M6.25 12.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3.5 7.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="dots-six-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotsSixVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;