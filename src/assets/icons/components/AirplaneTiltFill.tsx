import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneTiltFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplane-tilt-fill_svg__a)"><path fill="#000" d="M13.47 12.329a.5.5 0 0 1-.116.524l-1.5 1.5a.5.5 0 0 1-.77-.073l-2.755-4.133L7 11.474V13a.5.5 0 0 1-.145.353s-.875.879-.993.992a.5.5 0 0 1-.824-.154l-.004-.01-.919-2.297-2.302-.92a.5.5 0 0 1-.168-.818l1-1A.5.5 0 0 1 3 9h1.525l1.33-1.33-4.133-2.755a.5.5 0 0 1-.076-.77l1.5-1.5a.5.5 0 0 1 .524-.116l5.372 1.953 1.97-1.97a1.75 1.75 0 0 1 2.475 2.475l-1.97 1.97z" /></g><defs><clipPath id="airplane-tilt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplaneTiltFill);
const Memo = memo(ForwardRef);
export default Memo;