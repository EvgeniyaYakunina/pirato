import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeviceMobileFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#device-mobile-fill_svg__a)"><path fill="#000" d="M11 1H5a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 5 15h6a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11 1M5 2h6a.5.5 0 0 1 .5.5V3h-7v-.5A.5.5 0 0 1 5 2m6 12H5a.5.5 0 0 1-.5-.5V13h7v.5a.5.5 0 0 1-.5.5" /></g><defs><clipPath id="device-mobile-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDeviceMobileFill);
const Memo = memo(ForwardRef);
export default Memo;