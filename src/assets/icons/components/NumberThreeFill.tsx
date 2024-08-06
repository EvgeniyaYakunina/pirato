import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-three-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M7.75 12a2.74 2.74 0 0 1-2.139-1.021.5.5 0 0 1 .778-.629 1.75 1.75 0 1 0 1.486-2.846.5.5 0 0 1-.349-.818l1.405-1.688H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .384.82L8.807 6.71A2.75 2.75 0 0 1 7.75 12" /></g><defs><clipPath id="number-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberThreeFill);
const Memo = memo(ForwardRef);
export default Memo;