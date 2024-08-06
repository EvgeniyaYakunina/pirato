import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrolleySuitcaseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trolley-suitcase-fill_svg__a)"><path fill="#000" d="M5.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.5-2H3.5V4.707A1 1 0 0 0 3.207 4L1.854 2.646a.5.5 0 1 0-.708.708L2.5 4.707V11H2a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1M4.5 9V4.5a1 1 0 0 1 1-1h2v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1V9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1m4-5.5h2v-1h-2z" /></g><defs><clipPath id="trolley-suitcase-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrolleySuitcaseFill);
const Memo = memo(ForwardRef);
export default Memo;