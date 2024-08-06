import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilmStripFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#film-strip-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-2 1h2v1h-2zm-7 9h-2v-1h2zm0-8h-2v-1h2zm3 8h-2v-1h2zm0-8h-2v-1h2zm3 8h-2v-1h2zm0-8h-2v-1h2zm3 8h-2v-1h2z" /></g><defs><clipPath id="film-strip-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFilmStripFill);
const Memo = memo(ForwardRef);
export default Memo;