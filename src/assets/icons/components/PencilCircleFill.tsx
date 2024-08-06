import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-circle-fill_svg__a)"><path fill="#000" d="M12.596 3.404a6.5 6.5 0 1 0-9.192 9.192 6.5 6.5 0 0 0 9.192-9.192M8 10.68a2 2 0 0 0-2.02-.611L6.939 8h2.125l.954 2.069a2 2 0 0 0-2.017.61m2.5 2.218a5.5 5.5 0 0 1-2 .577V12a1 1 0 1 1 2 0zm1.389-1.008a6 6 0 0 1-.389.352V11a.5.5 0 0 0-.046-.21l-3-6.5a.5.5 0 0 0-.908 0l-3 6.5A.5.5 0 0 0 4.5 11v1.242a5.5 5.5 0 1 1 7.389-.353" /></g><defs><clipPath id="pencil-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilCircleFill);
const Memo = memo(ForwardRef);
export default Memo;