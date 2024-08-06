import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOvenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#oven-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.25 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M8 3.5A.75.75 0 1 1 8 5a.75.75 0 0 1 0-1.5m-2.75 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 12H4V6.5h8z" /></g><defs><clipPath id="oven-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgOvenFill);
const Memo = memo(ForwardRef);
export default Memo;