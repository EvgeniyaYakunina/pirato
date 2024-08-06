import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneTaxiingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplane-taxiing-fill_svg__a)"><path fill="#000" d="M15.5 8.5V10a.5.5 0 0 1-.5.5H3.817a2.484 2.484 0 0 1-2.394-1.782l-.88-2.93A1 1 0 0 1 1.5 4.5H2a.5.5 0 0 1 .353.146L3.708 6h1.405l-.562-1.684A1 1 0 0 1 5.5 3H6a.5.5 0 0 1 .353.146L9.208 6H13a2.5 2.5 0 0 1 2.5 2.5m-2.5 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></g><defs><clipPath id="airplane-taxiing-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplaneTaxiingFill);
const Memo = memo(ForwardRef);
export default Memo;