import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgElevatorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#elevator-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7 3.5h2a.5.5 0 1 1 0 1H7a.5.5 0 1 1 0-1m.5 9.5H4V6h3.5zm4.5 0H8.5V6H12z" /></g><defs><clipPath id="elevator-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgElevatorFill);
const Memo = memo(ForwardRef);
export default Memo;