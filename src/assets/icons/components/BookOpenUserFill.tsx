import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookOpenUserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#book-open-user-fill_svg__a)"><path fill="#000" d="M15 5v7.5a.5.5 0 0 1-.5.5H10a1.5 1.5 0 0 0-1.5 1.496.49.49 0 0 1-.32.472.5.5 0 0 1-.68-.468A1.5 1.5 0 0 0 6 13H1.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a2 2 0 0 1 2 2v3.983a.51.51 0 0 0 .467.516.5.5 0 0 0 .533-.5v-4a2 2 0 0 1 2-2h4a.5.5 0 0 1 .5.5M5.55 3.5h.013a3 3 0 0 1 2.25 1.087.25.25 0 0 0 .38 0A3 3 0 0 1 10.438 3.5h.011a.25.25 0 0 0 .222-.365 3 3 0 0 0-5.342 0 .25.25 0 0 0 .222.365" /></g><defs><clipPath id="book-open-user-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookOpenUserFill);
const Memo = memo(ForwardRef);
export default Memo;