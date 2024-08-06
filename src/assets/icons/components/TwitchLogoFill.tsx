import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTwitchLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#twitch-logo-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v2a.5.5 0 0 0 .82.384L7.681 13h2.638a1 1 0 0 0 .64-.232l2.681-2.234a1 1 0 0 0 .36-.768V3a1 1 0 0 0-1-1M8 8.5a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0zm3 0a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="twitch-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTwitchLogoFill);
const Memo = memo(ForwardRef);
export default Memo;