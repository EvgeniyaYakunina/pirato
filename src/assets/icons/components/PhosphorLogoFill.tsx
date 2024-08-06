import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhosphorLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phosphor-logo-fill_svg__a)"><path fill="#000" d="M9.5 2h-5a.5.5 0 0 0-.5.5v8a5.006 5.006 0 0 0 5 5 .5.5 0 0 0 .5-.5v-4a4.5 4.5 0 1 0 0-9m-1 12.469A4.01 4.01 0 0 1 5.032 11H8.5zm0-5.875L5.355 3H8.5zM9.5 10V3a3.5 3.5 0 1 1 0 7" /></g><defs><clipPath id="phosphor-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhosphorLogoFill);
const Memo = memo(ForwardRef);
export default Memo;