import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBeltFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#belt-fill_svg__a)"><path fill="#000" d="M4 5v6a.5.5 0 0 1-1 0H.5a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 .5 5H3a.5.5 0 1 1 1 0m12 .5v5a.5.5 0 0 1-.5.5h-3.636a1 1 0 0 1-.864.5H7a1 1 0 0 1-.864-.5H5.25a.25.25 0 0 1-.25-.25v-5.5A.25.25 0 0 1 5.25 5h.886A1 1 0 0 1 7 4.5h4a1 1 0 0 1 .864.5H15.5a.5.5 0 0 1 .5.5m-5 4.988V8.5H9a.5.5 0 1 1 0-1h2v-2H7v5h4z" /></g><defs><clipPath id="belt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBeltFill);
const Memo = memo(ForwardRef);
export default Memo;