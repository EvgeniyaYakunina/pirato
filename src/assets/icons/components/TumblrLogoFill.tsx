import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTumblrLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tumblr-logo-fill_svg__a)"><path fill="#000" d="M9.5 7.5v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H9.5a4.005 4.005 0 0 1-4-4V7.5H4a.5.5 0 0 1-.5-.5V4.5A.5.5 0 0 1 4 4a2.5 2.5 0 0 0 2.5-2.5A.5.5 0 0 1 7 1h2a.5.5 0 0 1 .5.5V4H12a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5z" /></g><defs><clipPath id="tumblr-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTumblrLogoFill);
const Memo = memo(ForwardRef);
export default Memo;