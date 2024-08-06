import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-plus-fill_svg__a)"><path fill="#000" d="M8 1a5.506 5.506 0 0 0-5.5 5.5c0 1.963.907 4.043 2.625 6.016.772.891 1.64 1.694 2.59 2.393a.5.5 0 0 0 .574 0c.948-.7 1.816-1.502 2.586-2.393C12.591 10.543 13.5 8.463 13.5 6.5A5.506 5.506 0 0 0 8 1m2 6H8.5v1.5a.5.5 0 1 1-1 0V7H6a.5.5 0 1 1 0-1h1.5V4.5a.5.5 0 1 1 1 0V6H10a.5.5 0 0 1 0 1" /></g><defs><clipPath id="map-pin-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinPlusFill);
const Memo = memo(ForwardRef);
export default Memo;