import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrainRegionalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#train-regional-fill_svg__a)"><path fill="#000" d="M10.5 5.5a.5.5 0 0 1-.5.5H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5m3.483 2.131-1.4 5.132a1 1 0 0 1-.965.737H11l.9 1.2a.5.5 0 1 1-.8.6l-1.35-1.8h-3.5L4.9 15.3a.5.5 0 0 1-.8-.6l.9-1.2h-.618a1 1 0 0 1-.965-.737l-1.4-5.132a.5.5 0 0 1 0-.262l1.4-5.132a1 1 0 0 1 .965-.737h7.236a1 1 0 0 1 .965.737l1.4 5.132a.5.5 0 0 1 0 .262M8.5 9.5a.5.5 0 1 0-1 0V12a.5.5 0 0 0 1 0zm4.375-2.394L11.618 2.5H4.382L3.125 7.106 8 7.992z" /></g><defs><clipPath id="train-regional-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrainRegionalFill);
const Memo = memo(ForwardRef);
export default Memo;