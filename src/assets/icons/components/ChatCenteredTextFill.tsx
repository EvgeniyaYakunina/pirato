import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatCenteredTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-centered-text-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.777l.855 1.496a1 1 0 0 0 1.736 0l.855-1.496H13.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M10 9H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1" /></g><defs><clipPath id="chat-centered-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatCenteredTextFill);
const Memo = memo(ForwardRef);
export default Memo;