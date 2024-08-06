import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignpostFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#signpost-fill_svg__a)"><path fill="#000" d="M15.375 7.334 13.271 9.67a1 1 0 0 1-.744.331H8.5v4a.5.5 0 0 1-1 0v-4h-5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2a.5.5 0 1 1 1 0v2h4.028a1 1 0 0 1 .743.331l2.104 2.335a.5.5 0 0 1 0 .668" /></g><defs><clipPath id="signpost-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSignpostFill);
const Memo = memo(ForwardRef);
export default Memo;