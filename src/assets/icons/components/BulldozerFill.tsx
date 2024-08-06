import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBulldozerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bulldozer-fill_svg__a)"><path fill="#000" d="M15.5 12.5H15a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 0-1H15a1.5 1.5 0 0 0-1.5 1.5v.5h-1.05a2.51 2.51 0 0 0-2.107-1.976L8.09 3.116a1 1 0 0 0-.923-.616H1.5a1 1 0 0 0-1 1v6a2.5 2.5 0 0 0 2 4H10a2.504 2.504 0 0 0 2.45-2h1.05v.5a1.5 1.5 0 0 0 1.5 1.5h.5a.5.5 0 0 0 0-1M4 3.5h3.167l2.083 5H4zm-2.5 0H3v5h-.5c-.344 0-.685.071-1 .21zm8.5 8H2.5a.5.5 0 0 1 0-1H10a.5.5 0 0 1 0 1" /></g><defs><clipPath id="bulldozer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBulldozerFill);
const Memo = memo(ForwardRef);
export default Memo;