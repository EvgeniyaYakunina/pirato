import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlaylistFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#playlist-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4 4.5h8a.5.5 0 0 1 0 1H4a.5.5 0 1 1 0-1m0 3h4.5a.5.5 0 1 1 0 1H4a.5.5 0 1 1 0-1m2.5 4H4a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1m6.474-3.342a.5.5 0 0 1-.632.316l-.842-.28V11a1.5 1.5 0 1 1-1-1.414V7.5a.5.5 0 0 1 .658-.474l1.5.5a.5.5 0 0 1 .316.632" /></g><defs><clipPath id="playlist-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlaylistFill);
const Memo = memo(ForwardRef);
export default Memo;