import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTreeEvergreenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tree-evergreen-fill_svg__a)"><path fill="#000" d="M14.45 12.22a.5.5 0 0 1-.45.28H8.5V15a.5.5 0 0 1-1 0v-2.5H2a.5.5 0 0 1-.394-.807L4.48 8H3a.5.5 0 0 1-.397-.805l5-6.5a.5.5 0 0 1 .792 0l5 6.5A.5.5 0 0 1 13 8h-1.477l2.872 3.693a.5.5 0 0 1 .055.526" /></g><defs><clipPath id="tree-evergreen-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTreeEvergreenFill);
const Memo = memo(ForwardRef);
export default Memo;