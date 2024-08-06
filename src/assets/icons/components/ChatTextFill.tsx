import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-text-fill_svg__a)"><path fill="#000" d="M13.5 3h-11a1 1 0 0 0-1 1v10a.99.99 0 0 0 .578.906.994.994 0 0 0 1.063-.142l.005-.005L5.188 13H13.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 9.5H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1m0-2H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1" /></g><defs><clipPath id="chat-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatTextFill);
const Memo = memo(ForwardRef);
export default Memo;