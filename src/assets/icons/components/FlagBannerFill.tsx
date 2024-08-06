import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlagBannerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flag-banner-fill_svg__a)"><path fill="#000" d="M14.951 3.715 12.1 9.704l-.01.021-2.138 4.49a.5.5 0 1 1-.902-.43L10.85 10H2.5a.5.5 0 0 1-.354-.854L4.793 6.5 2.146 3.854A.5.5 0 0 1 2.5 3h12a.5.5 0 0 1 .451.715" /></g><defs><clipPath id="flag-banner-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlagBannerFill);
const Memo = memo(ForwardRef);
export default Memo;