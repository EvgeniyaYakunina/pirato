import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUniteSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#unite-square-fill_svg__a)"><path fill="#000" d="M14 6v7.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-3h-3A.5.5 0 0 1 2 10V2.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="unite-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUniteSquareFill);
const Memo = memo(ForwardRef);
export default Memo;