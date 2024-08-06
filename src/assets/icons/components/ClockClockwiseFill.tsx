import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockClockwiseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clock-clockwise-fill_svg__a)"><path fill="#000" d="M8.5 5v2.717l2.258 1.354a.5.5 0 0 1-.515.858l-2.5-1.5A.5.5 0 0 1 7.5 8V5a.5.5 0 0 1 1 0m5.691-1.462a.5.5 0 0 0-.545.108l-.77.773c-.203-.219-.41-.437-.632-.661a6 6 0 1 0-.125 8.606.5.5 0 1 0-.688-.728 5 5 0 1 1 .103-7.173q.33.333.632.664l-1.02 1.02A.5.5 0 0 0 11.5 7H14a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.309-.462" /></g><defs><clipPath id="clock-clockwise-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClockClockwiseFill);
const Memo = memo(ForwardRef);
export default Memo;