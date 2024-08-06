import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMouseMiddleClickFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mouse-middle-click-fill_svg__a)"><path fill="#000" d="M9 1H7a4.004 4.004 0 0 0-4 4v6a4.004 4.004 0 0 0 4 4h2a4.004 4.004 0 0 0 4-4V5a4.005 4.005 0 0 0-4-4m3 4v1.5H9.5v-1a1 1 0 0 0-1-1V2H9a3.003 3.003 0 0 1 3 3M7 2h.5v2.5a1 1 0 0 0-1 1v1H4V5a3.003 3.003 0 0 1 3-3m2 12H7a3.003 3.003 0 0 1-3-3V7.5h2.5v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1H12V11a3.003 3.003 0 0 1-3 3" /></g><defs><clipPath id="mouse-middle-click-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMouseMiddleClickFill);
const Memo = memo(ForwardRef);
export default Memo;