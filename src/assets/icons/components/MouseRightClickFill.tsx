import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMouseRightClickFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mouse-right-click-fill_svg__a)"><path fill="#000" d="M9 1H7a4.004 4.004 0 0 0-4 4v6a4.004 4.004 0 0 0 4 4h2a4.004 4.004 0 0 0 4-4V5a4.005 4.005 0 0 0-4-4M7 2h1v4.5H4V5a3.003 3.003 0 0 1 3-3m2 12H7a3.003 3.003 0 0 1-3-3V7.5h8V11a3.003 3.003 0 0 1-3 3" /></g><defs><clipPath id="mouse-right-click-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMouseRightClickFill);
const Memo = memo(ForwardRef);
export default Memo;