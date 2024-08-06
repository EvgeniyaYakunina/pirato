import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGenderNeuterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gender-neuter-fill_svg__a)"><path fill="#000" d="M10.49 6.772a2.5 2.5 0 1 1-4.98.455 2.5 2.5 0 0 1 4.98-.455M13.5 2.5v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-2 4.5a3.5 3.5 0 1 0-4 3.464v2.02a.51.51 0 0 0 .467.515.5.5 0 0 0 .533-.5v-2.035A3.506 3.506 0 0 0 11.5 7" /></g><defs><clipPath id="gender-neuter-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGenderNeuterFill);
const Memo = memo(ForwardRef);
export default Memo;