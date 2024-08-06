import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSynagogueFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#synagogue-fill_svg__a)"><path fill="#000" d="M13 3.586V2a.5.5 0 0 0-1 0v1.586A1.5 1.5 0 0 0 11 5v2.638L8.5 6.21V4.5a.5.5 0 1 0-1 0v1.71L5 7.638V5a1.5 1.5 0 0 0-1-1.414V2a.5.5 0 1 0-1 0v1.586A1.5 1.5 0 0 0 2 5v8.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V11a1 1 0 1 1 2 0v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a1.5 1.5 0 0 0-1-1.414M4 13H3V7h1zm9 0h-1V7h1z" /></g><defs><clipPath id="synagogue-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSynagogueFill);
const Memo = memo(ForwardRef);
export default Memo;