import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMastodonLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mastodon-logo-fill_svg__a)"><path fill="#000" d="M11.5 2h-7A2.5 2.5 0 0 0 2 4.5V12a2.5 2.5 0 0 0 2.5 2.5H10a.5.5 0 0 0 0-1H4.5A1.5 1.5 0 0 1 3 12v-.5h8.5A2.5 2.5 0 0 0 14 9V4.5A2.5 2.5 0 0 0 11.5 2m0 6.5a.5.5 0 0 1-1 0v-2a1 1 0 0 0-2 0v2a.5.5 0 1 1-1 0v-2a1 1 0 0 0-2 0v2a.5.5 0 1 1-1 0v-2A2 2 0 0 1 8 5.18a2 2 0 0 1 3.5 1.32z" /></g><defs><clipPath id="mastodon-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMastodonLogoFill);
const Memo = memo(ForwardRef);
export default Memo;