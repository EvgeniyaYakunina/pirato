import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBellRingingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bell-ringing-fill_svg__a)"><path fill="#000" d="M14 4.444a.5.5 0 0 1-.674-.214 5.9 5.9 0 0 0-2.09-2.307.5.5 0 1 1 .533-.846 6.97 6.97 0 0 1 2.445 2.693.5.5 0 0 1-.214.674M2.232 4.5a.5.5 0 0 0 .444-.27 5.9 5.9 0 0 1 2.091-2.307.5.5 0 0 0-.534-.846A6.97 6.97 0 0 0 1.788 3.77a.5.5 0 0 0 .444.73m11.631 6.496A1 1 0 0 1 13 12.5h-2.55a2.5 2.5 0 0 1-4.9 0H3a1 1 0 0 1-.862-1.504C2.701 10.026 3 8.644 3 7a5 5 0 0 1 10 0c0 1.642.299 3.024.863 3.996M9.413 12.5H6.587a1.5 1.5 0 0 0 2.828 0" /></g><defs><clipPath id="bell-ringing-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBellRingingFill);
const Memo = memo(ForwardRef);
export default Memo;