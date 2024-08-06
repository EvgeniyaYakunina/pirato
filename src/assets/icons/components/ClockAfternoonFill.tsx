import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockAfternoonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clock-afternoon-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.5 7H9.207l1.647 1.646a.501.501 0 0 1-.708.708l-2.5-2.5A.5.5 0 0 1 8 7.5h3.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="clock-afternoon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClockAfternoonFill);
const Memo = memo(ForwardRef);
export default Memo;