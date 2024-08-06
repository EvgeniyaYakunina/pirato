import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDevicesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#devices-fill_svg__a)"><path fill="#000" d="M14 4.5h-1V4a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 1 4v6a1.5 1.5 0 0 0 1.5 1.5h7v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 14 4.5m.5 7.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm-6 1a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1 0-1H8a.5.5 0 0 1 .5.5m5-6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="devices-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDevicesFill);
const Memo = memo(ForwardRef);
export default Memo;