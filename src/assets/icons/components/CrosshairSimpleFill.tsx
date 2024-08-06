import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrosshairSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#crosshair-simple-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5m3-5h1.471A4.51 4.51 0 0 1 8.5 12.471V11a.5.5 0 0 0-1 0v1.471A4.506 4.506 0 0 1 3.529 8.5H5a.5.5 0 0 0 0-1H3.529A4.51 4.51 0 0 1 7.5 3.529V5a.5.5 0 1 0 1 0V3.529A4.51 4.51 0 0 1 12.471 7.5H11a.5.5 0 0 0 0 1" /></g><defs><clipPath id="crosshair-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCrosshairSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;