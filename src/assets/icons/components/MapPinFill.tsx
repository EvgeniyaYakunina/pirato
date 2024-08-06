import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-fill_svg__a)"><path fill="#000" d="M8 1a5.506 5.506 0 0 0-5.5 5.5c0 4.706 5 8.26 5.213 8.41a.5.5 0 0 0 .574 0C8.5 14.76 13.5 11.205 13.5 6.5A5.506 5.506 0 0 0 8 1m0 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></g><defs><clipPath id="map-pin-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinFill);
const Memo = memo(ForwardRef);
export default Memo;