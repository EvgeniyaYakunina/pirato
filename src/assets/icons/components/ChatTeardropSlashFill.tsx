import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatTeardropSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chat-teardrop-slash-fill_svg__a)"><path fill="#000" d="M13.37 13.164a.5.5 0 1 1-.74.672l-.848-.932A6.2 6.2 0 0 1 8.25 14H3a1 1 0 0 1-1-1V7.75a6.22 6.22 0 0 1 1.456-4.005l-.826-.909a.5.5 0 0 1 .045-.716.514.514 0 0 1 .709.06zm-.348-1.87a.25.25 0 0 0 .39-.024 6.25 6.25 0 0 0-8.176-8.994.25.25 0 0 0-.062.387z" /></g><defs><clipPath id="chat-teardrop-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatTeardropSlashFill);
const Memo = memo(ForwardRef);
export default Memo;