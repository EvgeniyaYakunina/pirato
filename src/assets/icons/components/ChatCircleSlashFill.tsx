import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatCircleSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-circle-slash-fill_svg__a)"><path fill="#000" d="M13.37 13.164a.5.5 0 1 1-.74.672l-.641-.705a6.5 6.5 0 0 1-7.044.608l-2.128.71a1 1 0 0 1-1.265-1.266l.71-2.128A6.5 6.5 0 0 1 3.27 3.541l-.641-.705a.5.5 0 1 1 .74-.672zM8 1.5a6.5 6.5 0 0 0-2.52.507.5.5 0 0 0-.176.797l7.612 8.375a.5.5 0 0 0 .813-.1A6.5 6.5 0 0 0 8 1.5" /></g><defs><clipPath id="chat-circle-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatCircleSlashFill);
const Memo = memo(ForwardRef);
export default Memo;