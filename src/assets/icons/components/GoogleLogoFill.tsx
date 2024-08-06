import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoogleLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#google-logo-fill_svg__a)"><path fill="#000" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M8 13a5 5 0 1 1 3.334-8.727.5.5 0 0 1-.667.745A4 4 0 1 0 11.969 8.5H8a.5.5 0 0 1 0-1h4.5a.5.5 0 0 1 .5.5 5.006 5.006 0 0 1-5 5" /></g><defs><clipPath id="google-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGoogleLogoFill);
const Memo = memo(ForwardRef);
export default Memo;