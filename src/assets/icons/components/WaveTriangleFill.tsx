import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWaveTriangleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wave-triangle-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.616 5.82-2.5 3a.5.5 0 0 1-.384.18h-.027a.5.5 0 0 1-.39-.222L5.96 5.835 3.884 8.32a.5.5 0 0 1-.768-.64l2.5-3a.5.5 0 0 1 .8.043l3.628 5.443 2.072-2.486a.5.5 0 0 1 .768.64" /></g><defs><clipPath id="wave-triangle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWaveTriangleFill);
const Memo = memo(ForwardRef);
export default Memo;