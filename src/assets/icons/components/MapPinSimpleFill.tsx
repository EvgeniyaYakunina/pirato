import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-simple-fill_svg__a)"><path fill="#000" d="M8.5 7.964V14.5a.5.5 0 0 1-1 0V7.964a3.5 3.5 0 1 1 1 0" /></g><defs><clipPath id="map-pin-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;