import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUsbFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#usb-fill_svg__a)"><path fill="#000" d="M15.75 8a.25.25 0 0 1-.111.208l-3 2A.25.25 0 0 1 12.25 10V8.5H4.5v3h2.25V11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-.5H4.5a1 1 0 0 1-1-1v-3h-3a.5.5 0 1 1 0-1h3v-3a1 1 0 0 1 1-1h2.323a1.75 1.75 0 1 1 0 1H4.5v3h7.75V6a.25.25 0 0 1 .389-.208l3 2A.25.25 0 0 1 15.75 8" /></g><defs><clipPath id="usb-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUsbFill);
const Memo = memo(ForwardRef);
export default Memo;