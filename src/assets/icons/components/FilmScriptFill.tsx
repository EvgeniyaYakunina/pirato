import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilmScriptFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#film-script-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M4.75 11.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="film-script-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFilmScriptFill);
const Memo = memo(ForwardRef);
export default Memo;