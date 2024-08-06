import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMatrixLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#matrix-logo-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 12.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-.5v7H5a.5.5 0 0 1 0 1m5-2.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .854-.353A1.5 1.5 0 0 1 8 6.383 1.5 1.5 0 0 1 10.5 7.5v2a.5.5 0 0 1-.5.5m2.5 2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h.5v-7H11a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="matrix-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMatrixLogoFill);
const Memo = memo(ForwardRef);
export default Memo;