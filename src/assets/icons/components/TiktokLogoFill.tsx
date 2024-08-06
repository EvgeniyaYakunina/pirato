import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTiktokLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tiktok-logo-fill_svg__a)"><path fill="#000" d="M14.5 5v2.5a.5.5 0 0 1-.5.5 6.45 6.45 0 0 1-3-.732V9.75a4.75 4.75 0 1 1-9.5 0c0-2.306 1.682-4.345 3.912-4.742A.5.5 0 0 1 6 5.5v2.668a.5.5 0 0 1-.286.452A1.25 1.25 0 1 0 7.5 9.75V1.5A.5.5 0 0 1 8 1h2.5a.5.5 0 0 1 .5.5 3.003 3.003 0 0 0 3 3 .5.5 0 0 1 .5.5" /></g><defs><clipPath id="tiktok-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTiktokLogoFill);
const Memo = memo(ForwardRef);
export default Memo;