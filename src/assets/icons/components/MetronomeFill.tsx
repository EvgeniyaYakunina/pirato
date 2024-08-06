import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMetronomeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#metronome-fill_svg__a)"><path fill="#000" d="m11.696 7.178 1.674-1.842a.5.5 0 0 0-.74-.672l-1.284 1.412-1.075-3.38A1 1 0 0 0 9.318 2H6.682a1 1 0 0 0-.953.697l-3.182 10A1 1 0 0 0 3.5 14h9a1 1 0 0 0 .953-1.303zM4.455 10l2.227-7h2.636l1.25 3.931L7.778 10zm4.675 0 1.789-1.967.625 1.967z" /></g><defs><clipPath id="metronome-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMetronomeFill);
const Memo = memo(ForwardRef);
export default Memo;