import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBriefcaseMetalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#briefcase-metal-fill_svg__a)"><path fill="#000" d="M1.75 7h12.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-2.5A.25.25 0 0 1 1.75 7m-.25 5.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1.25a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25zm13-8v1.25a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V4.5a1 1 0 0 1 1-1H5V3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 11 3v.5h2.5a1 1 0 0 1 1 1M10 3a.5.5 0 0 0-.5-.5h-3A.5.5 0 0 0 6 3v.5h4z" /></g><defs><clipPath id="briefcase-metal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBriefcaseMetalFill);
const Memo = memo(ForwardRef);
export default Memo;