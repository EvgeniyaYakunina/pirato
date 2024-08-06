import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPinSimpleAreaFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-pin-simple-area-fill_svg__a)"><path fill="#000" d="M5.5 4a2.5 2.5 0 1 1 3 2.45V11a.5.5 0 0 1-1 0V6.45A2.5 2.5 0 0 1 5.5 4m8.125 5.162c-.766-.434-1.82-.767-3.048-.964a.501.501 0 0 0-.156.99c1.096.176 2.062.476 2.713.846.553.31.866.662.866.966 0 .835-2.283 2-6 2s-6-1.165-6-2c0-.304.313-.656.866-.968.653-.37 1.617-.67 2.713-.847a.5.5 0 1 0-.158-.987c-1.229.197-2.282.53-3.048.964C1.238 9.804 1 10.516 1 11c0 1.949 3.607 3 7 3s7-1.051 7-3c0-.484-.238-1.196-1.375-1.838" /></g><defs><clipPath id="map-pin-simple-area-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapPinSimpleAreaFill);
const Memo = memo(ForwardRef);
export default Memo;