import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatteryChargingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#battery-charging-fill_svg__a)"><path fill="#000" d="M16 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 1 0m-2-1v6a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 11V5A1.5 1.5 0 0 1 2 3.5h10.5A1.5 1.5 0 0 1 14 5M8.676 7.737A.5.5 0 0 0 8.25 7.5H7.059l.638-1.276a.5.5 0 0 0-.894-.448l-1 2a.5.5 0 0 0 .447.724h1.191l-.638 1.276a.5.5 0 0 0 .894.448l1-2a.5.5 0 0 0-.021-.487" /></g><defs><clipPath id="battery-charging-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBatteryChargingFill);
const Memo = memo(ForwardRef);
export default Memo;