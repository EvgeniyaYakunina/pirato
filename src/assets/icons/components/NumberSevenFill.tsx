import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSevenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-seven-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-2.03 3.168-2.5 7a.5.5 0 1 1-.94-.336L9.29 5H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .47.668" /></g><defs><clipPath id="number-seven-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSevenFill);
const Memo = memo(ForwardRef);
export default Memo;