import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWifiHighFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wifi-high-fill_svg__a)"><path fill="#000" d="m15.272 5.8-6.5 7.84A1 1 0 0 1 8 14a1 1 0 0 1-.77-.36L.729 5.8a.98.98 0 0 1-.097-1.12 1 1 0 0 1 .261-.299A11.67 11.67 0 0 1 8 2.001c2.566-.01 5.065.826 7.107 2.38a1 1 0 0 1 .352 1.07 1 1 0 0 1-.187.35" /></g><defs><clipPath id="wifi-high-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWifiHighFill);
const Memo = memo(ForwardRef);
export default Memo;