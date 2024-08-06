import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgParagraphFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paragraph-fill_svg__a)"><path fill="#000" d="M13.5 3a.5.5 0 0 1-.5.5h-1V13a.5.5 0 0 1-1 0V3.5H9.5V13a.5.5 0 0 1-1 0v-2.5H6a4 4 0 1 1 0-8h7a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="paragraph-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgParagraphFill);
const Memo = memo(ForwardRef);
export default Memo;