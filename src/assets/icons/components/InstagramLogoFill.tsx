import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInstagramLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#instagram-logo-fill_svg__a)"><path fill="#000" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4.5-3v6a3.504 3.504 0 0 1-3.5 3.5H5A3.504 3.504 0 0 1 1.5 11V5A3.504 3.504 0 0 1 5 1.5h6A3.504 3.504 0 0 1 14.5 5M11 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0m1.5-3.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" /></g><defs><clipPath id="instagram-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgInstagramLogoFill);
const Memo = memo(ForwardRef);
export default Memo;