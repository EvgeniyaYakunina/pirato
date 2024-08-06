import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatDotsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-dots-fill_svg__a)"><path fill="#000" d="M13.5 3h-11a1 1 0 0 0-1 1v10a.99.99 0 0 0 .578.906.994.994 0 0 0 1.063-.142l.005-.005L5.188 13H13.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5.25 8.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="chat-dots-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatDotsFill);
const Memo = memo(ForwardRef);
export default Memo;