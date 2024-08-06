import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoogleCardboardLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#google-cardboard-logo-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a.5.5 0 0 0 .354-.146L8 11.207l1.646 1.647A.5.5 0 0 0 10 13h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-9 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" /></g><defs><clipPath id="google-cardboard-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGoogleCardboardLogoFill);
const Memo = memo(ForwardRef);
export default Memo;