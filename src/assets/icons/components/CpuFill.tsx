import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCpuFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cpu-fill_svg__a)"><path fill="#000" d="M6.5 6.5h3v3h-3zm8.5 3a.5.5 0 0 1-.5.5h-1v2.5a1 1 0 0 1-1 1H10v1a.5.5 0 0 1-1 0v-1H7v1a.5.5 0 0 1-1 0v-1H3.5a1 1 0 0 1-1-1V10h-1a.5.5 0 1 1 0-1h1V7h-1a.5.5 0 1 1 0-1h1V3.5a1 1 0 0 1 1-1H6v-1a.5.5 0 1 1 1 0v1h2v-1a.5.5 0 1 1 1 0v1h2.5a1 1 0 0 1 1 1V6h1a.5.5 0 0 1 0 1h-1v2h1a.5.5 0 0 1 .5.5M10.5 6a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" /></g><defs><clipPath id="cpu-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCpuFill);
const Memo = memo(ForwardRef);
export default Memo;