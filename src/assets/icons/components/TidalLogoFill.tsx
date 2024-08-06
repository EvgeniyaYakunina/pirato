import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTidalLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tidal-logo-fill_svg__a)"><path fill="#000" d="m15.854 6.354-2.25 2.25a.5.5 0 0 1-.708 0l-2.25-2.25-.021-.024-.021.024L8.457 8.5l2.147 2.146a.5.5 0 0 1 0 .708l-2.25 2.25a.5.5 0 0 1-.708 0l-2.25-2.25a.5.5 0 0 1 0-.708L7.543 8.5 5.396 6.354l-.021-.024-.021.024-2.25 2.25a.5.5 0 0 1-.708 0l-2.25-2.25a.5.5 0 0 1 0-.708l2.25-2.25a.5.5 0 0 1 .708 0l2.25 2.25.02.024.022-.024 2.25-2.25a.5.5 0 0 1 .708 0l2.25 2.25.02.024.022-.024 2.25-2.25a.5.5 0 0 1 .708 0l2.25 2.25a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="tidal-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTidalLogoFill);
const Memo = memo(ForwardRef);
export default Memo;