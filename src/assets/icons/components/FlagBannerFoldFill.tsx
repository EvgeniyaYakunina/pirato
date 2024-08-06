import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlagBannerFoldFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flag-banner-fold-fill_svg__a)"><path fill="#000" d="m8.237 4.353-2.727 6a.25.25 0 0 1-.227.147H1.764a.51.51 0 0 1-.41-.196.5.5 0 0 1 .026-.64L3.574 7.25 1.38 4.836A.5.5 0 0 1 1.764 4H8.01a.25.25 0 0 1 .228.353m6.61-1.713a.52.52 0 0 0-.361-.14H10.5a.5.5 0 0 0-.455.293l-2.66 5.853A.25.25 0 0 0 7.611 9h3.612l-2.179 4.793a.5.5 0 1 0 .91.414l5-11a.5.5 0 0 0-.107-.567" /></g><defs><clipPath id="flag-banner-fold-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlagBannerFoldFill);
const Memo = memo(ForwardRef);
export default Memo;