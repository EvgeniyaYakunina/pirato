import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextIndentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-indent-fill_svg__a)"><path fill="#000" d="M14 8a.5.5 0 0 1-.5.5H7a.5.5 0 1 1 0-1h6.5a.5.5 0 0 1 .5.5M7 4.5h6.5a.5.5 0 0 0 0-1H7a.5.5 0 1 0 0 1m6.5 7h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M2.309 8.962a.5.5 0 0 0 .545-.108l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5A.5.5 0 0 0 2 3.5v5a.5.5 0 0 0 .309.462" /></g><defs><clipPath id="text-indent-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextIndentFill);
const Memo = memo(ForwardRef);
export default Memo;