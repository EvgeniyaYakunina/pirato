import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-fill_svg__a)"><path fill="#000" d="M14.5 4v8a1 1 0 0 1-1 1H5.188L3.15 14.76l-.006.004a.99.99 0 0 1-1.068.141A.99.99 0 0 1 1.5 14V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1" /></g><defs><clipPath id="chat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatFill);
const Memo = memo(ForwardRef);
export default Memo;