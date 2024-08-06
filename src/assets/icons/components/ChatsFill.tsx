import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chats-fill_svg__a)"><path fill="#000" d="M14.5 6a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8a.5.5 0 0 0 .813.389L4.5 9.625V11.5a1 1 0 0 0 1 1h5.85l2.338 1.889A.5.5 0 0 0 14.5 14zm-2.66 5.611a.5.5 0 0 0-.312-.111H5.5v-2h5a1 1 0 0 0 1-1V6h2v6.953z" /></g><defs><clipPath id="chats-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatsFill);
const Memo = memo(ForwardRef);
export default Memo;