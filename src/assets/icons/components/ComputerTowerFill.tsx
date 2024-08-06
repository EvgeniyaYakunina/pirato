import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgComputerTowerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#computer-tower-fill_svg__a)"><path fill="#000" d="M12 1.5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M8 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2-5H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1" /></g><defs><clipPath id="computer-tower-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgComputerTowerFill);
const Memo = memo(ForwardRef);
export default Memo;