import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBathtubFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bathtub-fill_svg__a)"><path fill="#000" d="M15 6h-1.5a.5.5 0 0 0-.5-.5H8.5A.5.5 0 0 0 8 6H4V3.25a.75.75 0 0 1 .75-.75.78.78 0 0 1 .76.6.5.5 0 0 0 .98-.2 1.77 1.77 0 0 0-2.977-.887A1.75 1.75 0 0 0 3 3.25V6H1a.5.5 0 0 0-.5.5V9A3.504 3.504 0 0 0 4 12.5v1a.5.5 0 0 0 1 0v-1h6v1a.5.5 0 0 0 1 0v-1A3.504 3.504 0 0 0 15.5 9V6.5A.5.5 0 0 0 15 6m-2.5.5V9H9V6.5z" /></g><defs><clipPath id="bathtub-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBathtubFill);
const Memo = memo(ForwardRef);
export default Memo;