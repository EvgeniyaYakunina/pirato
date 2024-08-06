import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatteryChargingVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#battery-charging-vertical-fill_svg__a)"><path fill="#000" d="M11 2H5a1.5 1.5 0 0 0-1.5 1.5V14A1.5 1.5 0 0 0 5 15.5h6a1.5 1.5 0 0 0 1.5-1.5V3.5A1.5 1.5 0 0 0 11 2M9.447 8.724l-1 2a.502.502 0 0 1-.894-.448L8.19 9H7a.5.5 0 0 1-.447-.724l1-2a.5.5 0 0 1 .894.448L7.81 8H9a.5.5 0 0 1 .447.724M5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" /></g><defs><clipPath id="battery-charging-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBatteryChargingVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;