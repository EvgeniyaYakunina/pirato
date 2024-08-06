import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMotorcycleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#motorcycle-fill_svg__a)"><path fill="#000" d="M13.5 7.5q-.208 0-.412.034l-.364-.946q.383-.087.776-.088a.5.5 0 1 0 0-1h-1.195l-.838-2.18A.5.5 0 0 0 11 3H9a.5.5 0 0 0 0 1h1.657l.577 1.5H9.5c-1.156 0-2.094.27-2.71.779a1 1 0 0 1-1.048.13c-.661-.301-4.58-1.883-4.613-1.892a.5.5 0 0 0-.312.95s3.469 1.37 4.158 2.058a3.48 3.48 0 0 1 .99 1.975H4.95a2.5 2.5 0 1 0 0 1h3.257a1.994 1.994 0 0 0 1.922-1.444A3.5 3.5 0 0 1 11.79 6.95l.363.945A2.5 2.5 0 1 0 13.5 7.5m-11 3h1.414a1.5 1.5 0 1 1 0-1H2.5a.5.5 0 0 0 0 1m11 1a1.5 1.5 0 0 1-.974-2.64l.507 1.32a.5.5 0 0 0 .934-.36l-.508-1.32h.041a1.5 1.5 0 0 1 0 3" /></g><defs><clipPath id="motorcycle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMotorcycleFill);
const Memo = memo(ForwardRef);
export default Memo;