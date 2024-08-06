import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBasketFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#basket-fill_svg__a)"><path fill="#000" d="M14.875 5.17A.5.5 0 0 0 14.5 5h-2.773L8.375 1.17a.5.5 0 0 0-.75 0L4.273 5H1.5a.5.5 0 0 0-.496.566l.942 7.067a1.004 1.004 0 0 0 .992.867h10.125a1.004 1.004 0 0 0 .99-.867l.943-7.067a.5.5 0 0 0-.121-.395M5.1 11.5h-.05a.5.5 0 0 1-.5-.45l-.35-3.5a.5.5 0 1 1 .994-.1l.35 3.5a.5.5 0 0 1-.444.55m3.4-.5a.5.5 0 0 1-1 0V7.5a.5.5 0 0 1 1 0zM5.602 5 8 2.26 10.398 5zm6.195 2.55-.35 3.5a.5.5 0 0 1-.994-.097l.35-3.5a.5.5 0 0 1 .994.1z" /></g><defs><clipPath id="basket-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBasketFill);
const Memo = memo(ForwardRef);
export default Memo;