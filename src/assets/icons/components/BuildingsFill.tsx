import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBuildingsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#buildings-fill_svg__a)"><path fill="#000" d="M14.983 13H14V6a1 1 0 0 0-1-1h-2.75a.25.25 0 0 0-.25.25V13H9V2.026a1.03 1.03 0 0 0-.385-.813 1 1 0 0 0-1.17-.043l-5 3.33A1 1 0 0 0 2 5.334V13h-.983a.51.51 0 0 0-.517.467A.5.5 0 0 0 1 14h14a.5.5 0 0 0 .5-.533.51.51 0 0 0-.517-.467M4.75 11.5a.5.5 0 0 1-.533.5.51.51 0 0 1-.467-.517v-.966A.51.51 0 0 1 4.217 10a.5.5 0 0 1 .533.5zm0-3.5a.5.5 0 0 1-.533.5.51.51 0 0 1-.467-.517v-.966a.51.51 0 0 1 .467-.517.5.5 0 0 1 .533.5zm2.5 3.5a.5.5 0 0 1-.533.5.51.51 0 0 1-.467-.516v-.967a.51.51 0 0 1 .467-.516.5.5 0 0 1 .533.5zm0-3.5a.5.5 0 0 1-.533.5.51.51 0 0 1-.467-.516v-.967a.51.51 0 0 1 .467-.516.5.5 0 0 1 .533.5z" /></g><defs><clipPath id="buildings-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBuildingsFill);
const Memo = memo(ForwardRef);
export default Memo;