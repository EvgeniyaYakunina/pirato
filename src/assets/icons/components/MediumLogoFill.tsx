import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMediumLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#medium-logo-fill_svg__a)"><path fill="#000" d="M8.5 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3-4c-.355 0-1.025.173-1.52 1.328C9.67 6.05 9.5 7 9.5 8s.17 1.95.48 2.672C10.475 11.828 11.145 12 11.5 12s1.025-.172 1.52-1.328C13.33 9.95 13.5 9 13.5 8s-.17-1.95-.48-2.672C12.525 4.173 11.855 4 11.5 4M15 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 15 4" /></g><defs><clipPath id="medium-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMediumLogoFill);
const Memo = memo(ForwardRef);
export default Memo;