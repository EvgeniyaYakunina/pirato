import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInfinityFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#infinity-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.732 7.268a2.5 2.5 0 0 1-3.526.01l-3.161-2.82-.019-.02a1.5 1.5 0 1 0 .063 2.056.5.5 0 1 1 .75.662q-.051.059-.107.113a2.5 2.5 0 1 1-.01-3.545l3.16 2.82.021.018a1.5 1.5 0 1 0-.064-2.056.5.5 0 1 1-.75-.662q.051-.058.107-.113a2.5 2.5 0 0 1 3.536 3.535z" /></g><defs><clipPath id="infinity-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgInfinityFill);
const Memo = memo(ForwardRef);
export default Memo;