import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatCenteredFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-centered-fill_svg__a)"><path fill="#000" d="M14.5 3.5v8a1 1 0 0 1-1 1H9.723l-.855 1.496a1 1 0 0 1-1.736 0L6.277 12.5H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1" /></g><defs><clipPath id="chat-centered-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatCenteredFill);
const Memo = memo(ForwardRef);
export default Memo;