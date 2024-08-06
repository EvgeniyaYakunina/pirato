import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeedometerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speedometer-fill_svg__a)"><path fill="#000" d="M13.867 5.679a.25.25 0 0 0-.386-.039l-4.714 4.714a.5.5 0 0 1-.705-.707l5.794-5.793a.5.5 0 1 0-.707-.708l-.836.837a7.003 7.003 0 0 0-10.917 7.845 1.01 1.01 0 0 0 .945.672h11.317a1 1 0 0 0 .944-.67 7.02 7.02 0 0 0-.735-6.151M3.59 10.4a.5.5 0 0 1-.98.198 5.504 5.504 0 0 1 6.364-6.513.5.5 0 1 1-.176.985A4.504 4.504 0 0 0 3.59 10.4" /></g><defs><clipPath id="speedometer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeedometerFill);
const Memo = memo(ForwardRef);
export default Memo;