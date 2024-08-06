import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatteryVerticalLowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#battery-vertical-low-fill_svg__a)"><path fill="#000" d="M5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m4.5 11H6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m2.5-8V14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 14V3.5A1.5 1.5 0 0 1 5 2h6a1.5 1.5 0 0 1 1.5 1.5m-1 0A.5.5 0 0 0 11 3H5a.5.5 0 0 0-.5.5V14a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5z" /></g><defs><clipPath id="battery-vertical-low-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBatteryVerticalLowFill);
const Memo = memo(ForwardRef);
export default Memo;