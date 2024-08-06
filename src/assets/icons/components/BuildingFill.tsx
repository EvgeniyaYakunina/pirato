import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBuildingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#building-fill_svg__a)"><path fill="#000" d="M14.5 14H13V2h.5a.5.5 0 0 0 0-1h-11a.5.5 0 1 0 0 1H3v12H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1m-9-10.5H7a.5.5 0 1 1 0 1H5.5a.5.5 0 1 1 0-1m0 2.5H7a.5.5 0 1 1 0 1H5.5a.5.5 0 1 1 0-1M5 9a.5.5 0 0 1 .5-.5H7a.5.5 0 1 1 0 1H5.5A.5.5 0 0 1 5 9m4.5 5h-3v-2.5h3zm1-4.5H9a.5.5 0 1 1 0-1h1.5a.5.5 0 0 1 0 1m0-2.5H9a.5.5 0 1 1 0-1h1.5a.5.5 0 0 1 0 1m0-2.5H9a.5.5 0 1 1 0-1h1.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="building-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBuildingFill);
const Memo = memo(ForwardRef);
export default Memo;