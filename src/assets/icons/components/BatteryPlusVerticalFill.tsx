import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatteryPlusVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#battery-plus-vertical-fill_svg__a)"><path fill="#000" d="M5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m7 3V14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 14V3.5A1.5 1.5 0 0 1 5 2h6a1.5 1.5 0 0 1 1.5 1.5m-2.25 5.25a.5.5 0 0 0-.5-.5H8.5V7a.5.5 0 1 0-1 0v1.25H6.25a.5.5 0 1 0 0 1H7.5v1.25a.5.5 0 0 0 1 0V9.25h1.25a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="battery-plus-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBatteryPlusVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;