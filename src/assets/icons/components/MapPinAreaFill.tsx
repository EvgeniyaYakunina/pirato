import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinAreaFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-area-fill_svg__a)"><path fill="#000" d="M7.75 10.938a.5.5 0 0 0 .496 0c.153-.089 3.75-2.188 3.75-5.935A4 4 0 0 0 4 5c0 3.75 3.599 5.846 3.75 5.938M8 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7 8c0 1.949-3.607 3-7 3s-7-1.051-7-3c0-.912.826-1.72 2.327-2.273a.5.5 0 0 1 .346.937C2.641 10.546 2 11.057 2 11.5c0 .835 2.282 2 6 2s6-1.165 6-2c0-.443-.641-.954-1.673-1.335a.5.5 0 0 1 .346-.937C14.173 9.78 15 10.588 15 11.5" /></g><defs><clipPath id="map-pin-area-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinAreaFill);
const Memo = memo(ForwardRef);
export default Memo;