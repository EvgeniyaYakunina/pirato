import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMountainsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mountains-fill_svg__a)"><path fill="#000" d="M15.93 12.245 12.52 6.49a.99.99 0 0 0-.86-.49.99.99 0 0 0-.86.49l-.978 1.65a.25.25 0 0 0 0 .254l1.675 2.842a.51.51 0 0 1-.118.659.5.5 0 0 1-.738-.141l-4.28-7.261a1 1 0 0 0-1.723 0L.07 12.246A.5.5 0 0 0 .514 13h14.972a.52.52 0 0 0 .38-.16.5.5 0 0 0 .064-.595M4.027 7.5 5.5 5l1.473 2.5zM8.75 3.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" /></g><defs><clipPath id="mountains-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMountainsFill);
const Memo = memo(ForwardRef);
export default Memo;