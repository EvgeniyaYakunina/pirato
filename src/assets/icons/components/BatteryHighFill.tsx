import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatteryHighFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#battery-high-fill_svg__a)"><path fill="#000" d="M9.5 6v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5M14 5v6a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 11V5A1.5 1.5 0 0 1 2 3.5h10.5A1.5 1.5 0 0 1 14 5m-1 0a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10.5a.5.5 0 0 0 .5-.5zm2.5.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="battery-high-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBatteryHighFill);
const Memo = memo(ForwardRef);
export default Memo;