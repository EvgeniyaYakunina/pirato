import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMeteorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#meteor-fill_svg__a)"><path fill="#000" d="M8.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m4.646-2.353-3 3a.5.5 0 0 0 .708.707l3-3a.5.5 0 0 0-.708-.707m-1.292-.793a.5.5 0 0 0-.708-.707l-1.5 1.5a.5.5 0 0 0 .708.707zm2.5-3.207a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.707l1-1a.5.5 0 0 0 0-.707M7.646 6.354a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0-.708-.707l-4.5 4.5a.5.5 0 0 0 0 .707m.829 6.121a3.5 3.5 0 1 1-4.95-4.95l5.172-5.171a.5.5 0 0 0-.708-.707L2.82 6.818a4.5 4.5 0 1 0 6.363 6.364.5.5 0 0 0-.707-.707" /></g><defs><clipPath id="meteor-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMeteorFill);
const Memo = memo(ForwardRef);
export default Memo;