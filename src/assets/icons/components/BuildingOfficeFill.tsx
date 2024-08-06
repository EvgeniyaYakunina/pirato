import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBuildingOfficeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#building-office-fill_svg__a)"><path fill="#000" d="M15.5 13h-1V6a.5.5 0 0 0 0-1h-3V3a.5.5 0 0 0 0-1h-9a.5.5 0 1 0 0 1v10h-1a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1M5 4.5h1a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1m-.5 3A.5.5 0 0 1 5 7h1a.5.5 0 1 1 0 1H5a.5.5 0 0 1-.5-.5m4 5.5h-3v-3h3zM9 8H8a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1m0-2.5H8a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1m4.5 7.5h-2V6h2z" /></g><defs><clipPath id="building-office-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBuildingOfficeFill);
const Memo = memo(ForwardRef);
export default Memo;