import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHighlighterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#highlighter-fill_svg__a)"><path fill="#000" d="M15.854 6.647a.5.5 0 0 0-.708 0L12 9.793 6.707 4.5l3.147-3.146a.5.5 0 0 0-.708-.707L6 3.793a1 1 0 0 0-.176 1.176L4.5 6.293a1 1 0 0 0 0 1.414L4.793 8l-3.647 3.646a.5.5 0 0 0 .196.829l4.5 1.5a.5.5 0 0 0 .35-.013.5.5 0 0 0 .162-.108L8.5 11.707l.293.293a1 1 0 0 0 1.414 0l1.323-1.323a1 1 0 0 0 1.177-.177l3.147-3.146a.5.5 0 0 0 0-.707M9.5 11.293 5.207 7 6.5 5.707 10.793 10z" /></g><defs><clipPath id="highlighter-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHighlighterFill);
const Memo = memo(ForwardRef);
export default Memo;