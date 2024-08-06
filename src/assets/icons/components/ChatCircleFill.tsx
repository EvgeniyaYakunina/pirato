import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-circle-fill_svg__a)"><path fill="#000" d="M14.5 8a6.502 6.502 0 0 1-9.555 5.739l-2.128.71a1 1 0 0 1-1.265-1.266l.71-2.128A6.5 6.5 0 1 1 14.5 8" /></g><defs><clipPath id="chat-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatCircleFill);
const Memo = memo(ForwardRef);
export default Memo;