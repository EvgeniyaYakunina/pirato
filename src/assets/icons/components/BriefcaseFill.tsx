import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBriefcaseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#briefcase-fill_svg__a)"><path fill="#000" d="M9.5 7a.5.5 0 0 1-.5.5H7a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5m5-2.5v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1H5V3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 11 3v.5h2.5a1 1 0 0 1 1 1M6 3.5h4V3a.5.5 0 0 0-.5-.5h-3A.5.5 0 0 0 6 3zm7.5 3.6V4.5h-11v2.6a11.5 11.5 0 0 0 11 0" /></g><defs><clipPath id="briefcase-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBriefcaseFill);
const Memo = memo(ForwardRef);
export default Memo;