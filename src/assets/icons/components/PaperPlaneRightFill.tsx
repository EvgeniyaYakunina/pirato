import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaperPlaneRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paper-plane-right-fill_svg__a)"><path fill="#000" d="M15 7.993a1 1 0 0 1-.511.875l-10.495 6c-.15.086-.321.131-.494.132a1 1 0 0 1-.938-1.333L4.25 8.67a.25.25 0 0 1 .232-.17H9a.5.5 0 0 0 .5-.533.51.51 0 0 0-.516-.467h-4.5a.25.25 0 0 1-.237-.17L2.559 2.334A1 1 0 0 1 3.99 1.13l10.5 5.993a1 1 0 0 1 .51.87" /></g><defs><clipPath id="paper-plane-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaperPlaneRightFill);
const Memo = memo(ForwardRef);
export default Memo;