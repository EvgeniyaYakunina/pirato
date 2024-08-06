import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkullFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#skull-fill_svg__a)"><path fill="#000" d="M8 1C4.416 1 1.5 3.804 1.5 7.25c0 2.131 1.142 4.125 3 5.268v.982a1 1 0 0 0 1 1H6a.25.25 0 0 0 .25-.25v-1.733A.51.51 0 0 1 6.717 12a.5.5 0 0 1 .533.5v1.75a.25.25 0 0 0 .25.25h1a.25.25 0 0 0 .25-.25v-1.734A.51.51 0 0 1 9.217 12a.5.5 0 0 1 .533.5v1.75a.25.25 0 0 0 .25.25h.5a1 1 0 0 0 1-1v-.983c1.858-1.143 3-3.137 3-5.268C14.5 3.804 11.584 1 8 1M5.75 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" /></g><defs><clipPath id="skull-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSkullFill);
const Memo = memo(ForwardRef);
export default Memo;