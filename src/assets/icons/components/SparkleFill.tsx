import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSparkleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sparkle-fill_svg__a)"><path fill="#000" d="M13 9a.99.99 0 0 1-.651.934l-3.224 1.191-1.188 3.226a.994.994 0 0 1-1.867 0l-1.195-3.226-3.226-1.187a.995.995 0 0 1 0-1.868l3.226-1.195 1.187-3.226a.995.995 0 0 1 1.868 0l1.195 3.226 3.226 1.188A.99.99 0 0 1 13 9M9.5 3h1v1a.5.5 0 0 0 1 0V3h1a.5.5 0 1 0 0-1h-1V1a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1M15 5h-.5v-.5a.5.5 0 0 0-1 0V5H13a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V6h.5a.5.5 0 1 0 0-1" /></g><defs><clipPath id="sparkle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSparkleFill);
const Memo = memo(ForwardRef);
export default Memo;