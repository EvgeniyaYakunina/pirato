import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSoundcloudLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#soundcloud-logo-fill_svg__a)"><path fill="#000" d="M1.5 7.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 1 1 1 0m1.5-2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5M5 5a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 1 0V5.5A.5.5 0 0 0 5 5m2-2a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 1 0V3.5A.5.5 0 0 0 7 3m6.928 3.646A5 5 0 0 0 9 2.5h-.25a.25.25 0 0 0-.25.25v9.5a.25.25 0 0 0 .25.25h4.2c1.6 0 2.955-1.232 3.045-2.829a3.004 3.004 0 0 0-2.067-3.025" /></g><defs><clipPath id="soundcloud-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSoundcloudLogoFill);
const Memo = memo(ForwardRef);
export default Memo;