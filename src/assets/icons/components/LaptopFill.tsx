import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLaptopFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#laptop-fill_svg__a)"><path fill="#000" d="M14.5 10.5H14v-6A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v6h-.5a.5.5 0 0 0-.5.5v1a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 15 12v-1a.5.5 0 0 0-.5-.5M7 4.5h2a.5.5 0 1 1 0 1H7a.5.5 0 1 1 0-1m7 7.5a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 12v-.5h12z" /></g><defs><clipPath id="laptop-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLaptopFill);
const Memo = memo(ForwardRef);
export default Memo;