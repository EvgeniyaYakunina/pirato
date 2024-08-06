import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeviceTabletFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#device-tablet-fill_svg__a)"><path fill="#000" d="M12 1.5H4A1.5 1.5 0 0 0 2.5 3v10A1.5 1.5 0 0 0 4 14.5h8a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 12 1.5m-8 1h8a.5.5 0 0 1 .5.5v.5h-9V3a.5.5 0 0 1 .5-.5m8 11H4a.5.5 0 0 1-.5-.5v-.5h9v.5a.5.5 0 0 1-.5.5" /></g><defs><clipPath id="device-tablet-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDeviceTabletFill);
const Memo = memo(ForwardRef);
export default Memo;