import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberFiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-five-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-4.75 5a2.75 2.75 0 1 1-2.139 4.479.5.5 0 0 1 .778-.629 1.75 1.75 0 1 0 .022-2.226.5.5 0 0 1-.875-.393l.472-3.302A.5.5 0 0 1 6.5 4H10a.5.5 0 0 1 0 1H6.934l-.247 1.713A2.8 2.8 0 0 1 7.75 6.5" /></g><defs><clipPath id="number-five-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberFiveFill);
const Memo = memo(ForwardRef);
export default Memo;