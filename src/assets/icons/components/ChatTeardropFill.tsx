import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatTeardropFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-teardrop-fill_svg__a)"><path fill="#000" d="M14.5 7.75A6.257 6.257 0 0 1 8.25 14H3a1 1 0 0 1-1-1V7.75a6.25 6.25 0 0 1 12.5 0" /></g><defs><clipPath id="chat-teardrop-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatTeardropFill);
const Memo = memo(ForwardRef);
export default Memo;