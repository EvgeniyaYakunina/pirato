import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsMergeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-merge-fill_svg__a)"><path fill="#000" d="M12 2.5v4a.5.5 0 0 1-.146.354L8.5 10.207V12H10a.5.5 0 0 1 .354.854l-2 2a.5.5 0 0 1-.708 0l-2-2A.5.5 0 0 1 6 12h1.5v-1.793L4.146 6.854A.5.5 0 0 1 4 6.5v-4a.5.5 0 1 1 1 0v3.793l3 3 3-3V2.5a.5.5 0 0 1 1 0" /></g><defs><clipPath id="arrows-merge-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsMergeFill);
const Memo = memo(ForwardRef);
export default Memo;