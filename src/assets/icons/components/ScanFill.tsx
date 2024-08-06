import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#scan-fill_svg__a)"><path fill="#000" d="M14 2.5V5a.5.5 0 0 1-1 0V3h-2a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5M5 13H3v-2a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 .5.5H5a.5.5 0 0 0 0-1m8.5-2.5a.5.5 0 0 0-.5.5v2h-2a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5m-11-5A.5.5 0 0 0 3 5V3h2a.5.5 0 1 0 0-1H2.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5m2-.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5" /></g><defs><clipPath id="scan-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgScanFill);
const Memo = memo(ForwardRef);
export default Memo;