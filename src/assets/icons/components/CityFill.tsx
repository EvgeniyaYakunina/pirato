import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCityFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#city-fill_svg__a)"><path fill="#000" d="M15 13h-.5V5.5A.5.5 0 0 0 14 5h-4a.5.5 0 0 0-.5.5V8h-3V2.5A.5.5 0 0 0 6 2H2a.5.5 0 0 0-.5.5V13H1a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1M4.5 11.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0zm0-3a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0zm0-3a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0zm4 6a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0zm4 0a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0zm0-3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="city-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCityFill);
const Memo = memo(ForwardRef);
export default Memo;