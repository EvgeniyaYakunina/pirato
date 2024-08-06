import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArticleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#article-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-2.5 8H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m0-2H5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1m0-2H5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="article-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArticleFill);
const Memo = memo(ForwardRef);
export default Memo;