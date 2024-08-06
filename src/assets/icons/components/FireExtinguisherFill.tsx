import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFireExtinguisherFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fire-extinguisher-fill_svg__a)"><path fill="#000" d="M13.644 3.021 9.85 1.884l1.875-.938a.5.5 0 1 0-.45-.893l-2.901 1.45a5.005 5.005 0 0 0-4.875 5V13a.5.5 0 1 0 1 0v-2h1v3.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8A3.004 3.004 0 0 0 9 3.542v-.87l4.356 1.307a.5.5 0 1 0 .288-.958M4.5 10V6.5A4.004 4.004 0 0 1 8 2.532v1.01A3.004 3.004 0 0 0 5.5 6.5V10zm6-3.5V10h-4V6.5a2 2 0 1 1 4 0" /></g><defs><clipPath id="fire-extinguisher-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFireExtinguisherFill);
const Memo = memo(ForwardRef);
export default Memo;