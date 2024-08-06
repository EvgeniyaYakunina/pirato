import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatsCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chats-circle-fill_svg__a)"><path fill="#000" d="M14.504 11.672a5 5 0 0 0-3.906-7.135 5 5 0 1 0-9.102 4.135l-.455 1.545a1 1 0 0 0 1.242 1.242l1.545-.455a5 5 0 0 0 1.573.46 5 5 0 0 0 6.772 2.54l1.544.455a1 1 0 0 0 1.242-1.242zm-1.015.092L14 13.5l-1.735-.51a.5.5 0 0 0-.375.039 4.003 4.003 0 0 1-5.367-1.555 4.997 4.997 0 0 0 4.396-5.867 4 4 0 0 1 2.61 5.78.5.5 0 0 0-.04.377" /></g><defs><clipPath id="chats-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChatsCircleFill);
const Memo = memo(ForwardRef);
export default Memo;