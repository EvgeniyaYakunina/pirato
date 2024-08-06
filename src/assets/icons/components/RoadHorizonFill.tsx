import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRoadHorizonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#road-horizon-fill_svg__a)"><path fill="#000" d="M14.938 11.755 10.855 4.5h3.625a.51.51 0 0 0 .52-.467.5.5 0 0 0-.5-.533H1.517A.51.51 0 0 0 1 3.967a.5.5 0 0 0 .5.533h3.645l-4.082 7.255a.5.5 0 0 0 .448.745H7.25a.25.25 0 0 0 .25-.25v-1.233a.51.51 0 0 1 .467-.516.5.5 0 0 1 .533.5v1.25a.25.25 0 0 0 .25.25h5.736a.51.51 0 0 0 .375-.155.5.5 0 0 0 .076-.59M8.5 8.75a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0zm0-3.25a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="road-horizon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRoadHorizonFill);
const Memo = memo(ForwardRef);
export default Memo;