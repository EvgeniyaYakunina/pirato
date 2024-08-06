import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatCircleTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-circle-text-fill_svg__a)"><path fill="#000" d="M8 1.5a6.5 6.5 0 0 0-5.739 9.555l-.71 2.128a1 1 0 0 0 1.266 1.265l2.128-.71A6.5 6.5 0 1 0 8 1.5m2 8H6a.5.5 0 0 1 0-1h4a.5.5 0 1 1 0 1m0-2H6a.5.5 0 0 1 0-1h4a.5.5 0 1 1 0 1" /></g><defs><clipPath id="chat-circle-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatCircleTextFill);
const Memo = memo(ForwardRef);
export default Memo;