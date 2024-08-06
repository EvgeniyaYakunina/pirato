import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNuclearPlantFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#nuclear-plant-fill_svg__a)"><path fill="#000" d="M9.5 2H11a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0A1.5 1.5 0 0 1 11 3H9.5a.5.5 0 0 0-.5.5.5.5 0 1 1-1 0A1.5 1.5 0 0 1 9.5 2m-3 2a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 1 9.5 1h.5a.5.5 0 0 0 0-1h-.5A3.504 3.504 0 0 0 6 3.5a.5.5 0 0 0 .5.5m9 9.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1 0-1h1.046c.86-1.74 1.843-4.293 1.945-7.041a.994.994 0 0 1 1-.959h5.52a1 1 0 0 1 1 .955c.132 2.99 1.49 5.773 2.206 7.045H15a.5.5 0 0 1 .5.5M10.511 6h-1c.11 2.733 1.087 5.27 1.943 7h1.125c-.787-1.495-1.943-4.148-2.068-7" /></g><defs><clipPath id="nuclear-plant-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNuclearPlantFill);
const Memo = memo(ForwardRef);
export default Memo;