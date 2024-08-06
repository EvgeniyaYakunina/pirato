import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatTeardropTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-teardrop-text-fill_svg__a)"><path fill="#000" d="M8.25 1.5A6.257 6.257 0 0 0 2 7.75V13a1 1 0 0 0 1 1h5.25a6.25 6.25 0 0 0 0-12.5m2 8H6a.5.5 0 1 1 0-1h4.25a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h4.25a.5.5 0 0 1 0 1" /></g><defs><clipPath id="chat-teardrop-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatTeardropTextFill);
const Memo = memo(ForwardRef);
export default Memo;