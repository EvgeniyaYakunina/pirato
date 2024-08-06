import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEngineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#engine-fill_svg__a)"><path fill="#000" d="M16 7.5v3a1 1 0 0 1-1 1h-.793L12 13.707a1 1 0 0 1-.707.293H6.457a1 1 0 0 1-.707-.293L3.293 11.25A1 1 0 0 1 3 10.543V9.25H1.5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 1 1 1 0v1.5H3V5a1 1 0 0 1 1-1h3.75V2.5h-1.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1h-1.5V4h2.543a1 1 0 0 1 .707.293L14.207 6.5H15a1 1 0 0 1 1 1" /></g><defs><clipPath id="engine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEngineFill);
const Memo = memo(ForwardRef);
export default Memo;