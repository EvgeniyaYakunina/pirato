import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatsTeardropFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chats-teardrop-fill_svg__a)"><path fill="#000" d="M10.598 4.537A5 5 0 0 0 1 6.5v4a1 1 0 0 0 1 1h3.417a5.01 5.01 0 0 0 4.583 3h4a1 1 0 0 0 1-1v-4a5 5 0 0 0-4.402-4.963M14 13.5h-4a4.01 4.01 0 0 1-3.48-2.027 4.995 4.995 0 0 0 4.399-5.866A4 4 0 0 1 14 9.5z" /></g><defs><clipPath id="chats-teardrop-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatsTeardropFill);
const Memo = memo(ForwardRef);
export default Memo;