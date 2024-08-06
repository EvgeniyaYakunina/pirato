import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCarBatteryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#car-battery-fill_svg__a)"><path fill="#000" d="M14 4.5h-1v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H7v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-10-1h2v1H4zM6.5 9h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1m5 0H11v.5a.5.5 0 0 1-1 0V9h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1m.5-4.5h-2v-1h2z" /></g><defs><clipPath id="car-battery-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCarBatteryFill);
const Memo = memo(ForwardRef);
export default Memo;