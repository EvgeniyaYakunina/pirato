import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#book-fill_svg__a)"><path fill="#000" d="M13.5 2v10a.5.5 0 0 1-.5.5H4.5a1 1 0 0 0-1 1H12a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5V3.5a2 2 0 0 1 2-2H13a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="book-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookFill);
const Memo = memo(ForwardRef);
export default Memo;