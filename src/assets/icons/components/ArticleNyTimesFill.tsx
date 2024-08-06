import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArticleNyTimesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#article-ny-times-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M4 5.75a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 .5.5v.75a.5.5 0 1 1-1 0V5.5H6.25v3h.25a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h.25v-3H4zm8.5 5.75H5a.5.5 0 0 1 0-1h7.5a.5.5 0 0 1 0 1m0-2h-4a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1m0-2h-3a.5.5 0 1 1 0-1h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="article-ny-times-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArticleNyTimesFill);
const Memo = memo(ForwardRef);
export default Memo;