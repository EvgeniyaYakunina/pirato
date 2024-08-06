import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBellSimpleZFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bell-simple-z-fill_svg__a)"><path fill="#000" d="M10.5 14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5m3.366-2a.99.99 0 0 1-.866.5H3a1 1 0 0 1-.862-1.504C2.484 10.4 3 8.71 3 6.5a5 5 0 1 1 10 0c0 2.208.516 3.899.863 4.496A.99.99 0 0 1 13.865 12M9.5 9a.5.5 0 0 0-.5-.5H7.938l1.48-2.222A.5.5 0 0 0 9 5.5H7a.5.5 0 0 0 0 1h1.066L6.584 8.723A.5.5 0 0 0 7 9.5h2a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="bell-simple-z-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBellSimpleZFill);
const Memo = memo(ForwardRef);
export default Memo;