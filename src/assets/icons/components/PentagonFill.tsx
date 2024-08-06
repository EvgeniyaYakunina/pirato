import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPentagonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pentagon-fill_svg__a)"><path fill="#000" d="m14.454 6.574-2 6.722-.004.01a1 1 0 0 1-.95.694h-7a1 1 0 0 1-.95-.694l-.004-.01-2-6.722a1 1 0 0 1 .356-1.102l5.495-4.269.012-.009a1 1 0 0 1 1.182 0l.011.01 5.495 4.268a1 1 0 0 1 .357 1.102" /></g><defs><clipPath id="pentagon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPentagonFill);
const Memo = memo(ForwardRef);
export default Memo;