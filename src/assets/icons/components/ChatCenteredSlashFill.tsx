import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatCenteredSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-centered-slash-fill_svg__a)"><path fill="#000" d="M14.5 3.5v8a1 1 0 0 1-.301.714.25.25 0 0 1-.355-.016l-8.436-9.28a.25.25 0 0 1 .187-.418H13.5a1 1 0 0 1 1 1M3.37 2.164a.5.5 0 0 0-.87.336 1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.777l.855 1.496a1 1 0 0 0 1.736 0l.855-1.496h1.692l1.215 1.336a.499.499 0 1 0 .74-.672z" /></g><defs><clipPath id="chat-centered-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatCenteredSlashFill);
const Memo = memo(ForwardRef);
export default Memo;