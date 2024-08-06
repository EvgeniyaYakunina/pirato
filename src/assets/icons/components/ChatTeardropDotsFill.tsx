import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatTeardropDotsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-teardrop-dots-fill_svg__a)"><path fill="#000" d="M8.25 1.5A6.257 6.257 0 0 0 2 7.75V13a1 1 0 0 0 1 1h5.25a6.25 6.25 0 0 0 0-12.5M5.5 8.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="chat-teardrop-dots-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatTeardropDotsFill);
const Memo = memo(ForwardRef);
export default Memo;