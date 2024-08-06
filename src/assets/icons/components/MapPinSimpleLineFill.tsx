import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinSimpleLineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-simple-line-fill_svg__a)"><path fill="#000" d="M14 13.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h5V8.464a3.5 3.5 0 1 1 1 0V13h5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="map-pin-simple-line-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinSimpleLineFill);
const Memo = memo(ForwardRef);
export default Memo;