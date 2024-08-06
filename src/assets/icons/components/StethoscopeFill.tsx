import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStethoscopeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stethoscope-fill_svg__a)"><path fill="#000" d="M15 10a2 2 0 1 0-2.496 1.938L12.5 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9.467c1.967-.25 3.5-1.966 3.5-4.019V2.5A.5.5 0 0 0 10 2H8.5a.5.5 0 1 0 0 1h1v2.448c0 1.661-1.328 3.03-2.96 3.052a3 3 0 0 1-3.04-3V3h1a.5.5 0 1 0 0-1H3a.5.5 0 0 0-.5.5v3A4 4 0 0 0 6 9.468V12a3.003 3.003 0 0 0 3 3h1.5a3.003 3.003 0 0 0 3-3l-.004-.062A2 2 0 0 0 15 10m-2 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" /></g><defs><clipPath id="stethoscope-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStethoscopeFill);
const Memo = memo(ForwardRef);
export default Memo;