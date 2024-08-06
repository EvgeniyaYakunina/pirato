import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#book-open-fill_svg__a)"><path fill="#000" d="M15 3.5v9a.5.5 0 0 1-.5.5H10a1.5 1.5 0 0 0-1.5 1.496.49.49 0 0 1-.32.472.5.5 0 0 1-.68-.468A1.5 1.5 0 0 0 6 13H1.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h4a2 2 0 0 1 2 2v5.483a.51.51 0 0 0 .467.516.5.5 0 0 0 .533-.5V5a2 2 0 0 1 2-2h4a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="book-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookOpenFill);
const Memo = memo(ForwardRef);
export default Memo;