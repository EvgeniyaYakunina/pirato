import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinLineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-line-fill_svg__a)"><path fill="#000" d="M12.5 14H9.409q.78-.697 1.466-1.484C12.591 10.543 13.5 8.463 13.5 6.5a5.5 5.5 0 0 0-11 0c0 1.963.907 4.043 2.625 6.016q.686.788 1.466 1.484H3.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M8 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></g><defs><clipPath id="map-pin-line-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinLineFill);
const Memo = memo(ForwardRef);
export default Memo;