import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGolfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#golf-fill_svg__a)"><path fill="#000" d="M10.967 12.321a.5.5 0 0 1-.288.646 7.9 7.9 0 0 1-2.179.513v2.02a.5.5 0 0 1-1 0v-2.02a7.9 7.9 0 0 1-2.179-.513.5.5 0 1 1 .358-.934c.821.315 1.58.467 2.321.467.74 0 1.5-.152 2.321-.467a.5.5 0 0 1 .646.288M13.5 6A5.5 5.5 0 1 1 8 .5 5.506 5.506 0 0 1 13.5 6M9 8.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m2-2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" /></g><defs><clipPath id="golf-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGolfFill);
const Memo = memo(ForwardRef);
export default Memo;