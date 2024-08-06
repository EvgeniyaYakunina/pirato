import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-slash-fill_svg__a)"><path fill="#000" d="M13.37 13.163a.5.5 0 1 1-.74.673L11.87 13H5.188L3.15 14.76l-.005.004a1 1 0 0 1-1.07.141A.99.99 0 0 1 1.5 14V4a1 1 0 0 1 1-1h.279l-.149-.164a.5.5 0 1 1 .74-.672zM13.5 3H6.047a.25.25 0 0 0-.188.418l8.203 9.023a.25.25 0 0 0 .438-.168V4a1 1 0 0 0-1-1" /></g><defs><clipPath id="chat-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatSlashFill);
const Memo = memo(ForwardRef);
export default Memo;