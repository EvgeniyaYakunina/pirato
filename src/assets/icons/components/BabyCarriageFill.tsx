import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBabyCarriageFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#baby-carriage-fill_svg__a)"><path fill="#000" d="M13.474 3.41a.5.5 0 0 0-.083-.08A4.98 4.98 0 0 0 10 2h-.5a1 1 0 0 0-1 1v3.5H3.45A2.504 2.504 0 0 0 1 4.5a.5.5 0 0 0 0 1A1.5 1.5 0 0 1 2.5 7a5.006 5.006 0 0 0 5 5H10a4.997 4.997 0 0 0 3.474-8.59m-.432 1c.506.59.828 1.318.925 2.09h-3.541zM10 3c.821 0 1.622.253 2.293.726L9.5 5.959V3zM6.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></g><defs><clipPath id="baby-carriage-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBabyCarriageFill);
const Memo = memo(ForwardRef);
export default Memo;